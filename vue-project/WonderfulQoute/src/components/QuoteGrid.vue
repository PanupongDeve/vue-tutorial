<template>
    <div class="row">
        <app-quote 
            v-for="(quote, index) in quotes" 
            v-bind:key="index"
            @click.native="deleteQuote(index)">{{ quote }}</app-quote>
    </div>
</template>

<script>
    import Quoute from './Quoute.vue';
    export default {
        props: ['quotes'],
        components: {
            appQuote: Quoute
        },
        methods: {
            deleteQuote(index) {
                this.$emit('quoteDeleted', index);
            }
        }
    }
</script>

<style>

</style>