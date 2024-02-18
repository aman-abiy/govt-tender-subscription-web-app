<template>
    <div class="alert-email-body">
        <div v-if="alertEmail != null" class="row">
            <div class="col-lg-6 col-md-12 col-sm-12 offset-lg-3">
                <hr>
                <h6 class="text-center">Alpha Tenders</h6>
                <hr>
                <h4 class="text-center alert-title">Tender Alert - {{ alertEmail.createdAt | formatDate | getDateOnly }} </h4>
                <hr>
                <div class="alert alert-primary" role="alert">
                    This is a summary of tenders posted on alphatenders.com on {{ alertEmail.createdAt | formatDate | getDateOnly }} which is selected based on your category selection.
                </div>
                <div>
                    <div v-if="alertEmail.tenders.length > 0">
                        <template v-for="(tender, index) in alertEmail.tenders">
                            <div v-bind:key="index" class="row">
                                <div class="tender-card card">
                                    <div class="card-body">
                                        <h6 class="card-title text-primary">
                                            <router-link :to="{ name: TENDER_DETAIL_ROUTE, params: { id: tender._id } }">{{ tender.title }}</router-link>
                                        </h6>
                                        <hr>
                                        <p class="tender-card-sub-texts"><strong>Opening Date:</strong> <span class="values"> {{ tender.bidOpeningDate | formatDate | getDateOnly }} </span> </p>
                                        <p class="tender-card-sub-texts"><strong>Closing Date:</strong> <span class="values"> {{ tender.bidClosingDate | formatDate | getDateOnly }} </span> </p>
                                        <p class="tender-card-sub-texts"><strong>Published On:</strong> <span class="values"> {{ tender.publicationDate | formatDate | getDateOnly }} </span></p>
                                    </div>
                                </div>              
                            </div>
                        </template>
                    </div>
                    <div v-else>
                        <div class="alert alert-primary" role="alert">
                            No tenders found. 
                        </div>
                    </div>
                </div>
                <img :src="`${EMAIL_ALERT_READ_FLAG_URL}?readCheckKey=${alertEmail.readCheckKey}`" height="1" width="1" alt="t">
            </div>
        </div>
        <div v-else class="container">
            <hr>
            <div class="alert alert-danger" role="alert">
                Alert-email was not found.
            </div>
        </div>
    </div>
</template>
<script>
import { GET_ALERT_EMAIL } from '../store/action_types'
import { TENDER_DETAIL_ROUTE } from '../utils/routes'
import { EMAIL_ALERT_READ_FLAG_URL } from '../utils/const'

export default {
    data() {
        return {
            TENDER_DETAIL_ROUTE,
            EMAIL_ALERT_READ_FLAG_URL
        }
    },
    computed: {
        account() {
            return this.$store.getters.account.data
        },
        alertEmail() {
            return this.$store.getters.alertEmail.data
        }
    },
    methods: {
        getAlertEmailTenders() {
            this.$store.dispatch(GET_ALERT_EMAIL, { id: this.$route.params.id, account: this.account._id })
        },
    },
    mounted() {
        this.getAlertEmailTenders()
    }
}
</script>
<style scoped>
.alert-email-body {

}
.alert {
    font-size: 15px;
    font-weight: 400;
}
.tender-card-sub-texts {
    font-size: 13px;
    line-height: 7px;
}

.tender-card-sub-texts .values {
    margin-left: 10px;
}
</style>