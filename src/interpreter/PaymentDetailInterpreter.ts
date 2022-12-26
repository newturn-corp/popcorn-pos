import { MenuInfo, OptionInfo } from '../DTO/menuInfo'

export class PaymentDetailInterpreter {
    private extractBaeminMenuLines (splitedData: string[]) {
        let startLineIndex = null
        let endLineIndex = null
        for (const [index, lineData] of splitedData.entries()) {
            if (!startLineIndex) {
                if (lineData.includes('메뉴명') && lineData.includes('수량') && lineData.includes('금액')) {
                    startLineIndex = index
                }
                continue
            }
            if (lineData.includes('배달팁')) {
                endLineIndex = index
            }
        }
        return splitedData.slice(startLineIndex as number + 2, endLineIndex as number)
    }

    private getMenuInfoFromMenuLine (menuLine: string) {
        const [menuName, count, price] = menuLine.split('  ').filter(data => data !== '').map(data => data.trim())
        return new MenuInfo(menuName, Number(count), Number(price.replace(',', '')), [])
    }

    private getOptionInfoFromOptionLine (optionLine: string) {
        const [optionName, price] = optionLine.slice(3).split('  ').filter(data => data !== '').map(data => data.trim())
        return new OptionInfo(optionName, 1, price ? Number(price.replace(',', '')) : 0)
    }

    getBaeminMenuList (splitedData: string[]) {
        const menuLines = this.extractBaeminMenuLines(splitedData)
        const menuList: MenuInfo[] = []
        for (const menuLine of menuLines) {
            if (menuLine.includes('+')) {
                menuList[menuList.length - 1].options.push(this.getOptionInfoFromOptionLine(menuLine))
                continue
            }
            menuList.push(this.getMenuInfoFromMenuLine(menuLine))
        }
        return menuList
    }

    getDeliveryTip (splitedData: string[]) {
        const tipLine = splitedData[splitedData.length - 14]
        return Number(tipLine.slice(tipLine.length - 5, tipLine.length).trim().replace(',', ''))
    }

    getTotalPrice (splitedData: string[]) {
        const totalPriceLine = splitedData[splitedData.length - 12]
        return Number(totalPriceLine.slice(totalPriceLine.length - 7, totalPriceLine.length).trim().replace(',', ''))
    }
}
