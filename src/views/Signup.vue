<template>
    <div>
        <br>
        <div class="row auth-page">
            <div class="col-lg-4 col-md-8 col-10 offset-lg-4 offset-md-2 offset-1">
                <h2 class="text-center">Alpha Tenders</h2>
                <br>
                <h4 class="text-center">Signup</h4>
                <p class="text-center text-danger auth-status-msg">{{ errorMessage }}</p>
                <ValidationObserver v-slot="{ handleSubmit }">
                    <form v-on:submit.prevent="handleSubmit(signup)">
                        <div class="form-group">
                            <ValidationProvider name="fname" rules="required" v-slot="{ errors }">
                                <label for="fname">First Name</label>
                                <input v-model="account.fname" type="fname" class="form-control" id="fname" placeholder="First Name">
                                <small class="form-text text-muted">{{ errors[0] }}</small>
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <ValidationProvider name="fname" rules="required" v-slot="{ errors }">
                                <label for="lname">Last Name</label>
                                <input v-model="account.lname" type="lname" class="form-control" id="lname" placeholder="Last Name">
                                <small class="form-text text-muted">{{ errors[0] }}</small>
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                <label for="email">Email Address</label>
                                <input v-model="account.email" type="email" class="form-control" id="email" placeholder="Email">
                                <small class="form-text text-muted">{{ errors[0] }}</small>
                            </ValidationProvider>
                        </div>
                        <div class="form-group">
                            <!-- <ValidationProvider name="mobile" v-slot="{ errors }"> -->
                                <label for="mobile">Phone Number</label>
                                <MazPhoneNumberInput class="auth-input" id="mobile" @update="account.mobile = $event" default-country-code="ET" :preferred-countries="['ET', 'US', 'GB']"/>
                                <!-- <small class="form-text text-muted">{{ errors[0] }}</small>
                            </ValidationProvider> -->
                        </div>
                        <div class="form-group">
                            <ValidationProvider name="password|min:6" rules="required" v-slot="{ errors }">
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
                            <span v-if="!isLoading">Register</span>
                        </button>
                    </form>
                </ValidationObserver>
                <br>
                <p class="text-center">Already have an account?<router-link :to="{ name: LOGIN_ROUTE }" class="switch-auth"> Login</router-link></p>
                <p class="text-center copyright">2022 copyright &copy; <a href="">alphatenders.com</a></p>
                <p class="company-copyright text-center">powered by <span class="company-name"><span class="name">arrpo</span><span class="desc"> technologies</span></span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { MazPhoneNumberInput } from 'maz-ui'
import { SIGNUP } from '../store/action_types'
import { LOGIN_ROUTE } from '../utils/routes'
import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

export default {
    components: {
        MazPhoneNumberInput
    },
    data() {
        return {
            account: {
                fname: null,
                lname: null,
                email: null,
                mobile: null,
                password: null
            },
            LOGIN_ROUTE: LOGIN_ROUTE 
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
        signup() {
            this.$store.dispatch(SIGNUP, this.account)
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
    }
}

extend('email', email);

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