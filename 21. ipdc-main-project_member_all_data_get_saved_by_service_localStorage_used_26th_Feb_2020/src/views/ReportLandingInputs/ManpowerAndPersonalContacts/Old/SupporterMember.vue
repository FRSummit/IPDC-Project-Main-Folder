<template>
  <v-container class="head-container">
    <div class="content-div">
      <form class="form-cls" @submit.prevent="onSubmit">
        <v-subheader class="content-header">
          <div class="left" @click="backButton">
              <ons-back-button>Reports</ons-back-button>
          </div>
          Supporter Member
          <v-spacer />
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
          <button type="submit" large color="blue white--text" class="save-btn">Save</button>
          <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' style="width: 100%;">
            <v-col cols="12" class="col-field" style="margin: 20px auto; text-align: center;">
              <v-text name="comment" v-model="comment" label="Comment" placeholder="Comment" single-line 
                      style="border: 2px solid #B2BEB5; padding: 4px 10px; border-radius: 6px; background-color: #B2BEB5; color: #ffffff;">
                Go to >> Regular &amp; Special Meetings/Programs
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
          supporterMemberPlanData: {
            target: this.target,
            nameAndContactNumber: this.nameAndContactNumber,
            action: this.action,
          }
        };
        console.log(post)
      } if(this.planOrReportTab === 'REPORT') {
        console.log('Report Active')
        const post = {
          supporterMemberPlanData: {
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
    // Getting the activated tab name
    let tabActivationForPlanOrReport = JSON.parse(localStorage.getItem('reportingLanding_tab_activation')).Tab
    console.log(tabActivationForPlanOrReport)
    if(tabActivationForPlanOrReport === 'PLAN') {
      this.planOrReportTab = 'PLAN'
      console.log('Plan Active')
      let planData = JSON.parse(localStorage.getItem('selected_plan_details'))
      this.nameAndContactNumber = planData.supporterMemberPlanData.nameAndContactNumber
      this.action = planData.supporterMemberPlanData.action
      this.target = planData.supporterMemberPlanData.upgradeTarget
    } if(tabActivationForPlanOrReport === 'REPORT') {
      this.planOrReportTab = 'REPORT'
      console.log('Report Active')
      let reportData = JSON.parse(localStorage.getItem('selected_report_details'))
      this.nameAndContactNumber = reportData.supporterMemberData.nameAndContactNumber
      this.action = reportData.supporterMemberData.action
      this.lastPeriod = reportData.supporterMemberData.lastPeriod
      this.upgradeTarget = reportData.supporterMemberData.upgradeTarget
      this.thisPeriod = reportData.supporterMemberData.thisPeriod
      this.increased = reportData.supporterMemberData.increased
      this.decreased = reportData.supporterMemberData.decreased
      this.comment = reportData.supporterMemberData.comment
      this.memberContact = reportData.supporterMemberData.personalContact
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