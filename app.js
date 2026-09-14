const API_URL =
"https://script.google.com/macros/s/AKfycbyCwRWw3LaA7-nDq7CLQ_uDZK2n275Ad-a0O3qZI3VjglHTbEuV9E32DvWJWZw2XjzZ0w/exec";



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



    showMessage(
        "Memeriksa nomor...",
        ""
    );



    fetch(API_URL,{


        method:"POST",


        body:JSON.stringify({


            action:"checkUser",


            data:{


                whatsapp:whatsapp


            }


        })


    })



    .then(response=>response.json())


    .then(result=>{


        console.log(result);



        if(result.registered){


            showPIN();


        }


        else{


            showRegister();


        }



    })



    .catch(error=>{


        console.error(error);



        showMessage(

            "Gagal terhubung ke server",

            "error"

        );


    });



}








// ======================================
// FORM LOGIN PIN
// ======================================

function showPIN(){


document.getElementById(
"formArea"
).innerHTML = `


<div class="card">


<h3>
Verifikasi PIN
</h3>


<input

id="pin"

type="password"

placeholder="Masukkan PIN"

>



<button onclick="login()">

MASUK

</button>


</div>


`;



}








// ======================================
// FORM REGISTER
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
// LOGIN PESERTA
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





if(!pin){


showMessage(

"PIN wajib diisi",

"error"

);


return;


}





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



.then(response=>response.json())


.then(result=>{


console.log(result);



if(result.status){



showMessage(

"Login berhasil. Halo " 
+
result.data.nama,

"success"

);



// simpan session sederhana

localStorage.setItem(

"user",

JSON.stringify(
result.data
)

);




// lanjut halaman peserta nanti

setTimeout(()=>{


goToDashboard();


},1000);



}


else{


showMessage(

result.message,

"error"

);


}



})


.catch(error=>{


console.error(error);



showMessage(

"Gagal login",

"error"

);


});



}









// ======================================
// REGISTER PESERTA
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






if(!nama || !pin){


showMessage(

"Nama dan PIN wajib diisi",

"error"

);


return;


}





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



.then(response=>response.json())


.then(result=>{


console.log(result);



if(result.status){



showMessage(

"Registrasi berhasil",

"success"

);



// otomatis login

setTimeout(()=>{


login();


},1000);



}


else{


showMessage(

result.message,

"error"

);


}



})


.catch(error=>{


console.error(error);



showMessage(

"Gagal registrasi",

"error"

);


});



}









// ======================================
// DASHBOARD PESERTA SEMENTARA
// ======================================

function goToDashboard(){



const user =

JSON.parse(

localStorage.getItem("user")

);



document.getElementById(
"formArea"
).innerHTML = `


<div class="card">


<h2>
Halo ${user.nama}
</h2>


<p>
ID Peserta:
<br>

${user.idPeserta}

</p>


<p>
QR:
<br>

${user.qrCode}

</p>



</div>


`;



}









// ======================================
// MESSAGE
// ======================================

function showMessage(text,type){



const box =

document.getElementById(
"message"
);



box.innerHTML=text;


box.className=type;



}
