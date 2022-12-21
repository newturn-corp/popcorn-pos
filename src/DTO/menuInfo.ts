export class OptionInfo {
    optionName: string
    count: number
    price: number

    constructor (optionName: string, count: number, price: number) {
        this.optionName = optionName
        this.count = count
        this.price = price
    }
}

export class MenuInfo {
    menuName: string
    count: number
    price: number
    options: OptionInfo[]

    constructor (menuName: string, count: number, price: number, options: OptionInfo[]) {
        this.menuName = menuName
        this.count = count
        this.price = price
        this.options = options
    }
}
