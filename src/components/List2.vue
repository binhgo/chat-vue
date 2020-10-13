<template>
    <div id="room">
        <ejs-listview id='flat-list' :dataSource='rooms' width="100%" :select='onSelect'></ejs-listview>
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
        onSelect: function (args) {
            this.$emit("onSelect", args)
        },
    }
}
</script>


<style>
@import '../../node_modules/@syncfusion/ej2-vue-lists/styles/material.css';

#flat-list {
    border: 0px solid #dddddd;
}
</style>