<template>
    <div class="home-body">
        <div class="row">
            <div class="col-12">
                <div class="home-background-image">
                    <nav :class="[!view.topOfPage ? 'onScroll' : null, 'navbar navbar-expand-lg fixed-top']">
                        <a class="navbar-brand" href="#"><img src="../assets/images/logo-light-small.png" height="23"><span class="logo-text">Alpha Tenders</span></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa fa-bars"></i>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <router-link :to="{ name: HOME_ROUTE }" class="nav-link">Home</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: ALL_TENDERS_ROUTE }" class="nav-link">Tenders</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: PACKAGES_ROUTE }" class="nav-link">Packages</router-link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About</a>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: CONTACT_ROUTE }" class="nav-link">Contact Us</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link :to="{ name: sessionToken != null ? USER_PROFILE_ROUTE : LOGIN_ROUTE }" class="nav-link">{{ sessionToken != null ? 'Account' : 'Login' }}</router-link>
                                </li>
                                <li v-if="sessionToken == null" class="nav-item">
                                    <router-link :to="{ name: SIGNUP_ROUTE }" class="nav-link">Register</router-link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-8 offset-lg-3 offset-md-3 offset-sm-2">
                            <h1 class="text-center main-moto">Fastest and Easiest tender service and alert providers</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8 col-md-6 col-sm-8 offset-lg-2 offset-md-3 offset-sm-2">
                            <h6 class="text-center sub-moto">Move your business to the next step by landing and not missing on any opportunities with our service. Get all tenders and bids released in Ethiopia in a very easy way for you to handle and access.</h6>
                        </div>
                    </div>
                    <br>
                    <p class="text-center contact"><i class="fa fa-phone fa-xs" aria-hidden="true"></i><a :href="`tel:${COMPANY_PHONE_NUMBER_1}`">{{ COMPANY_PHONE_NUMBER_1 }}</a> / <a :href="`tel:${COMPANY_PHONE_NUMBER_2}`">{{ COMPANY_PHONE_NUMBER_2 }}</a></p>
                    <div class="container get-started">
                        <router-link :to="{ name: SIGNUP_ROUTE }" type="button" class="btn btn-outline-primary get-started-btn">Get Started</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { HOME_ROUTE, ALL_TENDERS_ROUTE, PACKAGES_ROUTE, CONTACT_ROUTE, USER_PROFILE_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from '../utils/routes'
import { COMPANY_PHONE_NUMBER_1, COMPANY_PHONE_NUMBER_2 } from '../utils/const'

export default {
    data() {
        return {
            HOME_ROUTE: HOME_ROUTE,
            ALL_TENDERS_ROUTE: ALL_TENDERS_ROUTE,
            PACKAGES_ROUTE: PACKAGES_ROUTE,
            CONTACT_ROUTE: CONTACT_ROUTE,
            USER_PROFILE_ROUTE: USER_PROFILE_ROUTE,
            LOGIN_ROUTE: LOGIN_ROUTE,
            SIGNUP_ROUTE: SIGNUP_ROUTE,
            COMPANY_PHONE_NUMBER_1: COMPANY_PHONE_NUMBER_1,
            COMPANY_PHONE_NUMBER_2: COMPANY_PHONE_NUMBER_2,
            view: {
                topOfPage: true
            }
        }
    },
    computed: {
        sessionToken() {
            return this.$store.getters.sessionToken
        }
    },
    methods: {
        handleScroll(){
            if(window.pageYOffset>0){
                if(this.view.topOfPage) this.view.topOfPage = false
            } else {
                if(!this.view.topOfPage) this.view.topOfPage = true
            }
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll)
    },
}
</script>