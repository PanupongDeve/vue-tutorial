<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes="maxQoutes"></app-header>
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deletedQoute"></app-quote-grid>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">info: Click on a Quote to Delete it</div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import QuoteGrid from './components/QuoteGrid.vue';
    import NewQuote from './components/NewQuote.vue';

    export default {
        data: function() {
            return {
                quotes: [
                    'Just q Qoute to see something'
                ],
                maxQoutes: 10
            }
        },
        methods: {
            newQuote: function(quote) {
                if (this.quotes.length >= this.maxQoutes) {
                    return alert('Plase delete Quote');
                }
                this.quotes.push(quote);
            },
            deletedQoute: function(index) {
                this.quotes.splice(index, 1);
            }
        },
        components: {
            appQuoteGrid: QuoteGrid,
            appNewQuote: NewQuote,
            appHeader: Header
        }
    }
</script>

<style>
</style>
