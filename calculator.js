let screen= document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenvalue='0';
screen.value=screenvalue;

for(item of buttons){
    // screenvalue='';
    
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('Button text is:',buttonText);
    
        if(buttonText=='X'){
            buttonText='*';
            screenvalue+=buttonText
            screen.value=screenvalue;
        }
    
        else if(buttonText=='C'){
             screenvalue=" 0";
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
           let val=Math.sqrt(screenvalue);
            screenvalue=val;
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
    
        else if (buttonText=='pie'){
            screenvalue=Math.PI;
            screen.value=screenvalue;
        }
    
        else if(buttonText=='back'){
           
            screenvalue=screenvalue.substring(0,screenvalue.length-1)
            screen.value=screenvalue;
        }
    
        else if(buttonText=='sinx'){
            screenvalue=Math.sin(screenvalue*Math.PI/180);
            screen.value=screenvalue;
            
        }
    
        else if(buttonText=='cosx'){
            if(screenvalue=='90'||screenvalue=='090')
            {
                screenvalue='0';
            }
    
            else{
            screenvalue=Math.cos(screenvalue*Math.PI/180);
            }
            screen.value=screenvalue;  
        }
    
        else if(buttonText=='tanx'){
            if(screenvalue=='90'||screenvalue=='090'){
                screenvalue='infinity';
            }
    
            else{
            screenvalue=Math.tan(screenvalue*Math.PI/180);
            }
            screen.value=screenvalue;
            
        }
       
        else if(buttonText=='mod'){
            buttonText='%';
            screenvalue+=buttonText;
            screen.value=screenvalue;
        }
        
        else if(buttonText=='x!'){
            let fact=1;
            for(let i=1;i<=screenvalue;i++){
                fact=fact*i;
            }
            screenvalue=fact;
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
