let form = document.querySelector('form');

let inp = document.querySelector('input')

let btn = document.querySelector('button')

form.addEventListener('submit', handleAdd)

function handleAdd(e){
    
    e.preventDefault();

    var stuNames = document.getElementById('names').innerHTML = inp.value;

    let arr = []

    let splitArr = inp.value.split(", ")

    arr.push(splitArr)

    inp.value = ''

}