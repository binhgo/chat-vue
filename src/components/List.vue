<template>
    <div id="room">
        <ejs-listview id='flat-list' :dataSource='rooms'></ejs-listview>
    </div>
</template>
<script>
import Vue from 'vue';
import {ListViewPlugin} from '@syncfusion/ej2-vue-lists';

Vue.use(ListViewPlugin);

export default {
    name: 'room',

    props: {
        rooms: {
            type: Array,
            required: true,
        },
    },

    methods: {
        itemClick: function () {
            alert("click")
        }
    }
}
</script>
