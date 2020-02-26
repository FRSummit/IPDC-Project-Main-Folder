import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:50009/reporting/v1/all';

// const token = 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJEUkNSVVkwUkVaQ1JUWTJSREl6TlRkQk1VUTVPVEkyTkRCQ1JqZzBSRU0zUmpBMFF6SkNRUSJ9.eyJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL0lzU3lzdGVtQWRtaW4iOnRydWUsImh0dHBzOi8vcmVwb3J0aW5nbW9kdWxlLmNvbS9jbGFpbXMvSXNTeXN0ZW1Vc2VyIjp0cnVlLCJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL3VzZXJuYW1lIjoicml6d2FudWxAc2ltcGxleGh1Yi5jb20iLCJpc3MiOiJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWQyZWIwYjY5NDk1MjYwZWJjNWQ2YTVmIiwiYXVkIjpbImh0dHA6Ly8zNS4yMDEuMC4zOS8iLCJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTgyNjI5MDIwLCJleHAiOjE1ODI2MzYyMjAsImF6cCI6IjhWbmdrVmI1MWdra0Jadml0U29yZEJONGw4cklPd2V0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwifQ.rFZ-zPvR-0zMDglD4ocIOoS19oSyb3gRauSjGkKiNoKE-ltJDDgY7YdZibQfD0xwZmqjH4rYmbl0i9J8JncSkH3nXfhwcGbnnin-fZ1C6F5KLeY5oTaVg0Ov78VIY0_t8n7xxUTE2bX9SMgQdI5Q3pHMvVaLBZwW-qyLAfQSZnaYAcSk1Zi8U7XX1RoJcMrBs_DRVnLDrsszv_pv0DRhp4UydXkBPJ34sK-3oXf7LkC2vR5X6agjeatbsgU4uSVjlK2j703EBD2BsFS5wAvTvr7QND-daXysM9ln4zeVB-uhmGoT6tXx_NztadaUg2PyYHR-m_pLocIjE53IbREaCw'
// const token = 'Bearer ' + localStorage.getItem('access_token');
// console.log('Service : ' + token);

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
const URL_PLAN_UPDATE_BASE = 'http://localhost:50009//reporting/v1/unit/plan/update?organizationId=';
const URL_PLAN_SUBMIT_BASE = 'http://localhost:50009//reporting/v1/unit/plan/submit?planId='
const URL_REPORT_UPDATE_BASE = 'http://localhost:50009//reporting/v1/unit/report/update?organizationId=';
const URL_REPORT_SUBMIT_BASE = 'http://localhost:50009//reporting/v1/unit/report/submit?reportId='

export default class PostService{
    getAllPosts(accessToken) {
        return axios.get(URL, {
            headers: {
                   Authorization: 'Bearer ' + accessToken
               } 
        });
    }
    getSearchAllPage(accessToken) {
        return axios.get(BASE_URL + URL_SEARCH_PAGE, {
            headers: {
                   Authorization: 'Bearer ' + accessToken
               } 
        });
    }
    // getSearchOrganization(accessToken) {
    //     return axios.get(BASE_URL + URL_SEARCH_ORGANIZATION, {
    //         headers: {
    //                Authorization: 'Bearer ' + accessToken 
    //            } 
    //     });
    // }
    getMyOrganization(accessToken) {
        return axios.get(BASE_URL + URL_MY_ORGANIZATION, {
            headers: {
                   Authorization: 'Bearer ' + accessToken 
               } 
        });
    }
    // getOrganizationUser(accessToken) {
    //     return axios(BASE_URL + URL_ORGANIZATION_USER, {
    //         headers: {
    //                Authorization: 'Bearer ' + accessToken 
    //            },
    //         method: 'get'
    //     });
    // }
    getPlanById(id, accessToken) {
        return axios(BASE_URL + URL_PLAN + id, {
            headers: {
                   Authorization: 'Bearer ' + accessToken 
               },
            method: 'get'
        });
    }
    getReportById(id, accessToken) {
        return axios(BASE_URL + URL_REPORT + id, {
            headers: {
                   Authorization: 'Bearer ' + accessToken 
               },
            method: 'get'
        });
    }
    // createPlan2(link, datas, accessToken) {
    //     console.log(link);
    //     console.log(datas.id);

