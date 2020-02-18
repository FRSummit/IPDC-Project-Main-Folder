<template>
    <div class="create-plan">
        <v-container class="head-container">
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
        </v-container>
        <v-container fluid>
            <v-row align="center">
                <v-col cols="6">
                    <v-select :items="items_my_organizations" placeholder="Items" dense  v-model="my_organizations" id="my_organizations" name="my_organizations" type="text"></v-select>
                </v-col>
            </v-row>
        </v-container>
    </div>
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
            select: { state: 'Florida', abbr: 'FL' },
            items_my_organizations: [
            { state: 'Florida', abbr: 'FL' },
            { state: 'Georgia', abbr: 'GA' },
            { state: 'Nebraska', abbr: 'NE' },
            { state: 'California', abbr: 'CA' },
            { state: 'New York', abbr: 'NY' },
            ],
        }
    },
    created() {

    },
    methods: {
        onSubmit() {
            const OrganizationReference = {
                    organization:
                        {
                            id: this.id,
                            organizationType: this.organizationType,
                            description: this.organization,
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
                .createPlan2(link, OrganizationReference.organization)
                .then(res => {
                    console.log('this is the res : ');
                    console.log(res.data);
                })
                .catch(err =>{
                    console.log('this is the error : ');
                    console.error(err);
                });

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