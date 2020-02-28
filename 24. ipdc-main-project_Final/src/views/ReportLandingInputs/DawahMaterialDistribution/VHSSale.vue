<template>
  <v-container class="head-container">
    <div class="content-div">
      <form class="form-cls" @submit.prevent="onSubmit">
        <v-subheader class="content-header">
          <div class="left" @click="backButton">
              <ons-back-button>Reports</ons-back-button>
          </div>
          VHS/DVD/VCD/CD/Audio Sale
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
        </v-row>
      </form>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'MemberForm',
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
          vhsSaleMaterialPlanData: {
            target: this.target,
            dateAndAction: this.dateAndAction,
          },
        };
        console.log(post)
        localStorage.setItem('dawahMaterialDistribution_vhsSaleMaterialPlanData', JSON.stringify(post))
      } if(this.planOrReportTab === 'REPORT') {
        console.log('Report Active')
        const post = {
          vhsSaleMaterialData: {
            target: this.target,
            dateAndAction: this.dateAndAction,
            actual: this.actual,
            comment: this.comment,
          }
        };
        console.log(post)
        localStorage.setItem('dawahMaterialDistribution_vhsSaleMaterialData', JSON.stringify(post))
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
      this.target = planData.vhsSaleMaterialPlanData.target
      this.dateAndAction = planData.vhsSaleMaterialPlanData.dateAndAction
    } if(tabActivationForPlanOrReport === 'REPORT') {
      this.planOrReportTab = 'REPORT'
      console.log('Report Active')
      let reportData = JSON.parse(localStorage.getItem('selected_report_details'))
      this.target = reportData.vhsSaleMaterialData.target
      this.dateAndAction = reportData.vhsSaleMaterialData.dateAndAction
      this.actual = reportData.vhsSaleMaterialData.actual
      this.comment = reportData.vhsSaleMaterialData.comment
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