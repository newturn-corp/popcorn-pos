import { MenuInfo, OptionInfo } from '../DTO/menuInfo'
import { DeliveryInfo } from '../DTO/receiptInfo'

export class DeliveryInfoInterpreter {
    getBaeminDeliveryInfo (splitedData: string[]) {
        const oldAddressLine = splitedData[5]
        const newAddressLine = splitedData[6]
        const phone = splitedData[9]
        return new DeliveryInfo(
            phone,
            null,
            oldAddressLine,
            newAddressLine
        )
    }

    getBaeminOneDeliveryInfo (splitedData: string[]) {
        for (const [index, data] of splitedData.entries()) {
            if (data.includes('배달주소:')) {
                return new DeliveryInfo(
                    null,
                    splitedData[index + 1],
                    null,
                    null
                )
            }
        }
    }
}
