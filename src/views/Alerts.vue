<template>
    <div class="">
        <navbar/>
        <br>
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 offset-lg-2">
                <div class="card title-card">
                    <div class="card-body">
                        <h4>Alert Emails</h4>
                    </div>
                </div>
                <hr>
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
                <div v-if="(alertEmails != null && alertEmails.length > 0)">
                    <table v-if="alertEmails.length > 0" class="table table-striped table-bordered table-hover alert-email-table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Sent On</th>
                                <th scope="col">Sent to</th>
                                <th scope="col">Number of Alert Tenders</th>
                                <th scope="col">Is Opened</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(email, index) in alertEmails">
                                <tr v-bind:key="index">
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td><span v-on:click="openEmail(email._id)" class="open-alert-email-btn">{{ email.createdAt | formatDate | getDateOnly }}</span></td>
                                    <td><a :href="`mailto:${email.sentToEmail}`" class="text-secondary">{{ email.sentToEmail }}</a></td>
                                    <td><strong class="text-secondary">{{ email.tenders.length }}</strong></td>
                                    <td><span v-if="email.isOpened" class="badge badge-success status-badge">Yes</span><span v-else class="badge badge-danger status-badge">No</span></td>
                                    <td><span v-on:click="openEmail(email._id)" class="btn open-alert-email-btn">Open</span></td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
                <div v-if="(alertEmails == null || alertEmails.length == 0) && !isLoading" class="alert alert-primary" role="alert">
                    To receive Alert Emails, select Tender Categories and Regions you wish to receive alerts on. To select categories and regions <router-link :to="{ name: SETTINGS_ROUTE }">click here</router-link>. 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navbar from '@/components/Navbar_Tender'
import { ALERT_EMAIL_ROUTE, SETTINGS_ROUTE } from '../utils/routes'
import { GET_ALERT_EMAILS } from '../store/action_types'

export default {
    components: {
        navbar
    },
    data() {
        return {
            ALERT_EMAIL_ROUTE,
            SETTINGS_ROUTE
        }
    },
    computed: {
        account() {
            return this.$store.getters.account.data
        },
        alertEmails() {
            return this.$store.getters.alertEmails.data
        },
        isLoading() {
            return this.$store.getters.alertEmails.isLoading
        }
    },
    methods: {
        getAlertEmails() {
            this.$store.dispatch(GET_ALERT_EMAILS, { account: this.account._id })
        },
        openEmail(id) {
            const routeData = this.$router.resolve({
                name: ALERT_EMAIL_ROUTE,
                params: { id: id },
            });
            window.open(routeData.href, "_blank");
        },
    },
    mounted() {
        this.getAlertEmails()
    }
    
}
</script>