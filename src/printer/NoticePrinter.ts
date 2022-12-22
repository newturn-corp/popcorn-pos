import { defaultFont } from './fontInfo'
import { PDFDocumentWithTables } from './PDFDocumentWithTables'
import { drawDivider } from './drawDivider'

export class NoticePrinter {
    printNotice (doc: PDFDocumentWithTables) {
        drawDivider(doc, '안내 사항')
        doc
            .font(defaultFont)
            .fontSize(20)
            .text('주문해주셔서 감사합니다. 혹여나 음식 또는 배송에 문제가 있었다면, 070-7774-0007로 연락 주세요! 최대한 빠르게 처리해드리겠습니다.', 40, undefined, {
                paragraphGap: 10
            })
        doc
            .font(defaultFont)
            .fontSize(20)
            .text('홈팝콘의 서비스에 대한 의견이나 개선 사항을 전달하고 싶으시다면 아래 카카오톡 채널 또는 인스타그램 DM으로 전달 부탁드립니다! 보내주신 의견은 서비스 품질 향상을 위해 소중히 경청하겠습니다!', {
                paragraphGap: 10
            })
        doc.image('qrcode_350.png', 40, undefined, {
            align: 'center',
            width: 100
        })
    }
}
