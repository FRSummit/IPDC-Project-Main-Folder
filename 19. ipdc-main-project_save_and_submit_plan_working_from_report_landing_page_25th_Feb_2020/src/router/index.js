import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import PlanAndReports from '../views/PlanAndReports.vue'
import Support from '../views/Support.vue'
import ReportLandingPageParent from '../views/ReportLandingPageParent.vue'
import CreatePlan from '../views/CreatePlan.vue'
import ManpowerAndPersonalContacts from '../views/ReportLandingInputs/ManpowerAndPersonalContacts/MemberSwip.vue'
import RegularAndSpecialMeetings from '../views/ReportLandingInputs/RegularAndSpecialMeetings/MeetingsSwip.vue'
import TeachingAndLearningProgram from '../views/ReportLandingInputs/TeachingAndLearningProgram/TeachingLearningProgramSwip.vue'
import DawahMaterialDistribution from '../views/ReportLandingInputs/DawahMaterialDistribution/DawahMaterialDistributionSwip.vue'
import Finance from '../views/ReportLandingInputs/Finance/FinanceSwip.vue'
import SocialWelfare from '../views/ReportLandingInputs/SocialWelfare/SocialWelfareSwip.vue'
import Login from '../views/Login.vue'
import Store from '../store/index'
import Auth0Callback from '../views/Auth0Callback.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth0callback',
    name: 'auth0callback',
    component: Auth0Callback,
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/support',
    name: 'Support',
    component: Support,
  },
  {
    path: '/planandreports',
    name: 'Plan And Reports',
    component: PlanAndReports,
    meta: { requiresAuth: true }
  },
  {
    path: '/planandreports/report_landing_page',
    name: 'Report Landing Page',
    component: ReportLandingPageParent,
    meta: { requiresAuth: true }
  },
  {
    path: '/planandreports/report_landing_page/manpower-and-personal-contacts',
    name: 'Manpower And Personal',
    component: ManpowerAndPersonalContacts,
    meta: { requiresAuth: true }
  },
  {
    path: '/planandreports/report_landing_page/regular-and-special-meetings',
    name: 'Regular And Special Meetings',
    component: RegularAndSpecialMeetings,
    meta: { requiresAuth: true }
  },
  {
    path: '/planandreports/report_landing_page/teaching-and-learning-program',
    name: 'Teaching And Learning Program',
    component: TeachingAndLearningProgram,
    meta: { requiresAuth: true }
  },
  {
    path: '/planandreports/report_landing_page/dawah-material-distribution',
    name: 'Dawah Material Distribution',
    component: DawahMaterialDistribution,
    meta: { requiresAuth: true }
  },
  {
    path: '/planandreports/report_landing_page/finance',
    name: 'Finance',
    component: Finance,
    meta: { requiresAuth: true }
  },
  {
    path: '/planandreports/report_landing_page/social-welfare',
    name: 'Social Welfare',
    component: SocialWelfare,
    meta: { requiresAuth: true }
  },
  {
    path: '/admin/create-plan',
    name: 'Create Plan',
    component: CreatePlan,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});



router.beforeEach( (to,from,next)=>{
  // Allow finishing callback url for logging in
  if(to.matched.some(record=>record.path == "/auth0callback")){
   console.log("router.beforeEach found /auth0callback url");
   Store.dispatch('auth0HandleAuthentication');
   next(false);
 }
 
  // check if user is logged in (start assuming the user is not logged in = false)
  let routerAuthCheck = false;  
  // Verify all the proper access variables are present for proper authorization
  if( localStorage.getItem('access_token') && localStorage.getItem('id_token') && localStorage.getItem('expires_at') ){
    // console.log('found local storage tokens');
    // Check whether the current time is past the Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // set localAuthTokenCheck true if unexpired / false if expired
    routerAuthCheck = new Date().getTime() < expiresAt;  
  }
 
   // set global ui understanding of authentication
   Store.commit('setUserIsAuthenticated', routerAuthCheck);
 
   // check if the route to be accessed requires authorizaton
   if (to.matched.some(record => record.meta.requiresAuth)) {
    //  console.log('I am here, authentication checking, private page');
     // Check if user is Authenticated
     if(routerAuthCheck){
       // user is Authenticated - allow access
      //  console.log('Access granted, now we are logged in');
       next();
     }
     else{
       // user is not authenticated - redirect to login
       router.replace('/login');
     }
     
   }
   // Allow page to load 
   else{
    //  console.log('no authentication, public page');
     Store.commit('setUserIsAuthenticated', false);
     next();
   }
 });

export default router
