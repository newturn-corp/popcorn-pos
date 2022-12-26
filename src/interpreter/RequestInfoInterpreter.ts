import { RequestInfo } from '../DTO/receiptInfo'

export class RequestInfoInterpreter {
    getBaeminRequestInfo (splitedData: string[]) {
        let storeRequest = null
        let riderRequest = null
        let envRequest = null
        for (const [index, data] of splitedData.entries()) {
            if (!storeRequest && data.includes('가게 : ')) {
                storeRequest = data.replace('가게 : ', '')
                continue
            }
            if (!riderRequest && data.includes('배달 : ')) {
                riderRequest = data.replace('배달 : ', '')
                continue
            }
            if (!envRequest && data.includes('친환경:')) {
                if (splitedData[index + 1].includes('X')) {
                    envRequest = false
                } else {
                    envRequest = true
                }
                return new RequestInfo(
                    storeRequest as string,
                    riderRequest as string,
                    envRequest
                )
            }
        }
        throw new Error('Baemin RequestInfo Interpreting Failed')
    }

    getBaeminOneDeliveryInfo (splitedData: string[]) {
        return this.getBaeminRequestInfo(splitedData)
    }
}
