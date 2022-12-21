import { defaultFont } from './fontInfo'
import PDFKit from 'pdfkit'

export const printOrderMetaInfo = (doc: PDFKit.PDFDocument, orderNumber: string, payMethod: string) => {
    doc
        .font(defaultFont)
        .fontSize(30)
        .text(`주문 번호: ${orderNumber}`, 40)
    doc
        .font(defaultFont)
        .fontSize(30)
        .text(`결제 방법: ${payMethod}`, {
            lineGap: 15
        })
}
