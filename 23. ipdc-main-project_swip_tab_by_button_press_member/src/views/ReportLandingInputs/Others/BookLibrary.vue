<template>
  <v-container class="head-container">
    <div class="content-div">
      <form class="form-cls" @submit.prevent="onSubmit">
        <v-subheader class="content-header">
          <div class="left" @click="backButton">
              <ons-back-button>Reports</ons-back-button>
          </div>
          Book Library
        </v-subheader>
        <v-row class="form-row">
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="lastPeriod" v-model="lastPeriod" label="Last Period" placeholder="Last Period" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="thisPeriod" v-model="thisPeriod" label="This Period" placeholder="This Period" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="increased" v-model="increased" label="Increased" placeholder="Increased" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="decreased" v-model="decreased" label="Decreased" placeholder="Decreased" single-line/>
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
      lastPeriod: null,
      thisPeriod: null,
      increased: null,
      decreased: null,
      comment: null,
      planOrReportTab: null,
    }
  },
  methods: {
    onSubmit() {
      if(this.planOrReportTab === 'PLAN') {
        console.log('Plan Active')
        const post = {
          bookLibraryStockPlanData: { },
        };
        console.log(post)
        localStorage.setItem('others_bookLibraryStockPlanData', JSON.stringify(post))
      } if(this.planOrReportTab === 'REPORT') {
        console.log('Report Active')
        const post = {
          bookLibraryStockData: {
            lastPeriod: this.lastPeriod,
            thisPeriod: this.thisPeriod,
            increased: this.increased,
            decreased: this.decreased,
            comment: this.comment,
          }
        };
        console.log(post)
        localStorage.setItem('others_bookLibraryStockData', JSON.stringify(post))
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
    } if(tabActivationForPlanOrReport === 'REPORT') {
      this.planOrReportTab = 'REPORT'
      console.log('Report Active')
      let reportData = JSON.parse(localStorage.getItem('selected_report_details'))
      this.lastPeriod = reportData.bookLibraryStockData.lastPeriod
      this.thisPeriod = reportData.bookLibraryStockData.thisPeriod
      this.increased = reportData.bookLibraryStockData.increased
      this.decreased = reportData.bookLibraryStockData.decreased
      this.comment = reportData.bookLibraryStockData.comment
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