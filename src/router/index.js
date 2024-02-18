import Vue from 'vue'
import Router from 'vue-router'
import {
    HOME_ROUTE,
    CONTACT_ROUTE,
    PACKAGES_ROUTE,
    LOGIN_ROUTE,
    SIGNUP_ROUTE,
    ALL_TENDERS_ROUTE,
    MY_TENDERS_ROUTE,
    FREE_TENDERS_ROUTE,
    SAVED_TENDERS_ROUTE,
    TENDER_DETAIL_ROUTE,
    USER_PROFILE_ROUTE,
    EDIT_PROFILE_ROUTE,
    CHANGE_EMAIL_ROUTE,
    CHANGE_PASSWORD_ROUTE,
    SETTINGS_ROUTE,
    SUBSCRIPTION_AND_BILLING_ROUTE,
    ALERTS_ROUTE,
    ALERT_EMAIL_ROUTE,
    VERIFY_EMAIL_ROUTE,
    PRIVACY_POLICY_ROUTE
} from '../utils/routes'
import { ifAuthDeny, ifNotAuthDeny, checkAuthAndIfHasActiveSubscription } from './auth_guard'
import { redirectOn404 } from './404_handler.js'
import Home from '../views/Home'

Vue.use(Router)

const routes = [{
        path: '/',
        name: HOME_ROUTE,
        component: Home
    },
    {
        path: '/contact',
        name: CONTACT_ROUTE,
        component: () =>
            import ('../views/Contact.vue')
    },
    {
        path: '/privacy-policy',
        name: PRIVACY_POLICY_ROUTE,
        component: () =>
            import ('../views/Privacy_Policy.vue')
    },
    {
        path: '/packages',
        name: PACKAGES_ROUTE,
        component: () =>
            import ('../views/Packages.vue')
    },
    {
        path: '/login',
        name: LOGIN_ROUTE,
        beforeEnter: ifAuthDeny,
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/verify/:token',
        name: VERIFY_EMAIL_ROUTE,
        component: () =>
            import ('../views/Verify_Email.vue')
    },
    {
        path: '/signup',
        name: SIGNUP_ROUTE,
        beforeEnter: ifAuthDeny,
        component: () =>
            import ('../views/Signup.vue')
    },
    {
        path: '/tenders',
        name: ALL_TENDERS_ROUTE,
        beforeEnter: ifNotAuthDeny,
        component: () =>
            import ('../views/All_Tenders.vue')
    },
    {
        path: '/tenders/my',
        name: MY_TENDERS_ROUTE,
        beforeEnter: ifNotAuthDeny,
        component: () =>
            import ('../views/My_Tenders.vue')
    },
    {
        path: '/tenders/free',
        name: FREE_TENDERS_ROUTE,
        beforeEnter: ifNotAuthDeny,
        component: () =>
            import ('../views/Free_Tenders.vue')
    },
    {
        path: '/tenders/saved',
        name: SAVED_TENDERS_ROUTE,
        beforeEnter: ifNotAuthDeny,
        component: () =>
            import ('../views/Saved_Tenders.vue')
    },
    {
        path: '/tenders/:id',
        name: TENDER_DETAIL_ROUTE,
        beforeEnter: checkAuthAndIfHasActiveSubscription,
        component: () =>
            import ('../views/Tender_Detail.vue')
    },
    {
        path: '/profile',
        name: USER_PROFILE_ROUTE,
        beforeEnter: ifNotAuthDeny,
        component: () =>
            import ('../views/User_Profile.vue')
    },
    {
        path: '/profile/edit',
        name: EDIT_PROFILE_ROUTE,
        beforeEnter: ifNotAuthDeny,
        component: () =>
            import ('../views/Edit_Profile.vue')
    },
    {
        path: '/profile/change-email',
        name: CHANGE_EMAIL_ROUTE,
        beforeEnter: ifNotAuthDeny,
        component: () =>
            import ('../views/Change_Email.vue')
    },
    {
        path: '/profile/change-password',
        name: CHANGE_PASSWORD_ROUTE,
        beforeEnter: ifNotAuthDeny,
        component: () =>
            import ('../views/Change_Password.vue')
    },
    {
        path: '/settings',
        name: SETTINGS_ROUTE,
        beforeEnter: ifNotAuthDeny,
        component: () =>
            import ('../views/Settings.vue')
    },
    {
        path: '/subscription',
        name: SUBSCRIPTION_AND_BILLING_ROUTE,
        beforeEnter: ifNotAuthDeny,
        component: () =>
            import ('../views/Subscription_Billing.vue')
    },
    {
        path: '/alert-emails',
        name: ALERTS_ROUTE,
        beforeEnter: ifNotAuthDeny,
        component: () =>
            import ('../views/Alerts.vue')
    },
    {
        path: '/alert-emails/:id',
        name: ALERT_EMAIL_ROUTE,
        beforeEnter: ifNotAuthDeny,
        component: () =>
            import ('../views/Alert_Email.vue')
    },
    {
        path: '*',
        beforeEnter: redirectOn404
    }
]

// router.beforeResolve = updateAccount

const router = new Router({
    base: process.env.BASE_URL,
    routes
})

export default router