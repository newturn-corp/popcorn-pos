import PDFKit from 'pdfkit'

export const drawDivider = (doc: PDFKit.PDFDocument, text?: string) => {
    if (text) {
        const targetY = doc.y
        doc.fontSize(20).moveTo(40, targetY)
            .lineTo(250, targetY)
            .stroke()
            .text(text, 260, targetY - 10, {
                paragraphGap: 10
            })
        doc.moveTo(340, targetY)
            .lineTo(570, targetY)
            .stroke()
    } else {
        doc.moveTo(40, doc.y)
            .lineTo(570, doc.y)
            .stroke()
    }
}
