import axios from 'axios'
import asyncHandler from '@/utils/async_handler'
import { SET_ALERT_EMAIL, SET_ALERT_EMAILS, SET_ERRORMSG } from '../mutation_types'
import { GET_ALERT_EMAIL, GET_ALERT_EMAILS, CLEAR_ALERT_EMAILS_ISLOADING } from '../action_types'
import { ALERT_EMAILS_URL } from '../../utils/urls'
import { DEFAULT_ALERT_EMAIL_TENDER_MINIMAL_FILEDS } from '../../utils/const'

const error = {
    state: {
        alertEmails: {
            data: null,
            isLoading: false
        },
        alertEmail: {
            data: null,
            isLoading: false
        }
    },
    getters: {
        alertEmails: state => state.alertEmails,
        alertEmail: state => state.alertEmail
    },
    mutations: {
        [SET_ALERT_EMAIL]: (state, payload) => { payload.data != null ? state.alertEmail.data = payload.data : null, state.alertEmail.isLoading = payload.isLoading },
        [SET_ALERT_EMAILS]: (state, payload) => { payload.data != null ? state.alertEmails.data = payload.data : null, state.alertEmails.isLoading = payload.isLoading },
    },
    actions: {
        [GET_ALERT_EMAILS]: asyncHandler(async({ commit }, payload) => {
            commit(SET_ALERT_EMAILS, { data: null, isLoading: true })
            const result = await axios.get(ALERT_EMAILS_URL, {
                params: {
                    page: payload.page || 1,
                    account: payload.account,
                    select: DEFAULT_ALERT_EMAIL_TENDER_MINIMAL_FILEDS,
                    sort: '-createdAt'
                }
            })
            if (result.data.status) {
                commit(SET_ALERT_EMAILS, { data: result.data.data, isLoading: false })
            }
            commit(SET_ALERT_EMAILS, { isLoading: false })
            commit(SET_ERRORMSG, result.data.msg)
        }),
        [GET_ALERT_EMAIL]: asyncHandler(async({ commit }, payload) => {
            commit(SET_ALERT_EMAIL, { data: null, isLoading: true })
            const result = await axios.get(ALERT_EMAILS_URL, {
                params: {
                    _id: payload.id,
                    account: payload.account
                }
            })
            if (result.data.status) {
                commit(SET_ALERT_EMAIL, { data: result.data.data[0], isLoading: false })
            }
            commit(SET_ALERT_EMAIL, { isLoading: false })
            commit(SET_ERRORMSG, result.data.msg)
        }),
        [CLEAR_ALERT_EMAILS_ISLOADING]: asyncHandler(async({ commit }) => {
            commit(SET_ALERT_EMAILS, { isLoading: false })
        })
    }
}

export default error