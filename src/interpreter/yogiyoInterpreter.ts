import { Interpreter } from './Interpreter'
import { ReceiptInfo } from '../DTO/receiptInfo'
import { Platform } from '../Types/enum'
import { PaymentDetailInterpreter } from './PaymentDetailInterpreter'

export class YogiyoInterpreter implements Interpreter {
    interpret (rawData: string): ReceiptInfo {
        const splitedData = rawData.split('\r\n')
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
        let shortOrderNumber = null
        let fullOrderNumber = null
        for (const data of splitedData) {
            if (data.includes('주문 번호: ')) {
                const orderNumber = data.replace('주문 번호: ', '')
                if (orderNumber.length < 8) {
                    shortOrderNumber = orderNumber
                } else {
                    fullOrderNumber = orderNumber
                }
                if (shortOrderNumber && fullOrderNumber) {
                    return {
                        short: shortOrderNumber,
                        full: fullOrderNumber
                    }
                }
            }
        }
    }

    getPayMethod (splitedData: string[]) {
        for (const data of splitedData) {
            if (data.includes('결제 방법: ')) {
                return data.replace('결제 방법: ', '')
            }
        }
    }

    getAddress (splitedData: string[]) {
        for (const [index, data] of splitedData.entries()) {
            if (data.includes('배달 주소:')) {
                const oldAddress = splitedData[index + 2].replace('(지번) ', '')
                const newAddress = splitedData[index + 1].replace('(도로명) ', '')
                return {
                    old: oldAddress,
                    new: newAddress
                }
            }
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
        const menuInterpreter = new PaymentDetailInterpreter()
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
