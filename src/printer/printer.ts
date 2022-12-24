import { ReceiptInfo } from '../DTO/receiptInfo'
import { PDFDocumentWithTables } from './PDFDocumentWithTables'
import fs from 'fs'
import { TitlePrinter } from './TitlePrinter'
import { OrderMetaInfoPrinter } from './OrderMetaInfoPrinter'
import { ShippingInfoPrinter } from './ShippingInfoPrinter'
import { RequestInfoPrinter } from './RequestInfoPrinter'
import { MenuPrinter } from './MenuPrinter'
import { OriginPrinter } from './OriginPrinter'
import { ExtraInfoPrinter } from './ExtraInfoPrinter'
import { NoticePrinter } from './NoticePrinter'
import { WinPrinter } from '../Utils/node-native-printer/src/windowsPrinter'

export class Printer {
    private readonly outputPath: string
    private readonly doc: PDFDocumentWithTables
    private titlePrinter: TitlePrinter
    private orderMetaInfoPrinter: OrderMetaInfoPrinter
    private shippingInfoPrinter: ShippingInfoPrinter
    private requestInfoPrinter: RequestInfoPrinter
    private menuPrinter: MenuPrinter
    private extraInfoPrinter: ExtraInfoPrinter
    private originPrinter: OriginPrinter
    private noticePrinter: NoticePrinter

    constructor () {
        this.doc = new PDFDocumentWithTables({
            size: [600, 5000],
            margin: 0
        })
        this.outputPath = `${Math.random()}.pdf`
        this.doc.pipe(fs.createWriteStream('test.pdf'))
        this.titlePrinter = new TitlePrinter()
        this.orderMetaInfoPrinter = new OrderMetaInfoPrinter()
        this.shippingInfoPrinter = new ShippingInfoPrinter()
        this.requestInfoPrinter = new RequestInfoPrinter()
        this.menuPrinter = new MenuPrinter()
        this.extraInfoPrinter = new ExtraInfoPrinter()
        this.originPrinter = new OriginPrinter()
        this.noticePrinter = new NoticePrinter()
    }

    async print (receiptInfo: ReceiptInfo) {
        this.titlePrinter.printTitle(this.doc, receiptInfo)
        this.orderMetaInfoPrinter.printOrderMetaInfo(this.doc, receiptInfo)
        this.shippingInfoPrinter.printShippingInfo(this.doc, receiptInfo)
        this.requestInfoPrinter.printRequestInfo(this.doc, receiptInfo)
        this.menuPrinter.printMenu(this.doc, receiptInfo)
        this.extraInfoPrinter.printExtraInfo(this.doc, receiptInfo)
        this.originPrinter.printOrigin(this.doc)
        this.noticePrinter.printNotice(this.doc)
        this.doc.end()
        const resultDoc = new PDFDocumentWithTables({
            size: [600, this.doc.y + 50],
            margin: 0
        })
        resultDoc.pipe(fs.createWriteStream(this.outputPath))
        this.titlePrinter.printTitle(resultDoc, receiptInfo)
        this.orderMetaInfoPrinter.printOrderMetaInfo(resultDoc, receiptInfo)
        this.shippingInfoPrinter.printShippingInfo(resultDoc, receiptInfo)
        this.requestInfoPrinter.printRequestInfo(resultDoc, receiptInfo)
        this.menuPrinter.printMenu(resultDoc, receiptInfo)
        this.extraInfoPrinter.printExtraInfo(resultDoc, receiptInfo)
        this.originPrinter.printOrigin(resultDoc)
        this.noticePrinter.printNotice(resultDoc)
        resultDoc.end()
        const printer = new WinPrinter()
        printer.setPrinter('SLK-TS100 (copy 1)')
        await printer.print(this.outputPath)
        fs.unlinkSync(this.outputPath)
    }
}
