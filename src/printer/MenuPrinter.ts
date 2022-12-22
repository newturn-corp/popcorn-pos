import { PDFDocumentWithTables } from './PDFDocumentWithTables'
import { ReceiptInfo } from '../DTO/receiptInfo'
import { drawDivider } from './drawDivider'

export class MenuPrinter {
    generateMenuRows (receiptInfo: ReceiptInfo) {
        return receiptInfo.menuList.reduce<string[][]>((prev, menu) => {
            const rows: string[][] = []
            rows.push([menu.menuName, menu.count.toString(), menu.price.toLocaleString()])
            for (const option of menu.options) {
                rows.push([` + ${option.optionName}`, '', option.price ? option.price.toLocaleString() : ''])
            }
            return [...prev, ...rows]
        }, [])
    }

    printMenu (doc: PDFDocumentWithTables, receiptInfo: ReceiptInfo) {
        drawDivider(doc, '주문 메뉴')
        const rows = this.generateMenuRows(receiptInfo)
        rows.push(['배달팁', '', receiptInfo.deliveryTip.toLocaleString()])
        rows.push(['합계', '', receiptInfo.totalPrice.toLocaleString()])
        const
            table0 = {
                headers: ['메뉴', '수량', '가격'],
                rows
            }
        doc
            .table(table0, undefined, undefined, undefined)
    }
}
