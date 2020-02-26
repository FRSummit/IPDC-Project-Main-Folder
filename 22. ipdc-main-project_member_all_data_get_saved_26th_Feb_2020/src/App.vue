<template>
  <div id="app">
    <Navbar/>
    <!-- <v-content>
      {{ clientId }}
      <router-view></router-view>
    </v-content> -->
    
  </div>
</template>

<script>
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/materialize-css/dist/js/materialize.min.js'

import Navbar from './components/Navbar.vue'

export default {
  name: 'App',

  components: {
    Navbar
  },
};
</script>

<style>
#app {
}
.v-content__wrap {
  background: #ECEFF1;
}
.v-toolbar__content {
  background: #FFFFFF;
}
.mdi-menu::before {
  background: #fff;
  color: #dedede;
}
.create-plan-page .v-input input {
  /* display: none; */
  border-bottom: none !important;
  text-align: center;
}
.create-plan-page .v-select__selection--comma {
  text-align: center;
  width: 100%;
}
.content-header {
  /* border-bottom: 1px solid #787878; */
}
.v-subheader.content-header {
  border-bottom: 1px solid #787878;
}
.report-landing-page .v-subheader.content-header {
  border-bottom: none;
}
.v-tabs-slider-wrapper {
  display: none;
}
.v-tab--active {
  background: #E4EFFA;
}
.v-card > *:last-child:not(.v-btn):not(.v-chip) {
  background-color: #eceff1 !important;
}
.content-item-title {
  font-size: 16px !important;
  font-family: Roboto,Noto,sans-serif;
}
.list-box[data-v-5f798d7e] {
    border: 0px !important;
}
</style>
