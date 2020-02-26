<template>
  <v-container class="head-container">
    <div class="content-div">
      <form class="form-cls" @submit.prevent="onSubmit">
        <v-subheader class="content-header">
          <div class="left" @click="backButton">
              <ons-back-button>Reports</ons-back-button>
          </div>
          Other Distribution
        </v-subheader>
        <v-row class="form-row">
          <v-col cols="12" class="col-field">
            <input name="target" v-model="target" label="Target" placeholder="Target" single-line/>
          </v-col>
          <v-col cols="12" class="col-field">
            <input name="dateAndAction" v-model="dateAndAction" label="Date And Action" placeholder="Date And Action" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="actual" v-model="actual" label="Actual" placeholder="Actual" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="comment" v-model="comment" label="Comment" placeholder="Comment" single-line/>
          </v-col>
          <button type="submit" large color="blue white--text" class="member save-btn">Save</button>
          <router-link to='/planandreports/report_landing_page/finance' style="width: 100%;">
            <v-col cols="12" class="col-field" style="margin: 20px auto; text-align: center;">
              <v-text name="comment" v-model="comment" label="Comment" placeholder="Comment" single-line 
                      style="border: 2px solid #B2BEB5; padding: 4px 10px; border-radius: 6px; background-color: #B2BEB5; color: #ffffff;">
                Go to >> Finance
              </v-text>
            </v-col>
          </router-link>
        </v-row>
      </form>
      <Navbar2/>
    </div>
  </v-container>
</template>

<script>
import Navbar2 from '../../../components/NavBar2'

export default {
  name: 'MemberForm',
  components: {
    Navbar2,
  },
  props: {

  },
  data() {
    return {
      target: null,
      dateAndAction: null,
      actual: null,
      comment: null,
      planOrReportTab: null,
    }
  },
  methods: {
    onSubmit() {
      if(this.planOrReportTab === 'PLAN') {
        console.log('Plan Active')
        const post = {
          otherDistributionMaterialPlanData: {
            target: this.target,
            dateAndAction: this.dateAndAction
          },
          // organizationId
          // planId
        };
        console.log(post)
      } if(this.planOrReportTab === 'REPORT') {
        console.log('Report Active')
        const post = {
          otherDistributionMaterialData: {
            target: this.target,
            dateAndAction: this.dateAndAction,
            actual: this.actual,
            comment: this.comment
          }
        };
        console.log(post)
      }
    },
    backButton() {
      console.log('working')
      this.$router.push('/planandreports/report_landing_page')
    }
  },
  created() {
    let tabActivationForPlanOrReport = JSON.parse(localStorage.getItem('reportingLanding_tab_activation')).Tab
    console.log(tabActivationForPlanOrReport)
    if(tabActivationForPlanOrReport === 'PLAN') {
      this.planOrReportTab = 'PLAN'
      let planData = JSON.parse(localStorage.getItem('selected_plan_details'))
      this.target = planData.otherDistributionMaterialPlanData.target
      this.dateAndAction = planData.otherDistributionMaterialPlanData.dateAndAction
    } if(tabActivationForPlanOrReport === 'REPORT') {
      this.planOrReportTab = 'REPORT'
      let reportData = JSON.parse(localStorage.getItem('selected_report_details'))
      this.target = reportData.otherDistributionMaterialData.target
      this.dateAndAction = reportData.otherDistributionMaterialData.dateAndAction
      this.actual = reportData.otherDistributionMaterialData.actual
      this.comment = reportData.otherDistributionMaterialData.comment
    }
  }
}
</script>


<style scoped>
.head-container {
  background-color: #efeff4 !important;
  padding: 0;
}

.content-div {
  padding: 0;
}

.content-header {
  font-size: 18px;
  color: #8a8484;
}
.v-subheader {
  padding: 0;
}

.v-subheader {
  padding: 0;
}

.form-cls{
  background-color: #ffffff;
  padding: 0px;
}

.form-row{
  /* margin-top: -7px; */
  margin: 0;
}

.col-field{
  padding: 0px 12px;
}

.v-text-field{
  padding: 0;
  margin-bottom: -20px;
}

.save-btn{
  background-color: #b2beb5;
  color: #fff;
  border-radius: 8px;
  width: 140px;
  height: 35px;
  text-align: center;
  display: block;
  margin-bottom: 12px;
  padding: 0 !important;
  margin: 12px auto 8px;
}

.page-title{
  padding-left: 12px;
}
/* Custom css */
input {
    margin: 0;
}
input::placeholder {
  color: #9e9e9e;
  /* opacity: 1; */
}
</style>