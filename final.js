// collectionPage
let arr_collection=JSON.parse(localStorage.getItem("collection")) || []
    let collection=[
        {image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16554/goods_thumb_220-v1/474893e6aae3.jpg",
         name:"Nimble Tech Store"
    },
{
    image:"https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16534/goods_thumb_220-v3/1519af3adbf9.jpg",
     name:"Laser Master"
},
{
    image:"https://gloimg.gbtcdn.com/soa/gb/item/6900746726869757952/16492/goods_thumb_220-v3/0331f75f74f0.jpg",
    name:"Hot xiomi Laptop"
},
{
    image:"https://gloimg.gbtcdn.com/soa/gb/store/6907043732781199360/16492/goods_thumb_220-v2/eb108f2fda03.jpg",
    name:"TWOTREES Official Store"
},
{
    image:"https://gloimg.gbtcdn.com/soa/gb/store/6900399760277172224/16511/goods_thumb_220-v3/6b1417b9a752.jpg",
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
        {image:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16526/goods_thumb_220-v1/3df76f2e19f0.jpg",
         name:"Gaming wireless Headphones"
    },
{
    image:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16469/goods_thumb_220-v1/bf89aac60f4e.jpg",
     name:"xiomi blackstone electic"
},
{
    image:"https://gloimg.gbtcdn.com/soa/gb/item/6900399760277172224/16467/goods_thumb_220-v1/01fc7d134255.jpg",
    name:"New Bluetooth watch"
},
{
    image:"https://gloimg.gbtcdn.com/soa/gb/item/6899301501118902272/16551/goods_thumb_220-v3/6466b98d5354.jpg",
    name:"Xiomi Aquara smart Temperature Humidity"
},
{
    image:"https://gloimg.gbtcdn.com/soa/gb/item/6878391336429613056/16469/goods_thumb_220-v1/66caa4e51717.jpg",
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
        {image:"https://gloimg.gbtcdn.com/soa/gb/item/6878025592978206720/16570/goods_thumb_220-v3/3d88e72aa70b.jpg",
         name:"GPS Drone with "
    },
{
    image:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16570/goods_thumb_220-v5/0399788174bd.jpg",
     name:"camera"
},
{
    image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16571/goods_thumb_220-v1/5cd047a2fbea.jpg",
    name:"xiomi phone"
},
{
    image:"https://gloimg.gbtcdn.com/soa/gb/store/6907043732781199360/16492/goods_thumb_220-v2/eb108f2fda03.jpg",
    name:"TWOTREES Official Store"
},
{
    image:"https://gloimg.gbtcdn.com/soa/gb/store/6507287161137004544/16570/goods_thumb_220-v3/c71199a32b70.jpg",
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
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16577/goods_img-v1/d94ff13e2a7b.jpg",
            name:"360 G300H Dash Smart Car DVR 3MP Camera WIFI ",
            price:"79.00",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16575/goods_img-v1/77d59be42fb2.jpg",
            name:"Xiaomi Redmi Buds 4 Pro Earphone Bluetooth 3 Mic Wireless",
            price:"67.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6878399324569661440/16517/goods_img-v7/a00cb9f65d8f.jpg",
            name:"TRONXY CRUX 1 3D printer Presale",
            price:"179.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16577/goods_img-v1/d94ff13e2a7b.jpg",
            name:"M-855 Wireless Router Wifi 300M Signal",
            price:"14.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16580/goods_img-v1/201adc2e44c0.jpg",
            name:"JJRC H108 DIY Building Blocks Drone with HD",
            price:"36.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6878030535709618176/16577/goods_img-v1/688df4b94eb8.jpg",
            name:"360 G300H DasInch  Sm We Maps Night Vision Parking Monitor",
            price:"38.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16545/goods_img-v3/a75d89f4a160.jpg",
            name:"3HD 160 Degree Camera aps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6878400698325856256/16419/goods_img-v1/22549f61229b.jpg",
            name:"Baseus GaN Power Bank USB Charger",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16560/goods_img-v1/7dd97992ee49.jpg",
            name:"Headphones with Wireless Stereo",
            price:"549.99",
            flash:"Flash Sale"
        },
         {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6862458881155723264/16534/goods_img-v3/1519af3adbf9.jpg",
            name:"FHD 160 Degree MP Camera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16563/goods_img-v1/19e5bb35066f.jpg",
            name:"V9 Wireless Bluetooth CSR V4.1 Headset ",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16554/goods_img-v1/474893e6aae3.jpg",
            name:"Headphones with Wireless Stereo Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16465/goods_img-v1/8fc8853ff3b3.jpg",
            name:"V9 Wireless Bluetooth CSR V4.1",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16538/goods_img-v1/1d662f23ff41.jpg",
            name:"Camera Professional Brushless Toys -",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6900386065325158400/16545/goods_img-v1/7fb1c3c77ea9.jpg",
            name:"360 G300H Dash Cam 1296P FHD 160 Degree 2.0 Inch  Smart Car DVR 3MP Camera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6908377430696849408/16521/goods_img-v1/7411a7090935.jpg",
            name:"Men Sport Shoes Sneakers Sneaker 4 4th Men Running Lightweight",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16061/goods_img-v1/51299ec84910.jpg",
            name:"Men Sport Shoes Sneakers Sneaker 4 4th Men Running Lightweight",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16467/goods_img-v2/7f3ed3c839fe.jpg",
            name:"Men Sport Shoes Sneakers Sneaker 4 4th Men Running Lightweight",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6878402251153666048/16514/goods_img-v9/286a149e4bd4.jpg",
            name:" DVR 3MP Camera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15928/goods_img-v4/accae4e3d6a5.jpg",
            name:"amera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6898341271098814464/16575/goods_img-v1/c61e7f592465.jpg",
            name:" Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/store/6878025592978206720/16531/goods_img-v1/6cd7f3cabfaf.jpg",
            name:" Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6878024886355423232/16453/goods_img-v2/677443d1848e.jpg",
            name:"Men Sport Shoes Sneakers Sneaker 4 4th Men Running Lightweight",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/store/6866331803104505856/16421/goods_img-v3/d6e1acb6230c.jpg",
            name:" Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/store/6615272824267153408/16427/goods_img-v3/093e9bc5ff1f.jpg",
            name:"GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6866325577285169152/16388/goods_img-v1/f67c07d453c0.jpg",
            name:"Car DVR 3MP Camera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6870745450383863808/16434/goods_img-v1/5690c2eeed7d.jpg",
            name:"Smart Car DVR 3MP Camera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15960/goods_img-v1/694fe0be3aed.jpg",
            name:" Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6878399324569661440/16576/goods_img-v4/f1105fe72ae0.jpg",
            name:"360 G300H Dash Cam 1296P FHD 160 Degree 2.0 Inch  Smart Car ",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6866331803104505856/16390/goods_img-v1/351c2e265cf6.jpg",
            name:"360 G300H Dash Cam 1296P FHD 160",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6866331933228593152/16538/goods_img-v1/75ce5cfbb946.jpg",
            name:"Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/16012/goods_img-v1/46d319b41f27.jpg",
            name:"630 G300H Dash Cam 1296P FHD 160 Degree 2.0 Inch  Smart Car ",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15959/goods_img-v2/1338948eb469.jpg",
            name:" Camera WIFI GPS Google Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/store/6507287161137004544/16402/goods_img-v3/cf56ccf1c1ea.jpg",
            name:" Maps Night Vision Parking Monitor",
            price:"549.99",
            flash:"Flash Sale"
        },
        {
            image:"https://gloimg.gbtcdn.com/soa/gb/item/6615272824267153408/15967/goods_img-v1/06294f8420ed.jpg",
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
    