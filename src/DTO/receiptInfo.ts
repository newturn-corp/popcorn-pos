import { MenuInfo } from './menuInfo'
import sinonChai from 'sinon-chai'
import { Moment } from 'moment-timezone'

export class DeliveryInfo {
    phone: string | null
    singleAddress: string | null
    oldAddress: string | null
    newAddress: string | null

    constructor (
        phone: string | null,
        singleAddress: string | null,
        oldAddress: string | null,
        newAddress: string | null
    ) {
        this.phone = phone
        this.singleAddress = singleAddress
        this.oldAddress = oldAddress
        this.newAddress = newAddress
    }
}

export class OrderMetaInfo {
    shortOrderNumber: string
    fullOrderNumber: string
    payMethod: string
    orderAt: Moment

    constructor (
        shortOrderNumber: string,
        longOrderNumber: string,
        payMethod: string,
        orderAt: Moment
    ) {
        this.shortOrderNumber = shortOrderNumber
        this.fullOrderNumber = longOrderNumber
        this.payMethod = payMethod
        this.orderAt = orderAt
    }
}

export class RequestInfo {
    store: string
    rider: string
    environment: boolean

    constructor (
        store: string,
        rider: string,
        environment: boolean
    ) {
        this.store = store
        this.rider = rider
        this.environment = environment
    }
}

export class PaymentDetailInfo {
    menuList: MenuInfo[]
    deliveryTip: number
    totalPrice: number
    extraPaymentNotice: string | null

    constructor (menuList: MenuInfo[], deliveryTip: number, totalPrice: number, extraPaymentNotice: string | null = null) {
        this.menuList = menuList
        this.deliveryTip = deliveryTip
        this.totalPrice = totalPrice
        this.extraPaymentNotice = extraPaymentNotice
    }
}

export class ReceiptInfo {
    platform: number
    orderMetaInfo: OrderMetaInfo
    deliveryInfo: DeliveryInfo
    requestInfo: RequestInfo

    constructor (
        platform: number,
        orderMetaInfo: OrderMetaInfo,
        deliveryInfo: DeliveryInfo,
        requestInfo: RequestInfo,
        menuList: MenuInfo[],
        deliveryTip: number,
        totalPrice: number,
        orderAt: string
    ) {
        this.platform = platform
        this.orderMetaInfo = orderMetaInfo
        this.deliveryInfo = deliveryInfo
        this.requestInfo = requestInfo
        this.menuList = menuList
        this.deliveryTip = deliveryTip
        this.totalPrice = totalPrice
        this.orderAt = orderAt
    }
}
