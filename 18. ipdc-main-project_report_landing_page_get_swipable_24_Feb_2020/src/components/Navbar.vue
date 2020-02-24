<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark v-if="this.$store.state.userIsAuthorized"> -->
    <v-app-bar app color="primary" dark>
      <!-- <v-app-bar color="deep-purple accent-4" dark prominent> -->
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" style="#dedede"></v-app-bar-nav-icon>
      <!-- </v-app-bar> -->
      <v-spacer></v-spacer>
      <v-toolbar-title class="headline" style="color: #222; margin-left: -10%;">
        <span> {{ $route.name}} </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- <v-spacer></v-spacer>
      <v-btn to="/home" class="mr-2">Home</v-btn>
      <v-btn to="/dashboard" class="mr-2">Dashboard</v-btn>
      <v-btn @click="logout" v-if="this.$store.state.userIsAuthorized">Logout</v-btn> -->

          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn dark icon v-on="on" style="position: absolute; right: 5%;">
                <!-- <v-icon>mdi-dots-vertical</v-icon> -->
                <div style="width: 30px">
                    <v-img style="background-size: 100%;" src="../assets/images/user.png"></v-img>
                </div>
              </v-btn>
            </template>

            <v-list>
              
              <v-list-item class="mr-0" v-if="this.$store.state.userIsAuthorized">
                    <v-list-item-avatar>
                        <img src="../assets/images/user.png" alt="John">
                    </v-list-item-avatar>
  
                    <v-list-item-content left class="right-menu-border">
                        <v-list-item-title>{{ user_nickname }}</v-list-item-title>
                    </v-list-item-content>
              </v-list-item>
              <!-- <v-list-item class="mr-0" v-if="this.$store.state.userIsAuthorized">
                  <v-list-item-title>Profile</v-list-item-title>
              </v-list-item> -->
              <v-list-item class="mr-0">
                <v-list-item-title @click="logout" v-if="this.$store.state.userIsAuthorized">
                    Logout
                </v-list-item-title>
                <v-list-item-title @click="logout" v-else>
                    Login
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
    </v-app-bar>

    

        <!-- <v-navigation-drawer v-model="drawer" absolute bottom temporary> -->
        <v-navigation-drawer v-model="drawer" absolute left temporary>
          <v-list nav dense>
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <v-list-item>
              <v-img style="background-size: 100%;" src="../assets/images/ipdc.jpg"></v-img>
            </v-list-item>

            <v-list-item to="/" class="mr-0">
              <div class="v-list-item__icon side-menu-icon">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-home theme--light" style="font-size: 16px; color: #222;"></i>
              </div>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item>

            <!-- <v-list-item to="/dashboard" class="mr-0">
              <div class="v-list-item__icon side-menu-icon">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-home theme--light" style="font-size: 16px; color: #222;"></i>
              </div>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item> -->

            <v-list-item to="/planandreports" class="mr-0">
              <div class="v-list-item__icon side-menu-icon">
                <i aria-hidden="true" class="v-icon notranslate mdi mdi-note theme--light" style="font-size: 16px;"></i>
              </div>  
              <v-list-item-title>Plan &amp; Reports</v-list-item-title>
            </v-list-item>

            <v-list-item to="/support" class="mr-0">
              <div class="v-list-item__icon side-menu-icon">
                <i aria-hidden="true" class="v-icon notranslate fas fa-tools fa-2x theme--light" style="font-size: 16px;"></i>
              </div>
              <v-list-item-title>Support</v-list-item-title>
            </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-navigation-drawer>


    
 

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  components: {
  },

  data () {
    return {
      clientId: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
      drawer: false,
      group: null,
      componentName: null,
      user_nickname: '',
    }
  },
  created() {
    /*let data = localStorage.getItem("ipdc_current_component_name");
    console.log('Component name : ' + JSON.parse(data).name);
    this.componentName = JSON.parse(data).name;
    // localStorage.removeItem('ipdc_current_component_name');*/
    let data = localStorage.getItem("auth0_nickname");
    data = data.charAt(0).toUpperCase() + data.slice(1);
    this.user_nickname = data;
  },
  methods:{
    logout(){
      this.$store.dispatch('auth0Logout');
      console.log('logging out');
    },
    login(){
      // this.$store.dispatch('auth0Login');
      // window.location.href = 'http://localhost:8080/';
      // this.$route.push('/');
      console.log('login');
    }
  },
  beforeCreate(){

  },
    watch: {
      group () {
        this.drawer = false
      }
    },
};
</script>

<style scoped>
.headline .text-uppercase {
  color: #222;
}
.v-list-item__icon {
  margin-right: 10px !important;
}
.v-list-item__title {
  font-size: 1rem !important;
  border-bottom: 1px solid gainsboro;
  padding: 8px 0;
  color: #222
}
.v-menu__content--fixed {
    top: 0 !important;
    right: 0 !important;
    width: 150px;
    left: auto !important;
}
.v-navigation-drawer .v-list {
  padding: 0;
}
.v-application .mr-0 {
  padding-right: 0;
}
</style>