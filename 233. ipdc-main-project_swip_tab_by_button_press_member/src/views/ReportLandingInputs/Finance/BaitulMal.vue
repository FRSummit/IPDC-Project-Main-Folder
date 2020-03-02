<template>
  <v-container class="head-container">
    <div class="content-div">
      <form class="form-cls" @submit.prevent="onSubmit">
        <v-subheader class="content-header">
          <div class="left" @click="backButton">
              <ons-back-button>Reports</ons-back-button>
          </div>
          Baitul-Mal
        </v-subheader>
        <v-row class="form-row">
          <v-col cols="12" class="col-field">
            <input name="workerPromiseIncreaseTarget" v-model="workerPromiseIncreaseTarget" label="Worker Promise Increase Target" placeholder="Worker Promise Increase Target" single-line/>
          </v-col>
          <v-col cols="12" class="col-field">
            <input name="action" v-model="action" label="Action" placeholder="Action" single-line/>
          </v-col>
          <v-col cols="12" class="col-field">
            <input name="otherSourceIncreaseTarget" v-model="otherSourceIncreaseTarget" label="Other Source Increase Target" placeholder="Other Source Increase Target" single-line/>
          </v-col>
          <v-col cols="12" class="col-field">
            <input name="otherSourceAction" v-model="otherSourceAction" label="Other Source Action" placeholder="Other Source Action" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="totalIncreaseTarget" v-model="totalIncreaseTarget" label="Total Increase Target" placeholder="Total Increase Target" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="workerPromiseLastPeriod" v-model="workerPromiseLastPeriod" label="Worker Promise Last Period" placeholder="Worker Promise Last Period" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="workerPromiseThisPeriod" v-model="workerPromiseThisPeriod" label="Worker Promise This Period" placeholder="Worker Promise This Period" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="lastPeriod" v-model="lastPeriod" label="Last Period" placeholder="Last Period" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="collection" v-model="collection" label="Collection" placeholder="Collection" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="expense" v-model="expense" label="Expense" placeholder="Expense" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="nisabPaidToCentral" v-model="nisabPaidToCentral" label="Nisab Paid To Central" placeholder="Nisab Paid To Central" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="balance" v-model="balance" label="Balance" placeholder="Balance" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="workerPromiseIncreased" v-model="workerPromiseIncreased" label="Worker Promise Increased" placeholder="Worker Promise Increased" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="workerPromiseDecreased" v-model="workerPromiseDecreased" label="Worker Promise Decreased" placeholder="Worker Promise Decreased" single-line/>
          </v-col>
          <v-col cols="12" class="col-field" v-if="planOrReportTab === 'REPORT'">
            <input name="comment" v-model="comment" label="Comment" placeholder="Comment" single-line/>
          </v-col>
          <button type="submit" large color="blue white--text" class="member save-btn">Save</button>
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
    msg: String,
  },
  data() {
    return {
      workerPromiseIncreaseTarget: null,
      action: null,
      otherSourceIncreaseTarget: null,
      otherSourceAction: null,
      totalIncreaseTarget: null,
      workerPromiseLastPeriod: null,
      workerPromiseThisPeriod: null,
      lastPeriod: null,
      collection: null,
      expense: null,
      nisabPaidToCentral: null,
      balance: null,
      workerPromiseIncreased: null,
      workerPromiseDecreased: null,
      comment: null,
      planOrReportTab: null,
    }
  },
  methods: {
    onSubmit() {
      if(this.planOrReportTab === 'PLAN') {
        console.log('Plan Active')
        const post = {
          baitulMalFinancePlanData: {
            workerPromiseIncreaseTarget: this.workerPromiseIncreaseTarget,
            action: this.action,
            otherSourceIncreaseTarget: this.otherSourceIncreaseTarget,
            otherSourceAction: this.otherSourceAction,
          }
        };
        console.log(post)
        localStorage.setItem('finance_baitulMalFinancePlanData', JSON.stringify(post))
      } if(this.planOrReportTab === 'REPORT') {
        console.log('Report Active')
        const post = {
          baitulMalFinanceData: {
            workerPromiseIncreaseTarget: this.workerPromiseIncreaseTarget,
            action: this.action,
            otherSourceIncreaseTarget: this.otherSourceIncreaseTarget,
            otherSourceAction: this.otherSourceAction,
            totalIncreaseTarget: this.totalIncreaseTarget,
            workerPromiseLastPeriod: this.workerPromiseLastPeriod,
            workerPromiseThisPeriod: this.workerPromiseThisPeriod,
            lastPeriod: this.lastPeriod,
            collection: this.collection,
            expense: this.expense,
            nisabPaidToCentral: this.nisabPaidToCentral,
            balance: this.balance,
            workerPromiseIncreased: this.workerPromiseIncreased,
            workerPromiseDecreased: this.workerPromiseDecreased,
            comment: this.comment,
            planOrReportTab: this.planOrReportTab
          }
        };
        console.log(post)
        localStorage.setItem('finance_baitulMalFinanceData', JSON.stringify(post))
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
      this.workerPromiseIncreaseTarget = planData.baitulMalFinancePlanData.workerPromiseIncreaseTarget.amount,
      this.action = planData.baitulMalFinancePlanData.action,
      this.otherSourceIncreaseTarget = planData.baitulMalFinancePlanData.otherSourceIncreaseTarget.amount,
      this.otherSourceAction = planData.baitulMalFinancePlanData.otherSourceAction
    } if(tabActivationForPlanOrReport === 'REPORT') {
      this.planOrReportTab = 'REPORT'
      console.log('Report Active')
      let reportData = JSON.parse(localStorage.getItem('selected_report_details'))
      this.workerPromiseIncreaseTarget = reportData.baitulMalFinanceData.workerPromiseIncreaseTarget.amount,
      this.action = reportData.baitulMalFinanceData.action,
      this.otherSourceIncreaseTarget = reportData.baitulMalFinanceData.otherSourceIncreaseTarget.amount,
      this.otherSourceAction = reportData.baitulMalFinanceData.otherSourceAction,//
      this.totalIncreaseTarget = reportData.baitulMalFinanceData.totalIncreaseTarget.amount,//
      this.workerPromiseLastPeriod = reportData.baitulMalFinanceData.workerPromiseLastPeriod.amount,//
      this.workerPromiseThisPeriod = reportData.baitulMalFinanceData.workerPromiseThisPeriod.amount,//
      this.lastPeriod = reportData.baitulMalFinanceData.lastPeriod.amount,//
      this.collection = reportData.baitulMalFinanceData.collection.amount,//
      this.expense = reportData.baitulMalFinanceData.expense.amount,//
      this.nisabPaidToCentral = reportData.baitulMalFinanceData.nisabPaidToCentral.amount,//
      this.balance = reportData.baitulMalFinanceData.balance.amount,//
      this.workerPromiseIncreased = reportData.baitulMalFinanceData.workerPromiseIncreased.amount,//
      this.workerPromiseDecreased = reportData.baitulMalFinanceData.workerPromiseDecreased.amount,//
      this.comment = reportData.baitulMalFinanceData.comment
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