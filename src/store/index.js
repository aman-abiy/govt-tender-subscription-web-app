import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate';
import account from './modules/account'
import error from './modules/error'
import tender from './modules/tender'
import category from './modules/category'
import region from './modules/region'
import tender_source from './modules/tender_source'
import language from './modules/language'
import bank from './modules/bank'
import alertEmail from './modules/alert_email'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        account,
        error,
        tender,
        category,
        region,
        tender_source,
        language,
        bank,
        alertEmail
    },
    state: {

    },
    mutations: {

    },
    actions: {

    },
    plugins: [createPersistedState()],
})