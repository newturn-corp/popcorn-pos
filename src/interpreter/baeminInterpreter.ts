import { Interpreter } from './Interpreter'
import { ReceiptInfo } from '../DTO/receiptInfo'
import { PaymentDetailInterpreter } from './PaymentDetailInterpreter'
import { Platform } from '../Types/enum'
import { OrderMetaInfoInterpreter } from './OrderMetaInfoInterpreter'
import { DeliveryInfoInterpreter } from './DeliveryInfoInterpreter'
import { RequestInfoInterpreter } from './RequestInfoInterpreter'

export class BaeminInterpreter implements Interpreter {
    interpret (rawData: string): ReceiptInfo {
        const splitedData = rawData.split('\n\r')
        const orderMetaInfo = new OrderMetaInfoInterpreter().getBaeminOrderMetaInfo(splitedData)
        const deliveryInfo = new DeliveryInfoInterpreter().getBaeminDeliveryInfo(splitedData)
        const requestInfo = new RequestInfoInterpreter().getBaeminRequestInfo(splitedData)
        const orderAt = this.getOrderAt(splitedData)
        const deliveryTip = this.getDeliveryTip(splitedData)
        const totalPrice = this.getTotalPrice(splitedData)
        const menuList = new PaymentDetailInterpreter().getBaeminMenuList(splitedData)
        return new ReceiptInfo(
            Platform.BAEMIN,
            orderMetaInfo,
            deliveryInfo,
            requestInfo,
            menuList,
            deliveryTip,
            totalPrice,
            orderAt
        )
    }

    getDeliveryTip (splitedData: string[]) {
        const tipLine = splitedData[splitedData.length - 14]
        return Number(tipLine.slice(tipLine.length - 5, tipLine.length).trim().replace(',', ''))
    }

    getTotalPrice (splitedData: string[]) {
        const totalPriceLine = splitedData[splitedData.length - 12]
        return Number(totalPriceLine.slice(totalPriceLine.length - 7, totalPriceLine.length).trim().replace(',', ''))
    }
}
