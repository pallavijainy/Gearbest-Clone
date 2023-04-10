// collectionPage
let arr_collection=JSON.parse(localStorage.getItem("collection")) || []
    let collection=[
        {image:"https://images.unsplash.com/photo-1626247103090-b81889531015?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8ODg4ODIxN3x8ZW58MHx8fHw%3D&dpr=1&auto=format&fit=crop&w=294&q=60",
         name:"Nimble Tech Store"
    },
{
    image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNlbGwlMjBwaG9uZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
     name:"Laser Master"
},
{
    image:"https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2VsbCUyMHBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    name:"Hot xiomi Laptop"
},
{
    image:"https://images.unsplash.com/photo-1548378329-437e1ef34263?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fENvbnN1bWVyJTIwRWxlY3Ryb25pY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name:"TWOTREES Official Store"
},
{
    image:"https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fENvbnN1bWVyJTIwRWxlY3Ryb25pY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    name:"RUNFENGTE Official store"
}
]

collection.forEach(function(el){
let div=document.createElement("div");
let image=document.createElement("img");
image.setAttribute("src",el.image)



let name=document.createElement("h4");
name.innerText=el.name;

let btn=document.createElement("button");
btn.innerText="Add to Cart"
btn.addEventListener("click",function(){
    arr_collection.push(el)
    localStorage.setItem("collection",JSON.stringify(arr_collection))
})



div.append(image,name,btn)
document.querySelector("#collection_container").append(div);
})

// superDeal
let arr_superdeal=JSON.parse(localStorage.getItem("super")) || []
    let superdeal=[
        {image:"https://images.unsplash.com/photo-1588689115724-a624efec3c93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fENvbnN1bWVyJTIwRWxlY3Ryb25pY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
         name:"Gaming wireless Headphones"
    },
{
    image:"https://images.unsplash.com/photo-1598717873846-0418a74950f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Q29uc3VtZXIlMjBFbGVjdHJvbmljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
     name:"xiomi blackstone electic"
},
{
    image:"https://images.unsplash.com/photo-1547489401-fcada4966052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Q29uc3VtZXIlMjBFbGVjdHJvbmljc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    name:"New Bluetooth watch"
},
{
    image:"https://images.pexels.com/photos/373638/pexels-photo-373638.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Xiomi Aquara smart Temperature Humidity"
},
{
    image:"https://images.pexels.com/photos/12021852/pexels-photo-12021852.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"xiomi ENCHEN boost electric Hair Trimmer"
}
]

superdeal.forEach(function(el){
let div=document.createElement("div");
let image=document.createElement("img");
image.setAttribute("src",el.image)

let name=document.createElement("h4");
name.innerText=el.name;

let btn=document.createElement("button");
btn.innerText="Add to Cart"
btn.addEventListener("click",function(){
    arr_superdeal.push(el)
    localStorage.setItem("super",JSON.stringify(arr_superdeal))
})

div.append(image,name,btn)
document.querySelector("#superdeal_container").append(div);
})



// <!-- new script -->

let arr_pal=JSON.parse(localStorage.getItem("pal")) || []
let pal=[
        {image:"https://images.pexels.com/photos/11764413/pexels-photo-11764413.jpeg?auto=compress&cs=tinysrgb&w=600",
         name:"GPS Drone with "
    },
{
    image:"https://images.pexels.com/photos/6023354/pexels-photo-6023354.jpeg?auto=compress&cs=tinysrgb&w=600",
     name:"camera"
},
{
    image:"https://images.pexels.com/photos/9842750/pexels-photo-9842750.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"xiomi phone"
},
{
    image:"https://images.pexels.com/photos/4171752/pexels-photo-4171752.jpeg?auto=compress&cs=tinysrgb&w=600g",
    name:"TWOTREES Official Store"
},
{
    image:"https://images.pexels.com/photos/1706694/pexels-photo-1706694.jpeg?auto=compress&cs=tinysrgb&w=600",
    name:"Mini Mosquito Machine"
}
]

pal.forEach(function(el){
let div=document.createElement("div");
let image=document.createElement("img");
image.setAttribute("src",el.image)

let name=document.createElement("h4");
name.innerText=el.name;

let btn=document.createElement("button");
btn.innerText="Add to Cart"
btn.addEventListener("click",function(){
    arr_pal.push(el)
    localStorage.setItem("pal",JSON.stringify(arr_pal))
})

div.append(image,name,btn)
document.querySelector("#new_container").append(div);
})

 
// <!-- recommended  -->

