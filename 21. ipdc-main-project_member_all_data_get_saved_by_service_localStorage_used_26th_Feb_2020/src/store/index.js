import Vue from 'vue'
import Vuex from 'vuex'
import auth0 from 'auth0-js'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userIsAuthorized:false,
    auth0: new auth0.WebAuth({
      domain: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN, 
      clientID: process.env.VUE_APP_AUTH0_CONFIG_CLIENTID,
      redirectUri: process.env.VUE_APP_DOMAINURL + '/auth0callback',  
      responseType: process.env.VUE_APP_AUTH0_CONFIG_RESPONSETYPE,
      audience: process.env.VUE_APP_AUTH0AUDIENCE,
      scope: process.env.VUE_APP_AUTH0_CONFIG_SCOPE,
    }), 
  },
  mutations: {
    setUserIsAuthenticated(state, replacement){
      // console.log('method: setUserIsAuthenticated()');
      state.userIsAuthorized = replacement;
    }
  },
  actions: {
    auth0Login(context){
      console.log("in a store action named auth0Login");
      context.state.auth0.authorize();
    },
    auth0HandleAuthentication (context) {
      context.state.auth0.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          let expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
          )
          console.log('Authentication infos : ');
          console.log(authResult);
          // localStorage.setItem('testAuthResult', authResult);
          console.log('Authentication infos : ');
          // save the tokens locally
          localStorage.setItem('auth0_nickname', authResult.idTokenPayload.nickname);
          localStorage.setItem('auth0_email', authResult.idTokenPayload.name);
          localStorage.setItem('access_token', authResult.accessToken);
          localStorage.setItem('id_token', authResult.idToken);
          localStorage.setItem('expires_at', expiresAt);  

          router.replace('/dashboard-authorized');
          // router.replace('/planandreports');
        } 
        else if (err) {
          // alert('login failed. Error #KJN838');
          router.replace('/login');
          console.log(err);
        }
      })
    },
    auth0Logout (context) {
      // No need to update the bearer in global axiosConfig to null because we are redirecting out of the application
      // Clear Access Token and ID Token from local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('id_token');
      localStorage.removeItem('expires_at');
      // localStorage.removeItem('planandreports_plans_number'); // PlanAndReport.vue

      // redirect to auth0 logout to completely log the user out
      window.location.href = process.env.VUE_APP_AUTH0_CONFIG_DOMAINURL + "/v2/logout?returnTo=" + process.env.VUE_APP_DOMAINURL + "/login&client_id=" + process.env.VUE_APP_AUTH0_CONFIG_CLIENTID; 
    },  
    /*auth0Logout (context) {
      window.location.href = 'http://localhost:8080/'; 
    },*/
  },
  modules: {
  }
})
