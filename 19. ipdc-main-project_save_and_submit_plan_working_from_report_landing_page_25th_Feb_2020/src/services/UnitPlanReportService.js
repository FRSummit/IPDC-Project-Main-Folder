import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:50009/reporting/v1/all';

const token = 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJEUkNSVVkwUkVaQ1JUWTJSREl6TlRkQk1VUTVPVEkyTkRCQ1JqZzBSRU0zUmpBMFF6SkNRUSJ9.eyJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL0lzU3lzdGVtQWRtaW4iOnRydWUsImh0dHBzOi8vcmVwb3J0aW5nbW9kdWxlLmNvbS9jbGFpbXMvSXNTeXN0ZW1Vc2VyIjp0cnVlLCJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL3VzZXJuYW1lIjoicml6d2FudWxAc2ltcGxleGh1Yi5jb20iLCJpc3MiOiJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWQyZWIwYjY5NDk1MjYwZWJjNWQ2YTVmIiwiYXVkIjpbImh0dHA6Ly8zNS4yMDEuMC4zOS8iLCJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTgyNjA0MTI3LCJleHAiOjE1ODI2MTEzMjcsImF6cCI6IjhWbmdrVmI1MWdra0Jadml0U29yZEJONGw4cklPd2V0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwifQ.yf7u8itMb4_VjJLM-V64VPC_RtGoNva1jG-zO15ke_cd8ZuQgPIoQPQc31pmlL5A5JscKH5wx1NhtEVcUt-4a-VGZJGcSV4gQNyiN2WqDlqHiZZcUezNxNvfshhl03d0Oj_dL_8-6L5HWvh6T2617OfuHzUN6X8jwfvZuP4MmVCzDS39Q3bBnIAkeoGbz4Bl75dEnVZBP4gcOHcXpoGKmkleN5q8hiXugl_rRj_5Jl8lH3Kdj88NDnbT-nmAkxpOZ5B8zXf7kx8BFb6mMCyD26gZ1X1eoZio_OmIS9ta7G_Z6URQvnh6ZztWWlSP24XBRrvZzyt7GuHLZ1eKqhZlrw'
// const token = 'Bearer ' + localStorage.getItem('id_token');
// console.log(token);

const BASE_URL = "http://localhost:50009/reporting/v1";
const URL = "http://localhost:50009/reporting/v1/all/search?page=1&pageSize=10";

const URL_SEARCH_PAGE = "/all/search?page=1&pageSize=10";
const URL_SEARCH_ORGANIZATION = "/organization/search?page=1&pageSize=10"
const URL_MY_ORGANIZATION = "/organization/myorganizations";
const URL_ORGANIZATION_USER = "/organization/user/search?page=1&pageSize=10";
const URL_PLAN = '/unit/plan/'
const URL_REPORT = '/unit/report/'
const URL_ReportingPeriodsToCreatePlan = '/reportingperiod/oforganization?organizationId=';
const URL_CREATE_BASE = 'http://localhost:50009//reporting/v1/unit/plan/create2?year=';
const URL_UPDATE_BASE = 'http://localhost:50009//reporting/v1/unit/plan/update?organizationId=';
const URL_SUBMIT_BASE = 'http://localhost:50009//reporting/v1/unit/plan/submit?planId='

