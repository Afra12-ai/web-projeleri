

function kontrol()
{
let isim,tc;

    while(true){
    isim=prompt("Lütfen isminizi giriniz: ")
    tc=prompt("Lütfen tc kimlik numaranızı giriniz: ")
    

    if(isim === null || isim.trim()==="")
    {
        alert("Lütfen isminizi giriniz")
        continue;
    }
        if(tc === null || tc.length!==11)
    {
        alert("Lütfen 11 karakterli T.C. kimlik numaranızı giriniz!")
        continue;
    }

    alert("Hoşgeldiniz " + isim)
    break;
}
    
   
}

kontrol();
