import { defaultFont } from './fontInfo'
import PDFKit from 'pdfkit'
import { ReceiptInfo } from '../DTO/receiptInfo'
import { drawDivider } from './drawDivider'

export class ExtraInfoPrinter {
    printExtraInfo (doc: PDFKit.PDFDocument, receiptInfo: ReceiptInfo) {
        drawDivider(doc, '      ')
        doc
            .font(defaultFont)
            .fontSize(30)
            .text(`주문 번호: ${receiptInfo.orderMetaInfo.fullOrderNumber}`, 0, undefined, {
                paragraphGap: 5
            })
        doc
            .font(defaultFont)
            .fontSize(30)
            .text(`주문 일시: ${receiptInfo.orderAt}`, 0, undefined, {
                paragraphGap: 18
            })
    }
}
