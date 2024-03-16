


console.clear();

// inputText

var input = document.querySelector('input[name = name]');
input.addEventListener('change', changeHandler);

function changeHandler(even){
   console.log(even);
   console.log(even.type);
   console.log(even.target);
   console.log(even.target.className);
   console.log(even.target.id);
   console.log(even.target.value);
}
 




// inputCheckbox

var programs = document.querySelectorAll('input');
console.log(programs);

Array.from(programs).map((program) => {
   program.addEventListener('change', programHandler)
});

function programHandler(even){
   if(even.target.checked){
      console.log(even.target.value);
   }else{
      console.log('unchecked');
   }
};




// Select

var programmingLanguage = document.querySelector('#programmingLanguage');
console.log(programmingLanguage);

programmingLanguage.addEventListener('change', languageHandler);

function languageHandler(e){
   console.log(e.target.value);
}