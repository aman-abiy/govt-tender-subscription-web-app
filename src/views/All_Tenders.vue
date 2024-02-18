<template>
    <div class="tender-page">
        <navbar/>
        <div class="row tender-section">
            <sidenav class="d-none d-lg-block"/>
            <div class="col-lg-9 tender-content">
                <div class="row">
                    <div class="col-lg-10">
                        <h3 class="page-title">All Tenders <span v-if="tendersMetaData != null" class="tender-counts">( {{ tendersMetaData.total }} )</span></h3>
                        <div v-if="tenders && isLoading" class="alert alert-dark loading-alert" role="alert">
                            <div class="row">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                                <div class="col-3">
                                    Loading...
                                </div>
                            </div>
                        </div>
                        <hr>
                        <filterTags/>
                        <div v-if="!account.hasActiveSubscription" class="alert alert-primary" role="alert">
                            You are seeing only a limited number of tenders. To get access to all tenders please start your subscription with our service. Click <router-link :to="{ name: CONTACT_ROUTE }">here</router-link> to contact us so you can begin.
                        </div>
                        <div v-if="tenders">
                            <div v-if="tenders.length > 0">
                                <template v-for="(tender, index) in tenders">
                                    <tenderCard v-bind:key="index" :tender="tender" />
                                </template>
                            </div>
                            <div v-else>
                                <div class="alert alert-primary" role="alert">
                                    No results found
                                </div>
                            </div>
                        </div>
                        <div v-if="!tenders && !isLoading">
                            <div class="alert alert-danger" role="alert">
                                Error! Please check your connection.
                            </div>
                        </div>
                        <div v-if="!tenders && isLoading" class="d-flex justify-content-center circle-loader">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                        <v-pagination v-model="currentPage" :page-count="Math.ceil((tendersMetaData != null ? tendersMetaData.total : 1)/(tendersMetaData != null ? tendersMetaData.limit : 1))" :classes="bootstrapPaginationClasses" :labels="paginationAnchorTexts"></v-pagination>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navbar from '@/components/Navbar_Tender'
import sidenav from '@/components/Sidenav'
import filterTags from '@/components/Filter_Tags'
import tenderCard from '@/components/Tender_Card'
import { GET_TENDERS } from '../store/action_types'
import { CONTACT_ROUTE } from '../utils/routes'

export default {
    components: {
        navbar,
        sidenav,
        filterTags,
        tenderCard
    },
    data() {
        return {
            currentPage: 1,
            bootstrapPaginationClasses: {
                ul: 'pagination',
                li: 'page-item',
                liActive: 'active',
                liDisable: 'disabled',
                button: 'page-link'  
            },
            paginationAnchorTexts: {
                first: 'First',
                prev: 'Previous',
                next: 'Next',
                last: 'Last'
            },
            CONTACT_ROUTE
        }
    },
    watch: {
        tendersMetaData: {},
        currentPage: {
            handler() {
                this.getTenders()
                this.$router.replace({ ...this.$router.currentRoute, query: { page: this.currentPage } });
                this.scrollToTop()
            }
        },
    },
    computed: {
        isLoading() {
            return this.$store.getters.tenders.isLoading
        },
        tenders() {
            return this.$store.getters.tenders.data
        },
        tendersMetaData() {
            return this.$store.getters.tenders.metaData
        },
        account() {
            return this.$store.getters.account.data
        },
        router() {
            return this.$route
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(50,50);
        },
        setCurrentPage() {
            this.currentPage = (this.$route.query.page != null && parseInt(this.$route.query.page) > 0) ? this.$route.query.page : 1
        },
        getTenders() {
            this.$store.dispatch(GET_TENDERS, { page: this.currentPage })
        }
    },
    mounted() {
        this.setCurrentPage()
        this.getTenders()
    }
    
    
    
}
</script>