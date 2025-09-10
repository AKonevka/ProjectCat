
let block = document.getElementsByClassName('block');
let Filian = document.getElementById('Filian');
console.log(Filian);
console.log(typeof block);
block.array;
console.log(Array.from(block));
block = Array.from(block);
console.log(typeof block1);
let spin = 3;
let switchSpin = 0;

block.forEach(element => {
    element.addEventListener('mouseover', function (e) {
        const img = element.querySelector('img');
        img.classList.add('spin');
    });
    element.addEventListener('mouseout', function (e) {
        const img = element.querySelector('img');
        img.classList.remove('spin');
        img.classList.remove('spinx');
        spin = 3;
        img.style.setProperty('--rotation-duration', `${spin}s`);
    })
    element.addEventListener('click', function (e) {
        if (element == Filian) {
            if (switchSpin) {
                spin = Math.max(0.1, spin * 0.5);
                const img = element.querySelector('img');
                img.style.setProperty('--rotation-duration', `${spin}s`);
                img.classList.remove('spinx');
                img.classList.add('spin');

                switchSpin = switchSpin - 1;
            } else {
                spin = Math.max(0.1, spin * 0.5);
                const img = element.querySelector('img');
                img.style.setProperty('--rotation-duration', `${spin}s`);
                img.classList.remove('spin');
                img.classList.add('spinx');

                switchSpin = switchSpin + 1;
            }
        } else {
            spin = Math.max(0.1, spin * 0.5);
            const img = element.querySelector('img');
            img.style.setProperty('--rotation-duration', `${spin}s`);
        }

    });

})
