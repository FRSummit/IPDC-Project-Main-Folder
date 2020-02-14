import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:50009/reporting/v1/all';

const token = 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJEUkNSVVkwUkVaQ1JUWTJSREl6TlRkQk1VUTVPVEkyTkRCQ1JqZzBSRU0zUmpBMFF6SkNRUSJ9.eyJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL0lzU3lzdGVtQWRtaW4iOnRydWUsImh0dHBzOi8vcmVwb3J0aW5nbW9kdWxlLmNvbS9jbGFpbXMvSXNTeXN0ZW1Vc2VyIjp0cnVlLCJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL3VzZXJuYW1lIjoicml6d2FudWxAc2ltcGxleGh1Yi5jb20iLCJpc3MiOiJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWQyZWIwYjY5NDk1MjYwZWJjNWQ2YTVmIiwiYXVkIjpbImh0dHA6Ly8zNS4yMDEuMC4zOS8iLCJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTgxNjcwMTk5LCJleHAiOjE1ODE2NzczOTksImF6cCI6IjhWbmdrVmI1MWdra0Jadml0U29yZEJONGw4cklPd2V0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwifQ.mwmnh9xwK4FjY1vv0UYbxAT7_214bLzDTdhCo0wC-mjIdl5kc_2JVg5cctMDpYVXJmnzA_AC5gkPGen40Let8_jDkLCHAfgDaCFbGa8INq_oVjerf879yHkehU3prrpBAhH5Gvmsv3Dozd9o5sGJDZICm3tZq2_KakYLSMWv-fTA_OklQzkvniglRMklNBBk83aT0qsuGIcfF_QZ0jmS161t9NDaM56zO_lNp_lUN3Xpj3hvr35oCbLX7Epfxa_S7Jl5LmroOauD9nKjpsbQxLd7q8WlbbmWsTC-fv5MXBasrkILrA1sJwllVQeml_IUgAXKFoYdwxxm71rUxvk_JQ'

const BASE_URL = "http://localhost:50009/reporting/v1";
const URL = "http://localhost:50009/reporting/v1/all/search?page=1&pageSize=10";

const URL_SEARCH_PAGE = "/all/search?page=1&pageSize=10";
const URL_SEARCH_ORGANIZATION = "/organization/search?page=1&pageSize=10"
const URL_ORGANIZATION = "/organization/myorganizations";
const URL_ORGANIZATION_USER = "/organization/user/search?page=1&pageSize=10";
const URL_PLAN = '/unit/plan/4'

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
    getOrganization() {
        return axios.get(BASE_URL + URL_ORGANIZATION, {
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
        const headers = new Headers();
        headers.set("Authorization", token);
        headers.set("SignalRConnectionId", '8ce05f33-570c-4b0c-9abd-b2252d3fcc08');
        headers.set("Accept", "application/json");
        headers.set("Content-Type", "application/json");
        console.log(link);
        console.log(datas.id);

        return axios(link, {
            // headers: {
            //        Authorization: token,
            //        'SignalRConnectionId': '8ce05f33-570c-4b0c-9abd-b2252d3fcc08',
            //        'Accept': 'application/json',
            //        'Content-Type': 'application/json'
            //    },
            headers: headers,
            method: 'POST',
            data: {
                    id: datas.id, 
                    organizationType: datas.organizationType, 
                    description: datas.description, 
                    reportingFrequency: datas.reportingFrequency, 
                    details: datas.details
                },
        });
    }
}