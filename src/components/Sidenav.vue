<template>
    <div class="col-lg-3">
        <div class="filters">
            <div class="card">
                <div class="dropdown-search-filters">
                    <div class="row">
                        <form class="form-inline col-12">
                            <input v-model="search" class="form-control col-12" type="search" placeholder="Search" aria-label="Search">
                        </form>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="dropdown col-6">
                            <button :class="[ status != null ? 'dropdown-with-selected-value' : null, 'btn text-secondary dropdown-toggle col-12']" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{ status != null ? status : 'Status'}}
                            </button>
                            <div class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" v-on:click="selectStatus('open')">Open</a>
                                <a class="dropdown-item" v-on:click="selectStatus('closed')">Closed</a>
                            </div>
                        </div>
                        <div class="dropdown col-6">
                            <button :class="[ language != null ? 'dropdown-with-selected-value' : null, 'btn text-secondary dropdown-toggle col-12']" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {{ language != null ? language.name : 'Languages'}}
                            </button>
                            <div class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton">
                                <template v-for="(language, index) in languages">
                                    <a v-bind:key="index" v-on:click="selectLanguage(language)" class="dropdown-item" href="#">{{ language.name }}</a>
                                </template>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="dropdown">
                        <button :class="[ region != null ? 'dropdown-with-selected-value' : null, 'btn text-secondary dropdown-toggle col-12']" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ region != null ? region.name.en : 'Regions'}}
                        </button>
                        <div class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton">
                            <template v-for="(region, index) in regions">
                                <a v-bind:key="index" v-on:click="selectRegion(region)" class="dropdown-item">{{ region.name.en }}</a>
                            </template>
                        </div>
                    </div>
                    <hr>
                    <div class="dropdown">
                        <button :class="[ tenderSource != null ? 'dropdown-with-selected-value' : null, 'btn text-secondary dropdown-toggle col-12']" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ tenderSource != null ? tenderSource.name.en : 'Tender Sources / Newspapers'}}
                        </button>
                        <div class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton">
                            <template v-for="(tenderSource, index) in tenderSources">
                                <a v-bind:key="index" v-on:click="selectTenderSource(tenderSource)" class="dropdown-item">{{ tenderSource.name.en }}</a>
                            </template>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row date-filter">
                    <div class="col-6">
                        <label for="startDate">Start Date: </label>
                        <input v-model="startDate" class="datePicker" type="date" name="startDate" id="startDate">
                    </div>
                    <div class="col-6">
                        <label for="endDate">End Date: </label>
                        <input v-model="endDate" class="datePicker" type="date" name="endDate" id="endDate">
                    </div>
                </div>
                <hr>
                <div class="vue-root">
                    <smart-tree id="tree" has-three-states selection-mode="checkBox">
                        <template v-for="(category, index) in categories">
                            <smart-tree-items-group v-if="category.isParent" v-bind:key="index">
                                <strong class="parent" v-on:click="selectCategory(category.children.map((e) => e._id), CATEGORY_SELECTION_MULTIPLE)">{{ category.name.en }}</strong>
                                <template v-for="(subCategory, subIndex) in category.children">
                                    <smart-tree-item v-bind:key="subIndex" v-on:click="selectCategory([subCategory._id], CATEGORY_SELECTION_SINGLE)">{{ subCategory.name.en }}</smart-tree-item>
                                </template>
                            </smart-tree-items-group>
                            <smart-tree-item v-if="!category.isParent" v-bind:key="index" v-on:click="selectCategory([category._id], CATEGORY_SELECTION_SINGLE)">{{ category.name.en }}</smart-tree-item>
                        </template>
                    </smart-tree>
                </div>
                
                <div v-on:click="searchTender" class="row search-btns">
                    <button class="btn search-btn col-7" :disabled="isLoading ? true : false">
                        <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        <span v-if="!isLoading">Search</span>
                    </button>
                    <button v-on:click="resetSearchQueries" class="btn reset-btn col-4">Reset</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.tree.js";
import { FREE_TENDERS_ROUTE } from '../utils/routes'
import { GET_CATEGORIES, GET_REGIONS, GET_TENDER_SOURCES, GET_LANGUAGES, SEARCH_TENDER, GET_TENDERS } from '../store/action_types'
import  {
    CATEGORY_SELECTION_SINGLE, 
    CATEGORY_SELECTION_MULTIPLE,
    START_DATE,
    END_DATE
} from '../utils/const'

