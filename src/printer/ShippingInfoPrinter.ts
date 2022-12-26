import { defaultFont } from './fontInfo'
import PDFKit from 'pdfkit'
import { ReceiptInfo } from '../DTO/receiptInfo'
import { drawDivider } from './drawDivider'

export class ShippingInfoPrinter {
    printShippingInfo (doc: PDFKit.PDFDocument, receiptInfo: ReceiptInfo) {
        drawDivider(doc, '배송 정보')
        doc
            .font(defaultFont)
            .fontSize(50)
            .text(`지번: ${receiptInfo.deliveryInfo.old}`, 0, undefined, {
                paragraphGap: 5
            })
        doc
            .font(defaultFont)
            .fontSize(45)
            .text(`도로명: ${receiptInfo.deliveryInfo.new}`, {
                paragraphGap: 10
            })
        doc
            .font(defaultFont)
            .fontSize(45)
            .text(`연락처: ${receiptInfo.phone}`, {
                paragraphGap: 5
            })
        doc
            .font(defaultFont)
            .fontSize(30)
            .text('안심번호는 주문접수 후 최대 3시간 동안 유효합니다.')
        doc
            .font(defaultFont)
            .fontSize(30)
            .text('고객정보를 배달목적 외 사용하거나 보관, 공개할 경우 법적처벌을 받을 수 있습니다.', {
                paragraphGap: 15
            })
    }
}
