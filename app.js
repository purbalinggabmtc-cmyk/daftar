// ======================================
// BOLD AFTER DARK
// PESERTA APP
// APP.JS FINAL
// PART 1
// ======================================



const API_URL =
"https://script.google.com/macros/s/AKfycbw7GQL1bDFKXlmj5KtvhAVXwziCfFfyJS90hlnK9yJ57zQz1rafRrWpdX_ierJPB9wHBQ/exec";




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
// DASHBOARD PESERTA REAL TIME
// ======================================


function showDashboard(){



const user =

JSON.parse(

localStorage.getItem("user")

);



if(!user){


return;


}






fetch(API_URL,{


method:"POST",


body:JSON.stringify({


action:"dashboardPeserta",


data:{


idPeserta:

user.idPeserta


}


})


})



.then(response=>response.json())


.then(result=>{


console.log(
"Dashboard:",
result
);



if(result.status){


renderDashboard(
result.data
);


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

"Gagal mengambil dashboard",

"error"

);


});



}

// ======================================
// MERCHANDISE ORDER SYSTEM
// PART 3 REPLACEMENT
// ======================================



// ======================================
// LOAD MERCH PAGE
// ======================================

function loadProducts(){


cart = [];


renderMerchPage();


}








// ======================================
// RENDER MERCH PAGE
// ======================================

function renderMerchPage(){



document.body.innerHTML = `


<div class="container">


<img

src="logo.png"

class="logo"

>



<h2>

MERCHANDISE

</h2>





<div class="card">


<h3>

T-Shirt

</h3>




<label>

Ukuran

</label>



<select id="shirtSize">


<option value="M">
M
</option>


<option value="L">
L
</option>


<option value="XL">
XL
</option>


<option value="2XL">
2XL
</option>


<option value="3XL">
3XL
</option>


<option value="4XL">
4XL
</option>



</select>





<br><br>




<label>

☐ Lengan Panjang

</label>


<input

type="checkbox"

id="longSleeve"

>




<br><br>




<label>

Jumlah

</label>



<div class="qty-box">


<button onclick="changeQty('shirtQty',-1)">

-

</button>



<span id="shirtQty">

1

</span>



<button onclick="changeQty('shirtQty',1)">

+

</button>



</div>





<button onclick="addTshirt()">

TAMBAH T-SHIRT

</button>



</div>










<div class="card">


<h3>

LA BOLD 16

</h3>




<div class="qty-box">


<button onclick="changeQty('boldQty',-1)">

-

</button>



<span id="boldQty">

1

</span>



<button onclick="changeQty('boldQty',1)">

+

</button>



</div>




<button onclick="addSimpleProduct('BAD-P013','boldQty')">

TAMBAH

</button>


</div>









<div class="card">


<h3>

Prost Beer

</h3>




<div class="qty-box">


<button onclick="changeQty('beerQty',-1)">

-

</button>



<span id="beerQty">

1

</span>



<button onclick="changeQty('beerQty',1)">

+

</button>



</div>




<button onclick="addSimpleProduct('BAD-P014','beerQty')">

TAMBAH

</button>


</div>









<div class="card">


<h3>

KERANJANG

</h3>



<div id="cartList">

Belum ada produk

</div>



<hr>



<div id="cartTotal">

</div>



<br>



<button onclick="checkout()">

CHECKOUT

</button>



</div>






<button onclick="showDashboard()">

KEMBALI

</button>



</div>


`;



updateCartView();



}









// ======================================
// QUANTITY CONTROL
// ======================================

function changeQty(id,value){



let element =

document.getElementById(id);



let qty =

Number(element.innerHTML);



qty += value;



if(qty < 1){

qty = 1;

}



element.innerHTML = qty;



}









// ======================================
// TAMBAH T-SHIRT
// ======================================

function addTshirt(){



const size =

document.getElementById(
"shirtSize"
)
.value;



const longSleeve =

document.getElementById(
"longSleeve"
)
.checked;





let idProduk = "";





if(longSleeve){



const map = {


"M":"BAD-P007",

"L":"BAD-P008",

"XL":"BAD-P009",

"2XL":"BAD-P010",

"3XL":"BAD-P011",

"4XL":"BAD-P012"


};



idProduk =
map[size];



}

else{


const map = {


"M":"BAD-P001",

"L":"BAD-P002",

"XL":"BAD-P003",

"2XL":"BAD-P004",

"3XL":"BAD-P005",

"4XL":"BAD-P006"


};



idProduk =
map[size];


}





const qty =

Number(

document.getElementById(
"shirtQty"
)
.innerHTML

);




addCart(

idProduk,

qty

);



}









// ======================================
// TAMBAH PRODUK NON APPAREL
// ======================================

function addSimpleProduct(idProduk,qtyElement){



const qty =

Number(

document.getElementById(
qtyElement
)
.innerHTML

);



addCart(

idProduk,

qty

);


}









// ======================================
// ADD CART
// ======================================

