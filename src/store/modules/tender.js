import axios from 'axios'
import router from '../../router'
import asyncHandler from '@/utils/async_handler'
import { TENDERS_URL, BOOKMARKED_TENDER_URL, CHECK_BOOKMARKED_TENDER_URL, VIEW_TENDER_URL } from '../../utils/urls'
import { SET_TENDERS, SET_MY_TENDERS, SET_FREE_TENDERS, SET_SAVED_TENDERS, SET_CHECK_SAVED_TENDER, SET_ERRORMSG, SET_TENDER } from '../mutation_types'
import { GET_TENDERS, GET_MY_TENDERS, GET_FREE_TENDERS, GET_SAVED_TENDERS, GET_TENDER, SAVE_TENDER, CHECK_SAVED_TENDER, CLEAR_TENDER_ISLOADING, SEARCH_TENDER, FILTER_TENDERS, VIEW_TENDER, CLEAR_TENDER } from '../action_types'
import { ALL_TENDERS_ROUTE } from '../../utils/routes'
import { DEFAULT_TENDER_MINIMAL_FILEDS } from '../../utils/const'
import { getDeviceInfo } from '../../utils/device'

const tender = {
    state: {
        tenders: {
            data: null,
            isLoading: false,
            metaData: null
        },
        myTenders: {
            data: null,
            isLoading: false,
            metaData: null
        },
        freeTenders: {
            data: null,
            isLoading: false,
            metaData: null
        },
        savedTenders: {
            data: null,
            isLoading: false
        },
        checkedSavedTender: {
            data: false,
            isLoading: false
        },
        tender: {
            data: null,
            isLoading: false,
            isSaving: false
        }
    },
    getters: {
        tenders: state => state.tenders,
        myTenders: state => state.myTenders,
        freeTenders: state => state.freeTenders,
        savedTenders: state => state.savedTenders,
        checkedSavedTender: state => state.checkedSavedTender,
        tender: state => state.tender
    },
    mutations: {
        [SET_TENDERS]: (state, payload) => { payload.data != null ? state.tenders.data = payload.data : null, state.tenders.isLoading = payload.isLoading, state.tenders.metaData = payload.metaData },
        [SET_FREE_TENDERS]: (state, payload) => { payload.data != null ? state.freeTenders.data = payload.data : null, state.freeTenders.isLoading = payload.isLoading, state.freeTenders.metaData = payload.metaData },
        [SET_MY_TENDERS]: (state, payload) => { payload.data != null ? state.myTenders.data = payload.data : null, state.myTenders.isLoading = payload.isLoading, state.myTenders.metaData = payload.metaData },
        [SET_SAVED_TENDERS]: (state, payload) => { payload.data != null ? state.savedTenders.data = payload.data : null, state.savedTenders.isLoading = payload.isLoading, state.savedTenders.metaData = payload.metaData },
        [SET_CHECK_SAVED_TENDER]: (state, payload) => { payload.data != null ? state.checkedSavedTender.data = payload.data : null, state.checkedSavedTender.isLoading = payload.isLoading },
        [SET_TENDER]: (state, payload) => { payload.data != null ? state.tender.data = payload.data : null, payload.isLoading != null ? state.tender.isLoading = payload.isLoading : null, payload.isSaving != null ? state.tender.isSaving = payload.isSaving : null },
    },
    actions: {
        [GET_TENDERS]: asyncHandler(async({ commit }, payload) => {
            commit(SET_TENDERS, { isLoading: true })
            console.log('page', payload.page)
            let result = await axios.get(TENDERS_URL, {
                params: {
                    page: payload.page || 1,
                    selectFields: DEFAULT_TENDER_MINIMAL_FILEDS,
                    sort: '-createdAt'
                }
            })
            if (result.data.status) {
                commit(SET_TENDERS, { data: result.data.data, isLoading: false, metaData: result.data.metaData })
                return
            }
            commit(SET_ERRORMSG, result.data.msg)
            commit(SET_TENDERS, { isLoading: false })
        }),
        [GET_MY_TENDERS]: asyncHandler(async({ commit, getters }, payload) => {
            commit(SET_MY_TENDERS, { isLoading: true })
            let result = await axios.get(TENDERS_URL, {
                params: {
                    page: payload.page || 1,
                    selectFields: DEFAULT_TENDER_MINIMAL_FILEDS,
                    categories: getters.account.data.alertCategories.join(','),
                    region: getters.account.data.alertRegions.join(','),
                    sort: '-createdAt'
                }
            })
            if (result.data.status) {
                commit(SET_MY_TENDERS, { data: result.data.data, isLoading: false, metaData: result.data.metaData })
                return
            }
            commit(SET_ERRORMSG, result.data.msg)
            commit(SET_MY_TENDERS, { isLoading: false })
        }),
        [GET_FREE_TENDERS]: asyncHandler(async({ commit }, payload) => {
            commit(SET_FREE_TENDERS, { isLoading: true })
            let result = await axios.get(TENDERS_URL, {
                params: {
                    page: payload.page || 1,
                    selectFields: DEFAULT_TENDER_MINIMAL_FILEDS,
                    isFeatured: true,
                    sort: '-createdAt'
                }
            })
            if (result.data.status) {
                commit(SET_FREE_TENDERS, { data: result.data.data, isLoading: false, metaData: result.data.metaData })
                return
            }
            commit(SET_ERRORMSG, result.data.msg)
            commit(SET_FREE_TENDERS, { isLoading: false })
        }),
        [GET_SAVED_TENDERS]: asyncHandler(async({ commit }, payload) => {
            commit(SET_SAVED_TENDERS, { isLoading: true })
            let result = await axios.get(BOOKMARKED_TENDER_URL, {
                params: {
                    account: payload._id,
                    selectFields: DEFAULT_TENDER_MINIMAL_FILEDS,
                    sort: '-createdAt'
                }
            })

            if (result.data.status) {
                commit(SET_SAVED_TENDERS, { data: result.data.data, isLoading: false, metaData: result.data.metaData })
                return
            }
            commit(SET_ERRORMSG, result.data.msg)
            commit(SET_SAVED_TENDERS, { isLoading: false })
        }),
        [GET_TENDER]: asyncHandler(async({ commit }, payload) => {
            commit(SET_TENDER, { data: null, isLoading: true })
            let result = await axios.get(TENDERS_URL, {
                params: {
                    _id: payload.id
                }
            })
            if (result.data.status) {
                commit(SET_TENDER, { data: result.data.data[0], isLoading: false })
                return
            }
            commit(SET_ERRORMSG, result.data.msg)
            commit(SET_TENDER, { isLoading: false })
        }),
        [SEARCH_TENDER]: asyncHandler(async({ commit, dispatch }, payload) => {
            if (router.history.current.name != ALL_TENDERS_ROUTE) router.push({ name: ALL_TENDERS_ROUTE })
            commit(SET_TENDERS, { data: null, isLoading: true })
            let result = await axios.get(TENDERS_URL, {
                params: {
                    ...payload,
                    selectFields: DEFAULT_TENDER_MINIMAL_FILEDS,
                    sort: '-createdAt'
                }
            })
            if (result.data.status) {
                commit(SET_TENDERS, { data: result.data.data, isLoading: false, metaData: result.data.metaData })
                return
                // if (payload.type == ALL_TENDERS_ROUTE) {
                //     commit(SET_TENDERS, { data: result.data.data, isLoading: false })
                // } else if (payload.type == MY_TENDERS_ROUTE) {
                //     commit(SET_MY_TENDERS, { data: result.data.data, isLoading: false })
                // } else if (payload.type == FREE_TENDERS_ROUTE) {
                //     commit(SET_FREE_TENDERS, { data: result.data.data, isLoading: false })
                // } else if (payload.type == SAVED_TENDERS_ROUTE) {
                //     commit(SET_SAVED_TENDERS, { data: result.data.data, isLoading: false })
                // }
            }
            commit(SET_ERRORMSG, result.data.msg)
            dispatch(CLEAR_TENDER_ISLOADING)
        }),
        [FILTER_TENDERS]: asyncHandler(async({ commit, dispatch }, payload) => {
            if (router.history.current.name != ALL_TENDERS_ROUTE) router.push({ name: ALL_TENDERS_ROUTE })
            commit(SET_TENDERS, { data: null, isLoading: true })
            let result = await axios.get(TENDERS_URL, {
                params: {
                    ...payload,
                    selectFields: DEFAULT_TENDER_MINIMAL_FILEDS,
                    sort: '-createdAt'
                }
            })
            if (result.data.status) {
                commit(SET_TENDERS, { data: result.data.data, isLoading: false, metaData: result.data.metaData })
                return
            }
            commit(SET_ERRORMSG, result.data.msg)
            dispatch(CLEAR_TENDER_ISLOADING)
        }),
        [SAVE_TENDER]: asyncHandler(async({ commit }, payload) => {
            commit(SET_TENDER, { isSaving: true })
            let result = await axios.post(BOOKMARKED_TENDER_URL, {
                tender: payload.tender,
                account: payload.account
            })
            if (result.data.status) {
                commit(SET_TENDER, { isSaving: false })
                return
            }
            commit(SET_ERRORMSG, result.data.msg)
            commit(SET_TENDER, { isSaving: false })
        }),
        [VIEW_TENDER]: asyncHandler(async({ commit }, payload) => {
            const deviceInfo = await getDeviceInfo()
            await axios.put(VIEW_TENDER_URL, {
                _id: payload.id,
                deviceInfo: deviceInfo
            })
            commit(SET_TENDER, { isLoading: false })
        }),
        [CHECK_SAVED_TENDER]: asyncHandler(async({ commit }, payload) => {
            commit(SET_CHECK_SAVED_TENDER, { data: false, isLoading: false })

            let result = await axios.get(CHECK_BOOKMARKED_TENDER_URL, {
                params: {
                    tender: payload.tender,
                    account: payload.account
                }
            })
            console.log('CHECK_SAVED_TENDER', result)

            if (result.data.status) {
                commit(SET_CHECK_SAVED_TENDER, { data: result.data.data, isLoading: false })
                return
            }
            commit(SET_ERRORMSG, result.data.msg)
            commit(SET_CHECK_SAVED_TENDER, { data: false, isLoading: false })
        }),
        [CLEAR_TENDER]: asyncHandler(async({ commit }) => {
            commit(SET_TENDER, { data: null, isLoading: false })
        }),
        [CLEAR_TENDER_ISLOADING]: asyncHandler(async({ commit }) => {
            commit(SET_TENDERS, { isLoading: false })
            commit(SET_FREE_TENDERS, { isLoading: false })
            commit(SET_MY_TENDERS, { isLoading: false })
            commit(SET_SAVED_TENDERS, { isLoading: false })
            commit(SET_CHECK_SAVED_TENDER, { isLoading: false })
            commit(SET_TENDER, { isLoading: false })
        })
    }
}

export default tender