import { defaultFont } from './fontInfo'
import PDFKit from 'pdfkit'
import { drawDivider } from './drawDivider'
import { ReceiptInfo } from '../DTO/receiptInfo'

export class RequestInfoPrinter {
    printRequestInfo (doc: PDFKit.PDFDocument, receiptInfo: ReceiptInfo) {
        drawDivider(doc, '요청 사항')
        doc
            .font(defaultFont)
            .fontSize(50)
            .text(`가게: ${receiptInfo.storeRequest}`, 0, undefined, {
                paragraphGap: 5
            })
        doc
            .font(defaultFont)
            .text(`배달: ${receiptInfo.deliveryRequest}`, {
                lineGap: 15
            })
    }
}
