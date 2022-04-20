function SifreOlustur(){
   var uzunluk=12,
       karakterler="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789./_?()",
       snDeger="";
       for(var i=0,n=karakterler.length;i< uzunluk;++i){
           snDeger+=karakterler.charAt(Math.floor(Math.random()*n));

       }
       $("#parola").val(snDeger);
 }