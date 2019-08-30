<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQoute'">Qoute</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p> {{ selectedComponent }} </p>
                <keep-alive>
                    <component :is="selectedComponent">
                        <h2 slot="title">{{ qouteTitle }}</h2>
                        <p slot="content">A wonderful Qoute</p>
                    </component>
                </keep-alive>
                
               <!-- <app-qoute>
                   <h2 slot="title">{{ qouteTitle }}</h2>
                   <p slot="content">A wonderful Qoute</p>
               </app-qoute> -->
               <hr>
               <app-author></app-author>
            </div>
        </div>
    </div>
</template>

<script>
    import Qoute from './components/Qoute.vue';
    import Author from './components/Author.vue';
    import New from './components/New.vue';

    export default {
        data: function() {
            return {
                qouteTitle: 'The Qoute!',
                selectedComponent: 'appQoute'
            }
        },
        components: {
            appQoute: Qoute,
            appAuthor: Author,
            appNew: New
        }
    }
</script>

<style scoped>
</style>
