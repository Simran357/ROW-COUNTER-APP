let saveEl = document.getElementById("save-el")
let counts = document.getElementById("count-el")
let count = 0;
console.log(saveEl)

function myfuc() {
    count ++;
    counts.textContent = count
}

function save() {  
    let countr = count + " - "
    saveEl.textContent += countr
    console.log(countr)
    counts.textContent = 0
    count = 0
}
