import axios from 'axios'
import store from '../store'
import {
    CLEAR_ACCOUNT_ISLOADING,
    CLEAR_BANK_ISLOADING,
    CLEAR_CATEGORY_ISLOADING,
    CLEAR_LANGUAGE_ISLOADING,
    CLEAR_REGION_ISLOADING,
    CLEAR_TENDER_SOURCE_ISLOADING,
    CLEAR_TENDER_ISLOADING,
    UPDATE_ERRORMSG,
    LOGOUT
} from '../store/action_types'

const axiosInterceptors = () => {
    axios.interceptors.response.use((response) => {
        return response;
    }, function(error) {
        store.dispatch(CLEAR_ACCOUNT_ISLOADING)
        store.dispatch(CLEAR_BANK_ISLOADING)
        store.dispatch(CLEAR_CATEGORY_ISLOADING)
        store.dispatch(CLEAR_LANGUAGE_ISLOADING)
        store.dispatch(CLEAR_REGION_ISLOADING)
        store.dispatch(CLEAR_TENDER_SOURCE_ISLOADING)
        store.dispatch(CLEAR_TENDER_ISLOADING)

        // Do something with response error
        if (error.code === 'ECONNABORTED') {
            store.dispatch(UPDATE_ERRORMSG, { errorMsg: 'Error! Please check your connection.' })
        }

        if (error.response.status === 400) {
            store.dispatch(UPDATE_ERRORMSG, { errorMsg: error.response.data.message })
        }

        if (error.response.status === 401) {
            store.dispatch(UPDATE_ERRORMSG, { errorMsg: error.response.data.message })
            if (store.getters.sessionToken != null) {
                store.dispatch(LOGOUT)
            }
        }

        if (error.response.status === 403) {
            store.dispatch(UPDATE_ERRORMSG, { errorMsg: error.response.data.message })
        }

        if (error.response.status === 404) {
            store.dispatch(UPDATE_ERRORMSG, { errorMsg: error.response.data.message })
                // router.push({ name: '404' })
        }

        if (error.response.status === 409) {
            store.dispatch(UPDATE_ERRORMSG, { errorMsg: error.response.data.message })
        }

        if (error.response.status === 500) {
            store.dispatch(UPDATE_ERRORMSG, { errorMsg: error.response.data.message })
        }
    });
}

export default axiosInterceptors