import InterpreterFactory from './src/interpreter/InterpreterFactory'
import { Printer } from './src/printer/printer'
import { sampleBaeminData } from './src/sampleData'

const rawData = sampleBaeminData

const interpreter = InterpreterFactory.getInterpreter(rawData)
const printer = new Printer()
printer.print(interpreter.interpret(rawData))
