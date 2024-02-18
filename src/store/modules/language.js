import axios from 'axios'
import asyncHandler from '@/utils/async_handler'
import { SET_LANGUAGE, SET_ERRORMSG } from '../mutation_types'
import { GET_LANGUAGES, CLEAR_LANGUAGE_ISLOADING } from '../action_types'
import { LANGUAGE_URL } from '../../utils/urls'

const error = {
    state: {
        language: {
            data: null,
            isLoading: false
        }
    },
    getters: {
        language: state => state.language
    },
    mutations: {
        [SET_LANGUAGE]: (state, payload) => { payload.data != null ? state.language.data = payload.data : null, state.language.isLoading = payload.isLoading },
    },
    actions: {
        [GET_LANGUAGES]: asyncHandler(async({ commit, state }) => {
            if (state.language.data == null) {
                commit(SET_LANGUAGE, { data: null, isLoading: true })
                const result = await axios.get(LANGUAGE_URL)
                if (result.data.status) {
                    commit(SET_LANGUAGE, { data: result.data.data, isLoading: false })
                }
                commit(SET_LANGUAGE, { data: result.data.data, isLoading: false })
                commit(SET_ERRORMSG, result.data.msg)
            }
            return
        }),
        [CLEAR_LANGUAGE_ISLOADING]: asyncHandler(async({ commit }) => {
            commit(SET_LANGUAGE, { isLoading: false })
        })
    }
}

export default error