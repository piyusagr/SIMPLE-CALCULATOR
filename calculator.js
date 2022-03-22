let screen= document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenvalue='';

for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is:',buttonText);
        if(buttonText=='X'){
            buttonText='*';
            screenvalue+=buttonText
            screen.value=screenvalue;
        }
        else if(buttonText=='C'){
             screenvalue=" ";
             screen.value=screenvalue;
        }
        else if(buttonText=='%'){
            screenvalue/=100;
            screen.value=screenvalue;
       }
        else if(buttonText=='=')
        {  
            screen.value=eval(screenvalue);
            screenvalue=screen.value;
            
        }
        else if(buttonText=='sqrt')
        {  
            screenvalue=Math.sqrt(screenvalue);
            screen.value=" ";
            screen.value=screenvalue;
        }
        else if(buttonText=='^2')
        {  
            screenvalue=Math.pow(screenvalue,2);
            screen.value=screenvalue;
        }
        else if(buttonText=='log')
        {
            screenvalue=Math.log10(screenvalue);
            screen.value=screenvalue;
        }
        else if(buttonText=='back'){
           
            screenvalue=screenvalue.substring(0,screenvalue.length-1)
            screen.value=screenvalue;
        }
        
        else{
           
            screen.value="    ";
            screenvalue+=buttonText;
            screen.value=screenvalue;
            
        }
    }
    )
}
