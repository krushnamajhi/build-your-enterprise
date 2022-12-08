import axios from 'axios'
import configData from '../appConfig.json'

const ERP_BASE_URL = `${configData.API.BaseUrl}/api/vendor`
const VENDOR_API_LIST_URL = configData.API.BaseUrl + "/api/vendors"
const VENDOR_API_CREATE_URL = ERP_BASE_URL + "/api/create"

class VendorService {

    findAll(){
        return axios.get(VENDOR_API_LIST_URL);
    }

    findById(id){
        return axios.get(VENDOR_API_LIST_URL + "/" + id)
    }

    delete(){
        return axios.get(ERP_BASE_URL + "/" + itemId)
    }

    update(id, item){
        return axios.put(ERP_BASE_URL + "/" + id, item)
    }

    create(item){
        return axios.post(VENDOR_API_CREATE_URL, item)
    }

}

export default new VendorService();