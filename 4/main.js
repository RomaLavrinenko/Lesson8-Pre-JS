let wordArr = [];
let add = document.querySelector('.btn-add');
let res = document.querySelector('.btn-res');
let text = document.querySelector('.input-text');
let area = document.querySelector('.area');
let cenz = document.querySelector('.cenz');
let p = document.querySelector('.par');
p.textContent = `Bad Words: `;
add.addEventListener('click', function () {
    if (text.value != '') {
        wordArr.push(text.value);
        text.value = '';
        text.style.border = '2px solid green';
        p.textContent = `Bad Words: ${wordArr}`;
    }
    else {
        text.style.border = '2px solid red';
    }
});
res.addEventListener('click', function () {
    wordArr = [];
    p.textContent = `Bad Words: ${wordArr}`;
});
cenz.addEventListener('click', function () {
    if (area.value != '') {
        area.style.border = '2px solid green';
        let ta = area.value;
        let arrArea = ta.split(' ');
        wordArr.forEach(word => {
            const index = arrArea.indexOf(word);
            if (index !== -1) {
                arrArea[index] = '*'.repeat(word.length);
            }
        });
        area.value = arrArea.join(' ');
    }
    else {
        area.style.border = '2px solid red';
    }
});
