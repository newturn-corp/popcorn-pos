import { defaultFont } from './fontInfo'
import PDFKit from 'pdfkit'
import { ReceiptInfo } from '../DTO/receiptInfo'
import { drawDivider } from './drawDivider'

export class ExtraInfoPrinter {
    printExtraInfo (doc: PDFKit.PDFDocument, receiptInfo: ReceiptInfo) {
        drawDivider(doc, '      ')
        doc
            .font(defaultFont)
            .fontSize(20)
            .text(`주문 번호: ${receiptInfo.orderNumber.full}`, 40, undefined, {
                paragraphGap: 5
            })
        doc
            .font(defaultFont)
            .fontSize(20)
            .text(`주문 일시: ${receiptInfo.orderAt}`, 40, undefined, {
                paragraphGap: 18
            })
    }
}