export default {
    data() {
        return {
            search: null,
            status: null,
            language: null,
            region: null,
            startDate: null,
            endDate: null,
            tenderSource: null,
            selectedCategory: [],
            CATEGORY_SELECTION_SINGLE: CATEGORY_SELECTION_SINGLE,
            CATEGORY_SELECTION_MULTIPLE: CATEGORY_SELECTION_MULTIPLE
        }
    },
    computed: {
        categories() {
            return this.$store.getters.category.data
        },
        regions() {
            return this.$store.getters.region.data
        },
        tenderSources() {
            return this.$store.getters.tenderSource.data
        },
        languages() {
            return this.$store.getters.language.data
        },
        isLoading() {
            return this.$store.getters.tenders.isLoading
        },
        route() {
            return this.$route.name;
        }
    },
    methods: {
        getCategories() {
            this.$store.dispatch(GET_CATEGORIES)
        },
        getRegions() {
            this.$store.dispatch(GET_REGIONS)
        },
        getTenderSources() {
            this.$store.dispatch(GET_TENDER_SOURCES)
        },
        getLanguages() {
            this.$store.dispatch(GET_LANGUAGES)
        },
        selectStatus(status) {
            this.status = status
        },
        selectLanguage(language) {
            this.language = language
        },
        selectRegion(region) {
            this.region = region
        },
        selectTenderSource(tenderSource) {
            this.tenderSource = tenderSource
        },
        selectCategory(ids, type) {
            if(type === CATEGORY_SELECTION_MULTIPLE) {
                ids.forEach((id) => {
                    if(this.selectedCategory.includes(id)) {
                        this.selectedCategory.splice(this.selectedCategory.indexOf(id), 1)
                    } else {
                        this.selectedCategory.push(id)
                    }
                });
            } else if (type === CATEGORY_SELECTION_SINGLE) {
                if(this.selectedCategory.includes(ids[0])) {
                    this.selectedCategory.splice(this.selectedCategory.indexOf(ids[0]), 1)
                } else {
                    this.selectedCategory.push(ids[0])
                }
            }
             
        },
        // receives date in yyyy-mm--dd format and converts to epoch milliseconds
        convertDate(dateString, type) {
            const d = dateString.split('-');
            if(type == START_DATE) {
                const date = new Date(d[0], d[1] - 1, d[2]);
                return date.valueOf()
            } else if (type == END_DATE) {
                const date = new Date(d[0], d[1] - 1, d[2]);
                date.setUTCHours(23, 59, 59, 999);
                return date.valueOf()
            }
            return (new Date(d[0], d[1] - 1, d[2])).valueOf();
        },
        resetSearchQueries() {
            this.search = null
            this.status = null
            this.startDate = null
            this.endDate = null
            this.language = null
            this.region = null
            this.tenderSource = null
            this.selectedCategory = []
            this.$store.dispatch(GET_TENDERS, { page: 1 })
        },
        searchTender() {
            var tenderQuery = {
                ...(this.route == FREE_TENDERS_ROUTE ? { isFeatured: true } : {}),
                ...(this.search != null ? { title: this.search } : {}),
                ...(this.status != null ? { status: this.status } : {}),
                ...(this.language != null ? { language: this.language._id } : {}),
                ...(this.region != null ? { region:  this.region._id } : {}),
                ...(this.tenderSource != null ? { tenderSource: this.tenderSource._id } : {}),
                ...(this.startDate != null ? { startDate: this.convertDate(this.startDate, START_DATE) } : {}),
                ...(this.endDate != null ? { endDate: this.convertDate(this.endDate, END_DATE) } : {}),
                ...(this.selectedCategory != null ? { categories: this.selectedCategory.join(',') } : {}),
                type: this.route
            }
            
            this.$store.dispatch(SEARCH_TENDER, { ...tenderQuery })
        }
    },
    mounted() {
        this.getCategories()
        this.getRegions(),
        this.getTenderSources()
        this.getLanguages()
    }
}
</script>
<style scoped>
#tree {
    --smart-tree-default-height: 49vh;
}
</style>