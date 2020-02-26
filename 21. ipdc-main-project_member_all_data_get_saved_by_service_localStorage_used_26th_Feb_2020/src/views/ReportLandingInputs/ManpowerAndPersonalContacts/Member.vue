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
        </v-subheader>
        <v-row class="form-row">
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="lastPeriod" v-model="lastPeriod" label="Last Period" placeholder="Last Period" single-line :class="[errors.lastPeriod ? 'invalid' : 'validate']"/>
            <!-- <span class="helper-text" data-error="Title must not be empty"></span> -->
          </v-col>
          <v-col cols="12" class="col-field">
            <input name="target" v-model="target" label="Target" placeholder="Upgrade Target" single-line :class="[errors.target ? 'invalid' : 'validate']"/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="increased" v-model="increased" label="Increased" placeholder="Increased" single-line :class="[errors.increased ? 'invalid' : 'validate']"/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="decreased" v-model="decreased" label="Decreased" placeholder="Decreased" single-line :class="[errors.decreased ? 'invalid' : 'validate']"/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="thisPeriod" v-model="thisPeriod" label="" placeholder="This Period" single-line :class="[errors.thisPeriod ? 'invalid' : 'validate']"/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="memberContact" v-model="memberContact" label="Member Contact" placeholder="Personal Contact" single-line :class="[errors.memberContact ? 'invalid' : 'validate']"/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="comment" v-model="comment" label="Comment" placeholder="Comment" single-line :class="[errors.comment ? 'invalid' : 'validate']"/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'PLAN'">
            <input name="nameAndContactNumber" v-model="nameAndContactNumber" label="" placeholder="Name and contact" single-line :class="[errors.nameAndContactNumber ? 'invalid' : 'validate']"/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'PLAN'">
            <input name="action" v-model="action" label="" placeholder="Action" single-line :class="[errors.action ? 'invalid' : 'validate']"/>
          </v-col>
          <button type="submit" large color="blue white--text" class="member save-btn">Save</button>
        </v-row>
      </form>
      <Navbar2/>
    </div>
  </v-container>
</template>

<script>
import UnitPlanReportService from '../../../services/UnitPlanReportService'
const unitPlanReportService = new UnitPlanReportService();

import Navbar2 from '../../../components/NavBar2'

export default {
  name: 'MemberForm',
  components: {
    Navbar2,
  },
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
      errors: {}
    }
  },
  methods: {
    onSubmit() {
      if(this.planOrReportTab === 'PLAN') {
        console.log('Plan Active')
        // if (!this.validFormPlan()) {
        //   this.loading = false;
        //   return;
        // }
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
        /*const pp = JSON.stringify(post)
        console.log(pp)
        console.log(JSON.parse(pp))
        console.log(JSON.parse(pp).memberMemberPlanData)*/
        localStorage.setItem('manpowerAndPersonalContacts_memberMemberPlanData', JSON.stringify(post))
        // localStorage.setItem('member_plan_data', JSON.stringify(post))
        /*unitPlanReportService
          .updatePlan(post.memberMemberPlanData)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
          .catch(err => {
            console.error(err);
          });*/
      } if(this.planOrReportTab === 'REPORT') {
        console.log('Report Active')
        // if (!this.validFormReport()) {
        //   this.loading = false;
        //   return;
        // }
        const post = {
          memberMemberData: {
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
        localStorage.setItem('manpowerAndPersonalContacts_memberMemberData', JSON.stringify(post))
      }
    },
    backButton() {
      console.log('working')
      this.$router.push('/planandreports/report_landing_page')
    },
    addition(a, b) {
      return a+b
    },
    /*validFormPlan() {
      this.errors = {};
      if (this.target.trim() === "") {
        this.errors.target = "Target";
      }
      if (this.nameAndContactNumber.trim() === "") {
        this.errors.nameAndContactNumber = "Name and contact number";
      }
      if (this.action.trim() === "") {
        this.errors.action = "Action";
      }
      if (Object.keys(this.errors).length > 0) {
        return false;
      } else return true;
    },
    validFormReport() {
      this.errors = {};
      if (this.lastPeriod.trim() === "") {
        this.errors.lastPeriod = "Last period";
      }
      if (this.target.trim() === "") {
        this.errors.target = "Target";
      }
      if (this.increased.trim() === "") {
        this.errors.increased = "Increase";
      }
      if (this.decreased.trim() === "") {
        this.errors.decreased = "Decrease";
      }
      if (this.thisPeriod.trim() === "") {
        this.errors.thisPeriod = "This period";
      }
      if (this.memberContact.trim() === "") {
        this.errors.memberContact = "Personal contact";
      }
      if (this.comment.trim() === "") {
        this.errors.comment = "Comment";
      }
      if (Object.keys(this.errors).length > 0) {
        return false;
      } else return true;
    }*/
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
  border-bottom: 1px solid #787878;
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