export default class PostService{
    getAllPosts() {
        return axios.get(URL, {
            headers: {
                   Authorization: token 
               } 
        });
    }
    getSearchAllPage() {
        return axios.get(BASE_URL + URL_SEARCH_PAGE, {
            headers: {
                   Authorization: token 
               } 
        });
    }
    getSearchOrganization() {
        return axios.get(BASE_URL + URL_SEARCH_ORGANIZATION, {
            headers: {
                   Authorization: token 
               } 
        });
    }
    getMyOrganization() {
        return axios.get(BASE_URL + URL_MY_ORGANIZATION, {
            headers: {
                   Authorization: token 
               } 
        });
    }
    getOrganizationUser() {
        return axios(BASE_URL + URL_ORGANIZATION_USER, {
            headers: {
                   Authorization: token 
               },
            method: 'get'
        });
    }
    getPlanById(id) {
        return axios(BASE_URL + URL_PLAN + id, {
            headers: {
                   Authorization: token 
               },
            method: 'get'
        });
    }
    getReportById(id) {
        return axios(BASE_URL + URL_REPORT + id, {
            headers: {
                   Authorization: token 
               },
            method: 'get'
        });
    }
    createPlan2(link, datas) {
        // const headers = new Headers();
        // headers.set("Authorization", token);
        // headers.set("SignalRConnectionId", '8be78052-8f66-41ba-8ffa-0f3eec06c3a0');
        // headers.set("Accept", "application/json");
        // headers.set("Content-Type", "application/json");
        console.log(link);
        console.log(datas.id);

        return axios(link, {
            headers: {
                   Authorization: token,
                   'SignalRConnectionId': '8ce05f33-570c-4b0c-9abd-b2252d3fcc08',
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               },
            // headers: headers,
            method: 'POST',
            data: {
                    id: datas.id, 
                    organizationType: datas.organizationType, 
                    description: datas.description, 
                    reportingFrequency: datas.reportingFrequency, 
                    details: datas.details
                },
            // data: datas
        });
    }
    getReportingPeriodsToCreatePlan(id) {
        return axios(BASE_URL + URL_ReportingPeriodsToCreatePlan + id, {
            headers: {
                   Authorization: token 
               },
            method: 'get'
        });
    }
    createPlan(OrganizationReference) {
        return axios(URL_CREATE_BASE + OrganizationReference.year 
                                    + '&reportingTerm=' + OrganizationReference.reportingTerm 
                                    + '&reportingFrequency=' + OrganizationReference.reportingFrequency, {
            headers: {
                   Authorization: token,
                   'SignalRConnectionId': '8ce05f33-570c-4b0c-9abd-b2252d3fcc08',
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               },
            method: 'POST',
            data: {
                    id: OrganizationReference.organization.id, 
                    organizationType: OrganizationReference.organization.organizationType, 
                    description: OrganizationReference.organization.description, 
                    reportingFrequency: OrganizationReference.organization.reportingFrequency, 
                    details: OrganizationReference.organization.details
                },
        });
    }
    updatePlan() {
        console.log('plan update working')
        return axios(URL_UPDATE_BASE + '16' 
                                    + '&planId=' + '1055', {
            headers: {
                   Authorization: token,
                   'SignalRConnectionId': '8ce05f33-570c-4b0c-9abd-b2252d3fcc08',
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               },
            method: 'POST',
            data: 
                {
                    "associateMemberPlanData":{"nameAndContactNumber":null,"action":null,"upgradeTarget":0},
                    "preliminaryMemberPlanData":{"nameAndContactNumber":null,"action":null,"upgradeTarget":0},
                    "supporterMemberPlanData":{"nameAndContactNumber":null,"action":null,"upgradeTarget":0},
                    "memberMemberPlanData":{"nameAndContactNumber":null,"action":null,"upgradeTarget":5},
                    "workerMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "cmsMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "smMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "memberMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "dawahMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "stateLeaderMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "stateOutingMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "iftarMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "learningMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "socialDawahMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "dawahGroupMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "nextGMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "tafsirMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "unitMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "bbqMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "gatheringMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "familyVisitMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "eidReunionMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "otherMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "groupStudyTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "studyCircleForAssociateMemberTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "studyCircleTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "practiceDarsTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "stateLearningCampTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "quranStudyTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "hadithTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "quranClassTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "weekendIslamicSchoolTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "memorizingAyatTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "memorizingHadithTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "memorizingDoaTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "stateLearningSessionTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "stateQiyamulLailTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "otherTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "qardeHasanaSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "patientVisitSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "socialVisitSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "transportSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "shiftingSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "shoppingSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "foodDistributionSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "cleanUpAustraliaSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "otherSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "bookSaleMaterialPlanData":{"target":0,"dateAndAction":null},
                    "bookDistributionMaterialPlanData":{"target":0,"dateAndAction":null},
                    "vhsSaleMaterialPlanData":{"target":0,"dateAndAction":null},
                    "vhsDistributionMaterialPlanData":{"target":0,"dateAndAction":null},
                    "emailDistributionMaterialPlanData":{"target":0,"dateAndAction":null},
                    "ipdcLeafletDistributionMaterialPlanData":{"target":0,"dateAndAction":null},
                    "otherSaleMaterialPlanData":{"target":0,"dateAndAction":null},
                    "otherDistributionMaterialPlanData":{"target":0,"dateAndAction":null},
                    "baitulMalFinancePlanData":{
                        "action":null,
                        "workerPromiseIncreaseTarget":{"amount":0,"currency":8},
                        "otherSourceAction":null,
                        "otherSourceIncreaseTarget":{"amount":0,"currency":8}
                    },
                    "aDayMasjidProjectFinancePlanData":{
                        "action":null,
                        "workerPromiseIncreaseTarget":{"amount":0,"currency":8},
                        "otherSourceAction":null,
                        "otherSourceIncreaseTarget":{"amount":0,"currency":8}
                    },
                    "masjidTableBankFinancePlanData":{
                        "action":null,
                        "workerPromiseIncreaseTarget":{"amount":0,"currency":8},
                        "otherSourceAction":null,
                        "otherSourceIncreaseTarget":{"amount":0,"currency":8}
                    }
                }
            
        });
    }
    submitPlan() {
        console.log('plan submit working')
        return axios(URL_SUBMIT_BASE + '1055' 
                                    + '&organizationId=' + '16', {
            headers: {
                   Authorization: token,
                   'SignalRConnectionId': '8ce05f33-570c-4b0c-9abd-b2252d3fcc08',
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               },
            method: 'POST',
            data: 
                {
                    "associateMemberPlanData":{"nameAndContactNumber":null,"action":null,"upgradeTarget":0},
                    "preliminaryMemberPlanData":{"nameAndContactNumber":null,"action":null,"upgradeTarget":0},
                    "supporterMemberPlanData":{"nameAndContactNumber":null,"action":null,"upgradeTarget":0},
                    "memberMemberPlanData":{"nameAndContactNumber":null,"action":null,"upgradeTarget":12},
                    "workerMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "cmsMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "smMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "memberMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "dawahMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "stateLeaderMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "stateOutingMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "iftarMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "learningMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "socialDawahMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "dawahGroupMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "nextGMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "tafsirMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "unitMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "bbqMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "gatheringMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "familyVisitMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "eidReunionMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "otherMeetingProgramPlanData":{"target":0,"dateAndAction":null},
                    "groupStudyTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "studyCircleForAssociateMemberTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "studyCircleTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "practiceDarsTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "stateLearningCampTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "quranStudyTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "hadithTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "quranClassTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "weekendIslamicSchoolTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "memorizingAyatTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "memorizingHadithTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "memorizingDoaTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "stateLearningSessionTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "stateQiyamulLailTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "otherTeachingLearningProgramPlanData":{"target":0,"dateAndAction":null},
                    "qardeHasanaSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "patientVisitSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "socialVisitSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "transportSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "shiftingSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "shoppingSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "foodDistributionSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "cleanUpAustraliaSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "otherSocialWelfarePlanData":{"target":0,"dateAndAction":null},
                    "bookSaleMaterialPlanData":{"target":0,"dateAndAction":null},
                    "bookDistributionMaterialPlanData":{"target":0,"dateAndAction":null},
                    "vhsSaleMaterialPlanData":{"target":0,"dateAndAction":null},
                    "vhsDistributionMaterialPlanData":{"target":0,"dateAndAction":null},
                    "emailDistributionMaterialPlanData":{"target":0,"dateAndAction":null},
                    "ipdcLeafletDistributionMaterialPlanData":{"target":0,"dateAndAction":null},
                    "otherSaleMaterialPlanData":{"target":0,"dateAndAction":null},
                    "otherDistributionMaterialPlanData":{"target":0,"dateAndAction":null},
                    "baitulMalFinancePlanData":{
                        "action":null,
                        "workerPromiseIncreaseTarget":{"amount":0,"currency":8},
                        "otherSourceAction":null,
                        "otherSourceIncreaseTarget":{"amount":0,"currency":8}
                    },
                    "aDayMasjidProjectFinancePlanData":{
                        "action":null,
                        "workerPromiseIncreaseTarget":{"amount":0,"currency":8},
                        "otherSourceAction":null,
                        "otherSourceIncreaseTarget":{"amount":0,"currency":8}
                    },
                    "masjidTableBankFinancePlanData":{
                        "action":null,
                        "workerPromiseIncreaseTarget":{"amount":0,"currency":8},
                        "otherSourceAction":null,
                        "otherSourceIncreaseTarget":{"amount":0,"currency":8}
                    }
                }
            
        });
    }

}