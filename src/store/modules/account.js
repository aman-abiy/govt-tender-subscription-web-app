import axios from 'axios'
import router from '../../router'
import asyncHandler from '@/utils/async_handler'
import { SET_ACCOUNT, SET_SESSION_TOKEN, SET_ERRORMSG } from '../mutation_types'
import {
    LOGIN,
    SIGNUP,
    LOGOUT,
    UPDATE_ACCOUNT,
    RESET_ACCOUNT_ISLOADING,
    EDIT_ACCOUNT,
    CHANGE_PASSWORD,
    SET_ALERT_SETTINGS,
    CLEAR_ACCOUNT_ISLOADING,
    CHANGE_EMAIL,
    VERIFY_EMAIL
} from '../action_types'
import { LOGIN_URL, SIGNUP_URL, LOGOUT_URL, UPDATE_AUTH_ACCOUNT, EDIT_ACCOUNT_URL, VERIFY_EMAIL_URL } from '../../utils/urls'
import { getDeviceInfo } from '../../utils/device'

const account = {
    state: {
        account: {
            data: null,
            status: null,
            isLoading: false
        },
        sessionToken: null
    },
    getters: {
        account: state => state.account,
        sessionToken: state => state.sessionToken
    },
    mutations: {
        [SET_ACCOUNT]: (state, payload) => { payload.data != null ? state.account.data = payload.data : null, state.account.status = payload.status, state.account.isLoading = payload.isLoading },
        [SET_SESSION_TOKEN]: (state, payload) => { state.sessionToken = payload }
    },
    actions: {
        [LOGIN]: asyncHandler(async({ commit }, payload) => {
            commit(SET_ACCOUNT, { data: null, isLoading: true })
            const deviceInfo = await getDeviceInfo()
            const result = await axios.post(LOGIN_URL, {
                email: payload.email,
                mobile: payload.mobile.e164,
                password: payload.password,
                deviceInfo: deviceInfo
            })

            if (result.data.status) {
                commit(SET_SESSION_TOKEN, result.data.sessionToken)
                commit(SET_ACCOUNT, { data: result.data.data, isLoading: false })
                router.go()
                return
            }
            commit(SET_ACCOUNT, { data: null, isLoading: false })
            commit(SET_ERRORMSG, result.data.msg)
        }),
        [SIGNUP]: asyncHandler(async({ commit }, payload) => {
            commit(SET_ACCOUNT, { data: null, isLoading: true })
            const deviceInfo = await getDeviceInfo()
            const result = await axios.post(SIGNUP_URL, {
                fname: payload.fname,
                lname: payload.lname,
                email: payload.email,
                mobile: payload.mobile,
                password: payload.password,
                deviceInfo: deviceInfo
            })

            if (result.data.status) {
                commit(SET_ACCOUNT, { data: result.data.data, isLoading: false })
                commit(SET_SESSION_TOKEN, result.data.sessionToken)
                router.go()
                return
            }
            commit(SET_ACCOUNT, { data: null, isLoading: false })
            commit(SET_ERRORMSG, result.data.msg)
        }),
        [LOGOUT]: asyncHandler(async({ commit }) => {
            commit(SET_ACCOUNT, { data: null, isLoading: true })
            commit(SET_SESSION_TOKEN, null)
            const deviceInfo = await getDeviceInfo()
            const result = await axios.post(LOGOUT_URL, {
                deviceInfo: deviceInfo
            })

            if (result.data.status) {
                router.go()
                return
            }
            commit(SET_ERRORMSG, result.data.msg)
            router.go()
            return
        }),
        [UPDATE_ACCOUNT]: asyncHandler(async({ commit }) => {
            const result = await axios.get(UPDATE_AUTH_ACCOUNT)

            if (result.data.status) {
                commit(SET_ACCOUNT, { data: result.data.data })
                return
            }
        }),
        [RESET_ACCOUNT_ISLOADING]: ({ commit }) => {
            commit(SET_ACCOUNT, { isLoading: false })
        },
        [EDIT_ACCOUNT]: asyncHandler(async({ commit }, payload) => {
            commit(SET_ACCOUNT, { isLoading: true })
            const deviceInfo = await getDeviceInfo()
            const result = await axios.put(EDIT_ACCOUNT_URL, {
                fname: payload.fname,
                lname: payload.lname,
                deviceInfo: deviceInfo
            })

            if (result.data.status) {
                commit(SET_ACCOUNT, { data: result.data.data, isLoading: false })
                router.go(-1)
                return
            }
            commit(SET_ACCOUNT, { data: null, isLoading: false })
            commit(SET_ERRORMSG, result.data.msg)
        }),
        [CHANGE_EMAIL]: asyncHandler(async({ commit }, payload) => {
            commit(SET_ACCOUNT, { isLoading: true })
            const deviceInfo = await getDeviceInfo()
            const result = await axios.put(EDIT_ACCOUNT_URL, {
                email: payload.email,
                deviceInfo: deviceInfo
            })

            if (result.data.status) {
                commit(SET_ACCOUNT, { data: result.data.data, isLoading: false })
                router.go(-1)
                return
            }
            commit(SET_ACCOUNT, { data: null, isLoading: false })
            commit(SET_ERRORMSG, result.data.msg)
        }),
        [CHANGE_PASSWORD]: asyncHandler(async({ commit, dispatch }, payload) => {
            commit(SET_ACCOUNT, { isLoading: true })
            const deviceInfo = await getDeviceInfo()
            const result = await axios.put(EDIT_ACCOUNT_URL, {
                password: payload.password,
                deviceInfo: deviceInfo
            })

            if (result.data.status) {
                commit(SET_ACCOUNT, { data: result.data.data, isLoading: false })
                dispatch(LOGOUT)
                return
            }
            commit(SET_ACCOUNT, { data: null, isLoading: false })
            commit(SET_ERRORMSG, result.data.msg)
        }),
        [VERIFY_EMAIL]: asyncHandler(async({ commit }, payload) => {
            commit(SET_ACCOUNT, { isLoading: true })
            const deviceInfo = await getDeviceInfo()
            const result = await axios.put(VERIFY_EMAIL_URL, {
                verificationToken: payload.verificationToken,
                deviceInfo: deviceInfo
            })

            if (result.data.status) {
                commit(SET_ACCOUNT, { status: true, isLoading: false })
                return
            }
            commit(SET_ACCOUNT, { status: false, isLoading: false })
            commit(SET_ERRORMSG, result.data.msg)
        }),
        [SET_ALERT_SETTINGS]: asyncHandler(async({ commit }, payload) => {
            commit(SET_ACCOUNT, { isLoading: true })
            const deviceInfo = await getDeviceInfo()
            const result = await axios.put(EDIT_ACCOUNT_URL, {
                ...payload.alertSetting,
                deviceInfo: deviceInfo
            })

            if (result.data.status) {
                commit(SET_ACCOUNT, { data: result.data.data, status: true, isLoading: false })
                return
            }
            commit(SET_ACCOUNT, { data: null, status: false, isLoading: false })
            commit(SET_ERRORMSG, result.data.msg)
        }),
        [CLEAR_ACCOUNT_ISLOADING]: asyncHandler(async({ commit }) => {
            commit(SET_ACCOUNT, { isLoading: false })
        })

    }
}

export default account