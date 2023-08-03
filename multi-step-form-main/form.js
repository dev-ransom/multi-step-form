
const btn = document.getElementById('btn');
const btnDelete = document.getElementById('btn-delete');
const img = document.getElementById('img');
const Img = document.querySelector('.Img');
const inputElement = document.getElementById('input-element');
const inputFile = document.getElementById('input-file');

let inputValue = inputElement.value.trim();
inputElement.addEventListener('input', function(){
   if(inputElement.value.trim() !== inputValue){
        btn.style.backgroundColor = '#ea4c89f7'
        btn.style.cursor = 'pointer';
        return false;
   }else{
    btn.style.backgroundColor = '#ea4c895b';
    btn.style.cursor = 'default';
   }
})


img.addEventListener('mouseover', function() {
    btnDelete.style.display = 'flex';
});

img.addEventListener('mouseout', function() {
    btnDelete.style.display = 'none';
});

btnDelete.addEventListener('click', function() {
    img.style.visibility = 'hidden';
    if (Img.style.visibility == 'hidden') {
        Img.style.border = "none";
    } else {
        Img.style.border = '5px dotted rgba(0, 0, 0, 0.181)';
    }
});

Img.addEventListener('mouseover', function() {
    Img.style.borderColor = '#ea4c89';
});

Img.addEventListener('mouseout', function() {
    Img.style.borderColor = 'rgba(0, 0, 0, 0.181)';
    Img.style.transition = 'all 0.5s ease-out';
    
});



// inputFile.addEventListener('change', function() {
//     Img.src = URL.createObjectURL(inputFile.files[0]);
// });