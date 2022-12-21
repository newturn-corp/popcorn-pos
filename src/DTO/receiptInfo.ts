import { MenuInfo } from './menuInfo'

export class ReceiptInfo {
    platform: number
    orderNumber: {
        short: string,
        full: string
    }

    payMethod: string
    address: {
        old: string,
        new: string
    }

    phone: string
    storeRequest: string
    deliveryRequest: string
    menuList: MenuInfo[]
    deliveryTip: number
    totalPrice: number
    orderAt: string

    constructor (platform: number, shortOrderNumber: string, fullOrderNumber: string, payMethod: string, oldAddress: string, newAddress: string, phone: string, storeRequest: string, deliveryRequest: string, menuList: MenuInfo[], deliveryTip: number, totalPrice: number, orderAt: string) {
        this.platform = platform
        this.orderNumber = {
            short: shortOrderNumber,
            full: fullOrderNumber
        }
        this.payMethod = payMethod
        this.address = {
            old: oldAddress,
            new: newAddress
        }
        this.phone = phone
        this.storeRequest = storeRequest
        this.deliveryRequest = deliveryRequest
        this.menuList = menuList
        this.deliveryTip = deliveryTip
        this.totalPrice = totalPrice
        this.orderAt = orderAt
    }
}
