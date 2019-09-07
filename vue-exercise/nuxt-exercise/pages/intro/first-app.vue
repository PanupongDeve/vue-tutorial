<template>
  <div class="container">

      <div class="row back__container">
          <div class="col-sm-12">
              <b-button variant="primary" to="/intro">Back</b-button>
          </div>
      </div>

    <div class="row">
      <div class="col-sm-12 header__container">
          <h1>First App</h1>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12 my-number__col-center">
          <div class="my-number__container">
              <div class="my-number__box-title">
                  <h4>{{ title }}</h4>
                </div>
          <p class="my-number__display">{{ count }}</p>
          <div class="my-number___box-container">
              <b-button @click="count = count + 1" class="my-number__btn" variant="success">+</b-button>
              <b-button @click="count = count - 1" class="my-number__btn"  variant="danger">-</b-button>
          </div>
          </div>
      </div>
    </div>

    <div class="row">
        <div class="col-sm-12">
            <div 
                class="my-box"
                @click="attchedGreen = !attchedGreen"
                :class="divClasses"></div>
        </div>
    </div>

    <div class="row">
        <div class="col-sm-12">
            <app-btn  name="Button One"></app-btn>
        </div>
    </div>

  </div>
</template>

<script>
import button from '../../components/Button/button';

export default {
    data: function() {
        return {
            title: 'My Number',
            count: 0,
            attchedGreen: true
        }
    },
    computed: {
        divClasses: function() {
            return {
                'my-box__green': this.attchedGreen,
                'my-box__blue': !this.attchedGreen
            }
        }
    },
    components: {
        appBtn: button
    }
}
</script>

<style>

</style>
