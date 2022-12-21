import { Interpreter } from './Interpreter'
import { BaeminInterpreter } from './baeminInterpreter'

class InterpreterFactory {
    getInterpreter (rawData: string): Interpreter {
        const firstLine = rawData.split('\n')[0]
        if (firstLine.includes('배달 주문전표')) {
            return new BaeminInterpreter()
        }
        return new BaeminInterpreter()
    }
}

export default new InterpreterFactory()
