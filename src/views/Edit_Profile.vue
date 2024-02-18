<template>
    <div class="tender-page">
        <navbar/>
        <br>
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 offset-lg-2">
                <ValidationObserver v-slot="{ handleSubmit }">
                    <form v-on:submit.prevent="handleSubmit(editProfile)">
                        <div class="card title-card">
                            <div class="card-body">
                                <div class="row justify-content-between">
                                    <h4 class="col-6">Edit Profile</h4>
                                    <button v-on:click="close" class="btn close-edit-profile-btn col-1 ml-auto">Close</button>
                                    <button type="submit" class="btn save-edit-profile-btn col-1" :disabled="isLoading ? true : false">
                                        <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        <span v-if="!isLoading">Save</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <br>
                        <div class="card edit-profile-card">
                            <div class="card-body">
                                <p class="text-center text-danger auth-status-msg">{{ errorMessage }}</p>
                                <form action="">
                                    <div class="row">
                                        <div class="col form-group">
                                            <ValidationProvider name="fname" rules="required" v-slot="{ errors }">
                                                <label for="fname">First Name</label>
                                                <input v-model="accountVal.fname" type="fname" class="form-control" id="fname" placeholder="First Name">
                                                <small class="form-text text-muted">{{ errors[0] }}</small>
                                            </ValidationProvider>
                                        </div>
                                        <div class="col form-group">
                                            <ValidationProvider name="fname" rules="required" v-slot="{ errors }">
                                                <label for="lname">Last Name</label>
                                                <input v-model="accountVal.lname" type="lname" class="form-control" id="lname" placeholder="Last Name">
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
import { EDIT_ACCOUNT } from '../store/action_types'

import { extend } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

export default {
    components: {
        navbar
    },
    data() {
        return {
            accountVal: {
                fname: null,
                lname: null
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
        setValues() {
            this.accountVal.fname = this.account.fname
            this.accountVal.lname = this.account.lname
        },
        editProfile() {
            this.$store.dispatch(EDIT_ACCOUNT, this.accountVal)
        },
        close() {
            this.$router.go(-1)
        }
    },
    mounted() {
        this.setValues()
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