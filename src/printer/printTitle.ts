import { defaultFont } from './fontInfo'
import PDFKit from 'pdfkit'

export const printTitle = (doc: PDFKit.PDFDocument, title: string) => {
    doc.font(defaultFont).fontSize(40).text(title, {
        align: 'center',
        lineGap: 20
    })
}
