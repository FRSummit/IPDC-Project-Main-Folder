import axios from 'axios';

// axios.defaults.headers.common['Content-Type'] = 'http://localhost:50009/reporting/v1/all'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

axios.defaults.baseURL = 'http://localhost:50009/reporting/v1/all';
// const apiBasedUrl = "http://localhost:50009/"
// const unitPlanReportURL = '/reporting/v1/unit';

// const url = "http://localhost:50009/reporting/v1/all/search?page=1&pageSize=10";

export default class PostService{
    getAllPosts() {
        // return axios.get(`${apiBasedUrl}/reporting/v1/unit`);
        // return axios.get('/users');
        // return axios.get('/');
        return axios.get('/search?page=1&pageSize=10');

        
    }

}