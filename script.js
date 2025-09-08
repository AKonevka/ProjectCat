
let block = document.getElementsByClassName('block');
console.log(typeof block)
block.array;
console.log(Array.from(block));
block = Array.from(block);
console.log(typeof block1);

block.forEach(element => {
    element.addEventListener('mouseover', function (e) {
        const img = element.querySelector('img');
        img.classList.add('spin');
    });
    element.addEventListener('mouseout', function (e) {
        const img = element.querySelector('img');
        img.classList.remove('spin');
    })

})