function addCart(idProduk,qty){



let item =

cart.find(

x=>

x.idProduk===idProduk

);




if(item){


item.qty += qty;


}

else{


cart.push({

idProduk:idProduk,

qty:qty

});


}



updateCartView();



}









// ======================================
// CART VIEW
// ======================================

function updateCartView(){



const area =

document.getElementById(
"cartList"
);



const totalArea =

document.getElementById(
"cartTotal"
);




if(!area){

return;

}





if(cart.length===0){


area.innerHTML =

"Belum ada produk";


totalArea.innerHTML="";


return;


}






let html="";

let total=0;

let kupon=0;





cart.forEach(item=>{



const product =

getProductInfo(
item.idProduk
);




html += `


<p>

${product.namaProduk}

${product.varian}

x${item.qty}

</p>


`;



total +=

product.harga *

item.qty;



kupon +=

product.jumlahKupon *

item.qty;



});






area.innerHTML = html;




totalArea.innerHTML = `


Total:

<b>

Rp${total.toLocaleString()}

</b>


<br>


Kupon:

<b>

${kupon}

</b>


`;



}









// ======================================
// GET PRODUCT INFO
// ======================================

function getProductInfo(idProduk){



const mapping = {


"BAD-P001":{
namaProduk:"T-Shirt",
varian:"M Pendek",
harga:100000,
jumlahKupon:2
},


"BAD-P002":{
namaProduk:"T-Shirt",
varian:"L Pendek",
harga:100000,
jumlahKupon:2
},


"BAD-P003":{
namaProduk:"T-Shirt",
varian:"XL Pendek",
harga:100000,
jumlahKupon:2
},


"BAD-P007":{
namaProduk:"T-Shirt",
varian:"M Panjang",
harga:110000,
jumlahKupon:2
},


"BAD-P008":{
namaProduk:"T-Shirt",
varian:"L Panjang",
harga:110000,
jumlahKupon:2
},


"BAD-P009":{
namaProduk:"T-Shirt",
varian:"XL Panjang",
harga:110000,
jumlahKupon:2
},


"BAD-P013":{
namaProduk:"LA BOLD 16",
varian:"",
harga:40000,
jumlahKupon:1
},


"BAD-P014":{
namaProduk:"Prost Beer",
varian:"",
harga:45000,
jumlahKupon:1
}



};



return mapping[idProduk];


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

// ======================================
// RENDER DASHBOARD
// ======================================

function renderDashboard(data){

  // Tentukan apakah perlu tombol bayar
  // Muncul kalau: ada transaksi TAPI belum lunas
  const perluBayar =
    data.transaksi &&
    data.statusBayar &&
    data.statusBayar !== "Lunas";

  document.body.innerHTML = `

  <div class="container">

    <img
      src="logo.png"
      class="logo"
    >

    <div class="card">

      <h2>
        Halo ${data.nama} 👋
      </h2>

      <h3>
        ${data.idPeserta}
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
        ${data.checkin}
      </p>

    </div>

    <div class="card">

      <h3>
        MERCHANDISE
      </h3>

      ${
        data.transaksi
        ?
        `
        <p>
          ${data.transaksi.detailProduk}
        </p>

        <p>
          Total:
          Rp${Number(data.transaksi.subTotal).toLocaleString()}
        </p>

        <p>
          Status:
          ${data.statusBayar}
        </p>
        `
        :
        `
        <p>
          Belum ada transaksi
        </p>
        `
      }

      ${
        perluBayar
        ?
        `
        <button
          id="btnBayar"
          onclick="bayarSekarang('${data.idTransaksi || ""}')"
          style="background:#e11d2e;color:#fff;width:100%;
                 padding:12px;border:none;border-radius:8px;
                 font-weight:bold;cursor:pointer;margin-top:8px;"
        >
          💳 BAYAR SEKARANG
        </button>
        `
        :
        ``
      }

      <button onclick="loadProducts()">
        BELI MERCH
      </button>

    </div>

    <div class="card">

      <h3>
        KUPON UNDIAN
      </h3>

      <h2>
        🎟 ${data.jumlahKupon}
      </h2>

    </div>

    <button onclick="showDashboard()">
      REFRESH STATUS
    </button>

    <button onclick="logout()">
      LOGOUT
    </button>

  </div>

  `;

  new QRCode(
    document.getElementById("qrcode"),
    {
      text: data.qrCode,
      width: 220,
      height: 220
    }
  );

}
// Di halaman Transaksi Berhasil:
// <button onclick="bayarSekarang('BAD-T5881')">BAYAR SEKARANG</button>

function bayarSekarang(idTransaksi){
  fetch(API_URL, {
    method:"POST",
    body: JSON.stringify({
      action:"payMidtrans",
      data:{ idTransaksi: idTransaksi }
    })
  })
  .then(r=>r.json())
  .then(res=>{
    if(res.status){
      window.snap.pay(res.token, {
        onSuccess: function(){ showDashboard(); },
        onPending: function(){ showDashboard(); },
        onError:   function(){ alert("Pembayaran gagal"); },
        onClose:   function(){ /* tidak apa-apa */ }
      });
    } else {
      alert(res.message);
    }
  });
}
