import axios from 'axios'
import configData from '../appConfig.json'

const ERP_BASE_URL = `${configData.API.BaseUrl}/api/employee`
const EMPLOYEE_API_LIST_URL = configData.API.BaseUrl + "/api/employees"
const EMPLOYEE_API_CREATE_URL = ERP_BASE_URL + "/create"
const EMPLOYEE_API_VERIFY_URL = ERP_BASE_URL + "/validatelogIn/"

class EmployeeService {

    findAll(){
        return axios.get(EMPLOYEE_API_LIST_URL);
    }

    findById(id){
        return axios.get(EMPLOYEE_API_LIST_URL + "/" + id)
    }

    delete(){
        return axios.get(ERP_BASE_URL + "/" + itemId)
    }

    update(id, employee){
        return axios.put(ERP_BASE_URL + "/" + id, employee)
    }

    create(employee){
        return axios.post(EMPLOYEE_API_CREATE_URL, employee)
    }

    verifyLogin(email, password)
    {
       return  axios.get(EMPLOYEE_API_VERIFY_URL + `email=${email}&password=${password}`)
    }
}

export default new EmployeeService();