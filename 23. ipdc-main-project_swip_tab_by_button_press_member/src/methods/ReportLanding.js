import UnitPlanReportService from '../services/UnitPlanReportService'
const unitPlanReportService = new UnitPlanReportService();

export default class RLP_Methods {
    getingSelectedIdReport() {
        console.log('method from RLP')
    }
    getSelectedPlanById(id) {
        const accessToken = localStorage.getItem('access_token')
        unitPlanReportService
            .getPlanById(id, accessToken)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('selected_plan_details', JSON.stringify(res.data))
            })
            .catch(err =>{
                console.error(err);
            });
    }
    getSelectedReportById(id) {
        const accessToken = localStorage.getItem('access_token')
        unitPlanReportService
            .getReportById(id, accessToken)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('selected_report_details', JSON.stringify(res.data))
            })
            .catch(err =>{
                console.error(err);
            });
    }
}