import PDFKit from 'pdfkit'

export const drawDivider = (doc: PDFKit.PDFDocument, text?: string) => {
    if (text) {
        const targetY = doc.y
        doc.fontSize(30).moveTo(0, targetY)
            .lineTo(230, targetY)
            .stroke()
            .text(text, 240, targetY - 15, {
                paragraphGap: 10
            })
        doc.moveTo(360, targetY)
            .lineTo(600, targetY)
            .stroke()
    } else {
        doc.moveTo(0, doc.y)
            .lineTo(600, doc.y)
            .stroke()
    }
}
