<template>
    <div class="home-body">
        <navbar/>
        <br>
        <br>
        <div class="container">
            <h2 class="text-center subscription-plan-title">Subscription Packages & Pricing</h2>
            <p class="text-center subscription-plan-sub-title col-lg-8 col-md-8 col-sm-10 offset-lg-2 offset-md-2 offset-sm-1">We offer packages in 3 plan categories. A lot of our users use the 1 Year subscription package, since you will get more service for your money. Choose your prefered package and register.</p>
            <br>
            <div class="row pricing">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="plan-name">3 Months</h5>
                            <h1 class="price">1,150 <span class="currency">ETB</span></h1>
                            <hr class="hr-top">
                            <p><i class="fa fa-check" aria-hidden="true"></i>Unlimited tender access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Category based tender access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Region based tender access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Language based tender access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Free tender filtering tools</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Save(Bookmark) tender</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Business news feed access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Email and Phone support</p>
                            <div v-if="showRegisterBtn">
                                <hr>
                                <router-link :to="{ name: account != null ? CONTACT_ROUTE : SIGNUP_ROUTE }" class="btn col-12 text-center">Register</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card recommended-plan">
                        <div class="card-body">
                            <h5 class="plan-name">1 Year</h5>
                            <h1 class="price">2,495 <span class="currency">ETB</span></h1>
                            <hr class="hr-top">
                            <p><i class="fa fa-check" aria-hidden="true"></i>Unlimited tender access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Category based tender access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Region based tender access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Language based tender access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Free tender filtering tools</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Save (Bookmark) tender</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Business news feed access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Email and Phone support</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Daily email alert</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Tender service on Telegram</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Category based Tender service on Telegram</p>
                            <div v-if="showRegisterBtn">
                                <hr>
                                <router-link :to="{ name: account != null ? CONTACT_ROUTE : SIGNUP_ROUTE }" class="btn col-12 text-center">Register</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="plan-name">6 Months</h5>
                            <h1 class="price">1,550 <span class="currency">ETB</span></h1>
                            <hr class="hr-top">
                            <p><i class="fa fa-check" aria-hidden="true"></i>Unlimited tender access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Category based tender access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Region based tender access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Language based tender access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Free tender filtering tools</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Save(Bookmark) tender</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Business news feed access</p>
                            <p><i class="fa fa-check" aria-hidden="true"></i>Email and Phone support</p>
                            <div v-if="showRegisterBtn">
                                <hr>
                                <router-link :to="{ name: account != null ? CONTACT_ROUTE : SIGNUP_ROUTE }" class="btn col-12 text-center">Register</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <br>
        <custom-footer/>
    </div>
</template>
<script>
import navbar from '@/components/Navbar'
import customFooter from '@/components/Footer'
import { SIGNUP_ROUTE, CONTACT_ROUTE } from '../utils/routes'

export default {
    components: {
        navbar,
        customFooter
    },
    data() {
        return {
            SIGNUP_ROUTE,
            CONTACT_ROUTE

        }
    },
    computed: {
        account() {
            return this.$store.getters.account.data
        },
        sessionToken() {
            return this.$store.getters.sessionToken
        }
    },
    methods: {
        showRegisterBtn() {
            if(this.sessionToken != null) {
                return true
            }
            if((this.sessionToken != null) && (!this.account.hasActiveSubscription)) {
                return false
            }
        }
    }
}
</script>