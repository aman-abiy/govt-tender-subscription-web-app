<template>
    <div class="tender-page">
        <navbar/>
        <div class="row tender-section">
            <sidenav class="d-none d-lg-block"/>
            <div class="col-lg-9 tender-content">
                <div v-if="checkIfUserHasAlerts" class="row">
                    <div class="col-lg-10">
                        <h3 class="page-title">My Tenders <span v-if="myTendersMetaData != null" class="tender-counts">( {{ myTendersMetaData.total }} )</span></h3>
                        <div v-if="myTenders && isLoading" class="alert alert-dark loading-alert" role="alert">
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
                        <div v-if="myTenders">
                            <div v-if="myTenders.length > 0">
                                <template v-for="(tender, index) in myTenders">
                                    <tenderCard v-bind:key="index" :tender="tender" />
                                </template>
                            </div>
                            <div v-else>
                                <div class="alert alert-primary" role="alert">
                                    No results found
                                </div>
                            </div>
                        </div>
                        <div v-if="!myTenders && !isLoading">
                            <div class="alert alert-danger" role="alert">
                                Error! Please check your connection.
                            </div>
                        </div>
                        <div v-if="!myTenders && isLoading" class="d-flex justify-content-center circle-loader">
                            <div class="spinner-border" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                        <v-pagination v-model="currentPage" :page-count="Math.ceil((myTendersMetaData != null ? myTendersMetaData.total : 1)/(myTendersMetaData != null ? myTendersMetaData.limit : 1))" :classes="bootstrapPaginationClasses" :labels="paginationAnchorTexts"></v-pagination>
                        <br>
                    </div>
                </div>
                <div v-else class="alert alert-primary" role="alert">
                    Please select tender categories and/or regions to see tenders based on your preference on this page. Click <router-link :to="{ name: SETTINGS_ROUTE }">here</router-link> to select your preferences.
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navbar from '@/components/Navbar_Tender'
import sidenav from '@/components/Sidenav'
import tenderCard from '@/components/Tender_Card'
import { GET_MY_TENDERS } from '../store/action_types'
import { SETTINGS_ROUTE } from '../utils/routes'

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
            },
            SETTINGS_ROUTE
        }
    },
    watch: {
        myTendersMetaData: {},
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
            return this.$store.getters.myTenders.isLoading
        },
        myTenders() {
            return this.$store.getters.myTenders.data
        },
        myTendersMetaData() {
            return this.$store.getters.myTenders.metaData
        },
        account() {
            return this.$store.getters.account.data
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
            this.$store.dispatch(GET_MY_TENDERS, { page: this.currentPage })
        },
        checkIfUserHasAlerts() {
            if((this.account.alertCategories.length == 0) && (this.account.alertRegions.length == 0)) {
                return false
            } else {
                return true
            }
        }
    },
    mounted() {
        this.getTenders()
    }
    
}
</script>