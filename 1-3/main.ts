// 1
// let city: string;
// city = 'Київ';
// city = 'Львів';
// let address: string = city;
// console.log(address);

//2
// let num: number = +prompt('Write number');
// let answer: string = num == 0 ? 'Число 0' : num%2 == 0 ? 'Число парне' : num%2 == 1 || num%2 == -1 ? 'Число непарне' : 'Введіть число!';
// console.log(answer);

//3
// function maxNum(...arg: Array<number>): number{
//     let tot: number = 0;
//     arg.forEach(element => element > tot ? tot = element : tot);
//     return tot;
// }
// console.log(maxNum(5 , 2, 8, -25 ,19 , -19 , 0));

//4
// function getSqrt(number: any = ''): string{
//     if(number == ''){
//         return 'Будь ласка, введіть число!';  
//     }
//     else if(typeof(number) != 'number'){
//         return 'Повинно бути числове значення';
//     }
//     else if(number < 0){
//         return 'Введіть додатнє число';
//     }
//     else{
//         let sqrtNum: number = Math.sqrt(number);
//         return `Квадратний корінь з ${number} дорівнює ${sqrtNum}`;
//     }

// }
// console.log(getSqrt(4));

//5