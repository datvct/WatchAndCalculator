const display= document.querySelector('#display');
const button = document.querySelectorAll('button');

button.forEach((item)=>{
    item.onclick=()=>{
        if(item.id == 'AC'){
            display.innerText='';
        }
        else if(item.id=='DEL'){
            let string = display.innerText.toString();
            display.innerText=string.substr(0,string.length-1);
        }
        else if(display.innerText!='' && item.id=='='){
            display.innerText=eval(display.innerText);
        }
        else if(display.innerText=='' && item.id=='='){
            display.innerText='Empty';
            setTimeout(() => {
                display.innerText=''
            }, 2000);
        }
        else{
            display.innerText+=item.id;
        }
    }
})