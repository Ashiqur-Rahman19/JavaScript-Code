
console.clear();

var div = document.querySelector('div');
var para = document.querySelector('p');

para.addEventListener('dragstart', function(e){
    e.dataTransfer.setData('text', e.target.id);
});


div.addEventListener('dragover', function(e){
    e.preventDefault();
})

div.addEventListener('drop', function(e){
    var id = e.dataTransfer.getData('text');
    console.log(id);
    div.appenchild(document.getElementById(id));
    e.preventDefault();
});