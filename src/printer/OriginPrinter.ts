import { defaultFont } from './fontInfo'
import { PDFDocumentWithTables } from './PDFDocumentWithTables'
import { drawDivider } from './drawDivider'

export class OriginPrinter {
    printOrigin (doc: PDFDocumentWithTables) {
        drawDivider(doc, '  원산지')
        doc
            .font(defaultFont)
            .fontSize(20)
            .text('버터구이오징어(오징어: 페루산), 치킨(닭고기:브라질산,미국산,덴마크산 섞음),붕어빵(쌀가루: 국내산, 팥앙금: 중국산)', 40, undefined, {
                paragraphGap: 18
            })
    }
}
