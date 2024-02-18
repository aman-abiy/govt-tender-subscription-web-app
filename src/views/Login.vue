<template>
    <div>
        <br>
        <br>
        <br>
        <div class="row auth-page">
            <div class="col-lg-4 col-md-8 col-10 offset-lg-4 offset-md-2 offset-1">
                <h2 class="text-center">Alpha Tenders</h2>
                <br>
                <h4 class="text-center">Login</h4>
                <p class="text-center text-danger auth-status-msg">{{ errorMessage }}</p>
                <ValidationObserver v-slot="{ handleSubmit }">
                    <form v-on:submit.prevent="handleSubmit(login)">
                        <div v-if="signInWith == 'email' || signInWith == null" class="form-group">
                            <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                <label for="email">Email Address</label>
                                <input v-model="account.email" type="email" class="form-control" id="email" placeholder="Email">
                                <small class="form-text text-muted">{{ errors[0] }}</small>
                            </ValidationProvider>
                        </div>
                        <div v-if="signInWith == 'mobile'" class="form-group">
                            <ValidationProvider name="mobile" rules="" v-slot="{ errors }">
                                <label for="mobile">Phone Number</label>
                                <MazPhoneNumberInput class="auth-input" id="mobile" @update="account.mobile = $event" default-country-code="ET" :preferred-countries="['ET', 'US', 'GB']"/>
                                <small class="form-text text-muted">{{ errors[0] }}</small>
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <ValidationProvider name="password" rules="required" v-slot="{ errors }">
                                <label for="email">Password</label>
                                <div class="input-group">
                                    <input ref="passwordInput" v-model="account.password" type="password" class="form-control" id="password" placeholder="Password">
                                    <div v-on:click="showPassword()" class="input-group-append">
                                        <span class="input-group-text">
                                            <i class="fa fa-eye"></i>
                                        </span>
                                    </div>
                                </div>
                                <small class="form-text text-muted">{{ errors[0] }}</small>
                            </ValidationProvider>
                        </div>
                        <a class="forgot-password">Forgot password?</a>
                        <br>
                        <br>
                        <button type="submit" class="btn auth-btn col-12" :disabled="isLoading ? true : false">
                            <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span v-if="!isLoading">Continue</span>
                        </button>
                        <!-- <button type="submit" class="btn  col-12">Continue</button> -->
                    </form>
                </ValidationObserver>
                <br>
                <button type="button" class="btn login-w-phone-btn col-12" v-on:click="switchLoginMethod">Login with {{ signInWith == 'email' ? 'Phone Number' : signInWith == 'mobile' ? 'Email' : 'Phone Number'}}</button>
                <br>
                <br>
                <p class="text-center">Don't have an account?<router-link :to="{ name: SIGNUP_ROUTE }" class="switch-auth"> Sign Up</router-link></p>
                <p class="text-center copyright">2022 copyright &copy; <a href="">alphatenders.com</a></p>
                <p class="company-copyright text-center">powered by <span class="company-name"><span class="name">arrpo</span><span class="desc"> technologies</span></span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { LOGIN } from '../store/action_types'
import { LOGIN_ROUTE } from '../utils/routes'
import { MazPhoneNumberInput } from 'maz-ui'
import { SIGNUP_ROUTE } from '../utils/routes'
import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

export default {
    components: {
      MazPhoneNumberInput  
    },
    data() {
        return {
            account: {
                email: null,
                mobile: {},
                password: null
            },
            signInWith: null,
            SIGNUP_ROUTE: SIGNUP_ROUTE
        }
    },
    computed: {
        errorMessage() {
            return this.$store.getters.errorMsg
        },
        isLoading() {
            return this.$store.getters.account.isLoading
        }
    },
    methods: {
        login() {
            this.$store.dispatch(LOGIN, this.account)
        },
        switchLoginMethod() {
            this.$router.replace({ name: LOGIN_ROUTE, query: { signInWith: this.signInWith == 'email' ? 'mobile' : this.signInWith == 'mobile' ? 'email' : 'email'}})
            this.$router.go()
        },
        setSignInWith() {
            this.signInWith = this.$route.query.signInWith || 'email'
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
    created() {
        this.setSignInWith()
    }
}

extend('email', email);

extend('required', {
  ...required,
  message: 'This field is required'
});
</script>
<style scoped>

</style>