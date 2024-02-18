<template>
    <div class="tender-page">
        <navbar/>
        <br>
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 col-10 offset-lg-2 offset-1">
                <ValidationObserver v-slot="{ handleSubmit }">
                    <form v-on:submit.prevent="handleSubmit(changePassword)">
                        <div class="card title-card">
                            <div class="card-body">
                                <div class="row justify-content-between">
                                    <h4 class="col-6">Change Password</h4>
                                    <button v-on:click="close" class="btn close-edit-profile-btn col-1 ml-auto">Close</button>
                                    <button type="submit" class="btn save-edit-profile-btn col-1" :disabled="isLoading ? true : false">
                                        <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span v-if="!isLoading">Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="alert alert-primary" role="alert">
                            After you change your password, you will be logged out and you will have to Login again.
                        </div>
                        <div class="card edit-profile-card">
                            <div class="card-body">
                                <p class="text-center text-danger auth-status-msg">{{ errorMessage }}</p>
                                <form action="">
                                    <div class="row">
                                        <div class="col-5 form-group">
                                            <ValidationProvider name="password" rules="required" v-slot="{ errors }">
                                                <label for="email">New Password</label>
                                                <div class="input-group">
                                                    <input ref="passwordInput" v-model="accountVal.password" type="password" class="form-control" id="password" placeholder="Password">
                                                    <div v-on:click="showPassword()" class="input-group-append">
                                                        <span class="input-group-text">
                                                            <i class="fa fa-eye"></i>
                                                        </span>
                                                    </div>
                                                </div>
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
import { CHANGE_PASSWORD } from '../store/action_types'

import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

export default {
    components: {
        navbar
    },
    data() {
        return {
            accountVal: {
                password: null
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
        changePassword() {
            this.$store.dispatch(CHANGE_PASSWORD, this.accountVal)
        },
        close() {
            this.$router.go(-1)
        },
        showPassword() {
            const passwordInput = this.$refs.passwordInput;
            if(passwordInput) {
                if (passwordInput.type === "password") {
                    passwordInput.type = "text";
                } else {
                    passwordInput.type = "password";
                }
            }
        },
    },
    mounted() {
    }
    
}

extend('required', {
  ...required,
  message: 'This field is required'
});

extend('min', {
    validate(value, args) {
        return value.length >= args.length
    },
    message: `Password must be 6 or more characters`,
    params: ['length']
})
</script>