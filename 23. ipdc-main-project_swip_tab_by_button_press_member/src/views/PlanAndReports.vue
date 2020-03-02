<template>
  <v-ons-page>
    <div class="plan-and-reports">
      <!-- <h3>Plan &amp; Repors</h3> -->
        <div class="center search" style="text-align: right;">
            <div id="search-input" placeholder="Search">
                <input type="search" class="hh search-input search-input--material" placeholder="Search">
            </div>
        </div>
        
        <router-link to='/admin/create-plan'>
            <button class="waves-effect waves-light btn create-btn">Create Plan</button>
        </router-link>
        <!-- <div style="margin: 5px 0">
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
            <div style="margin: 5px 0">
                <button class="waves-effect waves-light btn" @click="createPlan">Create New Plan</button>
            </div>
        </div> -->

        <div class="report-unit-sec">
            <div class="row plan-and-report-row">
                <v-ons-card class="card-radius plan-card">
                    <div>
                        <!-- <router-link to='/planandreports/report_landing_page'> -->
                            <div class="content" v-for="item in unit_items" :key="item.id" @click="unitItemClick(item.id)">
                                <p class="report-card">{{ item.description }}</p>
                            </div>
                        <!-- </router-link> -->
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

import DataRemove from '../methods/RemoveLocalStorageForSavedData'
const dataRemove = new DataRemove()

export default {
  components: {
  },
  data () {
    return {
        appName: process.env.VUE_APP_TITLE,
        unit_items: [],
    }
  },
  created() {
      console.log(dataRemove.removedLocalStorageData())
      const accessToken = localStorage.getItem('access_token')
    //   console.log(localStorage.getItem('access_token'))
    //   console.log(localStorage.getItem('access_token'))
      localStorage.removeItem('reportingLanding_data')
      localStorage.removeItem('selected_report_details')
      if(localStorage.getItem('planandreports_passing_unit_id')) {
        localStorage.removeItem('planandreports_passing_unit_id');
      }
    
      unitPlanReportService
        .getSearchAllPage(accessToken)
        .then(res => {
            this.unit_items = res.data.items;
            console.log(res.data.items.length)
        })
        .catch(err =>{
            console.error(err);
        });
  },
  methods:{
    unitItemClick(id) {
        console.log(id);
        localStorage.setItem('planandreports_passing_unit_id', id);
        this.$router.push('/planandreports/report_landing_page');
    },
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
    display: block;
    margin-top: 20px;
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
.search input.search-input.search-input--material[data-v-35ceb82b] {
    background-color: rgba(3,3,3,.09);
    border-radius: 5px;
}
.search {
    display: inline-block;
    float: right;
    margin-top: 12px;
}
.waves-effect {
    margin-top: 10px;
}
input[type=search]:not(.browser-default):focus:not([readonly]){
    border-bottom: 1px solid #9e9e9e;
    -webkit-box-shadow: 0 1px 0 0 #9e9e9e;
    box-shadow: 0 1px 0 0 #9e9e9e;
}
.create-btn {
    background-color: #25a6d9 !important;
    width: 84px !important;
    height: 36px !important;
}
</style>