import store from '../store';
import router from '../router';
import { UPDATE_ACCOUNT } from '../store/action_types'
import { LOGIN_ROUTE, ALL_TENDERS_ROUTE } from '../utils/routes'

export const updateAccount = (to, from, next) => {
    store.dispatch(UPDATE_ACCOUNT)
    next();
}

export const beforeHomeRouteEnter = (to, from, next) => {
    if ((from.name == LOGIN_ROUTE) || (from.name == null && store.getters.sessionToken != null)) {
        router.push({ name: ALL_TENDERS_ROUTE })
    }
    next()
}