import axios from 'axios'
import configData from '../appConfig.json'

const ERP_BASE_URL = `${configData.API.BaseUrl}/api/purchaseorders`
const PO_API_LIST_URL = configData.API.BaseUrl + "/api/purchaseorders"
const ITEM_API_CREATE_URL = ERP_BASE_URL + "/create"

class PurchaseReceiptService {

    findAll(){
        return axios.get(PO_API_LIST_URL);
    }

    findById(id){
        return axios.get(PO_API_LIST_URL + "/" + id)
    }

    delete(){
        return axios.get(ERP_BASE_URL + "/" + itemId)
    }

    update(id, item){
        return axios.put(ERP_BASE_URL + "/" + id, item)
    }

    create(item){
        return axios.post(ITEM_API_CREATE_URL, item)
    }

}

export default new PurchaseReceiptService();