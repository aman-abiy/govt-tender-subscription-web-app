<template>
    <div>
        <div v-if="errorMessage != null" class="nav-error-status-bar">
            <div class="row justify-content-end">
                <div class="col-11">
                    <p class="text-center">{{ errorMessage }}</p>
                </div>
                <div class="col-1">
                    <i v-on:click="clearErrorMessage()" class="far fa-times"></i>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg d-none d-lg-block">
            <div class="collapse navbar-collapse">
            <a class="navbar-brand" href="#"><img src="../assets/images/logo-light-small.png" height="20"><span class="logo-text">Alpha Tenders</span></a>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link :to="{ name: ALL_TENDERS_ROUTE }" :class="[ [ALL_TENDERS_ROUTE, TENDER_DETAIL_ROUTE].includes(routeName) ? 'active' : null, 'nav-link']">All Tenders</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: MY_TENDERS_ROUTE }" :class="[ routeName == MY_TENDERS_ROUTE ? 'active' : null, 'nav-link']">My Tenders</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: FREE_TENDERS_ROUTE }" :class="[ routeName == FREE_TENDERS_ROUTE ? 'active' : null, 'nav-link']">Free Tenders</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: SAVED_TENDERS_ROUTE }" :class="[ routeName == SAVED_TENDERS_ROUTE ? 'active' : null, 'nav-link']">Saved Tenders</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: ALERTS_ROUTE }" :class="[ [ALERTS_ROUTE, ALERT_EMAIL_ROUTE].includes(routeName) ? 'active' : null, 'nav-link']">Alert Emails</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: SETTINGS_ROUTE }" :class="[ routeName == SETTINGS_ROUTE ? 'active' : null, 'nav-link']">Settings</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Account</a>
                    </li> -->
                    <li class="nav-item dropdown">
                        <a :class="[ [USER_PROFILE_ROUTE, EDIT_PROFILE_ROUTE, CHANGE_PASSWORD_ROUTE, SUBSCRIPTION_AND_BILLING_ROUTE].includes(routeName) ? 'active' : null, 'nav-link dropdown-toggle']" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Account
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link :to="{ name: USER_PROFILE_ROUTE }" :class="[routeName == USER_PROFILE_ROUTE ? 'dropdown-active' : null, 'dropdown-item']">User Profile</router-link>
                            <router-link :to="{ name: SUBSCRIPTION_AND_BILLING_ROUTE }" :class="[routeName == SUBSCRIPTION_AND_BILLING_ROUTE ? 'dropdown-active' : null, 'dropdown-item']">Subscription & Billing</router-link>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" v-on:click="logout">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg d-block d-lg-none mobile-navbar">
            <!-- <a class="navbar-brand" href="#"><img src='../assets/images/logo-light-small.png'/></a> -->

            <div class="row justify-content-between">
                <div class="">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#search-sidenav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
                <div class="">
                    <a class="navbar-brand" href="#"><img src="../assets/images/logo-light-small.png" height="20"><span class="logo-text">Alpha Tenders</span></a>
                </div>
                <div class="">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sm-md-screen-collapse" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-bars"></i>
                    </button>
                </div>
            </div>
            <div class="collapse navbar-collapse sm-md-screen-collapse d-lg-none d-xl-block" id="search-sidenav">
                <sidenav class="sidenav-collapse"/>
            </div>

            <div class="collapse navbar-collapse sm-md-screen-collapse d-lg-none d-xl-block" id="sm-md-screen-collapse">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <router-link :to="{ name: ALL_TENDERS_ROUTE }" :class="[ [ALL_TENDERS_ROUTE, TENDER_DETAIL_ROUTE].includes(routeName) ? 'active' : null, 'nav-link']">All Tenders</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: MY_TENDERS_ROUTE }" :class="[ routeName == MY_TENDERS_ROUTE ? 'active' : null, 'nav-link']">My Tenders</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: FREE_TENDERS_ROUTE }" :class="[ routeName == FREE_TENDERS_ROUTE ? 'active' : null, 'nav-link']">Free Tenders</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: SAVED_TENDERS_ROUTE }" :class="[ routeName == SAVED_TENDERS_ROUTE ? 'active' : null, 'nav-link']">Saved Tenders</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: ALERTS_ROUTE }" :class="[ [ALERTS_ROUTE, ALERT_EMAIL_ROUTE].includes(routeName) ? 'active' : null, 'nav-link']">Alert Emails</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: SETTINGS_ROUTE }" :class="[ routeName == SETTINGS_ROUTE ? 'active' : null, 'nav-link']">Settings</router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <a class="nav-link" href="#">Account</a>
                    </li> -->
                    <li class="nav-item dropdown">
                        <a :class="[ [USER_PROFILE_ROUTE, EDIT_PROFILE_ROUTE, CHANGE_PASSWORD_ROUTE, SUBSCRIPTION_AND_BILLING_ROUTE].includes(routeName) ? 'active' : null, 'nav-link dropdown-toggle']" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Account
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link :to="{ name: USER_PROFILE_ROUTE }" :class="[routeName == USER_PROFILE_ROUTE ? 'dropdown-active' : null, 'dropdown-item']">User Profile</router-link>
                            <router-link :to="{ name: SUBSCRIPTION_AND_BILLING_ROUTE }" :class="[routeName == SUBSCRIPTION_AND_BILLING_ROUTE ? 'dropdown-active' : null, 'dropdown-item']">Subscription & Billing</router-link>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" v-on:click="logout">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>
<script>
import sidenav from './Sidenav.vue'
import { 
    ALL_TENDERS_ROUTE,
    MY_TENDERS_ROUTE,
    FREE_TENDERS_ROUTE,
    SAVED_TENDERS_ROUTE,
    TENDER_DETAIL_ROUTE,
    USER_PROFILE_ROUTE,
    EDIT_PROFILE_ROUTE,
    SETTINGS_ROUTE,
    ALERTS_ROUTE,
    ALERT_EMAIL_ROUTE,
    CHANGE_PASSWORD_ROUTE,
    SUBSCRIPTION_AND_BILLING_ROUTE
} from '../utils/routes'
import { LOGOUT, CLEAR_ERRORMSG } from '../store/action_types'

export default {
    components: {
        sidenav
    },
    data() {
        return {
            ALL_TENDERS_ROUTE,
            MY_TENDERS_ROUTE,
            FREE_TENDERS_ROUTE,
            SAVED_TENDERS_ROUTE,
            TENDER_DETAIL_ROUTE,
            USER_PROFILE_ROUTE,
            EDIT_PROFILE_ROUTE,
            SETTINGS_ROUTE,
            ALERTS_ROUTE,
            ALERT_EMAIL_ROUTE,
            CHANGE_PASSWORD_ROUTE,
            SUBSCRIPTION_AND_BILLING_ROUTE,
            routeName: null
        }
    },
     atch: {
        errorMessage: {
            handler(val) {
                if(val != null) {
                    window.setInterval(() => {
                        this.$store.dispatch(CLEAR_ERRORMSG)
                    }, 5000)
                }
            }
            
        }
    },
    computed: {
        errorMessage() {
            return this.$store.getters.errorMsg
        },
    },
    methods: {
        clearErrorMessage() {
            this.$store.dispatch(CLEAR_ERRORMSG)
        },
        getRoute() {
            this.routeName = this.$route.name
        },
        logout() {
            this.$store.dispatch(LOGOUT)
        }
    },
    created() {
        this.getRoute()
    }
}
</script>
<style scoped>

</style>