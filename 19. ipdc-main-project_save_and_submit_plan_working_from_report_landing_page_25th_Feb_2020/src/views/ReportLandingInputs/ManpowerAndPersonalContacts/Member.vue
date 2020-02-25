<template>
  <v-container class="head-container">
    <div class="content-div">
      <form class="form-cls" @submit.prevent="onSubmit">
        <v-subheader class="content-header">
          <div class="left" @click="backButton">
            <!-- <router-link to='/planandreports/report_landing_page'> -->
              <ons-back-button>Reports</ons-back-button>
            <!-- </router-link> -->
          </div>
          Member
          <v-spacer />
          <h3 style="margin: 0 20px; color: #00c706;">{{ planOrReportTab }}</h3>
        </v-subheader>
        <v-row class="form-row">
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="lastPeriod" v-model="lastPeriod" label="Last Period" placeholder="Last Period" single-line/>
          </v-col>
          <v-col cols="12" class="col-field">
            <input name="target" v-model="target" label="Target" placeholder="Upgrade Target" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="increased" v-model="increased" label="Increased" placeholder="Increased" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="decreased" v-model="decreased" label="Decreased" placeholder="Decreased" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="thisPeriod" v-model="thisPeriod" label="" placeholder="This Period" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="memberContact" v-model="memberContact" label="Member Contact" placeholder="Personal Contact" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="comment" v-model="comment" label="Comment" placeholder="Comment" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'PLAN'">
            <input name="nameAndContactNumber" v-model="nameAndContactNumber" label="" placeholder="Name and contact" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'PLAN'">
            <input name="action" v-model="action" label="" placeholder="Action" single-line/>
          </v-col>
          <button type="submit" large color="blue white--text" class="member save-btn">Save</button>
        </v-row>
      </form>
    </div>
  </v-container>
</template>

<script>
import UnitPlanReportService from '../../../services/UnitPlanReportService'
const unitPlanReportService = new UnitPlanReportService();

export default {
  name: 'MemberForm',
  props: {
    msg: String,
  },
  data() {
    return {
      lastPeriod: null,
      target: null,
      // actual: null,
      increased: null,
      decreased: null,
      thisPeriod: null,
      memberContact: null,
      comment: null,
      nameAndContactNumber: null,
      action: null,
      testase: 'FRSummit',
      planOrReportTab: null,
    }
  },
  methods: {
    onSubmit() {
      if(this.planOrReportTab === 'PLAN') {
        console.log('Plan Active')
        const post = {
          memberMemberPlanData: {
            target: this.target,
            nameAndContactNumber: this.nameAndContactNumber,
            action: this.action,
          },
          // organizationId
          // planId
        };
        console.log(post)
      } if(this.planOrReportTab === 'REPORT') {
        console.log('Report Active')
        const post = {
          memberMemberPlanData: {
            lastPeriod: this.lastPeriod,
            target: this.target,
            increased: this.increased,
            decreased: this.decreased,
            thisPeriod: this.thisPeriod,
            memberContact: this.memberContact,
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
      console.log('Plan Active')
      let planData = JSON.parse(localStorage.getItem('selected_plan_details'))
      this.nameAndContactNumber = planData.memberMemberPlanData.nameAndContactNumber
      this.action = planData.memberMemberPlanData.action
      this.target = planData.memberMemberPlanData.upgradeTarget
    } if(tabActivationForPlanOrReport === 'REPORT') {
      this.planOrReportTab = 'REPORT'
      console.log('Report Active')
      let reportData = JSON.parse(localStorage.getItem('selected_report_details'))
      this.nameAndContactNumber = reportData.memberMemberData.nameAndContactNumber
      this.action = reportData.memberMemberData.action
      this.lastPeriod = reportData.memberMemberData.lastPeriod
      this.upgradeTarget = reportData.memberMemberData.upgradeTarget
      this.thisPeriod = reportData.memberMemberData.thisPeriod
      this.increased = reportData.memberMemberData.increased
      this.decreased = reportData.memberMemberData.decreased
      this.comment = reportData.memberMemberData.comment
      this.memberContact = reportData.memberMemberData.personalContact
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
/* Custom css */
input {
    margin: 0;
}
input::placeholder {
  color: #9e9e9e;
  /* opacity: 1; */
}
</style>