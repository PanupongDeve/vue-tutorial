import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    },
    reciveAge(age) {
      this.$on('ageWasEdited', (updatedAge) => {
        age = updatedAge;
      })
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})

