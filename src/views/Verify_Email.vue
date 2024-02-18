<template>
    <div class="email-verification-page">
        <hr>
        <br>
        <br>
        <br>
        <div v-if="isLoading">
            <div class="d-flex justify-content-center">
                <div class="spinner-border text-primary text-center" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
            <br>
            <h5 class="title text-center">Verifying Email...</h5>
        </div>
        <div v-else>
            <h6 v-if="errorMessage" class="text-center text-danger">{{ errorMessage }}</h6>
            <div v-if="!errorMessage && status">
                <h2 class="text-center text-success"><i class="fa fa-check" aria-hidden="true"></i></h2>
                <h5 class="text-center">Your email has been verified</h5>
                <br>
                <p class="text-center">Click <router-link :to="{ name: ALL_TENDERS_ROUTE }">here</router-link> to go to tenders page.</p>
            </div>
        </div> 
    </div>
</template>
<script>
import { ALL_TENDERS_ROUTE } from '../utils/routes'
import { VERIFY_EMAIL } from '../store/action_types'

export default {
    data() {
        return {
            ALL_TENDERS_ROUTE
        }
    },
    computed: {
        account() {
            return this.$store.getters.account.data
        },
        status() {
            return this.$store.getters.account.status
        },
        isLoading() {
            return this.$store.getters.account.isLoading
        },
        errorMessage() {
            return this.$store.getters.errorMsg
        }
    },
    methods: {
        verifyEmail() {
            this.$store.dispatch(VERIFY_EMAIL, { verificationToken: this.$route.params.token })
        }
    },
    mounted() {
        this.verifyEmail()
    }
}
</script>