import { defaultFont } from './fontInfo'
import PDFKit from 'pdfkit'

export const printShippingInfo = (doc: PDFKit.PDFDocument, oldAddress: string, newAddress: string, phone: string) => {
    doc
        .font(defaultFont)
        .fontSize(30)
        .text(`지번: ${oldAddress}`, 40, undefined, {
            paragraphGap: 5
        })
    doc
        .font(defaultFont)
        .fontSize(25)
        .text(`도로명: ${newAddress}`, {
            paragraphGap: 10
        })
    doc
        .font(defaultFont)
        .fontSize(25)
        .text(`연락처: ${phone}`, {
            paragraphGap: 5
        })
    doc
        .font(defaultFont)
        .fontSize(20)
        .text('안심번호는 주문접수 후 최대 3시간 동안 유효합니다.')
    doc
        .font(defaultFont)
        .fontSize(20)
        .text('고객정보를 배달목적 외 사용하거나 보관, 공개할 경우 법적처벌을 받을 수 있습니다.', {
            paragraphGap: 15
        })
}
