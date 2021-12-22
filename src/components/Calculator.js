const firstSumInput = (document.getElementById('firstInputSum'));
const secondSumInput = (document.getElementById('secondInputSum'));
firstSumInput.placeholder = 'Inserta un número';
secondSumInput.placeholder = 'Inserta otro número';

const firstMultiplyInput = (document.getElementById('firstInputMul'));
const secondMultiplyInput = (document.getElementById('secondInputMul'));
firstMultiplyInput.placeholder = 'Inserta un número';
secondMultiplyInput.placeholder = 'Inserta otro número';

const firstSubtractInput = (document.getElementById('firstInputSub'));
const secondSubtractInput = (document.getElementById('secondInputSub'));
firstSubtractInput.placeholder = 'Inserta un número';
secondSubtractInput.placeholder = 'Inserta otro número';

export function sum(){
    let firstNumSum = parseInt(firstSumInput.value);
    let secondNumSum = parseInt(secondSumInput.value);
    console.log(firstNumSum + secondNumSum);

    firstSumInput.value = '';
    secondSumInput.value = '';
}

export function subtract(){
    let firstNumSubtract = parseInt(firstSubtractInput.value);
    let secondNumSubtract = parseInt(secondSubtractInput.value);
    console.log(firstNumSubtract - secondNumSubtract);
    firstSubtractInput.value = '';
    secondSubtractInput.value = '';
    return result = firstNumSubtract - secondNumSubtract;
}

export function multiply(){
    let firstNumMultiply = parseInt(firstMultiplyInput.value);
    let secondNumMultiply= parseInt(secondMultiplyInput.value);
    console.log(firstNumMultiply * secondNumMultiply);

    firstMultiplyInput.value = '';
    secondMultiplyInput.value = '';
}

export function start(){
    document.getElementById('btnSum').addEventListener('click',sum);
    document.getElementById('btnSub').addEventListener('click',subtract);
    document.getElementById('btnMul').addEventListener('click',multiply);
}