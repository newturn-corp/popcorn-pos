import { Interpreter } from './Interpreter'
import { BaeminInterpreter } from './baeminInterpreter'
import { PlatformDetector } from './PlatformDetector'
import { Platform } from '../Types/enum'
// import { BaeminOneInterpreter } from './BaeminOneInterpreter'

class InterpreterFactory {
    getInterpreter (rawData: string): Interpreter {
        const detector = new PlatformDetector()
        switch (detector.detect(rawData)) {
        case Platform.BAEMIN:
            return new BaeminInterpreter()
        }
        // case Platform.BAEMIN_1:
        //     return new BaeminOneInterpreter()
        // }
        throw new Error('Unhandled Interpreter')
    }
}

export default new InterpreterFactory()
