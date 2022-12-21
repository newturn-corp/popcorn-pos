import { ReceiptInfo } from '../DTO/receiptInfo'

export interface Interpreter {
    interpret(rawData: string): ReceiptInfo
}
