<template>
  <v-ons-page class="create-plan-page">
    <div class="create-plan">
        <v-card-text class="pop-up" v-if="createdPlanStatus">{{ createdPlanStatus }}</v-card-text>
        <v-simple-table class="v-simple-table">
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-left">Description</th>
                        <th class="text-left">Organization Type</th>
                        <th class="text-left">Reporting Frequency</th>
                        <th class="text-left">Parent</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in itemsMyOrganizations" :key="item.id" @click="myOrganizationSelection(item.id)">
                        <td v-if="item.organizationType == 1">{{ item.description }}</td>
                        <td v-if="item.organizationType == 1">{{ item.organizationTypeDescription }}</td>
                        <td v-if="item.organizationType == 1">{{ item.reportingFrequencyDescription }}</td>
                        <td v-if="item.organizationType == 1">{{ item.parent.description }}</td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
        <v-container fluid>
            <v-row align="center">
                <v-col>
                    <v-select :items="reportingPeriods" placeholder="Reporting Period" dense  v-model="selectedReportingPeriods" id="my_organizations" name="my_organizations" type="text" class="reporting-period"></v-select>
                </v-col>
            </v-row>
        </v-container>
        
        <div style="margin: 0px 0px 30px; text-align: center;">
            <div style="margin: 5px 0">
                <v-card-text v-if="!this.selectedReportingPeriods">Before you get the buttton select an option from dropdown</v-card-text>
                <button class="waves-effect waves-light btn" @click="createPlan" v-if="this.selectedReportingPeriods">Create Plan</button>
            </div>
        </div>
    </div>
  </v-ons-page>
</template>

<script>
import UnitPlanReportService from '../services/UnitPlanReportService'
const unitPlanReportService = new UnitPlanReportService();

