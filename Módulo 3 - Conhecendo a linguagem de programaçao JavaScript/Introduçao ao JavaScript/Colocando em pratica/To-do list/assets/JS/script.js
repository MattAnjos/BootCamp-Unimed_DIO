
var currentvaluewraper=document.getElementsByClassName("caixa")[0];
var value;
var checkbox1=[];

let button1 = document.querySelector('.add');

button1.addEventListener('click', adicionar);

/*let button2 = document.querySelector('.checkbox');

button2.addEventListener('checked', principal);


function principal(){
    for (var i = 0; i<checkbox1.length ; i++) {
        if (checkbox1[i].checked){
            var task = document.getElementById(checkbox1[i]);
            task.style.textDecoration="line-through";
        }
    }
}
*/
function adicionar(){
    var  c=0
    var elemento_pai = document.getElementById('lista');

    value = currentvaluewraper.value;

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.name = 'checkbox';
    checkbox.className='checkbox'
    checkbox.id = value;
    checkbox.value = value;

    var label = document.createElement('label');
    label.htmlFor = value;
    label.appendChild(document.createTextNode(value));

    elemento_pai.appendChild(checkbox);
    elemento_pai.appendChild(label);  

    //checkbox1[c] = document.getElementById(value);
    //c+=1;
    
}

