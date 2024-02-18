<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <h3 class="logo-title">Alpha Tenders</h3>
                    <br>
                    <p class="small-desc">Alpha Tenders is a tender providing platform brought to you by Arppo Technologies. We deliver Software products based on your request or from our ready to deploy list of softwares. Our range of software prodicts span from appointment
                        management softwares to enterprise resource planning and warehouse stock management softwares.</p>
                </div>
                <div class="col-lg-3 offset-lg-1">
                    <h4 class="title">Links</h4>
                    <br>
                    <p><router-link :to="{ name: HOME_ROUTE }" class="links">Home</router-link></p>
                    <p><router-link :to="{ name: ALL_TENDERS_ROUTE }" class="links">Tenders</router-link></p>
                    <p><router-link :to="{ name: PACKAGES_ROUTE }" class="links">Packages</router-link></p>
                    <p><router-link :to="{ name: CONTACT_ROUTE }" class="links">Contact Us</router-link></p>
                    <p><router-link :to="{ name: PRIVACY_POLICY_ROUTE }" class="links">Privacy Policy</router-link></p>
                    <p><router-link :to="{ name: sessionToken != null ? USER_PROFILE_ROUTE : LOGIN_ROUTE }" class="links">{{ sessionToken != null ? 'Account' : 'Login' }}</router-link></p>
                    <p v-if="sessionToken == null"><router-link :to="{ name: SIGNUP_ROUTE }" class="links">Register</router-link></p>
                </div>
            </div>
            <hr>
            <p class="text-center copyright">powered by arppo technologies | 2022 &copy; alphatenders.com</p>
        </div>
    </footer>
</template>
<script>
import { HOME_ROUTE, ALL_TENDERS_ROUTE, PACKAGES_ROUTE, CONTACT_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE, PRIVACY_POLICY_ROUTE } from '../utils/routes'
export default {
    data() {
        return {
            HOME_ROUTE,
            ALL_TENDERS_ROUTE,
            PACKAGES_ROUTE,
            CONTACT_ROUTE,
            LOGIN_ROUTE,
            SIGNUP_ROUTE,
            PRIVACY_POLICY_ROUTE
        }
    },
    computed: {
        sessionToken() {
            return this.$store.getters.sessionToken
        }
    },
}
</script>