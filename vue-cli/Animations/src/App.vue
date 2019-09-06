<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <button class="btn btn-primary" @click="showFade = !showFade">Show Alert Fade</button>
                <br><br>
                <transition name="fade">
                    <div class="alert alert-info" v-if="showFade">This is Some Info</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="showSlide = !showSlide">Show Alert Slide</button>
                <br><br>
                <transition name="slide" type="animation" appear>
                    <div class="alert alert-info" v-if="showSlide">This is Some Info</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="showOnload = !showOnload">Show Alert Slide</button>
                <br><br>
                <transition name="fade" appear>
                    <div class="alert alert-info" v-if="showOnload">This is Some Info</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="withClass = !withClass">Show Alert With Class</button>
                <br><br>
                <transition 
                    enter-active-class="animated bounce"
                    leave-active-class="animated shake"
                 >
                    <div class="alert alert-info" v-if="withClass">This is Some Info</div>
                </transition>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <button class="btn btn-primary" @click="showWithName = !showWithName">Show Alert With Dynamic Name</button>
                <br><br>
                <transition 
                    :name="alertAnimation"
                 >
                    <div class="alert alert-info" v-if="showWithName">This is Some Info</div>
                </transition>
                <hr>
                <select v-model="alertAnimationSecond" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <button class="btn btn-primary" @click="showWithMulti = !showWithMulti">Show Alert With Dynamic Name</button>
                <br><br>
                <transition 
                    :name="alertAnimationSecond"
                    mode="out-in"
                 >
                    <div class="alert alert-info" v-if="showWithMulti" key="info">This is Some Info</div>
                    <div class="alert alert-warning" v-else key="warning">This is Some Warnings</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load / Remove / Element</button>
                <br><br>
                <transition
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
                    :css="false"
                >
                    <div style="width: 100px; height: 100px; background-color: lightgreen;" v-if="load"></div>
                </transition>
                <hr>
                <button @click="toogleAlert" class="btn btn-primary">Toogle Components</button>
                <br><br>
                <transition name="fade" mode="out-in">
                    <component :is="selectedCompoonent"></component>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="addItem">Add Item</button>
                <br><br>
                <ul class="list-group">
                <transition-group name="slide">
                        <li 
                            class="list-group-item"
                            style="cursor: pointer;" 
                            @click="removeItem(index)" 
                            v-for="(number, index) in numbers" 
                            :key="index">{{ number }}</li>
                    
                </transition-group>
                </ul>
                
            </div>
        </div>
    </div>
</template>

<script>
    import DangerAlert from './DangerAlert.vue';
    import SuccessAlert from './SuccessAlert.vue';

    export default {
        data() {
            return {
                showFade: false,
                showSlide: false,
                showOnload: true,
                withClass: false,
                alertAnimation: 'fade',
                alertAnimationSecond: 'fade',
                showWithName: false,
                showWithMulti: false,
                load: false,
                elementWidth: 100,
                selectedCompoonent: 'app-success-alert',
                numbers: [1, 2, 3, 4, 5]
            }
        },
        methods: {
            beforeEnter(el) {
                console.log('beforeEnter');
                this.elementWidth = 100;
                el.style.width = this.elementWidth + 'px';
            },
            enter(el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                } , 20)
                interval();
            },
            afterEnter(el) {
                console.log('afterEnter');
            },
            enterCancelled(el) {
                console.log('enterCancelled');
            },
            beforeLeave(el) {
                console.log('beforeLeave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave(el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                } , 20)
                done();
                interval();
            },
            afterLeave(el) {
                console.log('afterLeave');
            },
            leaveCancelled(el) {
                console.log('leaveCancelled');
            },
            toogleAlert() {
                if (this.selectedCompoonent === 'app-success-alert') {
                    this.selectedCompoonent = 'app-danger-alert';
                } else {
                    this.selectedCompoonent = 'app-success-alert';
                }
            },
            addItem() {
                const pos = Math.floor(Math.random() * this.numbers.length);
                this.numbers.splice(pos, 0, this.numbers.length + 1);
            },
            removeItem(index) {
                this.numbers.splice(index, 1);
            }
        },
        components: {
            appDangerAlert: DangerAlert,
            appSuccessAlert: SuccessAlert
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }

    .fade-enter-active {
        transition: opacity 1s;
        /* opacity: 1; */
    }

    .fade-leave {
         /* opacity: 1; */
    }

    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;

    }

    .slide-enter {
        opacity: 0;
    }

    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }

    .slide-leave {

    }

    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
        position: absolute;
    }

    .slide-move {
        transition: transform 1s;
    }

    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0px);
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0px);
        }
        to {
            transform: translateY(20px);
        }
    }
</style>