    //     return axios(link, {
    //         headers: {
    //                Authorization: 'Bearer ' + accessToken,
    //                'SignalRConnectionId': '8ce05f33-570c-4b0c-9abd-b2252d3fcc08',
    //                'Accept': 'application/json',
    //                'Content-Type': 'application/json'
    //            },
    //         method: 'POST',
    //         data: {
    //                 id: datas.id, 
    //                 organizationType: datas.organizationType, 
    //                 description: datas.description, 
    //                 reportingFrequency: datas.reportingFrequency, 
    //                 details: datas.details
    //             },
    //     });
    // }
    getReportingPeriodsToCreatePlan(id, accessToken) {
        return axios(BASE_URL + URL_ReportingPeriodsToCreatePlan + id, {
            headers: {
                   Authorization: 'Bearer ' + accessToken 
               },
            method: 'get'
        });
    }
    createPlan(OrganizationReference, accessToken) {
        return axios(URL_CREATE_BASE + OrganizationReference.year 
                                    + '&reportingTerm=' + OrganizationReference.reportingTerm 
                                    + '&reportingFrequency=' + OrganizationReference.reportingFrequency, {
            headers: {
                   Authorization: 'Bearer ' + accessToken,
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
    // updatePlan(plan, accessToken) {
    updatePlan(planId, orgId, accessToken, planData) {
        console.log(planData)
        return axios(URL_PLAN_UPDATE_BASE + orgId 
                                    + '&planId=' + planId, {
            headers: {
                   Authorization: 'Bearer ' + accessToken,
                   'SignalRConnectionId': '8ce05f33-570c-4b0c-9abd-b2252d3fcc08',
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               },
            method: 'POST',
            data: 
                {
                    "associateMemberPlanData":
                        {
                            "nameAndContactNumber":planData.associateMemberPlanData.nameAndContactNumber,
                            "action":planData.associateMemberPlanData.action,
                            "upgradeTarget":planData.associateMemberPlanData.upgradeTarget
                        },
                    "preliminaryMemberPlanData":
                        {
                            "nameAndContactNumber":planData.preliminaryMemberPlanData.nameAndContactNumber,
                            "action":planData.preliminaryMemberPlanData.action,
                            "upgradeTarget":planData.preliminaryMemberPlanData.upgradeTarget
                        },
                    "supporterMemberPlanData":
                        {
                            "nameAndContactNumber":planData.supporterMemberPlanData.nameAndContactNumber,
                            "action":planData.supporterMemberPlanData.action,
                            "upgradeTarget":planData.supporterMemberPlanData.upgradeTarget
                        },
                    "memberMemberPlanData":
                        {
                            "nameAndContactNumber":planData.memberMemberPlanData.nameAndContactNumber,
                            "action":planData.memberMemberPlanData.action,
                            "upgradeTarget":planData.memberMemberPlanData.upgradeTarget
                        },
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
    submitPlan(accessToken) {
        console.log('plan submit working')
        return axios(URL_PLAN_SUBMIT_BASE + '1055' 
                                    + '&organizationId=' + '16', {
            headers: {
                   Authorization: 'Bearer ' + accessToken,
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
    updateReport(accessToken) {
        console.log('Report update working')
        return axios(URL_REPORT_UPDATE_BASE + '16' 
                                    + '&reportId=' + '1055', {
            headers: {
                   Authorization: 'Bearer ' + accessToken,
                   'SignalRConnectionId': '8ce05f33-570c-4b0c-9abd-b2252d3fcc08',
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               },
            method: 'POST',
            data: 
                {
                    "associateMemberReportData":{"lastPeriod":0,"increased":2,"decreased":1,"comment":null,"personalContact":0},
                    "preliminaryMemberReportData":{"lastPeriod":0,"increased":0,"decreased":0,"comment":null,"personalContact":0},
                    "supporterMemberReportData":{"lastPeriod":0,"increased":0,"decreased":0,"comment":null,"personalContact":0},
                    "memberMemberReportData":{"lastPeriod":0,"increased":2,"decreased":1,"comment":null,"personalContact":0},
                    "workerMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "cmsMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "smMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "memberMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "dawahMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "stateLeaderMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "stateOutingMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "iftarMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "learningMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "socialDawahMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "dawahGroupMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "nextGMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "tafsirMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "unitMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "bbqMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "gatheringMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "familyVisitMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "eidReunionMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "otherMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                    "groupStudyTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "studyCircleForAssociateMemberTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "studyCircleTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "practiceDarsTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "stateLearningCampTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "quranStudyTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "hadithTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "quranClassTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "weekendIslamicSchoolTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "memorizingAyatTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "memorizingHadithTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "memorizingDoaTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "stateLearningSessionTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "stateQiyamulLailTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "otherTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                    "qardeHasanaSocialWelfareReportData":{"actual":0,"comment":null},
                    "patientVisitSocialWelfareReportData":{"actual":0,"comment":null},
                    "socialVisitSocialWelfareReportData":{"actual":0,"comment":null},
                    "transportSocialWelfareReportData":{"actual":0,"comment":null},
                    "shiftingSocialWelfareReportData":{"actual":0,"comment":null},
                    "shoppingSocialWelfareReportData":{"actual":0,"comment":null},
                    "foodDistributionSocialWelfareReportData":{"actual":0,"comment":null},
                    "cleanUpAustraliaSocialWelfareReportData":{"actual":0,"comment":null},
                    "otherSocialWelfareReportData":{"actual":0,"comment":null},
                    "bookSaleMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                    "bookDistributionMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                    "vhsSaleMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                    "vhsDistributionMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                    "emailDistributionMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                    "ipdcLeafletDistributionMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                    "otherSaleMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                    "otherDistributionMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                    "bookLibraryStockReportData":{"lastPeriod":0,"thisPeriod":0,"increased":0,"decreased":0,"comment":null},
                    "vhsLibraryStockReportData":{"lastPeriod":0,"thisPeriod":0,"increased":0,"decreased":0,"comment":null},
                    "otherLibraryStockReportData":{"lastPeriod":0,"thisPeriod":0,"increased":0,"decreased":0,"comment":null},
                    "baitulMalFinanceReportData":
                        {
                            "workerPromiseLastPeriod":{"amount":0,"currency":8},
                            "lastPeriod":{"amount":0,"currency":8},
                            "workerPromiseIncreased":{"amount":0,"currency":8},
                            "workerPromiseDecreased":{"amount":0,"currency":8},
                            "collection":{"amount":0,"currency":8},
                            "expense":{"amount":0,"currency":8},
                            "nisabPaidToCentral":{"amount":0,"currency":8},
                            "comment":null
                        },
                    "aDayMasjidProjectFinanceReportData":
                        {
                            "workerPromiseLastPeriod":{"amount":0,"currency":8},
                            "lastPeriod":{"amount":0,"currency":8},
                            "workerPromiseIncreased":{"amount":0,"currency":8},
                            "workerPromiseDecreased":{"amount":0,"currency":8},
                            "collection":{"amount":0,"currency":8},
                            "expense":{"amount":0,"currency":8},
                            "nisabPaidToCentral":{"amount":0,"currency":8},
                            "comment":null
                        },
                    "masjidTableBankFinanceReportData":
                        {
                            "workerPromiseLastPeriod":{"amount":0,"currency":8},
                            "lastPeriod":{"amount":0,"currency":8},
                            "workerPromiseIncreased":{"amount":0,"currency":8},
                            "workerPromiseDecreased":{"amount":0,"currency":8},
                            "collection":{"amount":0,"currency":8},
                            "expense":{"amount":0,"currency":8},
                            "nisabPaidToCentral":{"amount":0,"currency":8},
                            "comment":null
                        },
                    "comment":null
                }
        });
    }
    submitReport(accessToken) {
        console.log('Report submit working')
        return axios(URL_REPORT_SUBMIT_BASE + '1055' 
                                    + '&organizationId=' + '16', {
            headers: {
                   Authorization: 'Bearer ' + accessToken,
                   'SignalRConnectionId': '8ce05f33-570c-4b0c-9abd-b2252d3fcc08',
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               },
            method: 'POST',
            data: 
            {
                "associateMemberReportData":{"lastPeriod":0,"increased":2,"decreased":1,"comment":null,"personalContact":0},
                "preliminaryMemberReportData":{"lastPeriod":0,"increased":0,"decreased":0,"comment":null,"personalContact":0},
                "supporterMemberReportData":{"lastPeriod":0,"increased":0,"decreased":0,"comment":null,"personalContact":0},
                "memberMemberReportData":{"lastPeriod":0,"increased":3,"decreased":2,"comment":null,"personalContact":0},
                "workerMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "cmsMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "smMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "memberMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "dawahMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "stateLeaderMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "stateOutingMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "iftarMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "learningMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "socialDawahMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "dawahGroupMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "nextGMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "tafsirMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "unitMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "bbqMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "gatheringMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "familyVisitMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "eidReunionMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "otherMeetingProgramReportData":{"actual":0,"averageAttendance":0,"comment":null},
                "groupStudyTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "studyCircleForAssociateMemberTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "studyCircleTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "practiceDarsTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "stateLearningCampTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "quranStudyTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "hadithTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "quranClassTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "weekendIslamicSchoolTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "memorizingAyatTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "memorizingHadithTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "memorizingDoaTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "stateLearningSessionTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "stateQiyamulLailTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "otherTeachingLearningProgramReportData":{"target":0,"dateAndAction":null,"actual":0,"averageAttendance":0,"comment":null},
                "qardeHasanaSocialWelfareReportData":{"actual":0,"comment":null},
                "patientVisitSocialWelfareReportData":{"actual":0,"comment":null},
                "socialVisitSocialWelfareReportData":{"actual":0,"comment":null},
                "transportSocialWelfareReportData":{"actual":0,"comment":null},
                "shiftingSocialWelfareReportData":{"actual":0,"comment":null},
                "shoppingSocialWelfareReportData":{"actual":0,"comment":null},
                "foodDistributionSocialWelfareReportData":{"actual":0,"comment":null},
                "cleanUpAustraliaSocialWelfareReportData":{"actual":0,"comment":null},
                "otherSocialWelfareReportData":{"actual":0,"comment":null},
                "bookSaleMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                "bookDistributionMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                "vhsSaleMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                "vhsDistributionMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                "emailDistributionMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                "ipdcLeafletDistributionMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                "otherSaleMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                "otherDistributionMaterialReportData":{"target":0,"dateAndAction":null,"actual":0,"comment":null},
                "bookLibraryStockReportData":{"lastPeriod":0,"thisPeriod":0,"increased":0,"decreased":0,"comment":null},
                "vhsLibraryStockReportData":{"lastPeriod":0,"thisPeriod":0,"increased":0,"decreased":0,"comment":null},
                "otherLibraryStockReportData":{"lastPeriod":0,"thisPeriod":0,"increased":0,"decreased":0,"comment":null},
                "baitulMalFinanceReportData":
                    {
                        "workerPromiseLastPeriod":{"amount":0,"currency":8},
                        "lastPeriod":{"amount":0,"currency":8},
                        "workerPromiseIncreased":{"amount":0,"currency":8},
                        "workerPromiseDecreased":{"amount":0,"currency":8},
                        "collection":{"amount":0,"currency":8},
                        "expense":{"amount":0,"currency":8},
                        "nisabPaidToCentral":{"amount":0,"currency":8},
                        "comment":null
                    },
                "aDayMasjidProjectFinanceReportData":
                    {
                        "workerPromiseLastPeriod":{"amount":0,"currency":8},
                        "lastPeriod":{"amount":0,"currency":8},
                        "workerPromiseIncreased":{"amount":0,"currency":8},
                        "workerPromiseDecreased":{"amount":0,"currency":8},
                        "collection":{"amount":0,"currency":8},
                        "expense":{"amount":0,"currency":8},
                        "nisabPaidToCentral":{"amount":0,"currency":8},
                        "comment":null
                    },
                "masjidTableBankFinanceReportData":
                    {
                        "workerPromiseLastPeriod":{"amount":0,"currency":8},
                        "lastPeriod":{"amount":0,"currency":8},
                        "workerPromiseIncreased":{"amount":0,"currency":8},
                        "workerPromiseDecreased":{"amount":0,"currency":8},
                        "collection":{"amount":0,"currency":8},
                        "expense":{"amount":0,"currency":8},
                        "nisabPaidToCentral":{"amount":0,"currency":8},
                        "comment":null
                    },
                "comment":null
            }
            
        });
    }

}