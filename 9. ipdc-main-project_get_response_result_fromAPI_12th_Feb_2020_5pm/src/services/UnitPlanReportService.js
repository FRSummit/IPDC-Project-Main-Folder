import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:50009/reporting/v1/all';

const token = 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJEUkNSVVkwUkVaQ1JUWTJSREl6TlRkQk1VUTVPVEkyTkRCQ1JqZzBSRU0zUmpBMFF6SkNRUSJ9.eyJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL0lzU3lzdGVtQWRtaW4iOnRydWUsImh0dHBzOi8vcmVwb3J0aW5nbW9kdWxlLmNvbS9jbGFpbXMvSXNTeXN0ZW1Vc2VyIjp0cnVlLCJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL3VzZXJuYW1lIjoicml6d2FudWxAc2ltcGxleGh1Yi5jb20iLCJpc3MiOiJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWQyZWIwYjY5NDk1MjYwZWJjNWQ2YTVmIiwiYXVkIjpbImh0dHA6Ly8zNS4yMDEuMC4zOS8iLCJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTgxNDk4NDM1LCJleHAiOjE1ODE1MDU2MzUsImF6cCI6IjhWbmdrVmI1MWdra0Jadml0U29yZEJONGw4cklPd2V0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwifQ.y5p0_KfVBiQ8HwzEnWLFlPk-IaGtr0Mu3Sr0tU0GbafrHwMnsX3qLcELF_x3VBVIlxIG-BAO4n56AS7gaXlaVgMPjPT6x6ybgUe5nct3iHTgd0_2a0dnrSwzfBEpGlxVljcozpci3NhweJymJomIe6HuBh24hGFPegL3fZbO-iu2FxTokm9J49PRMVtmHa2mSDKzrGMqgtzJNmfnBLXi6SeogCjYhK549JU2fO0c1YUzx3dI6SVr_GAmtyWLsDqzS1NDAWgBmTCKjwYg6jIPYttsE5oY1l5JuRgdB18PMhTESaAAaDHxNRyFL_VVG7lzuCHML-jrheAsqxpj7mRDRg'

const BASE_URL = "http://localhost:50009/reporting/v1";
const URL = "http://localhost:50009/reporting/v1/all/search?page=1&pageSize=10";

const URL_SEARCH_PAGE = "/all/search?page=1&pageSize=10";
const URL_SEARCH_ORGANIZATION = "/organization/search?page=1&pageSize=10"
const URL_ORGANIZATION = "/organization/myorganizations";
const URL_ORGANIZATION_USER = "/organization/user/search?page=1&pageSize=10";
const URL_PLAN = '/unit/plan/10'

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
        return axios.get(BASE_URL + URL_ORGANIZATION_USER, {
            headers: {
                   Authorization: token 
               } 
           });
    }
    getPlanById() {
        return axios.get(BASE_URL + URL_PLAN, {
            headers: {
                   Authorization: token 
               } 
           });
    }
}