import Vue from 'vue';
import { ge } from 'ethiopic-calendar';
import { DATE_OPTIONS, DATETIME_OPTIONS, ETHIOPIAN_CALENDAR_MONTHS } from '../utils/const'

Vue.filter('formatDate', (value) => {
    return value != null ? new Date(value).toString() : '-';
})

Vue.filter('getDateOnly', (value) => {
    return value != '-' ? new Date(value).toLocaleDateString("en-US", DATE_OPTIONS) : '-';
})

Vue.filter('getETDateOnly', (value) => {
    var ethiopian_date = null
    if (value != '-') {
        var date = new Date(value);
        ethiopian_date = ge(date.getFullYear(), date.getMonth(), date.getDay())
        return `${ETHIOPIAN_CALENDAR_MONTHS[ethiopian_date.month + 1]} ${ethiopian_date.day}, ${ethiopian_date.year}`
    }
    return '-';
})

Vue.filter('getDateAndTime', (value) => {
    return value != '-' ? new Date(value).toLocaleDateString("en-US", DATETIME_OPTIONS) : '-';
})

Vue.filter('handleNull', (value) => {
    return value == null ? '-' : value
})

Vue.filter('formatComma', (value) => {
    return value != null ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 'null'
})

Vue.filter('uppercase', (value) => {
    return value != null ? value.toString().toUpperCase() : 'null'
})