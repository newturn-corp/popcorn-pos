import { defaultFont } from './fontInfo'
import PDFKit from 'pdfkit'

export const printExtraInfo = (doc: PDFKit.PDFDocument, fullOrderNumber: string, orderAt: string) => {
    doc
        .font(defaultFont)
        .fontSize(20)
        .text(`주문 번호: ${fullOrderNumber}`, 40, undefined, {
            paragraphGap: 5
        })
    doc
        .font(defaultFont)
        .fontSize(20)
        .text(`주문 일시: ${orderAt}`, 40, undefined, {
            paragraphGap: 18
        })
}
