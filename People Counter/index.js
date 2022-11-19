let counts = document.getElementById('counts');
let saves = document.getElementById('saves');
let count = 0;
let entries = 'Previous entries: ';

let increment = () => {
    count++;
    counts.innerText = count;
}

let save = () => {
    entries += count + ', ';
    saves.innerText = entries;
    count = 0;
    counts.innerText = count;
}
