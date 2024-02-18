import axios from 'axios'
import asyncHandler from '@/utils/async_handler'
import { SET_TENDER_SOURCE, SET_ERRORMSG } from '../mutation_types'
import { GET_TENDER_SOURCES, CLEAR_TENDER_SOURCE_ISLOADING } from '../action_types'
import { TENDER_SOURCE_URL } from '../../utils/urls'

const error = {
    state: {
        tenderSource: {
            data: null,
            isLoading: false
        }
    },
    getters: {
        tenderSource: state => state.tenderSource
    },
    mutations: {
        [SET_TENDER_SOURCE]: (state, payload) => { payload.data != null ? state.tenderSource.data = payload.data : null, state.tenderSource.isLoading = payload.isLoading },
    },
    actions: {
        [GET_TENDER_SOURCES]: asyncHandler(async({ commit, state }) => {
            if (state.tenderSource.data == null) {
                commit(SET_TENDER_SOURCE, { data: null, isLoading: true })
                const result = await axios.get(TENDER_SOURCE_URL)
                if (result.data.status) {
                    commit(SET_TENDER_SOURCE, { data: result.data.data, isLoading: false })
                }
                commit(SET_TENDER_SOURCE, { data: result.data.data, isLoading: false })
                commit(SET_ERRORMSG, result.data.msg)
            }
            return
        }),
        [CLEAR_TENDER_SOURCE_ISLOADING]: asyncHandler(async({ commit }) => {
            commit(SET_TENDER_SOURCE, { isLoading: false })
        })
    }
}

export default error