<template>
  <v-ons-page>
    <div class="plan-and-reports">
      <!-- <h3>Plan &amp; Repors</h3> -->
        <div class="center search" style="text-align: right;">
            <div id="search-input" placeholder="Search">
                <input type="search" class="hh search-input search-input--material" placeholder="Search">
            </div>
        </div>
        
        <button class="waves-effect waves-light btn" @click="createNew">Create</button>

        <div class="report-unit-sec">
            <div class="row plan-and-report-row">
                <v-ons-card class="card-radius plan-card">
                    <div>
                        <router-link to='/planandreports/report_landing_page'>
                            <div class="content">
                                <p class="report-card">2019_Dec-2019_Dec_Unit_Traning Unit</p>
                            </div>
                        </router-link>
                    </div>
                    <div>
                        <router-link to='/planandreports/report_landing_page'>
                            <div class="content">
                                <p class="report-card">2019_Dec-2019_Dec_Unit_Traning Unit</p>
                            </div>
                        </router-link>
                    </div>
                </v-ons-card>
            </div>
        </div>
    </div>
  </v-ons-page>
</template>

<script>
import UnitPlanReportService from '../services/UnitPlanReportService'
const unitPlanReportService = new UnitPlanReportService();

import axios from 'axios';
var url = 'http://localhost:50009/reporting/v1/all/search?page=1&pageSize=10';
const TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJEUkNSVVkwUkVaQ1JUWTJSREl6TlRkQk1VUTVPVEkyTkRCQ1JqZzBSRU0zUmpBMFF6SkNRUSJ9.eyJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL0lzU3lzdGVtQWRtaW4iOnRydWUsImh0dHBzOi8vcmVwb3J0aW5nbW9kdWxlLmNvbS9jbGFpbXMvSXNTeXN0ZW1Vc2VyIjp0cnVlLCJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL3VzZXJuYW1lIjoicml6d2FudWxAc2ltcGxleGh1Yi5jb20iLCJpc3MiOiJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWQyZWIwYjY5NDk1MjYwZWJjNWQ2YTVmIiwiYXVkIjpbImh0dHA6Ly8zNS4yMDEuMC4zOS8iLCJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTgxNDE3MjI4LCJleHAiOjE1ODE0MjQ0MjgsImF6cCI6IjhWbmdrVmI1MWdra0Jadml0U29yZEJONGw4cklPd2V0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwifQ.k_VWMu_eOhPcn3uQJuYj2tPs0XVevxU7TUkwn4flprkLmYne9wFJC6dJqTGKQppF7FcLma0FUrrm5esG0_WV-_6mdEfugpSbpcQuNvALDw2fMSYN7xiXMq0GWcdyEzp54fwQfU4spgvllkFBsH7yivFfeHCp5zoYhdKATp71a9U4z-e4xDlfgV-qOibQnLBkupyNsQNMt5GnQuT8kr717EcQpU1ojR4MO8HA0FBNyyIEm4iuD8yydCyKK-Z-8SYtHJiH1ZR1IwrYyEDDsGWw92iFfeA0ynqyd64TT3TttDyLlJWxBfKyxOQPVHqHrZvEOuLZ3yLSYalpmma4vTjOdA';

export default {
  components: {
  },

  data () {
    return {
    }
  },
  created() {
    // let componentName = {'name': 'Plan & Reports'};
    // localStorage.setItem('ipdc_current_component_name', JSON.stringify(componentName));
  },
  methods:{
    createNew() {
      console.log('Create button clicked');
      /*unitPlanReportService
        .getAllPosts()
        .then(res => {
            console.log('working');
            console.log(res);
            console.log(res.data);
        })
        .catch(err =>{
            console.log('error : ');
            console.error(err);
        });*/
        console.log(this.$store.state.auth0);
        /*axios.create({
            baseURL: url,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ TOKEN
            }
        })
        // .get(ENDPOINT)
        .then(res => {
                console.log(res);
        });*/

        const HTTP = axios.create({
            baseURL: 'http://localhost:50009/reporting/v1/all/search?page=1&pageSize=10',
            headers: {
                Authorization: 'Bearer {eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJEUkNSVVkwUkVaQ1JUWTJSREl6TlRkQk1VUTVPVEkyTkRCQ1JqZzBSRU0zUmpBMFF6SkNRUSJ9.eyJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL0lzU3lzdGVtQWRtaW4iOnRydWUsImh0dHBzOi8vcmVwb3J0aW5nbW9kdWxlLmNvbS9jbGFpbXMvSXNTeXN0ZW1Vc2VyIjp0cnVlLCJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL3VzZXJuYW1lIjoicml6d2FudWxAc2ltcGxleGh1Yi5jb20iLCJpc3MiOiJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWQyZWIwYjY5NDk1MjYwZWJjNWQ2YTVmIiwiYXVkIjpbImh0dHA6Ly8zNS4yMDEuMC4zOS8iLCJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTgxNDE3MjI4LCJleHAiOjE1ODE0MjQ0MjgsImF6cCI6IjhWbmdrVmI1MWdra0Jadml0U29yZEJONGw4cklPd2V0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwifQ.k_VWMu_eOhPcn3uQJuYj2tPs0XVevxU7TUkwn4flprkLmYne9wFJC6dJqTGKQppF7FcLma0FUrrm5esG0_WV-_6mdEfugpSbpcQuNvALDw2fMSYN7xiXMq0GWcdyEzp54fwQfU4spgvllkFBsH7yivFfeHCp5zoYhdKATp71a9U4z-e4xDlfgV-qOibQnLBkupyNsQNMt5GnQuT8kr717EcQpU1ojR4MO8HA0FBNyyIEm4iuD8yydCyKK-Z-8SYtHJiH1ZR1IwrYyEDDsGWw92iFfeA0ynqyd64TT3TttDyLlJWxBfKyxOQPVHqHrZvEOuLZ3yLSYalpmma4vTjOdA}'
            }
        })

        HTTP.get()
            .then(response => {
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            })
    }
  },
  watch: {
  },
};
</script>

<style scoped>
.plan-and-reports {
    padding: 0 4px;
}
.planandreport-title {
    font-size: 26px;
    margin: 0px;
} 
/* .title {
    text-align: left;
    font-size: 26px;
    margin: 10px;
    position: absolute;
    top: 0;
    background: #EE6E73;
    color: #fff;
    min-width: 35%;
} */
.search {
    text-align: right;
}
.search ons-search-input {
    margin-right: 10px;
}
.search input.search-input.search-input--material {
    height: 28px !important;
    background-size: 13px;
    background-position: 8px center;
    padding: 0 8px 0 28px !important;
    width: auto !important;
}
.plan-and-report-row {
    margin: 0;
}
.card-radius.plan-card {
    margin: 8px 0;
    width: 100%;
}
.card-radius.plan-card .report-card {
    border-bottom: 1px solid gainsboro;
    padding-bottom: 5px;
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 16px;
    color: rgba(0, 0, 0, .54);
}
</style>