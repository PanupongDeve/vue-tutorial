<template>
    <div>
        <btn-one v-if="type === 'default'" v-bind="$props"></btn-one>
        <btn-two v-else-if="type === 'second'"></btn-two>
    </div>
</template>

<script>
    import buttonOne from './buttonOne.vue';
    import buttonTwo from './buttonTwo.vue';
    export default {
        props: {
            type: {
                type: String,
                default: 'default'
            },
            name: String
        },

        components: {
            btnOne: buttonOne,
            btnTwo: buttonTwo
        },

        created: function() {
            console.log(this);
        }
    }
</script>