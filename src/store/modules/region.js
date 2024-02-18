import axios from 'axios'
import asyncHandler from '@/utils/async_handler'
import { SET_REGION, SET_ERRORMSG } from '../mutation_types'
import { GET_REGIONS, CLEAR_REGION_ISLOADING } from '../action_types'
import { REGION_URL } from '../../utils/urls'

const error = {
    state: {
        region: {
            data: null,
            isLoading: false
        }
    },
    getters: {
        region: state => state.region
    },
    mutations: {
        [SET_REGION]: (state, payload) => { payload.data != null ? state.region.data = payload.data : null, state.region.isLoading = payload.isLoading },
    },
    actions: {
        [GET_REGIONS]: asyncHandler(async({ commit, state }) => {
            if (state.region.data == null) {
                commit(SET_REGION, { data: null, isLoading: true })
                const result = await axios.get(REGION_URL)
                if (result.data.status) {
                    commit(SET_REGION, { data: result.data.data, isLoading: false })
                }
                commit(SET_REGION, { data: result.data.data, isLoading: false })
                commit(SET_ERRORMSG, result.data.msg)
            }
            return
        }),
        [CLEAR_REGION_ISLOADING]: asyncHandler(async({ commit }) => {
            commit(SET_REGION, { isLoading: false })
        })
    }
}

export default error