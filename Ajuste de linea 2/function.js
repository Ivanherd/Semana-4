function wrapLine(text, number){
    let line ="-";
    
    for(var i=0;i < number ;i++){
       
        line=+ "-"
        console.log(line)
        console.log(line)
        text=text.replace(/\s/g,line);
    }
    
 return console.log(text)
}

const text = prompt();

const number = prompt();



const textLine = wrapLine(text, number);