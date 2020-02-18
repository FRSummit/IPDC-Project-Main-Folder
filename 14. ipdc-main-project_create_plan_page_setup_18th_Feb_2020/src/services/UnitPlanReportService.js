import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:50009/reporting/v1/all';

const token = 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJEUkNSVVkwUkVaQ1JUWTJSREl6TlRkQk1VUTVPVEkyTkRCQ1JqZzBSRU0zUmpBMFF6SkNRUSJ9.eyJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL0lzU3lzdGVtQWRtaW4iOnRydWUsImh0dHBzOi8vcmVwb3J0aW5nbW9kdWxlLmNvbS9jbGFpbXMvSXNTeXN0ZW1Vc2VyIjp0cnVlLCJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL3VzZXJuYW1lIjoicml6d2FudWxAc2ltcGxleGh1Yi5jb20iLCJpc3MiOiJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWQyZWIwYjY5NDk1MjYwZWJjNWQ2YTVmIiwiYXVkIjpbImh0dHA6Ly8zNS4yMDEuMC4zOS8iLCJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTgyMDE4MDEzLCJleHAiOjE1ODIwMjUyMTMsImF6cCI6IjhWbmdrVmI1MWdra0Jadml0U29yZEJONGw4cklPd2V0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwifQ.r8JvfhNT-rleCR6hnm1Rk4bvAlRZrzae92C10qzeoeX0Shaj9e9zaJ2bLRoAz8bbm_XCRVlDe85Hh7TTNxQHR6xWbBCUHNPn8d4ROUUiHpa8MVKm-72ao1ndaJASKHfwDKNHCDRUJZHetzmAmET8ctwrZmK687mHJN-2rp-rtU8iikX3u1kTLArfzmw4-PdMI20OxKzxNfaaTM4ylVKod8RM9dZCDLDttma_sU3SFpln_h3W67Au0W98N9aaDd0o3Ri9qB3YHKJODGIBPSD7f7i5ZX4vPl5oda1myBVXR800pwXxKJ4PB9yZ8bdeiavWDurX4gGYL9AgQhbbpkhZzQ'
// const token = 'Bearer ' + localStorage.getItem('id_token');
console.log(token);

const BASE_URL = "http://localhost:50009/reporting/v1";
const URL = "http://localhost:50009/reporting/v1/all/search?page=1&pageSize=10";

const URL_SEARCH_PAGE = "/all/search?page=1&pageSize=10";
const URL_SEARCH_ORGANIZATION = "/organization/search?page=1&pageSize=10"
const URL_MY_ORGANIZATION = "/organization/myorganizations";
const URL_ORGANIZATION_USER = "/organization/user/search?page=1&pageSize=10";
const URL_PLAN = '/unit/plan/26'
const URL_ReportingPeriodsToCreatePlan = '/reportingperiod/oforganization?organizationId=';

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
    getPlanById() {
        return axios(BASE_URL + URL_PLAN, {
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
}