<template>
    <div>
        <navbar/>
        <br>
        <br>
        <br>
        <div class="container contact-section">
            <h3 class="text-center">Contact us, and we can help you</h3>
            <hr>
            <p class="text-center desc">If you have any questions or if you want to register, use any of the below methods to reach us.</p>
            <br>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <p class="text-center"><i class="fa fa-envelope" aria-hidden="true"></i></p>
                            <h5 class="text-center title">Email</h5>
                            <p class="text-center contact"><a :href="`mailto:${COMPANY_EMAIL}`">{{ COMPANY_EMAIL }}</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <p class="text-center"><i class="fa fa-phone" aria-hidden="true"></i></p>
                            <h5 class="text-center title">Phone</h5>
                            <p class="text-center contact"><a :href="`tel:${COMPANY_PHONE_NUMBER_1}`">{{ COMPANY_PHONE_NUMBER_1 }}</a> / <a :href="`tel:${COMPANY_PHONE_NUMBER_2}`">{{ COMPANY_PHONE_NUMBER_2 }}</a></p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-12">
                    <div class="card">
                        <div class="card-body">
                            <p class="text-center"><i class="fa fa-telegram" aria-hidden="true"></i></p>
                            <h5 class="text-center title">Telegram</h5>
                            <p class="text-center contact"><a :href="COMPANY_TELEGRAM_LINK_NUMBER">@alphaTenders</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
            <br>
        </div>
        <custom-footer/>
    </div>
</template>
<script>
import navbar from '@/components/Navbar'
import customFooter from '@/components/Footer'
import { COMPANY_EMAIL, COMPANY_PHONE_NUMBER_1, COMPANY_PHONE_NUMBER_2, COMPANY_TELEGRAM_LINK_NUMBER } from '../utils/const'
export default {
    components: {
        navbar,
        customFooter
    },
    data() {
        return {
            COMPANY_EMAIL,
            COMPANY_PHONE_NUMBER_1,
            COMPANY_PHONE_NUMBER_2,
            COMPANY_TELEGRAM_LINK_NUMBER
        }
    }
    
}
</script>