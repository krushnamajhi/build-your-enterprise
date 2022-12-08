import axios from 'axios'
import configData from '../appConfig.json'

const ERP_BASE_URL = `${configData.API.BaseUrl}`
const ITEM_API_LIST_URL = ERP_BASE_URL + "/users"
const ITEM_API_CREATE_URL = ERP_BASE_URL + "/createUser"

class UserService {

    findAll(){
        return axios.get(ITEM_API_LIST_URL);
    }

    findById(){
        return axios.post(ITEM_API_CREATE_URL,item)
    }

    delete(){
        return axios.get(ERP_BASE_URL + "/" + itemId)
    }

    update(){
        return axios.put(ERP_BASE_URL + "/" + id, item)
    }

}

export default new UserService();