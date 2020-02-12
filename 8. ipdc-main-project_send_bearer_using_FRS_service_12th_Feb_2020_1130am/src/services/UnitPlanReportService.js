import axios from 'axios';

// axios.defaults.headers.common['Content-Type'] = 'http://localhost:50009/reporting/v1/all'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

axios.defaults.baseURL = 'http://localhost:50009/reporting/v1/all';
// const apiBasedUrl = "http://localhost:50009/"
// const unitPlanReportURL = '/reporting/v1/unit';

// const url = "http://localhost:50009/reporting/v1/all/search?page=1&pageSize=10";

const token = 'Bearer ' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJEUkNSVVkwUkVaQ1JUWTJSREl6TlRkQk1VUTVPVEkyTkRCQ1JqZzBSRU0zUmpBMFF6SkNRUSJ9.eyJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL0lzU3lzdGVtQWRtaW4iOnRydWUsImh0dHBzOi8vcmVwb3J0aW5nbW9kdWxlLmNvbS9jbGFpbXMvSXNTeXN0ZW1Vc2VyIjp0cnVlLCJodHRwczovL3JlcG9ydGluZ21vZHVsZS5jb20vY2xhaW1zL3VzZXJuYW1lIjoicml6d2FudWxAc2ltcGxleGh1Yi5jb20iLCJpc3MiOiJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NWQyZWIwYjY5NDk1MjYwZWJjNWQ2YTVmIiwiYXVkIjpbImh0dHA6Ly8zNS4yMDEuMC4zOS8iLCJodHRwczovL2Rldi1udXpmcTU2My5hdS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNTgxNDc4NzU2LCJleHAiOjE1ODE0ODU5NTYsImF6cCI6IjhWbmdrVmI1MWdra0Jadml0U29yZEJONGw4cklPd2V0Iiwic2NvcGUiOiJvcGVuaWQgZW1haWwifQ.M2R0DKE5sVMIYIWoqSH8DbZHUwGUwxkmnz7W9m_7QDM4YWo0-F9pzcMCkyXxH8GeJk-JmBA1lKitmJP-VesC0hOtzwASHaK3b9RV1yHu2_NucR-YuSQDgbjwuTB_McY_IIbGnd6ogG6CIxeXcwAUOnvRGb3CvDyduFCWC-aMbZVp-UImvzcFBxPveZ9dtCMaMquygyRkgvvvwBaO3k0fDqCv5z4dSe3i4k4V4_5GHygpYca1h0U4uMWHhpz4E8jE6ZkImw41X8FFe3tawLs31XyO_9pSXPCpDovPUi_5d8dKGoyGwem288oZSKwtX1Ehh_e6zLspkz1RHGUnO4r3yw';
const URL = "http://localhost:50009/reporting/v1/all/search?page=1&pageSize=10";

export default class PostService{
    getAllPosts() {
        // return axios.get(`${apiBasedUrl}/reporting/v1/unit`);
        // return axios.get('/users');
        // return axios.get('/');
        // return axios.get('/search?page=1&pageSize=10');
        return axios.get(URL, {
            headers: {
                   Authorization: token 
               } 
           });

        
    }

}