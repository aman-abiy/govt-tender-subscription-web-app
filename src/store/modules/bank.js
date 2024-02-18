import axios from 'axios'
import asyncHandler from '@/utils/async_handler'
import { SET_BANK_ACCOUNTS, SET_ERRORMSG } from '../mutation_types'
import { GET_BANK_ACCOUNTS, CLEAR_BANK_ISLOADING } from '../action_types'
import { BANK_ACCOUNTS_URL } from '../../utils/urls'

const error = {
    state: {
        bankAccounts: {
            data: null,
            isLoading: false
        }
    },
    getters: {
        bankAccounts: state => state.bankAccounts
    },
    mutations: {
        [SET_BANK_ACCOUNTS]: (state, payload) => { payload.data != null ? state.bankAccounts.data = payload.data : null, state.bankAccounts.isLoading = payload.isLoading },
    },
    actions: {
        [GET_BANK_ACCOUNTS]: asyncHandler(async({ commit }) => {
            commit(SET_BANK_ACCOUNTS, { data: null, isLoading: true })
            const result = await axios.get(BANK_ACCOUNTS_URL)
            if (result.data.status) {
                commit(SET_BANK_ACCOUNTS, { data: result.data.data, isLoading: false })
                return
            }
            commit(SET_BANK_ACCOUNTS, { isLoading: false })
            commit(SET_ERRORMSG, result.data.msg)
            return
        }),
        [CLEAR_BANK_ISLOADING]: asyncHandler(async({ commit }) => {
            commit(SET_BANK_ACCOUNTS, { isLoading: false })
        })
    }
}

export default error