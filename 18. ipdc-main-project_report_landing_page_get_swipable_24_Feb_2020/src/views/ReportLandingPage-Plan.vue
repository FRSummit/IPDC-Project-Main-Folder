<template>
    <div>
        <v-container>
            <div class="submit-btn">
            <v-row class="submit-btn-sec">
                <v-col class="col-sm-4 btn-col">
                    <v-btn center large class="blue white--text right">Submit Plan</v-btn>
                </v-col>
            </v-row>
            </div>

            <hr />
            <div class="report-section">
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
            </div>
            <hr />


            <div class="content-div">
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
            </div>
        </v-container>
    </div>
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
        if(localStorage.getItem('reportingLanding_data')) {
            console.log('local data')
            this.report = localStorage.getItem('reportingLanding_data').split(',')[0]
            this.organization = localStorage.getItem('reportingLanding_data').split(',')[1]
            this.status = localStorage.getItem('reportingLanding_data').split(',')[2]
            console.log('report : ' + this.report)
        } else if(localStorage.getItem('reportingLanding_data') === undefined || localStorage.getItem('reportingLanding_data') === null) {
            console.log('this is undefined')
            console.log(localStorage.getItem('reportingLanding_data'))
            const unit_item = [];
            const unitReportId = localStorage.getItem('planandreports_passing_unit_id');
            localStorage.removeItem('planandreports_passing_unit_id');
            unitPlanReportService
                .getSearchAllPage()
                .then(res => {
                    res.data.items.forEach(function(i){
                        if(i.id == unitReportId) {
                            unit_item.push(i.description);
                            unit_item.push(i.organization.description);
                            unit_item.push(i.reportStatusDescription);
                            if(localStorage.getItem('reportingLanding_data') === undefined || localStorage.getItem('reportingLanding_data') === null){
                                localStorage.setItem('reportingLanding_data', unit_item)
                                // console.log('this is i : ')
                                // console.log(i)
                                // console.log('------------->>>>>>>>>>>>>')
                                rlpMethods.getSelectedPlanById(i.id)
                                rlpMethods.getSelectedReportById(i.id)
                                // console.log('------------->>>>>>>>>>>>>')
                                // localStorage.setItem('testing_report_data', rlpMethods.getSelectedReportById(i.id))
                                /*unitPlanReportService
                                    .getPlanById(i.id)
                                    .then(res => {
                                        console.log(res.data)
                                        localStorage.setItem('selected_report_details', JSON.stringify(res.data))
                                    })
                                    .catch(err =>{
                                        console.error(err);
                                    });*/
                            }
                        }
                    });
                    this.selectedItem = unit_item;
                })
                .catch(err =>{
                    console.error(err);
                });
                console.log(unit_item)
        }
  },
  methods: {
  }
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
.v-card > *:last-child:not(.v-btn):not(.v-chip) {
    background-color: #EFEFF4;
}
</style>
