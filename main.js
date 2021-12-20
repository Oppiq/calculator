//////////////////////////////////////////////////////////////////////
// calc buttons grabbed
//////////////////////////////////////////////////////////////////////
const PREVOUT = document.querySelector('.previous-output-button')
const CUROUT = document.querySelector('.output-button')
const FUNCCLEAR = document.querySelector('.all-clear')
const FUNCSIGN = document.querySelector('.pos-neg')
const FUNCPERCENT = document.querySelector('.percent')
const OPDIV = document.querySelector('.operator-div')
const OPMULT = document.querySelector('.operator-mult')
const OPSUB = document.querySelector('.operator-sub')
const OPADD = document.querySelector('.operator-add')
const OPEQUAL = document.querySelector('.operator-equal')
const NUMBUTTON_9 = document.querySelector('#number-9')
const NUMBUTTON_8 = document.querySelector('#number-8')
const NUMBUTTON_7 = document.querySelector('#number-7')
const NUMBUTTON_6 = document.querySelector('#number-6')
const NUMBUTTON_5 = document.querySelector('#number-5')
const NUMBUTTON_4 = document.querySelector('#number-4')
const NUMBUTTON_3 = document.querySelector('#number-3')
const NUMBUTTON_2 = document.querySelector('#number-2')
const NUMBUTTON_1 = document.querySelector('#number-1')
const NUMBUTTON_0 = document.querySelector('#number-0')
const NUMBUTTON_DECIMAL = document.querySelector('#number-decimal')

//////////////////////////////////////////////////////////////////////
// create the obj
//////////////////////////////////////////////////////////////////////
class calculator {
    constructor (previousValue, currentValue, operator) {
        this.previousValue = previousValue
        this.currentValue = currentValue
        this.operator = operator
    }
}

const calc = new calculator('', '', undefined)
PREVOUT.textContent = calc.previousValue
CUROUT.textContent = calc.currentValue
//////////////////////////////////////////////////////////////////////
// event listeners 
//////////////////////////////////////////////////////////////////////
FUNCCLEAR.addEventListener('click', () =>{
    calc.previousValue = ''
    calc.currentValue = ''
    calc.operator = undefined
    PREVOUT.textContent = calc.previousValue
    CUROUT.textContent = calc.currentValue
})
FUNCSIGN.addEventListener('click', () =>{
    calc.currentValue = '-' + calc.currentValue
    CUROUT.textContent = calc.currentValue
})
FUNCPERCENT.addEventListener('click', () =>{
    calc.currentValue = calc.currentValue / 100
    CUROUT.textContent = calc.currentValue
})
OPDIV.addEventListener('click', () =>{
    calc.previousValue = calc.currentValue
    PREVOUT.textContent = calc.previousValue
    calc.currentValue = ''
    calc.operator = 'div'
})
OPMULT.addEventListener('click', () =>{
    calc.previousValue = calc.currentValue
    PREVOUT.textContent = calc.previousValue
    calc.currentValue = ''
    calc.operator = 'mult'
})
OPSUB.addEventListener('click', () =>{
    calc.previousValue = calc.currentValue
    PREVOUT.textContent = calc.previousValue
    calc.currentValue = ''
    calc.operator = 'sub'
})
OPADD.addEventListener('click', () =>{
    calc.previousValue = calc.currentValue
    PREVOUT.textContent = calc.previousValue
    calc.currentValue = ''
    calc.operator = 'add'
})
OPEQUAL.addEventListener('click', () =>{
    if (calc.operator === 'add') {
        ADD()
    } else if (calc.operator === 'sub') {
        SUB()
    } else if (calc.operator === 'div') {
        DIV()
    } else if (calc.operator === 'mult') {
        MULT()
    }
})

NUMBUTTON_9.addEventListener('click', () =>{
    let value = '9'
    calc.currentValue = calc.currentValue + value
    CUROUT.textContent = calc.currentValue
})

NUMBUTTON_8.addEventListener('click', () =>{
    let value = '8'
    calc.currentValue = calc.currentValue + value
    CUROUT.textContent = calc.currentValue
})

NUMBUTTON_7.addEventListener('click', () =>{
    let value = '7'
    calc.currentValue = calc.currentValue + value
    CUROUT.textContent = calc.currentValue
})

NUMBUTTON_6.addEventListener('click', () =>{
    let value = '6'
    calc.currentValue = calc.currentValue + value
    CUROUT.textContent = calc.currentValue
})

NUMBUTTON_5.addEventListener('click', () =>{
    let value = '5'
    calc.currentValue = calc.currentValue + value
    CUROUT.textContent = calc.currentValue
})

NUMBUTTON_4.addEventListener('click', () =>{
    let value = '4'
    calc.currentValue = calc.currentValue + value
    CUROUT.textContent = calc.currentValue
})

NUMBUTTON_3.addEventListener('click', () =>{
    let value = '3'
    calc.currentValue = calc.currentValue + value
    CUROUT.textContent = calc.currentValue
})

NUMBUTTON_2.addEventListener('click', () =>{
    let value = '2'
    calc.currentValue = calc.currentValue + value
    CUROUT.textContent = calc.currentValue
})

NUMBUTTON_1.addEventListener('click', () =>{
    let value = '1'
    calc.currentValue = calc.currentValue + value
    CUROUT.textContent = calc.currentValue
})

NUMBUTTON_0.addEventListener('click', () =>{
    let value = '0'
    calc.currentValue = calc.currentValue + value
    CUROUT.textContent = calc.currentValue
})

NUMBUTTON_DECIMAL.addEventListener('click', () =>{
    let value = '.'
    calc.currentValue = calc.currentValue + value
    CUROUT.textContent = calc.currentValue
})
//////////////////////////////////////////////////////////////////////
// need a function for div/mult/sub/add
//////////////////////////////////////////////////////////////////////
const DIV = function(){
    let solution = parseFloat(calc.currentValue) / parseFloat(calc.previousValue)
    CUROUT.textContent = solution.toString()
}

const MULT = function(){
    let solution = parseFloat(calc.currentValue) * parseFloat(calc.previousValue)
    CUROUT.textContent = solution.toString()
}

const SUB = function(){
    let solution = parseFloat(calc.currentValue) - parseFloat(calc.previousValue)
    CUROUT.textContent = solution.toString()
}

const ADD = function(){
    let solution = parseFloat(calc.currentValue) + parseFloat(calc.previousValue)
    calc.currentValue = solution.toString()
    CUROUT.textContent = calc.currentValue
    calc.previousValue = calc.currentValue
}
