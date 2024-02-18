<template>
    <div v-on:click="openTender" class="tender-card card">
        <div class="card-body">
            <h5 class="card-title text-primary">{{ tender.title }}</h5>
            <hr>
            <!-- <p class="tender-card-sub-texts"><strong>Opening Date:</strong> <span class="values">{{ new Date(tender.bidOpeningDate) | formatDate | getDateOnly }} | {{ new Date(tender.bidOpeningDate) | formatDate | getETDateOnly }}</span> </p>
            <p class="tender-card-sub-texts"><strong>Closing Date:</strong> <span class="values">{{ new Date(tender.bidClosingDate) | formatDate | getDateOnly }} | {{ new Date(tender.bidClosingDate) | formatDate | getETDateOnly }}</span> </p>
            <p class="tender-card-sub-texts"><strong>Published On:</strong> <span class="values">{{ tender.tenderSources[0].name.en }} ( {{ tender.publicationDate | formatDate | getDateOnly }} | {{ new Date(tender.publicationDate) | formatDate | getETDateOnly }} )</span></p> -->
            <p class="tender-card-sub-texts"><strong>Opening Date:</strong> <span class="values"><span v-if="(tender.bidOpeningDateText != null)">{{ tender.bidOpeningDateText }}</span><span v-else>{{ new Date(tender.bidOpeningDate) | formatDate | getDateOnly }}</span></span> </p>
            <p class="tender-card-sub-texts"><strong>Closing Date:</strong> <span class="values"><span v-if="(tender.bidClosingDateText != null)">{{ tender.bidClosingDateText }}</span><span v-else>{{ new Date(tender.bidClosingDate) | formatDate | getDateOnly }}</span></span> </p>
            <p class="tender-card-sub-texts"><strong>Published On:</strong> <span class="values">{{ tender.tenderSources[0].name.en }} ( {{ tender.publicationDate | formatDate | getDateOnly }} )</span></p>
        </div>
        <div class="card-footer text-muted">
            <div class="row justify-content-between">
                <p class="col-4 tender-card-sub-texts"><strong>Status:</strong> <span class="badge badge-success status-badge">open </span></p>
                <p class="tender-card-sub-texts time-ago">Posted <span class="post-timeago-duration">{{ timeAgo.format(new Date(tender.createdAt)) }}</span></p>
            </div>
        </div>
    </div>
</template>
<script>
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

import { TENDER_DETAIL_ROUTE } from '../utils/routes'

TimeAgo.addDefaultLocale(en)

export default {
    props: {
        tender: Object
    },
    data() {
        return {
            timeAgo: new TimeAgo('en-US'),
        }
    }, 
    methods: {
        openTender() {
            const routeData = this.$router.resolve({ name: TENDER_DETAIL_ROUTE, params: { id: this.tender._id } });
            window.open(routeData.href, '_blank');
        }
    }
}
</script>