export default {
    data() {
        return {
            selectedReportingPeriods: '',
            itemsMyOrganizations: [],
            reportingPeriods: [],
            createPlanOrganizationReference: [],
            createPlanOrgYear: null,
            totalPlans: null,
            createdPlanStatus: null
        }
    },
    created() {
        const accessToken = localStorage.getItem('access_token')
        unitPlanReportService
            .getMyOrganization(accessToken)
            .then(res => {
                this.itemsMyOrganizations = res.data;
            })
            .catch(err =>{
                console.error(err);
            });
        
        unitPlanReportService
            .getSearchAllPage(accessToken)
            .then(res => {
                this.totalPlans = res.data.items.length
                console.log('this.totalPlans ' + this.totalPlans)
            })
            .catch(err => {
                console.error(err);
            });
    },
    methods: {
        myOrganizationSelection(id) {
            let reportingPeriodsItems = [];
            let orgYear = null;
            console.log('my org ' + id);
            const accessToken = localStorage.getItem('access_token')
            unitPlanReportService
                .getReportingPeriodsToCreatePlan(id, accessToken)
                .then(res => {
                    console.log(res)
                    this.createPlanOrganizationReference = res.data[0].organizationReference;
                    res.data.forEach(function(i){ 
                        let startDateParts = i.startDate.split('-')
                        let endDateParts = i.endDate.split('-')
                        let repF = ''
                        if(i.reportingFrequency === 1) repF = 'Monthly'
                        else if(i.reportingFrequency == 2) repF = 'EveryTwoMonth'
                        else if(i.reportingFrequency == 3) repF = 'Quarterly'
                        else if(i.reportingFrequency == 4) repF = 'EveryFourMonth'
                        else if(i.reportingFrequency == 6) repF = 'HalfYearly'
                        else if(i.reportingFrequency == 12) repF = 'Yearly'
                        let startMonth = ''
                        if(startDateParts[1] === '01') startMonth = 'Oct'
                        else if(startDateParts[1] === '02') startMonth = 'Nov'
                        else if(startDateParts[1] === '03') startMonth = 'Dec'
                        else if(startDateParts[1] === '04') startMonth = 'Jan'
                        else if(startDateParts[1] === '05') startMonth = 'Feb'
                        else if(startDateParts[1] === '06') startMonth = 'Mar'
                        else if(startDateParts[1] === '07') startMonth = 'Apr'
                        else if(startDateParts[1] === '08') startMonth = 'May'
                        else if(startDateParts[1] === '09') startMonth = 'Jun'
                        else if(startDateParts[1] === '10') startMonth = 'Jul'
                        else if(startDateParts[1] === '11') startMonth = 'Aug'
                        else if(startDateParts[1] === '12') startMonth = 'Sep'
                        let endMonth = ''
                        if(endDateParts[1] === '01') endMonth = 'Oct'
                        else if(endDateParts[1] === '02') endMonth = 'Nov'
                        else if(endDateParts[1] === '03') endMonth = 'Dec'
                        else if(endDateParts[1] === '04') endMonth = 'Jan'
                        else if(endDateParts[1] === '05') endMonth = 'Feb'
                        else if(endDateParts[1] === '06') endMonth = 'Mar'
                        else if(endDateParts[1] === '07') endMonth = 'Apr'
                        else if(endDateParts[1] === '08') endMonth = 'May'
                        else if(endDateParts[1] === '09') endMonth = 'Jun'
                        else if(endDateParts[1] === '10') endMonth = 'Jul'
                        else if(endDateParts[1] === '11') endMonth = 'Aug'
                        else if(endDateParts[1] === '12') endMonth = 'Sep'
                        let isActive = ''
                        if(i.isActive === true) isActive = ' (Active)'
                        reportingPeriodsItems.push(i.year + '-' + repF + ' ' 
                                                + startMonth + ' ' + startDateParts[0] + ' to ' 
                                                + endMonth + ' ' + endDateParts[0] + isActive);
                        orgYear = i.year;
                    });
                    this.createPlanOrgYear = orgYear;
                    console.log(this.createPlanOrgYear)
                    console.log(orgYear)
                })
                .catch(err =>{
                    console.error(err);
                });
            this.reportingPeriods = reportingPeriodsItems;
        },
        createPlan() {
            console.log(this.createPlanOrganizationReference);
            console.log(this.selectedReportingPeriods);
            console.log('------------>>>>>>>>>' + this.selectedReportingPeriods.split('-')[0])
            const orgReportingTerm = this.selectedReportingPeriods.split(' ')[0].split('-')[1];
            const OrganizationReference = {
                            organization:
                                {
                                    id: this.createPlanOrganizationReference.id,
                                    organizationType: this.createPlanOrganizationReference.organizationType,
                                    description: this.createPlanOrganizationReference.description,
                                    reportingFrequency: this.createPlanOrganizationReference.reportingFrequency,
                                    details: this.createPlanOrganizationReference.details
                                },
                            // year: this.createPlanOrgYear,
                            year: this.selectedReportingPeriods.split('-')[0],
                            reportingTerm: this.reportingFrequencySelectionNumber(orgReportingTerm),
                            reportingFrequency: this.createPlanOrganizationReference.reportingFrequency
            };
            console.log(OrganizationReference.year)

            const accessToken = localStorage.getItem('access_token')
            unitPlanReportService
                .createPlan(OrganizationReference, accessToken)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    this.getAllPlans();
                    var newPlans = this.totalPlans;
                    var oldPlans = this.totalPlans;
                    console.log(newPlans + ' ' + oldPlans)
                    this.$router.push('/planandreports')
                    window.location.reload();
                })
                .catch(err => {
                    console.error(err);
                });
        },
        reportingFrequencySelectionString(reportingFrequency) {
            if(reportingFrequency == '1') return 'Monthly'
            if(reportingFrequency == '2') return 'EveryTwoMonth'
            if(reportingFrequency == '3') return 'Quarterly'
            if(reportingFrequency == '4') return 'EveryFourMonth'
            if(reportingFrequency == '6') return 'HalfYearly'
            if(reportingFrequency == '12') return 'Yearly'
        },
        reportingFrequencySelectionNumber(reportingFrequency) {
            if(reportingFrequency == 'Monthly') return 1
            if(reportingFrequency == 'EveryTwoMonth') return 2
            if(reportingFrequency == 'Quarterly') return 3
            if(reportingFrequency == 'EveryFourMonth') return 4
            if(reportingFrequency == 'HalfYearly') return 6
            if(reportingFrequency == 'Yearly') return 12
        },
        reportingTermSelection(reportingTerm) {
            if(reportingTerm == '1') return 'Oct'
            if(reportingTerm == '2') return 'Nov'
            if(reportingTerm == '3') return 'Dec'
            if(reportingTerm == '4') return 'Jan'
            if(reportingTerm == '5') return 'Feb'
            if(reportingTerm == '6') return 'Mar'
            if(reportingTerm == '7') return 'Apr'
            if(reportingTerm == '8') return 'May'
            if(reportingTerm == '9') return 'Jun'
            if(reportingTerm == '10') return 'Jul'
            if(reportingTerm == '11') return 'Aug'
            if(reportingTerm == '12') return 'Sep'
        },
        getAllPlans() {
            let plans = null
            const accessToken = localStorage.getItem('access_token')
            unitPlanReportService
                .getSearchAllPage(accessToken)
                .then(res => {
                    plans = res.data.items.length
                    console.log('Plans           ' + plans)
                    console.log('this.totalPlans ' + this.totalPlans)
                })
                .catch(err => {
                    console.error(err);
                });
            return plans
        },
        hidePlanCreationStatus() {
            setTimeout( () => {
                this.createdPlanStatus = null 
            }, 2000);
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
input {
    margin: 0;
}
input::placeholder {
  color: #9e9e9e;
}
.pop-up {
    position: fixed;
    background: antiquewhite;
    border: 2px solid #f1d5af;
    top: 60px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
}
.v-simple-table {
    overflow: scroll;
    height: 500px;
}
th {
    font-size: 14px !important;
    font-family: Roboto', 'Noto', 'sans-serif !important;
}
</style>