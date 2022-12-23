import InterpreterFactory from './src/interpreter/InterpreterFactory'
import { Printer } from './src/printer/printer'

const rawData =
    `            배달 주문 전표          
\r주문번호 W4NE                       
\r결제방식 결제완료                    
\r-----------------------------------
\r배달주소:
\r서울 노원구 공릉동 702 103동 107호
\r서울 노원구 동일로 1127 103동 107호
\r                
\r연락처:
\r050-37366-5830
\r안심번호는 주문접수 후 최대 3시간 동안 유효합니다.
\r고객정보를 배달목적 외 사용하거나 보관, 공개할 경우 법적처벌을 받을 수 있습니다.
\r-----------------------------------
\r요청사항:
\r가게 : 리뷰이벤트할게요 카라멜 팝콘 부탁드려요 huseong2
\r배달 : 조심히 안전하게 와주세요 :)
\r친환경:
\r수저포크 O
\r-----------------------------------
\r메뉴명                 수량       금액
\r-----------------------------------
\r오징어버터구이 몸통       1       4,900
\r + 이 메뉴는 일회용품 O
\r치즈 팝콘               1       4,200
\r + 레귤러 (Regular)
\r배달팁                          3,500
\r------------------------------------
\r합계(결제완료)                  12,600
\r------------------------------------
\r주문번호:B1EE01W4NE
\r2022.12.20 21:53
\r------------------------------------
\r버터구이오징어(오징어: 페루산)
\r------------------------------------
\r
\r
\r
\r
\rxiBi`

const interpreter = InterpreterFactory.getInterpreter(rawData)
const printer = new Printer()
printer.print(interpreter.interpret(rawData))
