<template>
    <div class="">
        <navbar/>
        <br>
        <div class="row">
            <div class="col-lg-8 col-md-12 col-sm-12 offset-lg-2">
                <div class="card title-card">
                    <div class="card-body">
                        <h4>Settings</h4>
                    </div>
                </div>
                <br>
                <div class="card">
                    <div class="card-body">
                        <h6 class="settings-title">Alert Status</h6>
                        <hr>
                        <div class="alert alert-info" role="alert">
                            Set alert status to <b>'Active'</b> if you want to receive selected tenders through your email based on the preferences (category and region) you select below.
                        </div>
                        <div class="switch-field">
                            <input v-model="alertStatus" type="radio" class="active" id="radio-one" name="switch-one" :value="true" :checked="alertStatus == true"/>
                            <label for="radio-one"><span v-if="isLoading && alertStatus == true" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span v-else>Active</span></label>
                            <input v-model="alertStatus" type="radio" class="inactive" id="radio-two" name="switch-one" :value="false" :checked="alertStatus == false"/>
                            <label for="radio-two"><span v-if="isLoading && alertStatus == false" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span><span v-else>Inactive</span></label>
                        </div>
                        <hr>
                        <h6 class="settings-title">Region Selections</h6>
                        <hr>
                        <div class="alert alert-info" role="alert">
                            You will receive tenders through your email for the regions that are selected.
                        </div>
                        <template v-for="(region, index) in regions">
                            <div v-bind:key="index" class="region-checkbox custom-control custom-checkbox">
                                <input v-model="alertRegions" :value="region._id" type="checkbox" class="custom-control-input" :id="`region${index+1}`" :checked="checkIfRegionIsAlert(region._id)">
                                <label class="custom-control-label" :for="`region${index+1}`">{{ region.name.en }}</label>
                            </div>
                        </template>
                        <br>
                        <button v-on:click="setAlertSettings(SETTING_TYPE_REGIONS)" class="btn save-settings-btn col-1 offset-11" :disabled="isLoading ? true : false">
                            <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span v-if="!isLoading">Save</span>
                        </button>
                        <hr>
                        <h6 class="settings-title">Category Selections</h6>
                        <hr>
                        <div class="alert alert-info" role="alert">
                            You will receive tenders through your email for the categories you have selected.
                        </div>
                        <div class="vue-root">
                            <smart-tree id="tree" has-three-states selection-mode="checkBox">
                                <template v-for="(category, index) in categories">
                                    <smart-tree-items-group v-if="category.isParent" v-bind:key="index" :expanded="checkIfCategoryIsAlert(category.children.map((e) => e._id))">
                                        <strong class="parent" v-on:click="selectCategory(category.children.map((e) => e._id), CATEGORY_SELECTION_MULTIPLE)">{{ category.name.en }}</strong>
                                        <template v-for="(subCategory, subIndex) in category.children">
                                            <smart-tree-item v-bind:key="subIndex" v-on:click="selectCategory([subCategory._id], CATEGORY_SELECTION_SINGLE)"  :selected="checkIfCategoryIsAlert([subCategory._id])">{{ subCategory.name.en }}</smart-tree-item>
                                        </template>
                                    </smart-tree-items-group>
                                    <smart-tree-item v-if="!category.isParent" v-bind:key="index" v-on:click="selectCategory([category._id], CATEGORY_SELECTION_SINGLE)" :selected="checkIfCategoryIsAlert([category._id])">{{ category.name.en }}</smart-tree-item>
                                </template>
                            </smart-tree>
                        </div>
                        <br>
                        <button v-on:click="setAlertSettings(SETTING_TYPE_CATEGORIES)" class="btn save-settings-btn col-1 offset-11" :disabled="isLoading ? true : false">
                            <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span v-if="!isLoading">Save</span>
                        </button>
                        <hr>
                    </div>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>
