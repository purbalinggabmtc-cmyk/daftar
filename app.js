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


        headers:{


            "Content-Type":
            "application/json"


        },


        body:JSON.stringify({


            action:
            "checkUser",


            data:{


                whatsapp:
                whatsapp


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
// FORM LOGIN
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
// LOGIN
// ======================================

function login(){


alert(
"Login API akan diaktifkan berikutnya"
);


}






// ======================================
// REGISTER
// ======================================

function register(){


alert(
"Register API akan diaktifkan berikutnya"
);


}







function showMessage(text,type){



const box =

document.getElementById(
"message"
);



box.innerHTML=text;


box.className=type;



}
