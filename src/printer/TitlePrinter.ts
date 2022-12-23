import { ReceiptInfo } from '../DTO/receiptInfo'
import PDFKit from 'pdfkit'
import { defaultFont } from './fontInfo'

export class TitlePrinter {
    private getTitleText (platform: number) {
        if (platform === 0) {
            return '홈팝콘 배민 주문 전표'
        } else if (platform === 1) {
            return '홈팝콘 요기요 주문 전표'
        } else if (platform === 2) {
            return '홈팝콘 쿠팡 주문 전표'
        }
        throw new Error('Unhandled Platform In Title Printer')
    }

    printTitle (doc: PDFKit.PDFDocument, receiptInfo: ReceiptInfo) {
        doc.font(defaultFont).fontSize(55).text(this.getTitleText(receiptInfo.platform), {
            align: 'center',
            lineGap: 20
        })
    }
}
