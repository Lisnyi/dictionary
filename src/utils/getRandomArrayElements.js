import { getRandomInt } from './index'

// Повертає випадкову кількість елементів масиву в залежності від значення контролера

export function getRandomArrayElements(array, el, control=10) {
    let result = []

    switch(control){
        case 10:
            while (result.length !== 10) {
                let index = getRandomInt(array.length);    
                result.push(array[index]);    
                result = result.filter((element, i, arr) =>  arr.indexOf(element) === i);
              }
            return result
        case 3:
            while (result.length !== 3) {
                let index = getRandomInt(array.length);
                if(array[index] === el){
                    continue
                }
                result.push(array[index]);    
                result = result.filter((element, i, arr) =>  arr.indexOf(element) === i);
              }
            return result
        default: console.log("Не вірне значення контролера")
    }
}