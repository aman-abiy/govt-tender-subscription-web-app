import axios from 'axios'
import asyncHandler from '@/utils/async_handler'
import { SET_CATEGORY, SET_ERRORMSG } from '../mutation_types'
import { GET_CATEGORIES, CLEAR_CATEGORY_ISLOADING } from '../action_types'
import { CATEGORY_URL } from '../../utils/urls'

const error = {
    state: {
        category: {
            data: null,
            isLoading: false
        }
    },
    getters: {
        category: state => state.category
    },
    mutations: {
        [SET_CATEGORY]: (state, payload) => { payload.data != null ? state.category.data = payload.data : null, state.category.isLoading = payload.isLoading },
    },
    actions: {
        [GET_CATEGORIES]: asyncHandler(async({ commit, state }) => {
            if (state.category.data == null) {
                commit(SET_CATEGORY, { data: null, isLoading: true })
                const result = await axios.get(CATEGORY_URL)
                if (result.data.status) {
                    commit(SET_CATEGORY, { data: result.data.data, isLoading: false })
                }
                commit(SET_CATEGORY, { data: result.data.data, isLoading: false })
                commit(SET_ERRORMSG, result.data.msg)
            }
            return
        }),
        [CLEAR_CATEGORY_ISLOADING]: asyncHandler(async({ commit }) => {
            commit(SET_CATEGORY, { isLoading: false })
        })
    }
}

export default error