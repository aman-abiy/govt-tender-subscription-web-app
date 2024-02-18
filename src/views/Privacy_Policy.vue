<template>
    <div>
        <navbar/>
        <br>
        <br>
        <div class="container contact-section">
            <h3 class="text-center">Privacy Policy</h3>
            <hr>
            <br>
            <h5 class="">We collect information from you when you register on our service</h5>
            <ul>
                <li>Full Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
            </ul>
            <h5 class="">How do we use the information we collect?</h5>
            <ul>
                <li>The primary reason for collection of full name is for account management.</li>
                <li>Email Address we collect during registration, can be used for login and for daily alert tender emails sent based on you (the users) preference and settings.</li>
                <li>Phone Number we collect during registration, is as an optional method for login incase user forgets email address.</li>
            </ul>
            <h5 class="">Do we share the information we collect with third parties?</h5>
            <ul>
                <li>We do not share any form of data with third parties.</li>
            </ul>
            <h5 class="">Do We Use Your Location Data?</h5>
            <ul>
                <li>We do not track, use or share any form of location data.</li>
            </ul>
            <h5 class="">Can I update or correct my information?</h5>
            <ul>
                <li>You can update or change any of the data submitted at any time in the account section of our website or mobile app.</li>
            </ul>
            <h5 class="">How Do We Protect Your Information?</h5>
            <ul>
                <li>We implement a variety of security measures to maintain the safety of your personal information when you register, login, submit, or access your personal information. We offer the use of a secure server. All supplied sensitive information is transmitted via Secure Socket Layer (SSL) technology and then encrypted.</li>
            </ul>
            <h5 class="">Governing Law</h5>
            <ul>
                <li>The laws of Ethiopia, excluding its conflicts of law rules, shall govern this Agreement and your use of our service. Your use of our service may also be subject to other local, state, national, or international laws.</li>
                <li>By using our service and registering an account you consent to this Privacy Policy.</li>
            </ul>
            <br>
            <br>
        </div>
        <custom-footer/>
    </div>
</template>
<script>
import navbar from '@/components/Navbar'
import customFooter from '@/components/Footer'
export default {
    components: {
        navbar,
        customFooter
    },
    data() {
        return {
            
        }
    }
    
}
</script>