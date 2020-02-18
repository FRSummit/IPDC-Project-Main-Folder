<template>
  <v-ons-page class="create-plan-page">
    <div class="create-plan">
        <!-- <v-container class="head-container">
            <div class="content-div">
                <form class="form-cls" @submit.prevent="onSubmit">
                    <v-subheader class="content-header">
                    <div class="left">
                        <router-link to='/planandreports'>
                        <ons-back-button>Reports</ons-back-button>
                        </router-link>
                    </div>
                    Create Plan
                    </v-subheader>
                    <v-row class="form-row">
                    <v-col cols="12" class="col-field">
                        <input name="id" v-model="id" label="Id" placeholder="Id" single-line/>
                    </v-col>
                    <v-col cols="12" class="col-field">
                        <input name="organizationType" v-model="organizationType" label="Organization Type" placeholder="Organization Type" single-line/>
                    </v-col>
                    <v-col cols="12" class="col-field">
                        <input name="description" v-model="description" label="Description" placeholder="Description" single-line/>
                    </v-col>
                    <v-col cols="12" class="col-field">
                        <input name="reportingFrequency" v-model="reportingFrequency" label="Reporting Frequency" placeholder="Reporting Frequency" single-line/>
                    </v-col>
                    <v-col cols="12" class="col-field">
                        <input name="details" v-model="details" label="Details" placeholder="Details" single-line/>
                    </v-col>
                    <v-col cols="12" class="col-field">
                        <input name="year" v-model="year" label="Year" placeholder="Year" single-line/>
                    </v-col>
                    <v-col cols="12" class="col-field">
                        <input name="reportingTerm" v-model="reportingTerm" label="Reporting Term" placeholder="Reporting Term" single-line/>
                    </v-col>
                    <button type="submit" large color="blue white--text" class="member save-btn">Save</button>
                    </v-row>
                </form>
            </div>
        </v-container> -->
        <v-simple-table>
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
        <v-container fluid style="margin: 30px 0;">
            <v-row align="center">
                <v-col>
                    <v-select :items="reportingPeriods" placeholder="Select any option first" dense  v-model="my_organizations" id="my_organizations" name="my_organizations" type="text" class="reporting-period"></v-select>
                </v-col>
            </v-row>
        </v-container>
        
        <div style="margin: 20px 0px 30px; text-align: center;">
            <div style="margin: 5px 0">
                <button class="waves-effect waves-light btn" @click="createPlan">Create Plan</button>
            </div>
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
            id: '',
            organizationType: '',
            description: '',
            reportingFrequency: '',
            details: '',
            year: '',
            reportingTerm: '',
            my_organizations: '',
            items_my_organizations: ['Florida', 'Georgia', 'Nebraska', 'California', 'New York'],
            itemsMyOrganizations: [],
            itemFromTableRow: [],
            reportingPeriods: [],
        }
    },
    created() {
        unitPlanReportService
            .getMyOrganization()
            .then(res => {
                console.log(res.data);
                this.itemsMyOrganizations = res.data;
            })
            .catch(err =>{
                console.error(err);
            });
    },
    methods: {
        myOrganizationSelection(id) {
            let pItem = [];
            let pItemYear = [];
            console.log('my org ' + id);
            unitPlanReportService
                .getReportingPeriodsToCreatePlan(id)
                .then(res => {
                    console.log(res)
                    this.itemFromTableRow = res.data;
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
                        pItem.push(i.year + '-' + repF + ' ' 
                                                + startMonth + ' ' + startDateParts[0] + ' to ' 
                                                + endMonth + ' ' + endDateParts[0] + isActive);
                    });
                })
                .catch(err =>{
                    console.error(err);
                });
            this.reportingPeriods = pItem;
        },
        createPlan() {
            console.log('Working');
        },
        onSubmit() {
            const OrganizationReference = {
                    organization:
                        {
                            id: this.id,
                            organizationType: this.organizationType,
                            description: this.description,
                            reportingFrequency: this.reportingFrequency,
                            details: null
                        },
                    year: this.year,
                    reportingTerm: this.reportingTerm,
                    reportingFrequency: this.reportingFrequency
            };
            console.log(OrganizationReference);
            const link = 'http://localhost:50009//reporting/v1/unit/plan/create2?year=' 
                        + this.year + '&reportingTerm=' + this.reportingTerm + '&reportingFrequency=' + this.reportingFrequency;

            unitPlanReportService
                // .createPlan2(link, OrganizationReference.organization)
                // .then(res => {
                //     console.log('this is the res : ');
                //     console.log(res.data);
                //     this.$router.push('/planandreports');
                // })
                // .catch(err =>{
                //     console.log('this is the error : ');
                //     console.error(err);
                // });
            this.$router.push('/planandreports');

        },
        reportingFrequencySelection(reportingFrequency) {
            if(reportingFrequency == '1') return 'Monthly'
            if(reportingFrequency == '2') return 'EveryTwoMonth'
            if(reportingFrequency == '3') return 'Quarterly'
            if(reportingFrequency == '4') return 'EveryFourMonth'
            if(reportingFrequency == '6') return 'HalfYearly'
            if(reportingFrequency == '12') return 'Yearly'
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