<template>
    <div class="d-flex flex-wrap filter-tags">
        <span class="badge badge-pill" v-on:click="clear">Clear <i class="fa fa-times" aria-hidden="true"></i></span>
        <span class="separator">|</span>
        <span :class="[ selectedCategory == FILTER_CATEGORIES_CONSTRUCTION_ID  ? 'selected-badge' : null, 'badge badge-pill']" v-on:click="filterTenders(FILTER_CATEGORIES_CONSTRUCTION_ID)">Construction</span>
        <span :class="[ selectedCategory == FILTER_CATEGORIES_VEHICLES_ID  ? 'selected-badge' : null, 'badge badge-pill']" v-on:click="filterTenders(FILTER_CATEGORIES_VEHICLES_ID)">Vehicles</span>
        <span :class="[ selectedCategory == FILTER_CATEGORIES_SPARE_PARTS_ID ? 'selected-badge' : null, 'badge badge-pill']" v-on:click="filterTenders(FILTER_CATEGORIES_SPARE_PARTS_ID)">Spare parts</span>
        <span :class="[ selectedCategory == FILTER_CATEGORIES_HOUSE_FORECLOSURE_ID ? 'selected-badge' : null, 'badge badge-pill']" v-on:click="filterTenders(FILTER_CATEGORIES_HOUSE_FORECLOSURE_ID)">የቤት ሓራጅ</span>
        <span :class="[ selectedCategory == FILTER_CATEGORIES_TEXTILE_AND_GARMENT_ID ? 'selected-badge' : null, 'badge badge-pill']" v-on:click="filterTenders(FILTER_CATEGORIES_TEXTILE_AND_GARMENT_ID)">Textile & Garment</span>
        <span :class="[ selectedCategory == FILTER_CATEGORIES_PRINTING_AND_ADVERTISING_ID ? 'selected-badge' : null, 'badge badge-pill']" v-on:click="filterTenders(FILTER_CATEGORIES_PRINTING_AND_ADVERTISING_ID)">Printing & Advertising</span>
        <!-- <span class="badge badge-pill" v-on:click="filterTenders(FILTER_CATEGORIES_CONSTRUCTION_ID)">Info</span> -->

    </div>
</template>
<script>
import { GET_TENDERS, FILTER_TENDERS } from '../store/action_types'
import { 
    FILTER_CATEGORIES_CONSTRUCTION_ID,
    FILTER_CATEGORIES_VEHICLES_ID,
    FILTER_CATEGORIES_SPARE_PARTS_ID,
    FILTER_CATEGORIES_HOUSE_FORECLOSURE_ID,
    FILTER_CATEGORIES_TEXTILE_AND_GARMENT_ID,
    FILTER_CATEGORIES_PRINTING_AND_ADVERTISING_ID
} from '../utils/const'
export default {
    data() {
        return {
            FILTER_CATEGORIES_CONSTRUCTION_ID: FILTER_CATEGORIES_CONSTRUCTION_ID,
            FILTER_CATEGORIES_VEHICLES_ID: FILTER_CATEGORIES_VEHICLES_ID,
            FILTER_CATEGORIES_SPARE_PARTS_ID: FILTER_CATEGORIES_SPARE_PARTS_ID,
            FILTER_CATEGORIES_HOUSE_FORECLOSURE_ID: FILTER_CATEGORIES_HOUSE_FORECLOSURE_ID,
            FILTER_CATEGORIES_TEXTILE_AND_GARMENT_ID: FILTER_CATEGORIES_TEXTILE_AND_GARMENT_ID,
            FILTER_CATEGORIES_PRINTING_AND_ADVERTISING_ID: FILTER_CATEGORIES_PRINTING_AND_ADVERTISING_ID,
            selectedCategory: null
        }
    },
    methods: {
        filterTenders(categories) {
            this.selectedCategory = categories
            this.$store.dispatch(FILTER_TENDERS, { categories: categories.join(',')})
        },
        clear() {
            this.selectedCategory = null
            this.$store.dispatch(GET_TENDERS, { page: 1 })
        }
    }
}
</script>