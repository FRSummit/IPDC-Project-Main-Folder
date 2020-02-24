import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:50009/reporting/v1/all';

const token = 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJEUkNSVVkwUkVaQ1JUWTJSREl6TlRkQk1VUTVPVEkyTkRCQ1JqZzBSRU0zUmpBMFF6SkNRUSJ9.eyJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL0lzU3lzdGVtQWRtaW4iOnRydWUsImh0dHBzOi8vcmVwb3J0aW5nbW9kdWxlLmNvbS9jbGFpbXMvSXNTeXN0ZW1Vc2VyIjp0cnVlLCJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL3VzZXJuYW1lIjoicml6d2FudWxAc2ltcGxleGh1Yi5jb20iLCJpc3MiOiJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWQyZWIwYjY5NDk1MjYwZWJjNWQ2YTVmIiwiYXVkIjpbImh0dHA6Ly8zNS4yMDEuMC4zOS8iLCJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTgyNTE0ODUyLCJleHAiOjE1ODI1MjIwNTIsImF6cCI6IjhWbmdrVmI1MWdra0Jadml0U29yZEJONGw4cklPd2V0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwifQ.KmhriNGXonO_tDwifTVN2_uFT6VQ_STI60of9QjQqz9wbgqBKhMvhPY2KA0ve9MfA_CCwwWYJ8fkPEUdfumP2l2a1mlRgaaMz8q6PaRMqmAsNHYVtATfZIHd_NXdSS68n6FM1RvKMUmPew5ky42OIzBiQuSycXGUnlcTu-WGfEaPuOqyCbWkm8KUwlfewkpjOv8x3rMLuer11zQfGce_6l-ZEUvoIKuU04gV4wcwMW0AIzUOe9v5PMOSwH48RO8p0NRiWp52oQzsUeUKiGkLDR1S9j-FXmh0lbcjEGMUaErljtYAIjyJ3TdDXnhSthqsJiXv78IbhQP2c-u1YVgZsg'
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
}