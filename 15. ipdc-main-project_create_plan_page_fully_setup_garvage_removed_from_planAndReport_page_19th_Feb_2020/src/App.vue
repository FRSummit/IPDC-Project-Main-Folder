<template>
  <div>
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
</style>
