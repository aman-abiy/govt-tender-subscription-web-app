import store from '../store';
import router from '../router'
import { SUBSCRIPTION_AND_BILLING_ROUTE } from '../utils/routes'
import {} from '../store/action_types'

export const checkIfHasActiveSubscription = (to, from, next) => {

    if (!store.getters.account.data.hasActiveSubscription) {
        router.push({ name: SUBSCRIPTION_AND_BILLING_ROUTE })
        return
    }
    next();
}