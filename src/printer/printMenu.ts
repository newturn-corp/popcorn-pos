import { defaultFont } from './fontInfo'
import PDFKit from 'pdfkit'
import { PDFDocumentWithTables } from './PDFDocumentWithTables'

export const printMenu = (doc: PDFDocumentWithTables) => {
    const table0 = {
        headers: ['메뉴', '수량', '가격'],
        rows: [
            ['커플 패키지', '1', '12900'],
            ['+ 오리지널 팝콘', '', ''],
            ['+ 카라멜 팝콘', '', '1500'],
            ['+ 콜라 500ml', '', ''],
            ['+ 콜라 500ml', '', ''],
            ['+ 음료 요청 사항: 컵과 페트 따로 주세요', '', ''],
            ['배달팁', '', '1900'],
            ['합계', '', '15200']
        ]
    }
    doc.table(table0, undefined, undefined, undefined)
}
