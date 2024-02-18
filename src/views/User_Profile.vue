<template>
    <div class="">
        <navbar/>
        <br>
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 offset-lg-2">
                <div class="card title-card">
                    <div class="card-body">
                        <h4>User Profile</h4>
                    </div>
                </div>
                <br>
                <div class="card user-profile-card">
                    <div class="card-header">
                        <div class="row justify-content-between">
                            <h6 class="col-6"><strong>Account</strong></h6>
                            <div class="btn-group-toggle edit-user-toggle-btns">
                                <router-link :to="{ name: EDIT_PROFILE_ROUTE }" class="btn"> Edit Account</router-link>
                                <router-link :to="{ name: CHANGE_PASSWORD_ROUTE }" class="btn"> Change Password </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item"><span class="title">First Name</span></li>
                                <li class="list-group-item"><span class="title">Last Name</span></li>
                                <li class="list-group-item"><span class="title">Email</span></li>
                                <li class="list-group-item"><span class="title">Mobile</span></li>
                                <li class="list-group-item"><span class="title">Registration Date</span></li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">{{ account.fname }}</li>
                                <li class="list-group-item">{{ account.lname }}</li>
                                <li class="list-group-item"><a :href="`mailto:${account.email}`">{{ account.email }}</a> <span :class="[ account.isVerified ? 'badge-success' : 'badge-danger', 'badge']">{{ account.isVerified ? 'verified' : 'not-verified' }}</span><router-link :to="{ name: CHANGE_EMAIL_ROUTE }" class="btn change-email-btn"> Change Email </router-link></li>
                                <li class="list-group-item"><a :href="`tel:${account.mobile.e164}`">{{ account.mobile.formatInternational }}</a></li>
                                <li class="list-group-item">{{ account.createdAt | formatDate | getDateOnly }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import navbar from '@/components/Navbar_Tender'
import { EDIT_PROFILE_ROUTE, CHANGE_EMAIL_ROUTE, CHANGE_PASSWORD_ROUTE } from '../utils/routes'

export default {
    components: {
        navbar
    },
    data() {
        return {
            EDIT_PROFILE_ROUTE: EDIT_PROFILE_ROUTE,
            CHANGE_EMAIL_ROUTE: CHANGE_EMAIL_ROUTE,
            CHANGE_PASSWORD_ROUTE: CHANGE_PASSWORD_ROUTE
        }
    },
    computed: {
        account() {
            return this.$store.getters.account.data
        }
    },
    methods: {
        
    },
    mounted() {
    }
    
}
</script>