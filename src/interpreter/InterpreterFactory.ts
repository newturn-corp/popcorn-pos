import { Interpreter } from './Interpreter'
import { BaeminInterpreter } from './baeminInterpreter'

class InterpreterFactory {
    getInterpreter (rawData: string): Interpreter | undefined {
        const splitedData = rawData.split('\n\r')
        const firstLine = splitedData[0]
        if (firstLine.includes('배달 주문전표')) {
            return new BaeminInterpreter()
        }
    }
}

export default new InterpreterFactory()
