<template>
    <div class="home-body">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#"><img src="../assets/images/logo-light-small.png" height="20"><span class="logo-text">Alpha Tenders</span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
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
    </div>
</template>
<script>
import { HOME_ROUTE, ALL_TENDERS_ROUTE, PACKAGES_ROUTE, CONTACT_ROUTE, USER_PROFILE_ROUTE, LOGIN_ROUTE } from '../utils/routes'

export default {
    data() {
        return {
            HOME_ROUTE: HOME_ROUTE,
            ALL_TENDERS_ROUTE: ALL_TENDERS_ROUTE,
            PACKAGES_ROUTE: PACKAGES_ROUTE,
            CONTACT_ROUTE: CONTACT_ROUTE,
            USER_PROFILE_ROUTE: USER_PROFILE_ROUTE,
            LOGIN_ROUTE: LOGIN_ROUTE
        }
    },
    computed: {
        sessionToken() {
            return this.$store.getters.sessionToken
        }
    },
}
</script>