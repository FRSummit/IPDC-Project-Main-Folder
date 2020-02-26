<template>
    <div>
        <v-container>
            <div class="submit-btn">
            <v-row class="submit-btn-sec">
                <v-col class="col-sm-4 btn-col">
                    <v-btn center large class="white--text plan-page-btn" @click="savePlan">Save</v-btn>
                    <v-btn center large class="white--text plan-page-btn right" @click="submitPlan">Submit</v-btn>
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
                            <v-list-item class="list-item-content first-li-item">
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
                            <v-list-item class="list-item-content last-li-item">
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
                                <v-list-item-title class="content-item-title">Weekly Meetings</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

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
                                <v-list-item-title class="content-item-title">State Leader Meetings</v-list-item-title>
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

                        <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Social Dawah Programs</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Dawah Groups</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">NextG Meetings</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Tafsir Meetings</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Unit Meetings</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">BBQ Meetings</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Gathering Meetings</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Family Visit Meetings</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Eid Re-union Meetings</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </router-link>

                        <router-link to='/planandreports/report_landing_page/regular-and-special-meetings' class="router-link">
                            <v-list-item class="list-item-content">
                                <v-list-item-content>
                                <v-list-item-title class="content-item-title">Other Meetings</v-list-item-title>
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
                                <v-list-item class="list-item-content first-li-item">
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
                                <v-list-item class="list-item-content last-li-item">
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
                                <v-list-item class="list-item-content first-li-item">
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
                                <v-list-item class="list-item-content last-li-item">
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
                                <v-list-item class="list-item-content first-li-item">
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
                                <v-list-item class="list-item-content last-li-item">
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
                                <v-list-item class="list-item-content first-li-item">
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
                                <v-list-item class="list-item-content last-li-item">
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

import DataRemove from '../methods/RemoveLocalStorageForSavedData'
const dataRemove = new DataRemove()

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
        console.log('Plan Tab')
        const accessToken = localStorage.getItem('access_token');
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
            console.log(unitReportId)
            // localStorage.removeItem('planandreports_passing_unit_id');
            unitPlanReportService
                .getSearchAllPage(accessToken)
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
    savePlan() {
      console.log('Plan saved')
      const accessToken = localStorage.getItem('access_token')
      const planId = JSON.parse(localStorage.getItem('selected_plan_details')).id
      const organizationId = JSON.parse(localStorage.getItem('selected_plan_details')).organization.id
      const planData = {
          memberMemberPlanData: {
              nameAndContactNumber: JSON.parse(localStorage.getItem('manpowerAndPersonalContacts_memberMemberPlanData')).memberMemberPlanData.nameAndContactNumber,
              action: JSON.parse(localStorage.getItem('manpowerAndPersonalContacts_memberMemberPlanData')).memberMemberPlanData.action,
              target: JSON.parse(localStorage.getItem('manpowerAndPersonalContacts_memberMemberPlanData')).memberMemberPlanData.target
          },
          associateMemberPlanData: {
              nameAndContactNumber: JSON.parse(localStorage.getItem('manpowerAndPersonalContacts_associateMemberPlanData')).associateMemberPlanData.nameAndContactNumber,
              action: JSON.parse(localStorage.getItem('manpowerAndPersonalContacts_associateMemberPlanData')).associateMemberPlanData.action,
              target: JSON.parse(localStorage.getItem('manpowerAndPersonalContacts_associateMemberPlanData')).associateMemberPlanData.target
          },
          preliminaryMemberPlanData: {
              nameAndContactNumber: JSON.parse(localStorage.getItem('manpowerAndPersonalContacts_preliminaryMemberPlanData')).preliminaryMemberPlanData.nameAndContactNumber,
              action: JSON.parse(localStorage.getItem('manpowerAndPersonalContacts_preliminaryMemberPlanData')).preliminaryMemberPlanData.action,
              target: JSON.parse(localStorage.getItem('manpowerAndPersonalContacts_preliminaryMemberPlanData')).preliminaryMemberPlanData.target
          },
          supporterMemberPlanData: {
              nameAndContactNumber: JSON.parse(localStorage.getItem('manpowerAndPersonalContacts_supporterMemberPlanData')).supporterMemberPlanData.nameAndContactNumber,
              action: JSON.parse(localStorage.getItem('manpowerAndPersonalContacts_supporterMemberPlanData')).supporterMemberPlanData.action,
              target: JSON.parse(localStorage.getItem('manpowerAndPersonalContacts_supporterMemberPlanData')).supporterMemberPlanData.target
          }
      }
      unitPlanReportService
        .updatePlan(planId, organizationId, accessToken, planData)
        .then(res => {
          console.log(res);
          console.log(res.data);
          dataRemove.removedLocalStorageData();
        })
        .catch(err => {
          console.error(err);
        });
    },
    submitPlan() {
      console.log('Plan submited')
      const accessToken = localStorage.getItem('access_token')
    //   unitPlanReportService
    //     .submitPlan(accessToken)
    //     .then(res => {
    //       console.log(res);
    //       console.log(res.data);
    //     })
    //     .catch(err => {
    //       console.error(err);
    //     });
    }
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
  padding-bottom: 10px;
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
.plan-page-btn {
    background-color: #25a6d9 !important;
    width: 84px !important;
    height: 36px !important;
}
.list-item-content {
    background: #FFF;
    border-bottom: 1px solid #eee !important;
}
.first-li-item {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}
.last-li-item {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}
</style>
