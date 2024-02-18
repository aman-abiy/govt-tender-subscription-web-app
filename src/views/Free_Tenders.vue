<template>
    <div class="tender-page">
        <navbar/>
        <div class="row tender-section">
            <sidenav class="d-none d-lg-block"/>
            <div class="col-lg-9 tender-content">
                <div class="row">
                    <div class="col-lg-10">
                        <h3 class="page-title">Free Tenders <span v-if="freeTendersMetaData != null" class="tender-counts">( {{ freeTendersMetaData.total }} )</span></h3>
                        <div v-if="freeTenders && isLoading" class="alert alert-dark loading-alert" role="alert">
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
                        <div v-if="freeTenders">
                            <div v-if="freeTenders.length > 0">
                                <template v-for="(tender, index) in freeTenders">
                                    <tenderCard v-bind:key="index" :tender="tender" />
                                </template>
                            </div>
                            <div v-else>
                                <div class="alert alert-primary" role="alert">
                                    No results found
                                </div>
                            </div>
                        </div>
                        <div v-if="!freeTenders && !isLoading">
                            <div class="alert alert-danger" role="alert">
                                Error! Please check your connection.
                            </div>
                        </div>
                        <div v-if="!freeTenders && isLoading" class="d-flex justify-content-center circle-loader">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                        <v-pagination v-if="freeTenders" v-model="currentPage" :page-count="Math.ceil((freeTendersMetaData != null ? freeTendersMetaData.total : 1)/(freeTendersMetaData != null ? freeTendersMetaData.limit : 1))" :classes="bootstrapPaginationClasses" :labels="paginationAnchorTexts"></v-pagination>
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
import tenderCard from '@/components/Tender_Card'
import { GET_FREE_TENDERS } from '../store/action_types'

export default {
    components: {
        navbar,
        sidenav,
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
            }
        }
    },
    watch: {
        freeTendersMetaData: {},
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
            return this.$store.getters.freeTenders.isLoading
        },
        freeTenders() {
            return this.$store.getters.freeTenders.data
        },
        freeTendersMetaData() {
            return this.$store.getters.freeTenders.metaData
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
        },
        setCurrentPage() {
            this.currentPage = (this.$route.query.page != null && parseInt(this.$route.query.page) > 0) ? this.$route.query.page : 1
        },
        getTenders() {
            this.$store.dispatch(GET_FREE_TENDERS, { page: this.currentPage })
        }
    },
    mounted() {
        this.getTenders()
    }
    
}
</script>