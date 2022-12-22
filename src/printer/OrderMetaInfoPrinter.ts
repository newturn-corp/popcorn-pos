import { defaultFont } from './fontInfo'
import PDFKit from 'pdfkit'
import { drawDivider } from './drawDivider'
import { ReceiptInfo } from '../DTO/receiptInfo'

export class OrderMetaInfoPrinter {
    printOrderMetaInfo (doc: PDFKit.PDFDocument, receiptInfo: ReceiptInfo) {
        drawDivider(doc, '주문 정보')
        doc
            .font(defaultFont)
            .fontSize(30)
            .text(`주문 번호: ${receiptInfo.orderNumber.short}`, 40)
        doc
            .font(defaultFont)
            .fontSize(30)
            .text(`결제 방법: ${receiptInfo.payMethod}`, {
                lineGap: 15
            })
    }
}
