import PDFDocument from 'pdfkit'
import fs from 'fs'
import { printTitle } from './src/printer/printTitle'
import { printOrderMetaInfo } from './src/printer/printOrderMetaInfo'
import { drawDivider } from './src/printer/drawDivider'
import { printShippingInfo } from './src/printer/shippingInfo'
import { printRequestInfo } from './src/printer/printRequestInfo'
import { PDFDocumentWithTables } from './src/printer/PDFDocumentWithTables'
import { printMenu } from './src/printer/printMenu'
import { printNotice } from './src/printer/printNotice'
import { printExtraInfo } from './src/printer/printExtraInfo'
import { printOrigin } from './src/printer/printOrigin'
const doc = new PDFDocumentWithTables(undefined)
const defaultFont = './Font.ttf'
const outputPath = 'output.pdf'
doc.pipe(fs.createWriteStream(outputPath))
printTitle(doc, '홈팝콘 요기요 주문 전표')
drawDivider(doc, '주문 정보')
printOrderMetaInfo(doc, 'P1DF', '요기요결제완료')
drawDivider(doc, '배송 정보')
printShippingInfo(doc, '서울특별시 노원구 하계동 256 중계주공9단지 아파트 주공 9단지 902동 101호', '서울특별시 노원구 동일로 1365 지하 1층 103호', '0504-4794-5529')
drawDivider(doc, '요청 사항')
printRequestInfo(doc, '카라멜 팝콘 주세요! 일회용 수저 포크는 안 쓸게요~', '문 앞에 놓고 문자 주세요!!')
drawDivider(doc, '주문 메뉴')
printMenu(doc)
drawDivider(doc, '      ')
printExtraInfo(doc, 'B1EE015WYG', '2022.12.20 18:01')
drawDivider(doc, '  원산지')
printOrigin(doc)
drawDivider(doc, '안내 사항')
printNotice(doc)
// printNotice(doc)
// doc.font(defaultFont).fontSize(30).text('주문 번호: V2DK', 30)
// doc.font(defaultFont).fontSize(30).text('결제 방식: 결제 완료')
// doc.fontSize(20).moveTo(0, 225)
//     .lineTo(250, 225) // this is the end point the line
//     .stroke() // here we are formatting it to dash
//     .text('요청 사항', 260, 215) // the text and the position where the it should come
// doc.moveTo(350, 225) // again we are giving a starting position for the text
//     .lineTo(800, 225) // end point
//     .stroke()
// doc.font(defaultFont).fontSize(30).text('가게: 리뷰: 아크림: 갈릭팝콘 주세요~~~~', 30)
// doc.font(defaultFont).fontSize(30).text('배달: 조심히 안전히 와주세요 :)', 30)
// doc.font(defaultFont).fontSize(30).text('친환경: 수저포크 O')
// doc.fontSize(20).moveTo(0, doc.y + 20)
//     .lineTo(250, doc.y + 20) // this is the end point the line
//     .stroke() // here we are formatting it to dash
//     .text('메뉴', 280, doc.y - 10) // the text and the position where the it should come
// doc.moveTo(350, doc.y + 5) // again we are giving a starting position for the text
//     .lineTo(800, doc.y + 5) // end point
//     .stroke()
doc.end()
