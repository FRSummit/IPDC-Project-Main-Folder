<template>
  <v-ons-page class="report-landing-page">
    <v-container class="head-container">
        <!-- <div class="submit-btn">
            <v-row class="submit-btn-sec">
                <v-col class="col-sm-4 btn-col">
                    <v-btn center large class="blue white--text right">Submit</v-btn>
                </v-col>
            </v-row>
        </div> -->

        <!-- <hr /> -->

        <!-- <div class="report-section">
            <v-row class="v-row">
                <v-col class="col-sm-3 report-col parent-col" style="padding: 0;">
                    <p class="report-txt">Reports:</p>
                </v-col>
                <v-col class="col-sm-9 parent-col" style="padding: 0;">
                    <p class="report-txt" v-if="!report">{{ selectedItem[0] }}</p>
                    <p class="report-txt" v-if="report">{{ report }}</p>
                </v-col>
            </v-row>

            <v-row class="v-row">
                <v-col class="col-sm-3 report-col parent-col" style="padding: 0;">
                    <p class="report-txt">Organization:</p>
                </v-col>
                <v-col class="col-sm-9 parent-col" style="padding: 0;">
                    <p class="report-txt" v-if="!organization">{{ selectedItem[1] }}</p>
                    <p class="report-txt" v-if="organization">{{ organization }}</p>
                </v-col>
            </v-row>

            <v-row class="v-row">
                <v-col class="col-sm-3 report-col parent-col" style="padding: 0;">
                    <p class="report-txt">Status:</p>
                </v-col>
                <v-col class="col-sm-9 parent-col" style="padding: 0;">
                    <p class="report-txt" v-if="!status">{{ selectedItem[2] }}</p>
                    <p class="report-txt" v-if="status">{{ status }}</p>
                </v-col>
            </v-row>
        </div> -->

        <!-- <hr /> -->
 <v-card color="basil">

    <v-tabs v-model="tab" background-color="transparent" grow>
      <v-tab class="my_tab"  v-for="item in items" :key="item">{{ item }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card color="basil" flat>
          <v-card v-if="item === 'Plan'"><ReportLandingPlan/></v-card>
          <v-card v-if="item === 'Report'"><ReportLandingReport/></v-card>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>

        <hr />

        <!-- <div class="content-div">
            <div>
                <v-subheader class="content-header">Manpower &amp; Personal Contacts</v-subheader>
                <v-card class="mx-auto" max-width="500">
                <v-list class="list-box">
                    <v-list-item-group>
                    <router-link to='/planandreports/report_landing_page/manpower-and-personal-contacts' class="router-link">
                        <v-list-item class="list-item-content">
                            <v-list-item-content>
                            <v-list-item-title class="content-item-title">Member</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>

                    <router-link to='/planandreports/report_landing_page/manpower-and-personal-contacts' class="router-link">
                        <v-list-item class="list-item-content">
                            <v-list-item-content>
                            <v-list-item-title class="content-item-title">Associate Member</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>

                    <router-link to='/planandreports/report_landing_page/manpower-and-personal-contacts' class="router-link">
                        <v-list-item class="list-item-content">
                            <v-list-item-content>
                            <v-list-item-title class="content-item-title">Preliminary Member</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>

                    <router-link to='/planandreports/report_landing_page/manpower-and-personal-contacts' class="router-link">
                        <v-list-item class="list-item-content">
                            <v-list-item-content>
                            <v-list-item-title class="content-item-title">Supporter Member</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </router-link>
                    </v-list-item-group>
                </v-list>
                </v-card>
            </div>

            <div>
                <v-subheader class="content-header">Regular &amp; Special Meetings/Programs</v-subheader>
                <v-card class="mx-auto" max-width="500">
                    <v-list class="list-box">
                        <v-list-item-group>
                            <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                                <v-list-item class="list-item-content">
                                    <v-list-item-content>
                                    <v-list-item-title class="content-item-title">Worker Meetings</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </router-link>

                            <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                                <v-list-item class="list-item-content">
                                    <v-list-item-content>
                                    <v-list-item-title class="content-item-title">CMS Meetings</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </router-link>

                            <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                                <v-list-item class="list-item-content">
                                    <v-list-item-content>
                                    <v-list-item-title class="content-item-title">SM Meetings</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </router-link>

                            <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                                <v-list-item class="list-item-content">
                                    <v-list-item-content>
                                    <v-list-item-title class="content-item-title">Member Meetings</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </router-link>

                            <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                                <v-list-item class="list-item-content">
                                    <v-list-item-content>
                                    <v-list-item-title class="content-item-title">Dawah Meetings</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </router-link>

                            <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                                <v-list-item class="list-item-content">
                                    <v-list-item-content>
                                    <v-list-item-title class="content-item-title">State Outing</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </router-link>

                            <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                                <v-list-item class="list-item-content">
                                    <v-list-item-content>
                                    <v-list-item-title class="content-item-title">Iftar Gatherings</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </router-link>

                            <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                                <v-list-item class="list-item-content">
                                    <v-list-item-content>
                                    <v-list-item-title class="content-item-title">Learning Meetings</v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </router-link>
                        </v-list-item-group>
                    </v-list>
                </v-card>
            </div>

            <div>
                <v-subheader class="content-header">Teaching &amp; Learning Program</v-subheader>
                <v-card class="mx-auto" max-width="500">
                <v-list class="list-box">
                    <v-list-item-group>
                        <router-link to='/planandreports/report_landing_page/teaching-and-learning-program' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Group Study/Discussion</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/teaching-and-learning-program' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Study Circle(AM)</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/teaching-and-learning-program' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Study Circle</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/teaching-and-learning-program' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Practice Dars/Speech</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/teaching-and-learning-program' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Quran Study</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/teaching-and-learning-program' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Hadith Study</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/teaching-and-learning-program' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Quran Class</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>
                    </v-list-item-group>
                </v-list>
                </v-card>
            </div>

            <div>
                <v-subheader class="content-header">Dawah Material Distribution</v-subheader>
                <v-card class="mx-auto" max-width="500">
                <v-list class="list-box">
                    <v-list-item-group>
                        <router-link to='/planandreports/report_landing_page/dawah-material-distribution' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Book Sale</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/dawah-material-distribution' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Book Distribution</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/dawah-material-distribution' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Email Distribution</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/dawah-material-distribution' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">IPDC Leaflet Distribution</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/dawah-material-distribution' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Other Sale</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/dawah-material-distribution' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Other Distribution</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>
                    </v-list-item-group>
                </v-list>
                </v-card>
            </div>

            <div>
                <v-subheader class="content-header">Finance</v-subheader>
                <v-card class="mx-auto" max-width="500">
                <v-list class="list-box">
                    <v-list-item-group>
                        <router-link to='/planandreports/report_landing_page/finance' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Baitul-Mal</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/finance' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Masjid Project</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/finance' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Masjid Table Bank</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>
                    </v-list-item-group>
                </v-list>
                </v-card>
            </div>

            <div>
                <v-subheader class="content-header">Social Welfare</v-subheader>
                <v-card class="mx-auto" max-width="500">
                <v-list class="list-box">
                    <v-list-item-group>
                        <router-link to='/planandreports/report_landing_page/social-welfare' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Qard-e-Hasana</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/social-welfare' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Patient Visit</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/social-welfare' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Social Visit</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/social-welfare' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Transport</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/social-welfare' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Shifting</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/social-welfare' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Shopping</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/social-welfare' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Food Distribution</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/social-welfare' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Clean Up Australia</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/social-welfare' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Other</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>
                    </v-list-item-group>
                </v-list>
                </v-card>
            </div>
        </div> -->
    </v-container>
  </v-ons-page>
</template>

<script>
import RLP_Method from '../methods/ReportLanding'
const rlpMethods = new RLP_Method()
import UnitPlanReportService from '../services/UnitPlanReportService'
const unitPlanReportService = new UnitPlanReportService();

import ReportLandingPlan from './ReportLandingPage-Plan'
import ReportLandingReport from './ReportLandingPage-Report'

export default {
  components: {
      ReportLandingPlan,
      ReportLandingReport
  },
  data() {
      return {
            selectedItem: '',
            report: null,
            organization: null,
            status: null,
            tab: null,
            items: [
            'Plan', 'Report',
            ],
            text: 'Lorem ipsum dolor'
      }
  },
  created() {
        let tabActivation = {'Tab': 'PLAN'};
        localStorage.setItem('reportingLanding_tab_activation', JSON.stringify(tabActivation))
  },
  methods: {
    item1Mutation() {
      this.observer2 = new MutationObserver(mutations => {
        for (const m of mutations) {
          if(document.querySelectorAll('.my_tab')[0].classList.contains('v-tab--active')) {
            localStorage.removeItem('reportingLanding_tab_activation')
            // let tabActivation = JSON.parse(localStorage.getItem('reportingLanding_tab_activation')).Tab;
            let tabActivation = {'Tab': 'PLAN'};
            localStorage.setItem('reportingLanding_tab_activation', JSON.stringify(tabActivation))
            console.log(tabActivation.Tab);
          }
          console.log(document.querySelector('.member.save-btn'));
          // console.log(event.target);
        }
      });
      this.observer2.observe(document.querySelectorAll('.my_tab')[0],{
        attributes: true,
        attributeOldValue : true,
        attributeFilter: ['class'],
      });
    },
    item2Mutation() {
      this.observer2 = new MutationObserver(mutations => {
        for (const m of mutations) {
          if(document.querySelectorAll('.my_tab')[1].classList.contains('v-tab--active')) {
            // let tabActivation = JSON.parse(localStorage.getItem('reportingLanding_tab_activation')).Tab;
            let tabActivation = {'Tab': 'REPORT'};
            localStorage.setItem('reportingLanding_tab_activation', JSON.stringify(tabActivation))
            console.log(tabActivation.Tab);
          }
        }
      });
      this.observer2.observe(document.querySelectorAll('.my_tab')[1],{
        attributes: true,
        attributeOldValue : true,
        attributeFilter: ['class'],
      });
    },
  },
  mounted() {
    this.item1Mutation();
    this.item2Mutation();
  },
};
</script>

<style scoped>
.head-container {
  background-color: #efeff4 !important;
  padding: 0;
  /* padding-top: 56px; */
}
.submit-btn {
  padding: 10px 0;
}
.btn-col {
  padding-top: 0;
  padding-bottom: 0;
}
.report-section {
  padding: 0 10px;
}
.report-col {
  max-width: 30%;
  padding: 0;
}
.parent-col {
  padding: 7px 12px;
  padding: 0;
}
.report-txt {
  margin: 0;
}
.content-div {
  padding: 0px 4px
}
.mx-auto {
  box-shadow: none;
}
.list-box {
  border: 1px solid #cccccc !important;
  padding: 0;
}
.content-header {
  font-size: 18px;
}
.list-item-content {
  border-bottom: 1px solid #cccccc !important;
}
.content-item-title {
  font-size: 18px;
}
/*----------*/
/*.report-landing-page {
    position: absolute;
    top: -56px;
    z-index: 5;
}*/
.v-row {
    margin: 0px;
}
.submit-btn-sec {
    margin: 0;
}
.container {
  padding-top: 0;
}
</style>
