import axios from 'axios'
import configData from '../appConfig.json'

const ERP_BASE_URL = `${configData.API.BaseUrl}/api/account`
const ACCOUNT_API_LIST_URL = configData.API.BaseUrl + "/api/accounts"
const ACCOUNT_API_CREATE_URL = ERP_BASE_URL + "/create"

class ItemService {

    findAll(){
        return axios.get("http://127.0.0.1:8000/api/accounts");
    }

    findById(id){
        return axios.get(ACCOUNT_API_LIST_URL + "/" + id)
    }

    delete(){
        return axios.get(ERP_BASE_URL + "/" + itemId)
    }

    update(id, item){
        return axios.put(ERP_BASE_URL + "/" + id, item)
    }

    create(item){
        return axios.post(ACCOUNT_API_CREATE_URL, item)
    }

}

export default new ItemService();