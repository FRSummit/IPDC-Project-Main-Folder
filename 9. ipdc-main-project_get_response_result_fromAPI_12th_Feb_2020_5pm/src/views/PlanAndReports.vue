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
        <div style="margin: 5px 0">
            <div style="margin: 5px 0">
                <button class="waves-effect waves-light btn" @click="searchAll">Search All</button>
            </div>
            <div style="margin: 5px 0">
                <button class="waves-effect waves-light btn" @click="searchOrganization">Search Organization</button>
            </div>
            <div style="margin: 5px 0">
                <button class="waves-effect waves-light btn" @click="organization">Organization</button>
            </div>
            <div style="margin: 5px 0">
                <button class="waves-effect waves-light btn" @click="organizationUser">Organization User</button>
            </div>
            <div style="margin: 5px 0">
                <button class="waves-effect waves-light btn" @click="getPlanById">Get Plan By Id</button>
            </div>
        </div>

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

export default {
  components: {
  },

  data () {
    return {
        appName: process.env.VUE_APP_TITLE
    }
  },
  created() {
    // let componentName = {'name': 'Plan & Reports'};
    // localStorage.setItem('ipdc_current_component_name', JSON.stringify(componentName));
  },
  methods:{
    createNew() {/*------------------------------ Create New Default button ------------------------------*/
      console.log('Create button clicked');
      unitPlanReportService
        .getAllPosts()
        .then(res => {
            console.log(res.data);
        })
        .catch(err =>{
            console.error(err);
        });
    },
    searchAll() {/*------------------------------ Search All button ------------------------------*/
      console.log('Search All');
      unitPlanReportService
        .getSearchAllPage()
        .then(res => {
            console.log(res.data);
        })
        .catch(err =>{
            console.error(err);
        });
    },
    searchOrganization() {/*------------------------------ Search Organization button ------------------------------*/
      console.log('Search Organization');
      unitPlanReportService
        .getSearchOrganization()
        .then(res => {
            console.log(res.data);
        })
        .catch(err =>{
            console.error(err);
        });
    },
    organization() {/*------------------------------ Get Organization button ------------------------------*/
      console.log('Get Organization');
      unitPlanReportService
        .getOrganization()
        .then(res => {
            console.log(res.data);
        })
        .catch(err =>{
            console.error(err);
        });
    },
    organizationUser() {/*------------------------------ Get Organization User button ------------------------------*/
      console.log('Get Organization User');
      unitPlanReportService
        .getOrganizationUser()
        .then(res => {
            console.log(res.data);
        })
        .catch(err =>{
            console.error(err);
        });
    },
    getPlanById() {/*------------------------------ Get Plan by Plan Id ------------------------------*/
      console.log('Get Plan By id');
      unitPlanReportService
        .getPlanById()
        .then(res => {
            console.log(res.data);
        })
        .catch(err =>{
            console.error(err);
        });
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