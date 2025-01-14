function typeWriteEffect(){
    const words=["javascript","C#","Asp.net MVC","Asp.net Mvc Core"]
    let wordCount=0;
    let letterCount=0;
    let currentText="";
    let currentWord="";
    let timeOut=400;
    let isDeleting=false;
    function type(){
        if(wordCount===words.length){
            wordCount=0;
        }
        currentWord=words[wordCount];
        if (isDeleting){
            currentText=currentWord.slice(0,--letterCount);
        }else{
            currentText=currentWord.slice(0,++letterCount);
        }
        document.querySelector('.typewrite').textContent=currentText;
        timeOut=isDeleting?200:400;
        if(!isDeleting && currentText.length===currentWord.length){
            timeOut=2000;
            isDeleting=true;

        }
        else if(isDeleting && currentText.length===0){
            timeOut=1000;
            isDeleting=false;
            wordCount++;
        }
        setTimeout(type,timeOut);
    }
    type();
}
typeWriteEffect();