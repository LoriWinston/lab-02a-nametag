
const mybutton = document.getElementById('mybutton');

const theSection = document.getElementById('something');

const theInput = document.getElementById('input');

const secondbutton = document.getElementById('secondbutton');

mybutton.addEventListener('click', () => {
console.log(theInput.value) 
theSection.textContent = theInput.value 
theInput.value = ""
});

secondbutton.addEventListener('click' , () => 
{console.log('this was clicked')})


