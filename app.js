// ======================================
// BOLD AFTER DARK
// PESERTA APP
// APP.JS FINAL
// PART 1
// ======================================



const API_URL =
"https://script.google.com/macros/s/AKfycbyCwRWw3LaA7-nDq7CLQ_uDZK2n275Ad-a0O3qZI3VjglHTbEuV9E32DvWJWZw2XjzZ0w/exec";




// ======================================
// GLOBAL STATE
// ======================================


let products = [];

let cart = [];





// ======================================
// LOAD SESSION
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



}

else{


showRegister();



}



})


.catch(err=>{


console.error(err);


showMessage(

"Gagal koneksi server",

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



.then(res=>res.json())


.then(result=>{


console.log(result);



if(result.status){



localStorage.setItem(

"user",

JSON.stringify(result.data)

);




showMessage(

"Login berhasil",

"success"

);




setTimeout(()=>{


showDashboard();


},700);



}

else{


showMessage(

result.message,

"error"

);


}



})


.catch(err=>{


console.error(err);


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



.then(res=>res.json())


.then(result=>{


console.log(result);



if(result.status){



showMessage(

"Registrasi berhasil",

"success"

);



setTimeout(()=>{


login();


},800);



}

else{


showMessage(

result.message,

"error"

);


}



})


.catch(err=>{


console.error(err);


showMessage(

"Gagal registrasi",

"error"

);


});



}

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

// ======================================
// DASHBOARD PESERTA
// PART 2
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

Halo ${user.nama} 👋

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

STATUS PESERTA

</h3>



<p>

🟢 Registrasi berhasil

</p>



</div>








<div class="card">


<h3>

MERCHANDISE

</h3>



<p>

Belum ada pembelian

</p>




<button onclick="loadProducts()">

BELI MERCH

</button>



</div>








<div class="card">


<h3>

KUPON UNDIAN

</h3>


<p>

🎟 0 Kupon

</p>



</div>







<button onclick="logout()">

LOGOUT

</button>




</div>


`;







// generate QR


new QRCode(


document.getElementById(

"qrcode"

),


{


text:

user.qrCode,


width:

220,


height:

220



}



);



}

// ======================================
// LOAD PRODUCTS
// PART 3
// ======================================


function loadProducts(){



fetch(API_URL,{


method:"POST",


body:JSON.stringify({


action:"products"


})


})


.then(res=>res.json())


.then(result=>{


console.log(result);



if(result.status){


products = result.data;


cart = [];


renderProducts();


}



})


.catch(err=>{


console.error(err);


showMessage(

"Gagal mengambil produk",

"error"

);


});



}









// ======================================
// RENDER PRODUCTS
// ======================================


function renderProducts(){



document.body.innerHTML = `


<div class="container">


<img

src="logo.png"

class="logo"

>


<h2>

MERCHANDISE

</h2>



<div id="productList"></div>





<div class="card">


<h3>

KERANJANG

</h3>


<div id="cartSummary">

Belum ada produk

</div>


<button onclick="checkout()">

CHECKOUT

</button>


</div>





<button onclick="showDashboard()">

KEMBALI

</button>



</div>


`;





const area =

document.getElementById(
"productList"
);





products.forEach(product=>{


const current =

getCartQty(

product.idProduk

);





area.innerHTML += `


<div class="card product-card">


<h3>

${product.namaProduk}

</h3>



<p>

${product.varian}

</p>



<p>

Rp${Number(product.harga)
.toLocaleString()}

</p>




<div class="qty-box">


<button onclick="minusProduct('${product.idProduk}')">

-

</button>



<span class="qty">

${current}

</span>



<button onclick="plusProduct('${product.idProduk}')">

+

</button>



</div>



</div>


`;



});




updateCartSummary();



}









// ======================================
// TAMBAH PRODUK
// ======================================


function plusProduct(idProduk){



let item =

cart.find(

x=>x.idProduk===idProduk

);




if(item){


item.qty++;


}

else{


cart.push({


idProduk:idProduk,


qty:1


});


}



renderProducts();



}









// ======================================
// KURANGI PRODUK
// ======================================


function minusProduct(idProduk){



let item =

cart.find(

x=>x.idProduk===idProduk

);




if(!item){


return;


}



item.qty--;



if(item.qty<=0){


cart = cart.filter(

x=>x.idProduk!==idProduk

);


}



renderProducts();



}









// ======================================
// AMBIL JUMLAH DI CART
// ======================================


function getCartQty(idProduk){


const item =

cart.find(

x=>x.idProduk===idProduk

);



return item ?

item.qty :

0;


}









// ======================================
// UPDATE SUMMARY
// ======================================


function updateCartSummary(){



let total = 0;


let kupon = 0;



let detail = "";





cart.forEach(item=>{


const product =

products.find(

p=>

p.idProduk===item.idProduk

);




if(product){



total +=

Number(product.harga)

*

item.qty;



kupon +=

Number(product.jumlahKupon)

*

item.qty;




detail += `

<p>

${product.namaProduk}

${product.varian}

x${item.qty}

</p>

`;



}



});





if(cart.length===0){


document.getElementById(

"cartSummary"

).innerHTML =

"Belum ada produk";


return;


}





document.getElementById(

"cartSummary"

).innerHTML = `


${detail}


<hr>


Total:

<b>

Rp${total.toLocaleString()}

</b>


<br><br>


Kupon:

<b>

${kupon}

</b>


`;



}

// ======================================
// CHECKOUT TRANSACTION
// PART 4
// ======================================


function checkout(){



if(cart.length===0){


alert(
"Keranjang masih kosong"
);


return;


}






const user =

JSON.parse(

localStorage.getItem("user")

);






fetch(API_URL,{



method:"POST",



body:JSON.stringify({



action:"transaction",



data:{



idPeserta:

user.idPeserta,



produk:

cart



}



})



})





.then(res=>res.json())



.then(result=>{



console.log(result);




if(result.status){



showTransactionSuccess(

result.data

);



}

else{



alert(

result.message

);



}



})



.catch(error=>{



console.error(error);



alert(

"Gagal membuat transaksi"

);



});



}









// ======================================
// TRANSACTION SUCCESS
// ======================================


function showTransactionSuccess(data){



document.body.innerHTML = `



<div class="container">



<img

src="logo.png"

class="logo"

>




<div class="card">


<h2>

Transaksi Berhasil

</h2>



<p>

ID Transaksi

</p>



<h3>

${data.idTransaksi}

</h3>





<hr>




<p>

${data.detailProduk}

</p>




<h3>

Rp${Number(data.subTotal)
.toLocaleString()}

</h3>





<p>

🎟 Kupon:

<b>

${data.jumlahKupon}

</b>

</p>




<p>

Status:

<br>

<b>

Menunggu Pembayaran

</b>

</p>



</div>






<button onclick="showDashboard()">

KEMBALI DASHBOARD

</button>



</div>



`;



}

