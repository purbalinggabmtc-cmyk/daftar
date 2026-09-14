const API_URL =
"https://script.google.com/macros/s/XXXX/exec";





function checkWhatsApp(){


const whatsapp =
document.getElementById(
"whatsapp"
).value;




fetch(API_URL,{


method:"POST",


headers:{


"Content-Type":"application/json"


},


body:JSON.stringify({


action:"checkUser",


data:{


whatsapp:whatsapp


}


})


})


.then(res=>res.json())


.then(result=>{


if(result.registered){


showPIN();


}

else{


showRegister();


}



});


}







function showPIN(){


document.getElementById(
"formArea"
).innerHTML=`

<div class="card">


<h3>
Masukkan PIN
</h3>


<input
id="pin"
type="password"
placeholder="PIN"
>


<button onclick="login()">
MASUK
</button>


</div>

`;


}







function showRegister(){


document.getElementById(
"formArea"
).innerHTML=`

<div class="card">


<h3>
Data Baru
</h3>


<input
id="nama"
placeholder="Nama Lengkap"
>


<input
id="pin"
type="password"
placeholder="Buat PIN"
>


<button>
DAFTAR
</button>


</div>

`;


}
