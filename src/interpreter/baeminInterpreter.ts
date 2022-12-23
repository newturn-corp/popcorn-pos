import { Interpreter } from './Interpreter'
import { ReceiptInfo } from '../DTO/receiptInfo'
import { MenuInterpreter } from './MenuInterpreter'
import { Platform } from '../Types/enum'

export class BaeminInterpreter implements Interpreter {
    interpret (rawData: string): ReceiptInfo {
        const splitedData = rawData.split('\n\r')
        console.log(splitedData)
        const orderNumberInfo = this.getOrderNumber(splitedData)
        const address = this.getAddress(splitedData)
        const orderAt = this.getOrderAt(splitedData)
        const payMethod = this.getPayMethod(splitedData)
        const phone = this.getPhone(splitedData)
        const request = this.getUserRequest(splitedData)
        const deliveryTip = this.getDeliveryTip(splitedData)
        const totalPrice = this.getTotalPrice(splitedData)
        const menuList = this.getMenuList(splitedData)
        return new ReceiptInfo(
            Platform.BAEMIN,
            orderNumberInfo.short,
            orderNumberInfo.full,
            payMethod,
            address.old,
            address.new,
            phone,
            request.store,
            request.delivery,
            menuList,
            deliveryTip,
            totalPrice,
            orderAt
        )
    }

    getOrderNumber (splitedData: string[]) {
        const shortOrderNumberLine = splitedData[1]
        const fullOrderNumberLine = splitedData[splitedData.length - 10]
        const shortOrderNumber = shortOrderNumberLine.split(' ')[1].trim()
        const fullOrderNumber = fullOrderNumberLine.split(':')[1]
        return {
            short: shortOrderNumber,
            full: fullOrderNumber
        }
    }

    getPayMethod (splitedData: string[]) {
        const payMethodLine = splitedData[2]
        const payMethod = payMethodLine.split(' ').slice(1).join('').trim()
        return payMethod
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
        return splitedData[9]
    }

    getUserRequest (splitedData: string[]) {
        const storeRequestLine = splitedData[14]
        const deliveryRequestLine = splitedData[15]
        const envRequestLine = splitedData[17]
        const storeRequest = storeRequestLine.slice(4, storeRequestLine.length).trim()
        const deliveryRequest = deliveryRequestLine.slice(4, deliveryRequestLine.length).trim()

        return {
            store: storeRequest + ` (${envRequestLine})`,
            delivery: deliveryRequest
        }
    }

    getMenuList (splitedData: string[]) {
        const menuInterpreter = new MenuInterpreter()
        return menuInterpreter.getBaeminMenuList(splitedData)
    }

    getDeliveryTip (splitedData: string[]) {
        const tipLine = splitedData[splitedData.length - 14]
        return Number(tipLine.slice(tipLine.length - 5, tipLine.length).trim().replace(',', ''))
    }

    getTotalPrice (splitedData: string[]) {
        const totalPriceLine = splitedData[splitedData.length - 12]
        return Number(totalPriceLine.slice(totalPriceLine.length - 7, totalPriceLine.length).trim().replace(',', ''))
    }

    getOrderAt (splitedData: string[]) {
        return splitedData[splitedData.length - 9]
    }
}
