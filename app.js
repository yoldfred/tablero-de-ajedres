
let input = Number(prompt('inserte el numero de filas y columnas'));
let color =' ';

for(i=1;i<=input;i++){
    

    if(i%2===0){
        color ='&nbsp';
        for(e=1;e<=input;e++){
            document.write(color);
            if(e===input){
                document.write('<br>')
            }else if(color=='&nbsp'){
                color='#';
            }else{
                color='&nbsp'
            };
        }
    }else{
        color ='#';
        for(e=1;e<=input;e++){
            document.write(color);
            if(e===input){
                document.write('<br>')
            }else if(color=='&nbsp'){
                color='#';
            }else{
                color='&nbsp'
            };
        }
    }

}