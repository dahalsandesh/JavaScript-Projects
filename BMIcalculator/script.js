const form = document.querySelector('form');
form.addEventListener('submit',function(e){
 e.preventDefault();

const height1 = parseInt(document.querySelector('#height1').value)
const height2 = parseInt(document.querySelector('#height2').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results') 

if(height1 === '' || height1<0 || isNaN(height1) ){
    results.innerHTML = `Please give a valid height ${height1}`;
}
else if(height2 === '' || height2<0 || isNaN(height2) ){
    results.innerHTML = `Please give a valid height ${height2}`;
}
else if(weight === '' || weight<0 || isNaN(weight) ){
    results.innerHTML = `Please give a valid weight ${weight}`;
}
else{{
    const bmi = (weight / ((((height1*12)+height2)/39.3700787)**2)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
}}

   });