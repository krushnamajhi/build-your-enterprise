import axios from 'axios'
import configData from '../appConfig.json'

const ERP_BASE_URL = `${configData.API.BaseUrl}/api/unit`
const UNIT_API_LIST_URL =`${configData.API.BaseUrl}/api/units`
const UNIT_API_CREATE_URL = ERP_BASE_URL + "/create"

class UnitService {

    findAll(){
        return axios.get(UNIT_API_LIST_URL);
    }

    findById(id){
        return axios.get(UNIT_API_LIST_URL + "/" + id)
    }

    delete(id){
        return axios.get(ERP_BASE_URL + "/" + id)
    }

    update(id, unit){
        return axios.put(ERP_BASE_URL + "/" + id, unit)
    }

    create(unit){
        return axios.post(UNIT_API_CREATE_URL, unit)
    }
}

export default new UnitService();