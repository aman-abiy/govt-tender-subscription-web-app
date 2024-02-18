<template>
    <div class="tender-page">
        <navbar/>
        <br>
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 offset-lg-2">
                <ValidationObserver v-slot="{ handleSubmit }">
                    <form v-on:submit.prevent="handleSubmit(changeEmail)">
                        <div class="card title-card">
                            <div class="card-body">
                                <div class="row justify-content-between">
                                    <h4 class="col-6">Change Email</h4>
                                    <p v-on:click="close" class="btn close-edit-profile-btn col-1 ml-auto">Close</p>
                                    <button type="submit" class="btn save-edit-profile-btn col-1" :disabled="isLoading ? true : false">
                                        <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span v-if="!isLoading">Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="alert alert-primary" role="alert">
                            Your current email is <a :href="`mailto:${account.email}`" class="alert-link">{{ account.email }}</a>. After you change your email, you will only be using the new email you submit as your login email. All alert emails will be sent to the new email only.
                        </div>
                        <div class="card edit-profile-card">
                            <div class="card-body">
                                <p class="text-center text-danger auth-status-msg">{{ errorMessage }}</p>
                                <form action="">
                                    <div class="row">
                                        <div class="col-5 form-group">
                                            <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                                <label for="email">Email Address</label>
                                                <input v-model="accountVal.email" type="email" class="form-control" id="email" placeholder="Email">
                                                <small class="form-text text-muted">{{ errors[0] }}</small>
                                            </ValidationProvider>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </form>
                </ValidationObserver>
            </div>
        </div>
    </div>
</template>
<script>
import navbar from '@/components/Navbar_Tender'
import { CHANGE_EMAIL } from '../store/action_types'

import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

export default {
    components: {
        navbar
    },
    data() {
        return {
            accountVal: {
                email: null
            },
        }
    },
    computed: {
        isLoading() {
            return this.$store.getters.account.isLoading
        },
        account() {
            return this.$store.getters.account.data
        },
        errorMessage() {
            return this.$store.getters.errorMsg
        }
    },
    methods: {
        changeEmail() {
            this.$store.dispatch(CHANGE_EMAIL, this.accountVal)
        },
        setEmail() {
            this.accountVal.email = this.account.email
        },
        close() {
            this.$router.go(-1)
        }
    },
    mounted() {
        this.setEmail()
    }
    
}

extend('email', email);

extend('required', {
  ...required,
  message: 'This field is required'
});
</script>