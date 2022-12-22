/* eslint-env mocha */
import chai from 'chai'
import sinonChai from 'sinon-chai'
import { BaeminInterpreter } from '../interpreter/baeminInterpreter'
import InterpreterFactory from '../interpreter/InterpreterFactory'

chai.use(sinonChai)
const expect = chai.expect
describe('Interpreter', () => {
    describe('BaeminInterpreter', () => {
        it('배민 인터프리터', () => {
            const rawData =
                `            배달 주문 전표          
주문번호 W4NE                       
결제방식 결제완료                    
-----------------------------------
배달주소:
서울 노원구 공릉동 702 103동 107호
서울 노원구 동일로 1127 103동 107호
                
연락처:
050-37366-5830
안심번호는 주문접수 후 최대 3시간 동안 유효합니다.
고객정보를 배달목적 외 사용하거나 보관, 공개할 경우 법적처벌을 받을 수 있습니다.
-----------------------------------
요청사항:
가게 : 리뷰이벤트할게요 카라멜 팝콘 부탁드려요 huseong2
배달 : 조심히 안전하게 와주세요 :)
친환경:
수저포크 O
-----------------------------------
메뉴명                 수량       금액
-----------------------------------
오징어버터구이 몸통       1       4,900
 + 이 메뉴는 일회용품 O
치즈 팝콘               1       4,200
 + 레귤러 (Regular)
배달팁                          3,500
------------------------------------
합계(결제완료)                  12,600
------------------------------------
주문번호:B1EE01W4NE
2022.12.20 21:53
------------------------------------
버터구이오징어(오징어: 페루산)
------------------------------------




xiBi`
            const interpreter = InterpreterFactory.getInterpreter(rawData)

            const interpretResult = interpreter.interpret(rawData)

            expect(interpretResult.platform).to.be.eql(0)
            expect(interpretResult.orderNumber.short).to.be.eql('W4NE')
            expect(interpretResult.orderNumber.full).to.be.eql('B1EE01W4NE')
            expect(interpretResult.payMethod).to.be.eql('결제완료')
            expect(interpretResult.storeRequest).to.be.eql('리뷰이벤트할게요 카라멜 팝콘 부탁드려요 huseong2 (수저포크 O)')

            expect(interpretResult.menuList[0].menuName).to.be.eql('오징어버터구이 몸통')
            expect(interpretResult.menuList[0].price).to.be.eql(4900)
            expect(interpretResult.menuList[0].count).to.be.eql(1)
            expect(interpretResult.menuList[0].options.length).to.be.eql(1)
            expect(interpretResult.menuList[0].options[0].optionName).to.be.eql('이 메뉴는 일회용품 O')
            expect(interpretResult.menuList[0].options[0].price).to.be.eql(0)
            expect(interpretResult.menuList[0].options[0].count).to.be.eql(1)

            expect(interpretResult.menuList[1].menuName).to.be.eql('치즈 팝콘')
            expect(interpretResult.menuList[1].price).to.be.eql(4200)
            expect(interpretResult.menuList[1].count).to.be.eql(1)
            expect(interpretResult.menuList[1].options.length).to.be.eql(1)
            expect(interpretResult.menuList[1].options[0].optionName).to.be.eql('레귤러 (Regular)')
            expect(interpretResult.menuList[1].options[0].price).to.be.eql(0)
            expect(interpretResult.menuList[1].options[0].count).to.be.eql(1)

            expect(interpretResult.deliveryRequest).to.be.eql('조심히 안전하게 와주세요 :)')
            expect(interpretResult.phone).to.be.eql('050-37366-5830')
            expect(interpretResult.deliveryTip).to.be.eql(3500)
            expect(interpretResult.totalPrice).to.be.eql(12600)
            expect(interpretResult.orderAt).to.be.eql('2022.12.20 21:53')
        })
    })
})
