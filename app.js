const API_URL =
"https://script.google.com/macros/s/AKfycbyCwRWw3LaA7-nDq7CLQ_uDZK2n275Ad-a0O3qZI3VjglHTbEuV9E32DvWJWZw2XjzZ0w/exec";



// ======================================
// CHECK SESSION
// ======================================

window.onload = function(){


const user =
localStorage.getItem("user");


if(user){


showDashboard();


}


};







// ======================================
// CHECK WHATSAPP
// ======================================

function checkWhatsApp(){


const whatsapp =

document
.getElementById("whatsapp")
.value
.trim();



if(!whatsapp){

showMessage(
"Nomor WhatsApp wajib diisi",
"error"
);

return;

}



fetch(API_URL,{

method:"POST",

body:JSON.stringify({

action:"checkUser",

data:{
whatsapp:whatsapp
}

})

})



.then(res=>res.json())


.then(result=>{


console.log(result);



if(result.registered){


showPIN();



}else{


showRegister();


}



});


}









// ======================================
// LOGIN FORM
// ======================================

function showPIN(){



document.getElementById(
"formArea"
).innerHTML = `


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








// ======================================
// REGISTER FORM
// ======================================

function showRegister(){



document.getElementById(
"formArea"
).innerHTML = `


<div class="card">


<h3>
Buat Akun Baru
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


<button onclick="register()">

DAFTAR

</button>


</div>


`;



}









// ======================================
// LOGIN
// ======================================

function login(){


const whatsapp =

document
.getElementById("whatsapp")
.value
.trim();



const pin =

document
.getElementById("pin")
.value
.trim();



fetch(API_URL,{

method:"POST",

body:JSON.stringify({

action:"login",

data:{

whatsapp:whatsapp,

pin:pin

}

})

})



.then(res=>res.json())


.then(result=>{


console.log(result);



if(result.status){


localStorage.setItem(

"user",

JSON.stringify(result.data)

);



showDashboard();



}else{


showMessage(

result.message,

"error"

);


}



});


}









// ======================================
// REGISTER
// ======================================

function register(){


const whatsapp =

document
.getElementById("whatsapp")
.value
.trim();



const nama =

document
.getElementById("nama")
.value
.trim();



const pin =

document
.getElementById("pin")
.value
.trim();





fetch(API_URL,{

method:"POST",

body:JSON.stringify({

action:"register",

data:{

nama:nama,

whatsapp:whatsapp,

pin:pin

}

})

})



.then(res=>res.json())


.then(result=>{


console.log(result);



if(result.status){


login();


}else{


showMessage(

result.message,

"error"

);


}



});


}









// ======================================
// DASHBOARD PESERTA
// ======================================

function showDashboard(){


const user =

JSON.parse(

localStorage.getItem("user")

);



if(!user){

return;

}




document.body.innerHTML = `


<div class="container">


<img

src="logo.png"

class="logo"

>


<div class="card">


<h2>
Halo ${user.nama}
</h2>



<p>
ID Peserta
</p>


<h3>
${user.idPeserta}
</h3>



<div id="qrcode"></div>



<p>
Tunjukkan QR ini saat check-in
</p>



</div>



<div class="card">


<h3>
Status Peserta
</h3>


<p>
✅ Registrasi Berhasil
</p>


</div>




<div class="card">


<h3>
Merchandise
</h3>


<p>
Belum ada pembelian
</p>


<button onclick="alert('Menu merch belum dibuat')">

BELI MERCH

</button>


</div>




<button onclick="logout()">

LOGOUT

</button>



</div>



`;





new QRCode(

document.getElementById("qrcode"),

{

text:user.idPeserta,

width:220,

height:220

}

);



}








// ======================================
// LOGOUT
// ======================================

function logout(){


localStorage.removeItem(
"user"
);


location.reload();


}







// ======================================
// MESSAGE
// ======================================

function showMessage(text,type){


const box =

document.getElementById(
"message"
);



if(box){


box.innerHTML=text;


box.className=type;


}



}
