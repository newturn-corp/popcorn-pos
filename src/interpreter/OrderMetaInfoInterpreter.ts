import { OrderMetaInfo } from '../DTO/receiptInfo'
import moment from 'moment-timezone'

export class OrderMetaInfoInterpreter {
    getBaeminOrderMetaInfo (splitedData: string[]) {
        const payMethodLine = splitedData[2]
        const payMethod = payMethodLine.split(' ').slice(1).join('').trim()
        const orderAt = moment(splitedData[splitedData.length - 9])

        let shortOrderNumber
        let longOrderNumber
        for (const data of splitedData) {
            if (data.includes('주문번호')) {
                if (!shortOrderNumber) {
                    shortOrderNumber = data.split(' ')[1]
                    continue
                }
                if (!longOrderNumber) {
                    longOrderNumber = data.split(':')[1]
                    return new OrderMetaInfo(
                        shortOrderNumber,
                        longOrderNumber,
                        payMethod,
                        orderAt
                    )
                }
            }
        }
        throw new Error('Unhandled Baemin Order Meta Info')
    }

    getBaeminOneOrderMetaInfo (splitedData: string[]) {
        const payMethodLine = splitedData[4]
        const payMethod = payMethodLine.split(' ').slice(1).join('').trim()
        const orderAt = moment(splitedData[splitedData.length - 9])

        let shortOrderNumber
        let longOrderNumber
        for (const data of splitedData) {
            if (data.includes('주문번호')) {
                if (!shortOrderNumber) {
                    shortOrderNumber = data.split(' ')[1]
                    continue
                }
                if (!longOrderNumber) {
                    longOrderNumber = data.split(':')[1]
                    return new OrderMetaInfo(
                        shortOrderNumber,
                        longOrderNumber,
                        payMethod,
                        orderAt
                    )
                }
            }
        }
        throw new Error('Unhandled Baemin1 Order Meta Info')
    }
}
