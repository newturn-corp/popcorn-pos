import { Interpreter } from './Interpreter'
import { ReceiptInfo } from '../DTO/receiptInfo'

export class BaeminInterpreter implements Interpreter {
    interpret (rawData: string): ReceiptInfo {
        const splitedData = rawData.split('\n')
        const orderNumberInfo = this.getOrderNumber(splitedData)
        const address = this.getAddress(splitedData)
    }

    getOrderNumber (splitedData: string[]) {
        const shortOrderNumberLine = splitedData[1]
        const fullOrderNumberLine = splitedData[splitedData.length - 5]
        const shortOrderNumber = shortOrderNumberLine.split(' ')[1].trim()
        const fullOrderNumber = fullOrderNumberLine.split(':')[1]
        return {
            short: shortOrderNumber,
            full: fullOrderNumber
        }
    }

    getAddress (splitedData: string[]) {
        const oldAddressLine = splitedData[5]
        const newAddressLine = splitedData[6]
        return {
            old: oldAddressLine,
            new: newAddressLine
        }
    }

    getPhone (splitedData: string[]) {
        return splitedData[8]
    }

    getUserRequest (splitedData: string[]) {
        const storeRequestLine = splitedData[13]
        const deliveryRequestLine = splitedData[14]
        const envRequestLine = splitedData[16]
        const storeRequest = storeRequestLine.split(':').slice(1).join('').trim()
        const deliveryRequest = deliveryRequestLine.split(':').slice(1).join('').trim()

        return {
            store: storeRequest + ` (${envRequestLine})`,
            delivery: deliveryRequest
        }
    }

    getMenuList (splitedData: string[]) {
        const menuListLines = splitedData[splitedData.length - 9]
    }

    getDeliveryTip (splitedData: string[]) {
        const tipLine = splitedData[splitedData.length - 9]
        return tipLine.slice(tipLine.length - 5, tipLine.length).trim()
    }

    getTotalPrice (splitedData: string[]) {
        const totalPriceLine = splitedData[splitedData.length - 7]
        return totalPriceLine.slice(totalPriceLine.length - 7, totalPriceLine.length).trim()
    }

    getOrderAt (splitedData: string[]) {
        return splitedData[splitedData.length - 4]
    }
}
