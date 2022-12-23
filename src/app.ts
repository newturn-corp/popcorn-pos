import { SerialPort } from 'serialport'
import iconv from 'iconv-lite'
import InterpreterFactory from './interpreter/InterpreterFactory'
import { BaeminInterpreter } from './interpreter/baeminInterpreter'
import { Printer } from './printer/printer'

const port = new SerialPort({
    path: 'COM30',
    baudRate: 9600,
    autoOpen: true
})

port.on('open', (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('open')
    }
    port.on('data', function (data) {
        const decodedData = iconv.decode(data, 'EUC-KR').toString()
        if (decodedData.length < 20) {
            return
        }
        const interpreter = InterpreterFactory.getInterpreter(decodedData)
        if (interpreter instanceof BaeminInterpreter) {
            const printer = new Printer()
            printer.print(interpreter.interpret(decodedData))
        }
    })
})
