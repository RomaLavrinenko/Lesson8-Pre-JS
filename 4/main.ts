let wordArr: Array<string> = [];
let add = document.querySelector('.btn-add') as HTMLInputElement;
let res = document.querySelector('.btn-res') as HTMLInputElement;
let text = document.querySelector('.input-text') as HTMLInputElement;
let area = document.querySelector('.area') as HTMLInputElement;
let cenz = document.querySelector('.cenz') as HTMLInputElement;
let p = document.querySelector('.par') as HTMLParagraphElement;
p.textContent = `Bad Words: `;
add.addEventListener('click', function():void{
    if(text.value != ''){
        wordArr.push(text.value);
        text.value = '';
        text.style.border = '2px solid green';
        p.textContent = `Bad Words: ${wordArr}`;
    }
    else{
        text.style.border = '2px solid red';

    }
    
});
res.addEventListener('click' , function(): void {
    wordArr = [];
    p.textContent = `Bad Words: ${wordArr}`;

})

cenz.addEventListener('click', function(): void{
    if(area.value != ''){
        
        area.style.border = '2px solid green';
        let ta: string = area.value;
        let arrArea: Array<string> = ta.split(' ');
        wordArr.forEach(word => {
            const index = arrArea.indexOf(word);
            if (index !== -1) {
                arrArea[index] = '*'.repeat(word.length);
            }
        });
        area.value = arrArea.join(' ');

    }
    else{
        area.style.border = '2px solid red';
    }
})


