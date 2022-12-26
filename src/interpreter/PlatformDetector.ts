import { Platform } from '../Types/enum'

export class PlatformDetector {
    detect (rawData: string) {
        if (rawData.includes('배민1 주문전표')) {
            return Platform.BAEMIN_1
        } else if (rawData.includes('배달 주문전표')) {
            return Platform.BAEMIN
        }
    }
}
