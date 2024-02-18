<template>
    <div class="tender-page">
        <navbar/>
        <div class="row tender-section">
            <sidenav class="d-none d-lg-block"/>
            <div class="col-lg-9 tender-content">
                <div class="row">
                    <div class="col-lg-10">
                        <div v-if="isLoading" class="alert alert-dark loading-alert" role="alert">
                            <div class="row">
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                                <div class="col-3">
                                    Loading...
                                </div>
                            </div>
                        </div>
                        <div v-else class="card">
                            <div v-if="tender" class="card-body">
                                <div class="row justify-content-between">
                                    <div class="col-auto">
                                        <button v-on:click="navigateBack" class="btn navigateBackBtn" name="print"><i class="fa fa-arrow-left" aria-hidden="true"></i> Back</button>
                                    </div>
                                    <div class="col-auto">
                                        <div class="btn-group-toggle">
                                            <button :class="[ checkedSavedTender ? 'active' : '', 'btn']" v-on:click="saveTender" name="save" id="save" :disabled="isSaving ? true : false">
                                                <span v-if="isSaving" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                <span v-if="!isSaving"><i class="fa fa-bookmark" aria-hidden="true"></i> {{ checkedSavedTender ? 'Saved' : 'Save' }}</span>
                                            </button>
                                             <!-- <button :class="[ tender.isSaved ? 'active' : '', 'btn']" v-on:click="saveTender" name="save" id="save">
                                                <span><i class="fa fa-bookmark" aria-hidden="true"></i> {{ tender.isSaved ? 'Saved' : 'Save' }}</span>
                                            </button> -->
                                            <button v-on:click="print" class="btn" name="print" id="print"><i class="fa fa-print" aria-hidden="true"></i> Print</button>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div v-if="tender != null" id="tender-detatils">
                                    <h4 class="tender-detail-title">{{ tender.title }}</h4>
                                    <hr>
                                    <!-- <p class="tender-details-sub-texts"><strong>Opening Date:</strong> {{ new Date(tender.bidClosingDate) | formatDate | getDateOnly }} | {{ new Date(tender.bidOpeningDate) | formatDate | getETDateOnly }}</p>
                                    <p class="tender-details-sub-texts"><strong>Published On:</strong> {{ new Date(tender.bidOpeningDate) | formatDate | getDateOnly }} | {{ new Date(tender.bidOpeningDate) | formatDate | getETDateOnly }}</p> -->
                                    <p class="tender-details-sub-texts"><strong>Opening Date: </strong> <span v-if="(tender.bidOpeningDateText != null)">{{ tender.bidOpeningDateText }}</span><span v-else>{{ new Date(tender.bidOpeningDate) | formatDate | getDateOnly }}</span> </p>
                                    <p class="tender-details-sub-texts"><strong>Closing Date: </strong> <span v-if="(tender.bidClosingDateText != null)">{{ tender.bidClosingDateText }}</span><span v-else>{{ new Date(tender.bidClosingDate) | formatDate | getDateOnly }}</span> </p>
                                    <p class="tender-details-sub-texts"><strong>Published On:</strong> {{ tender.tenderSources[0].name.en }} ( {{ tender.publicationDate | formatDate | getDateOnly }} )</p>
                                    <p class="tender-details-sub-texts"><strong>Posted:</strong> {{ timeAgo.format(new Date(tender.createdAt)) }}</p>
                                    <p class="tender-details-sub-texts"><strong>Bid Bond:</strong> {{ tender.bidBond }} </p>
                                    <p class="tender-details-sub-texts"><strong>Region:</strong> {{ tender.region.name != null ? tender.region.name.en : '' }}</p>
                                    <hr>
                                    <span v-html="tender.description"></span>
                                    <hr>
                                    <p><strong>Categories</strong></p>
                                    <template  v-for="(category, index) in tender.categories">
                                        <p v-bind:key="index"  class="tender-details-category-texts"><i class="fa fa-folder-open" aria-hidden="true"></i> {{ category.name != null ? category.name.en : '' }}</p>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <br>
            </div>
        </div>
    </div>
</template>
<script>
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

import printJS from 'print-js'

import navbar from '@/components/Navbar_Tender'
import sidenav from '@/components/Sidenav'
import { GET_TENDER, SAVE_TENDER, VIEW_TENDER, CLEAR_TENDER, CHECK_SAVED_TENDER } from '../store/action_types'
import { ALL_TENDERS_ROUTE } from '../utils/routes'

TimeAgo.addDefaultLocale(en)

export default {
    components: {
        navbar,
        sidenav
    },
    data() {
        return {
            timeAgo: new TimeAgo('en-US'),
            id: this.$route.params.id,
        }
    },
    watch: {
        savedTenders: {
            handler() {
                this.checkIfSaved()
            }
        },
    },
    computed: {
        isLoading() {
            return this.$store.getters.tender.isLoading
        },
        isSaving() {
            return this.$store.getters.tender.isSaving
        },
        tender() {
            return this.$store.getters.tender.data
        },
        savedTenders() {
            return this.$store.getters.savedTenders.data
        },
        checkedSavedTender() {
            return this.$store.getters.checkedSavedTender.data
        },
        account() {
            return this.$store.getters.account.data
        }
    },
    methods: {
        viewTender() {
            this.$store.dispatch(VIEW_TENDER, { id: this.$route.params.id })
        },
        getTender() {
            this.$store.dispatch(GET_TENDER, { id: this.$route.params.id })
        },
        checkIfSaved() {
            this.$store.dispatch(CHECK_SAVED_TENDER, { account: this.account._id, tender: this.$route.params.id })
        },
        saveTender() {
            this.$store.dispatch(SAVE_TENDER, { account: this.account._id, tender: this.$route.params.id }).then(() => this.checkIfSaved())
        },
        navigateBack() {
            this.$store.dispatch(CLEAR_TENDER)

            if(window.history.length > 0) {
                this.$router.go(-1)
            } else {
                this.$router.push({ name: ALL_TENDERS_ROUTE })
            }
            
        },
        print() {
            printJS('tender-detatils', 'html')
        }
    },
    mounted() {
        this.getTender()
        this.checkIfSaved()
        this.viewTender()
    }
    
}
</script>