let arr_recommend=JSON.parse(localStorage.getItem("recommend")) || []
    let recommend=[
        {
            image:"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"360 G300H Dash Smart Car DVR 3MP Camera WIFI ",
            price:"79.00",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Xiaomi Redmi Buds 4 Pro Earphone Bluetooth 3 Mic Wireless",
            price:"67.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"TRONXY CRUX 1 3D printer Presale",
            price:"179.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"M-855 Wireless Router Wifi 300M Signal",
            price:"14.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/3992776/pexels-photo-3992776.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"JJRC H108 DIY Building Blocks Drone with HD",
            price:"36.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/3201768/pexels-photo-3201768.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"360 G300H DasInch  Sm We Maps Night Vision Parking Monitor",
            price:"38.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/2373730/pexels-photo-2373730.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"3HD 160 Degree Camera aps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/51396/pocket-watches-time-of-time-watches-51396.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Baseus GaN Power Bank USB Charger",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/1162519/pexels-photo-1162519.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Headphones with Wireless Stereo",
            price:"549.99",
            flash:"Flash Sale"
        },
         {
            image:"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"FHD 160 Degree MP Camera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.unsplash.com/photo-1529111424977-59e5afaf5824?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w4Mzc0OTExfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name:"V9 Wireless Bluetooth CSR V4.1 Headset ",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.unsplash.com/photo-1455894127589-22f75500213a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTB8ODM3NDkxMXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            name:"Headphones with Wireless Stereo Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.unsplash.com/photo-1542124292-60272943a355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw4Mzc0OTExfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name:"V9 Wireless Bluetooth CSR V4.1",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Camera Professional Brushless Toys -",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/14434416/pexels-photo-14434416.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"360 G300H Dash Cam 1296P FHD 160 Degree 2.0 Inch  Smart Car DVR 3MP Camera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/10433477/pexels-photo-10433477.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Men Sport Shoes Sneakers Sneaker 4 4th Men Running Lightweight",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/6370370/pexels-photo-6370370.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Men Sport Shoes Sneakers Sneaker 4 4th Men Running Lightweight",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/11044768/pexels-photo-11044768.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Men Sport Shoes Sneakers Sneaker 4 4th Men Running Lightweight",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/12985958/pexels-photo-12985958.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:" DVR 3MP Camera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/12410982/pexels-photo-12410982.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"amera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/10933699/pexels-photo-10933699.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:" Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/4417768/pexels-photo-4417768.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:" Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/6791447/pexels-photo-6791447.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Men Sport Shoes Sneakers Sneaker 4 4th Men Running Lightweight",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/3892900/pexels-photo-3892900.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:" Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/3738406/pexels-photo-3738406.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/4089484/pexels-photo-4089484.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Car DVR 3MP Camera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/4089473/pexels-photo-4089473.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Smart Car DVR 3MP Camera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=600",
            name:" Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/4065617/pexels-photo-4065617.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"360 G300H Dash Cam 1296P FHD 160 Degree 2.0 Inch  Smart Car ",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.unsplash.com/photo-1542124292-60272943a355?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw4Mzc0OTExfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
            name:"360 G300H Dash Cam 1296P FHD 160",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/3802602/pexels-photo-3802602.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"630 G300H Dash Cam 1296P FHD 160 Degree 2.0 Inch  Smart Car ",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/5741878/pexels-photo-5741878.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:" Camera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/185030/pexels-photo-185030.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:" Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://images.pexels.com/photos/164710/pexels-photo-164710.jpeg?auto=compress&cs=tinysrgb&w=600",
            name:"Smart Car DVR 3MP Camera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },


        
    ]

    recommend.forEach(function(el){
    
        let div=document.createElement("div");
let image=document.createElement("img");
image.setAttribute("src",el.image)

let name=document.createElement("h4");
name.innerText=el.name;

let price=document.createElement("price")
price.innerText="$"+el.price;

let flesh=document.createElement("p")
flesh.innerText=el.flash;

let btn=document.createElement("button");
btn.innerText="Add to Cart"
btn.addEventListener("click",function(){
    arr_recommend.push(el)
    localStorage.setItem("recommend",JSON.stringify(arr_recommend))
})


div.append(image,name,price,flesh,btn)
document.querySelector("#recommended_container").append(div);
    })

    document.querySelector("#nav1").addEventListener("click",function(){
    window.location.reload()
    })

document.querySelector("#p1").addEventListener("click",function(){
    window.location.href="super.html"

})
    