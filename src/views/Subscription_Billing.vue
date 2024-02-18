<template>
    <div class="">
        <navbar/>
        <br>
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 offset-lg-2">
                <div class="card title-card">
                    <div class="card-body">
                        <h4>Subscription & Billing</h4>
                    </div>
                </div>
                <br>
                <div v-if="!account.hasActiveSubscription" class="alert alert-danger" role="alert">
                    <h4 class="alert-heading">Subscription Not Activated</h4>
                    <hr>
                    <p v-if="account.subscriptions.length == 0">Please activate your subscription by depositing a subscription payment fee to one of the Bank Accounts listed below.</p>
                    <p v-else>Your account subscription has expired. Please renew your subscription by depositing your subscription payment to one of the Bank Accounts listed below.</p>
                    <p>Give us a call once you have completed the payment, so we can confirm the transaction and activate your subscription. If you need to know about our service before you start, please give us a call and we'll help.</p>
                    <p>Got to contacts page by cicking <router-link :to="{ name: CONTACT_ROUTE }">here</router-link>.</p>
                    <p>See our subscription packages by cicking <router-link :to="{ name: PACKAGES_ROUTE }">here</router-link>.</p>
                </div>
                <br>
                <div v-if="!account.hasActiveSubscription" class="card">
                    <div class="card-header">
                        <h6><strong>Bank Accounts</strong></h6>
                    </div>
                    <div class="card-body">
                        <table class="table bank-accounts-table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Bank</th>
                                    <th scope="col">Account Number</th>
                                    <th scope="col">Account Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                <template v-for="(bank, index) in bankAccounts">
                                    <tr v-bind:key="index">
                                        <td class="text-primary">{{ bank.name }}</td>
                                        <td>{{ bank.accountNumber }}</td>
                                        <td class="text-secondary">{{ bank.accountName }}</td>
                                    </tr>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
                <br>
                <div class="card subscription-card">
                    <div class="card-header">
                        <div class="row justify-content-between">
                            <h6 class="col-6"><strong>Subscription</strong></h6>
                        </div>
                    </div>
                    <div v-if="account.lastActiveSubscription" class="row">
                        <div class="col-6">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><span class="title">Status</span></li>
                                <li class="list-group-item"><span class="title">Start Date</span></li>
                                <li class="list-group-item"><span class="title">End Date</span></li>
                                <li class="list-group-item"><span class="title">Plan</span></li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><span v-if="account.hasActiveSubscription" class="badge badge-success">ACTIVE</span><span v-else class="badge badge-danger">NOT ACTIVE</span></li>
                                <li class="list-group-item">{{ account.lastActiveSubscription.startDate | formatDate | getDateOnly }}</li>
                                <li class="list-group-item">{{ account.lastActiveSubscription.endDate | formatDate | getDateOnly }}</li>
                                <li class="list-group-item">{{ account.lastActiveSubscription.subscriptionPlan.title }}</li>
                            </ul>
                        </div>
                    </div>
                    <div v-else>
                        <div class="alert alert-danger" role="alert">
                            Start your subscription today and follow up on all tenders. Call <a :href="`tel:${COMPANY_PHONE_NUMBER_1}`">{{ COMPANY_PHONE_NUMBER_1 }}</a> or <a :href="`tel:${COMPANY_PHONE_NUMBER_2}`">{{ COMPANY_PHONE_NUMBER_2 }}</a> to register and start now.
                        </div>
                    </div>
                </div>
                <hr>
                <div v-if="account.subscriptions.length != 0" class="card">
                    <div class="card-header">
                        <h6><strong>Billing History</strong></h6>
                    </div>
                    <table class="table billing-table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Invoice Id</th>
                                <!-- <th scope="col">Paymnet Method</th> -->
                                <th scope="col">Plan</th>
                                <th scope="col">Status</th>
                                <th scope="col">Amount Paid</th>
                                <th scope="col">Payment Date</th>
                                <th scope="col">Invoice</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(subscription, index) in account.subscriptions">
                                <tr v-bind:key="index">
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td><a :href="`${SERVER_URL}/${SERVER_INVOICE_DIR}/${subscription.invoicePDF}`" target="_blank">{{ subscription.invoiceId }}</a></td>
                                    <!-- <td>{{ subscription.payment.paymentMethod.name }}</td> -->
                                    <td>{{ subscription.subscriptionPlan.title }}</td>
                                    <td><span v-if="subscription.payment.isPaid" class="badge badge-success">PAID</span><span v-else class="badge badge-secondary">PENDING</span></td>
                                    <td>{{ subscription.payment.currency.iso3 | uppercase }} {{ subscription.payment.price }}</td>
                                    <td>{{ subscription.payment.paymentDate | formatDate | getDateOnly }}</td>
                                    <td><a :href="`${SERVER_URL}/${SERVER_INVOICE_DIR}/${subscription.invoicePDF}`" target="_blank">Open Invoice</a></td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>                
            </div>
        </div>
    </div>
</template>
<script>
import navbar from '@/components/Navbar_Tender'
import { COMPANY_PHONE_NUMBER_1, COMPANY_PHONE_NUMBER_2, SERVER_URL, SERVER_INVOICE_DIR } from '../utils/const'
import { GET_BANK_ACCOUNTS } from '../store/action_types'
import { CONTACT_ROUTE, PACKAGES_ROUTE } from '../utils/routes'

export default {
    components: {
        navbar
    },
    data() {
        return {
            COMPANY_PHONE_NUMBER_1,
            COMPANY_PHONE_NUMBER_2,
            CONTACT_ROUTE,
            PACKAGES_ROUTE,
            SERVER_URL,
            SERVER_INVOICE_DIR
        }
    },
    computed: {
        account() {
            return this.$store.getters.account.data
        },
        bankAccounts() {
            return this.$store.getters.bankAccounts.data
        }
    },
    methods: {
        getBankAccounts() {
            this.$store.dispatch(GET_BANK_ACCOUNTS)
        }
    },
    mounted() {
        this.getBankAccounts()
    }
    
}
</script>