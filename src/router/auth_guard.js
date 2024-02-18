import store from '../store';
import router from '../router'
import { LOGIN_ROUTE, SUBSCRIPTION_AND_BILLING_ROUTE } from '../utils/routes'
import {
    UPDATE_ACCOUNT,
    CLEAR_ERRORMSG,
    CLEAR_ACCOUNT_ISLOADING,
    CLEAR_BANK_ISLOADING,
    CLEAR_CATEGORY_ISLOADING,
    CLEAR_LANGUAGE_ISLOADING,
    CLEAR_REGION_ISLOADING,
    CLEAR_TENDER_SOURCE_ISLOADING,
    CLEAR_TENDER_ISLOADING
} from '../store/action_types'

export const ifNotAuthDeny = (to, from, next) => {
    // clear error messages
    store.dispatch(CLEAR_ERRORMSG)
        // clear isLoading states
    store.dispatch(CLEAR_ACCOUNT_ISLOADING)
    store.dispatch(CLEAR_BANK_ISLOADING)
    store.dispatch(CLEAR_CATEGORY_ISLOADING)
    store.dispatch(CLEAR_LANGUAGE_ISLOADING)
    store.dispatch(CLEAR_REGION_ISLOADING)
    store.dispatch(CLEAR_TENDER_SOURCE_ISLOADING)
    store.dispatch(CLEAR_TENDER_ISLOADING)

    if (store.getters.sessionToken == null || store.getters.account.data == null) {
        router.push({ name: LOGIN_ROUTE })
        return
    }

    // if user is logged in make a call to update user account on each authorized route visit
    store.dispatch(UPDATE_ACCOUNT)
    next();
}


export const ifAuthDeny = (to, from, next) => {
    // clear error messages
    store.dispatch(CLEAR_ERRORMSG)
        // clear isLoading states
    store.dispatch(CLEAR_ACCOUNT_ISLOADING)
    store.dispatch(CLEAR_BANK_ISLOADING)
    store.dispatch(CLEAR_CATEGORY_ISLOADING)
    store.dispatch(CLEAR_LANGUAGE_ISLOADING)
    store.dispatch(CLEAR_REGION_ISLOADING)
    store.dispatch(CLEAR_TENDER_SOURCE_ISLOADING)
    store.dispatch(CLEAR_TENDER_ISLOADING)

    if (store.getters.sessionToken != null && store.getters.account.data != null) {
        router.push(from.fullPath)
        return
    }
    next();
}

export const checkAuthAndIfHasActiveSubscription = (to, from, next) => {

    // clear error messages
    store.dispatch(CLEAR_ERRORMSG)
        // clear isLoading states
    store.dispatch(CLEAR_ACCOUNT_ISLOADING)
    store.dispatch(CLEAR_BANK_ISLOADING)
    store.dispatch(CLEAR_CATEGORY_ISLOADING)
    store.dispatch(CLEAR_LANGUAGE_ISLOADING)
    store.dispatch(CLEAR_REGION_ISLOADING)
    store.dispatch(CLEAR_TENDER_SOURCE_ISLOADING)
    store.dispatch(CLEAR_TENDER_ISLOADING)

    if (store.getters.sessionToken == null || store.getters.account.data == null) {
        router.push({ name: LOGIN_ROUTE })
        return
    }

    if (!store.getters.account.data.hasActiveSubscription) {
        router.push({ name: SUBSCRIPTION_AND_BILLING_ROUTE })
        return
    }
    // if user is logged in make a call to update user account on each authorized route visit
    store.dispatch(UPDATE_ACCOUNT)
    next();


    next();
}