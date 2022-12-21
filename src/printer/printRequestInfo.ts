import { defaultFont } from './fontInfo'
import PDFKit from 'pdfkit'

export const printRequestInfo = (doc: PDFKit.PDFDocument, storeRequest: string, deliveryRequest: string) => {
    doc
        .font(defaultFont)
        .fontSize(30)
        .text(`가게: ${storeRequest}`, 40, undefined, {
            paragraphGap: 5
        })
    doc
        .font(defaultFont)
        .fontSize(30)
        .text(`배달: ${deliveryRequest}`, {
            lineGap: 15
        })
}
