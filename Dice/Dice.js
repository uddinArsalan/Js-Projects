const rand1 = Math.floor(Math.random() * 6);
const rand2 = Math.floor(Math.random() * 6);

const box_1 = document.getElementById('box1');
const box_2 = document.getElementById('box2');

const h1 = document.querySelector('h1');

// box 2
const cir1 = document.getElementById('cir1');
const cir2 = document.getElementById('cir2');
const cir3 = document.getElementById('cir3');
const cir4 = document.getElementById('cir4');
const cir5 = document.getElementById('cir5');
const cir6 = document.getElementById('cir6');
const cir7 = document.getElementById('cir7');
const cir8 = document.getElementById('cir8');
const cir9 = document.getElementById('cir9');

// box 1
const cir_1 = document.getElementById('cir-1');
const cir_2 = document.getElementById('cir-2');
const cir_3 = document.getElementById('cir-3');
const cir_4 = document.getElementById('cir-4');
const cir_5 = document.getElementById('cir-5');
const cir_6 = document.getElementById('cir-6');
const cir_7 = document.getElementById('cir-7');
const cir_8 = document.getElementById('cir-8');
const cir_9 = document.getElementById('cir-9');



if((rand1+1)>(rand2+1)){
    h1.textContent = "Player-1 Wins";
}
else if((rand1+1)<(rand2+1)){
    h1.textContent = "Player-2 Wins";
}
else if((rand1+1)==(rand2+1)){
    h1.textContent = "Draw";
}

switch (rand1+1) {
    case 1:
        cir2.style.visibility = 'hidden';
        cir5.style.visibility = 'hidden';
        cir8.style.visibility = 'hidden';
        break;
    case 2:
            cir2.style.visibility = 'hidden';
            cir4.style.visibility = 'hidden';
            cir6.style.visibility = 'hidden';
            cir8.style.visibility = 'hidden';
            break;
    case 3:
        cir2.style.visibility = 'hidden';
        cir4.style.visibility = 'hidden';
        cir5.style.visibility = 'hidden';
        cir6.style.visibility = 'hidden';
        cir8.style.visibility = 'hidden';
        break;
    case 4:
        cir2.style.visibility = 'hidden';
        cir3.style.visibility = 'hidden';
        cir4.style.visibility = 'hidden';
        cir6.style.visibility = 'hidden';
        cir7.style.visibility = 'hidden';
        cir8.style.visibility = 'hidden';
        break;
    case 5:
        cir2.style.visibility = 'hidden';
        cir3.style.visibility = 'hidden';
        cir4.style.visibility = 'hidden';
        cir5.style.visibility = 'hidden';
        cir6.style.visibility = 'hidden';
        cir7.style.visibility = 'hidden';
        cir8.style.visibility = 'hidden';
        break;
    case 6:
        cir1.style.visibility = 'hidden';
        cir2.style.visibility = 'hidden';
        cir3.style.visibility = 'hidden';
        cir4.style.visibility = 'hidden';
        cir9.style.visibility = 'hidden';
        cir6.style.visibility = 'hidden';
        cir7.style.visibility = 'hidden';
        cir8.style.visibility = 'hidden';
        break;
}

switch (rand2+1) {
    case 1:
        cir_2.style.visibility = 'hidden';
        cir_5.style.visibility = 'hidden';
        cir_8.style.visibility = 'hidden';
        break;
    case 2:
        cir_2.style.visibility = 'hidden';
        cir_4.style.visibility = 'hidden';
        cir_6.style.visibility = 'hidden';
        cir_8.style.visibility = 'hidden';
        break;
    case 3:
        cir_2.style.visibility = 'hidden';
        cir_3.style.visibility = 'hidden';
        cir_4.style.visibility = 'hidden';
        cir_6.style.visibility = 'hidden';
        cir_7.style.visibility = 'hidden';
        cir_8.style.visibility = 'hidden';
        break;
    case 4:
        cir_2.style.visibility = 'hidden';
        cir_4.style.visibility = 'hidden';
        cir_5.style.visibility = 'hidden';
        cir_6.style.visibility = 'hidden';
        cir_8.style.visibility = 'hidden';
            break;
    case 5:
        cir_2.style.visibility = 'hidden';
        cir_3.style.visibility = 'hidden';
        cir_4.style.visibility = 'hidden';
        cir_5.style.visibility = 'hidden';
        cir_6.style.visibility = 'hidden';
        cir_7.style.visibility = 'hidden';
        cir_8.style.visibility = 'hidden';
            break;
    case 6:
        cir_1.style.visibility = 'hidden';
        cir_2.style.visibility = 'hidden';
        cir_3.style.visibility = 'hidden';
        cir_4.style.visibility = 'hidden';
        cir_6.style.visibility = 'hidden';
        cir_7.style.visibility = 'hidden';
        cir_8.style.visibility = 'hidden';
        cir_9.style.visibility = 'hidden';
        break;
}