<script>
import navbar from '@/components/Navbar_Tender'
import { GET_CATEGORIES, GET_REGIONS, SET_ALERT_SETTINGS } from '../store/action_types'
import  { 
    SETTING_TYPE_STATUS, 
    SETTING_TYPE_REGIONS, 
    SETTING_TYPE_CATEGORIES, 
    CATEGORY_SELECTION_SINGLE, 
    CATEGORY_SELECTION_MULTIPLE, 
    ALERT_SETTING_SUCCESSFUL_MSG, 
    ALERT_SETTING_UNSUCCESSFUL_MSG, 
    TOAST_GLOBAL_CONFIG 
} from '../utils/const'

import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tree.js";

export default {
    components: {
        navbar,
    },
    data() {
        return {
            alertStatus: null,
            alertRegions: [],
            alertCategories: [],
            SETTING_TYPE_STATUS: SETTING_TYPE_STATUS,
            SETTING_TYPE_REGIONS: SETTING_TYPE_REGIONS,
            SETTING_TYPE_CATEGORIES: SETTING_TYPE_CATEGORIES,
            CATEGORY_SELECTION_SINGLE: CATEGORY_SELECTION_SINGLE,
            CATEGORY_SELECTION_MULTIPLE: CATEGORY_SELECTION_MULTIPLE
        }
    },
    watch: {
        alertStatus: {
            handler() {
                this.setAlertSettings(SETTING_TYPE_STATUS)
            }
        },
        status: {
            handler(value) {
                if(value === true) {
                    this.$toast.success(ALERT_SETTING_SUCCESSFUL_MSG, { ...TOAST_GLOBAL_CONFIG })
                } else if (value === false) {
                    this.$toast.error(this.errorMessage || ALERT_SETTING_UNSUCCESSFUL_MSG, { ...TOAST_GLOBAL_CONFIG })
                }
            }
        }
    },
    computed: {
        account() {
            return this.$store.getters.account.data
        },
        categories() {
            return this.$store.getters.category.data
        },
        regions() {
            return this.$store.getters.region.data
        },
        isLoading() {
            return this.$store.getters.account.isLoading
        },
        status() {
            return this.$store.getters.account.status
        },
        errorMessage() {
            return this.$store.getters.errorMsg
        },
    },
    methods: {
        getCategories() {
            this.$store.dispatch(GET_CATEGORIES)
        },
        getRegions() {
            this.$store.dispatch(GET_REGIONS)
        },
        checkIfRegionIsAlert(region) {
            return this.account.alertRegions.includes(region)
        },
        checkIfCategoryIsAlert(categories) {
            return categories.some((category) => {
                return this.alertCategories.includes(category);
            });
        },
        setValues() {
            this.alertStatus = this.account.alertStatus
            this.alertRegions = this.account.alertRegions
            this.alertCategories = this.account.alertCategories
        },
        setAlertSettings(type) {
            var alertSetting = {}
            if(type === SETTING_TYPE_STATUS) {
                alertSetting.alertStatus = this.alertStatus
            } else if (type === SETTING_TYPE_REGIONS) {
                alertSetting.alertRegions = this.alertRegions
            } else if (type === SETTING_TYPE_CATEGORIES) {
                alertSetting.alertCategories = this.alertCategories
            }

            this.$store.dispatch(SET_ALERT_SETTINGS, { alertSetting })
        },
        selectCategory(ids, type) {
            if(type === CATEGORY_SELECTION_MULTIPLE) {
                ids.forEach((id) => {
                    if(this.alertCategories.includes(id)) {
                        this.alertCategories.splice(this.alertCategories.indexOf(id), 1)
                    } else {
                        this.alertCategories.push(id)
                    }
                });
            } else if (type === CATEGORY_SELECTION_SINGLE) {
                if(this.alertCategories.includes(ids[0])) {
                    this.alertCategories.splice(this.alertCategories.indexOf(ids[0]), 1)
                } else {
                    this.alertCategories.push(ids[0])
                }
            }
        }
    },
    mounted() {
        this.getCategories()
        this.getRegions()
        this.setValues()
    }
    
}
</script>
<style scoped>
#tree {
    --smart-tree-default-height: 1000px;
}
</style>

