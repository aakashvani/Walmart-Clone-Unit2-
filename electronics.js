document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classList.remove("active")
    })
  })
// cart popup window function for appearing and disappearing add by shoaib (16th dec 9:45pm)

    function popup()
    {
       let change = document.getElementById("popup");
       change.style.display = "block";
    }
    function popuphide()
    {
       let change = document.getElementById("popup");
       change.style.display = "none";
    }

    function gotoGroceryPage()
    {
      window.location.href="https://www.walmart.com/cp/food/976759";
    }
    function gotoElectronicsPage()  /* replace with ankit electronic page link */
    {
      window.location.href="https://www.walmart.com/cp/electronics/3944"
    }
    function gotolandingPage(){
      window.location.href="http://127.0.0.1:5500/Walmart-Clone-Unit2-/landingPage/landing.html";
    }
    function goToToys(){
      window.location.href="https://www.walmart.com/cp/toys/4171";
    }

    // popup window code fucntion end here (shoaib)


  // sliding-JavaScript start---->

  $(".slider").owlCarousel({
    margin:20,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items: 1,
            nav:false
        }
      
        }

    
  })
//sliding-JavaScript End---->

// static part js function added by shoaib (17th dec 5:45a.m) 

// shoaib(sharing our values ) define colume JS. function starting --> colume
function shopNow()
   {
       window.location.href="https://www.salvationarmyusa.org/usn/walmart-angel-tree/"
   }
   function sd(){
       window.location.href ="https://www.walmart.com/cp/somos-mas/5593510?gbo=1"
   }
   function ln(){
       window.location.href ="https://www.walmart.com/cp/built-for-better/8747893"
   }
// Js code related to vaccine colume start
function shopCovidVaccine()
   {
   }
   function bookSlot(){
       window.location.href ="https://www.cowin.gov.in/"
   }
   function recordCheck(){
       window.location.href ="https://dashboard.cowin.gov.in/"
   }
// js code for vaccine column end
// tech deal start here
// next
var data = [
  {
      imgUrl:"https://i5.walmartimages.com/asr/93aa61db-93b6-4b82-82ad-5f7ec0786d00.1498af75a12946b85050ac177b05bf0c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      name:"Air pods pro ",
      name1:"Holiday Deal",
      price:"$179.00",
      save:"save with W+",

  }
]
var data1 = [{
      imgUrl:"https://i5.walmartimages.com/asr/e5eafda0-907f-4d0e-a723-ab69f576008c.66176f3f62458e5ea0584be0d0ba0eb2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      name:"Onn.58 4k 4HD(2160p) LED Roku Smart TV HDR (100069454)",
      price:"$328.00",
      name1:"Holiday Deal",
      save:"save with W+",


  }
]
var data2 =[ 
  {
      imgUrl:"https://i5.walmartimages.com/asr/458487d5-63ef-41c7-8bf9-d26d3ddf8e0e.9a353322210cd82aaed762a8b9047f53.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      name:"Samsung N4020 ,4GB Ra,32GB SSD, Chrome OS, platinum Titan,XE 310XBA",
      price:"$119.00",
      name1:"Holiday Deal",
      save:"save with W+",

  }
]
var data3 =[ 
  {
      imgUrl:"https://i5.walmartimages.com/asr/cdc5ea12-a214-4601-a971-f4f692231685.03d49a2a3f4fb25f04d4c2250be7ddc2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      name:"Samsung 65 Class 4k crystal UHD 2160p LED smart TV with HDR UN65TU7000",
      price:"$498.00",
      name1:"Holiday Deal",
      save:"save with W+",


  }
]
// console.log(data)

data.map(function(elem){
  
  // var div2=document.createElement('div')
  // div2.setAttribute("id","tech9")
  // var div1 =document.createElement('div')
  // div1.setAttribute("id","tech8")
  var div =document.createElement('div')
  div.setAttribute("id","tech4")
  var p1 =document.createElement('h4')
  p1.setAttribute("id","tech5")
  p1.textContent =elem.price

  var name =document.createElement('p')
  name.textContent=elem.name

  var name1 =document.createElement('p')
  name1.setAttribute("id","tech13")
  name1.textContent=elem.name1

  var save =document.createElement('h5')
  save.textContent=elem.save
  save.style.marginTop="10px"
  save.style.color="Blue"

  // name1.style.border="1px solid red"

  var a = document.createElement('a')
  a.setAttribute("href"," /AirPods/Airpods.html")
  var image =document.createElement('img')
  image.setAttribute("src",elem.imgUrl)
  image.setAttribute("id","tech6")
  image.setAttribute("id","tech6")

 a.append(image)
  div.append(name1,a,p1,name,save)
  // div1.append(p1,name) ye krna hai 
  // div2.append(div,div1)

document.querySelector("#tech3").append(div)
})


data1.map(function(elem){
  var div =document.createElement('div')
  div.setAttribute("id","tech4")

  var p1 =document.createElement('h4')
  p1.setAttribute("id","tech5")
  p1.textContent =elem.price

  var name =document.createElement('p')
  name.textContent=elem.name

  var name1 =document.createElement('p')
  name1.setAttribute("id","tech13")
  name1.textContent=elem.name1

  var save =document.createElement('h5')
  save.textContent=elem.save
  save.style.marginTop="10px"
  save.style.color="Blue"
   
  var a = document.createElement('a')
  a.setAttribute("href"," /Rouk/OnRoukTv.html")
   var image =document.createElement('img')
  image.setAttribute("src",elem.imgUrl)
  image.setAttribute("id","tech6")
  a.append(image)

  div.append(name1,a,p1,name,save)
  document.querySelector("#tech3").append(div)
  })
  



data2.map(function(elem){
      var div =document.createElement('div')
      div.setAttribute("id","tech4")

      // var div1 =document.createElement('div')
      // div1.setAttribute("id","tech13")

      var name =document.createElement('p')
      name.textContent=elem.name

      var name1 =document.createElement('p')
      name1.setAttribute("id","tech13")
      name1.textContent=elem.name1
      
      var save =document.createElement('h5')
      save.textContent=elem.save
      save.style.marginTop="10px"
      save.style.color="Blue"
  
      var p1 =document.createElement('h4')
      p1.textContent =elem.price
      p1.setAttribute("id","tech5")
      
      var a = document.createElement('a')
      a.setAttribute("href"," /SamsungLaptop/Laptop.html")
    
      var image =document.createElement('img')
      image.setAttribute("src",elem.imgUrl)
      image.setAttribute("id","tech6")
      a.append(image)

      div.append(name1,a,p1,name,save)
      document.querySelector("#tech3").append(div)
      })
      


data3.map(function(elem){

          var div =document.createElement('div')
          div.setAttribute("id","tech4")

          var name =document.createElement('p')
          name.textContent=elem.name

          var name1 =document.createElement('p')
          name1.setAttribute("id","tech13")
          name1.textContent=elem.name1
       
          var save =document.createElement('h5')
          save.textContent=elem.save
          save.style.marginTop="10px"
          save.style.color="Blue"
      
          var p1 =document.createElement('h4')
          p1.textContent =elem.price
          p1.setAttribute("id","tech5")

          var a = document.createElement('a')
          a.setAttribute("href"," /Samsung1/samsungled.html")
          

          var image =document.createElement('img')
          image.setAttribute("src",elem.imgUrl)
          image.setAttribute("id","tech6")
          a.append(image)


          div.append(name1,a,p1,name,save)
          document.querySelector("#tech3").append( div)
          })

var box1 =[ 
  {
      imgUrl:"https://i5.walmartimages.com/asr/e52a9dc6-7daa-4fb1-b40e-be6b90630666_1.8676a7b4de5c0387258612bf0f86b53c.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      name:"Sylvania 15.6 Widescreen Portable DVD player with Swivel Screen",
      price:"$498.00",
      save:"save with W+",
      name1:"Holiday Deal",


  }
]
var box2 =[ 
  {
      imgUrl:"https://i5.walmartimages.com/asr/8e33c1b2-a01d-4b54-a864-58adf7cc5b8a.15923fe0fa0b8d474afc453cdf8abe88.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      name:"Roku LE HD Streaming Media player with High Speed HDMI Cable and Simple",
      price:"$15.00",
      save:"save with W+",
      name1:"Holiday Deal",

  }
]
var box3 =[ 
  {
      imgUrl:"https://i5.walmartimages.com/asr/cdc5ea12-a214-4601-a971-f4f692231685.03d49a2a3f4fb25f04d4c2250be7ddc2.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      name:"SAMSUNG 55 Class 4K Crytal UHD (2160P)LED Sart TV with HDR UN55TU7000",
      price:"$498.00",
      save:"save with W+",
      name1:"Holiday Deal",


  }
]
var box4 =[ 
  {
      imgUrl:"https://i5.walmartimages.com/asr/f0f38a3e-7a2f-4a7c-af6e-008d4e1cdaa6.a83c4b5d08606550d6888f095e9f2d55.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      name:"SAMSUNG HW-A40M 2.1 Channel Soundbar with Wireless SUbwoofer and Dolby Audio",
      price:"$200.00",
      save:"save with W+",
      name1:"Holiday Deal",


  }
]


box1.map(function(elem){

  var div =document.createElement('div');
  div.setAttribute("id","tech10");
  var div1=document.createElement('div');
  div1.setAttribute("id","tech11")

  var a = document.createElement('a')
  a.setAttribute("href"," /Sylvania/Sylvania.html")

  var image =document.createElement('img')
  image.setAttribute("src",elem.imgUrl);
  image.setAttribute("id","tech6")
  a.append(image)
  var name =document.createElement('p')
  name.textContent=elem.name
  var p1 =document.createElement('h4')
  p1.textContent =elem.price
  p1.setAttribute("id","tech5")

  var save =document.createElement('h5')
  save.textContent=elem.save
  save.style.marginTop="10px"
  save.style.color="Blue"

  var name1 =document.createElement('p')
  name1.setAttribute("id","tech13")
  name1.textContent=elem.name1


  div1.append(name1,a)
  var div2=document.createElement('div');
  div2.setAttribute("id","tech12");
  div2.append(p1,name,save)
  div.append(div1,div2);
  document.querySelector("#tech9").append(div)

})
box2.map(function(elem){

  var div =document.createElement('div');
  div.setAttribute("id","tech10");
  var div1=document.createElement('div');
  div1.setAttribute("id","tech11")

  var a = document.createElement('a')
  a.setAttribute("href"," /Rokule/Rokule.html")

  var image =document.createElement('img')
  image.setAttribute("src",elem.imgUrl)
  image.setAttribute("id","tech6")
  a.append(image)

  var name =document.createElement('p')
  name.textContent=elem.name
  var p1 =document.createElement('h4')
  p1.textContent =elem.price
  p1.setAttribute("id","tech5");

  var save =document.createElement('h5')
  save.textContent=elem.save
  save.style.marginTop="10px"
  save.style.color="Blue"

  var name1 =document.createElement('p')
  name1.setAttribute("id","tech13")
  name1.textContent=elem.name1


  div1.append(name1,a)
  var div2=document.createElement('div');
  div2.setAttribute("id","tech12");
  div2.append(p1,name,save)
  div.append(div1,div2);

  document.querySelector("#tech9").append(div)

})
box3.map(function(elem){

  var div =document.createElement('div');
  div.setAttribute("id","tech10");
  var div1=document.createElement('div');
  div1.setAttribute("id","tech11")

  var a = document.createElement('a')
  a.setAttribute("href"," /Samsung2/samsungled.html")

  var image =document.createElement('img')
  image.setAttribute("src",elem.imgUrl)
  image.setAttribute("id","tech6")
  a.append(image)

  var name =document.createElement('p')
  name.textContent=elem.name
  var p1 =document.createElement('h4')
  p1.textContent =elem.price
  p1.setAttribute("id","tech5")

  var save =document.createElement('h5')
  save.textContent=elem.save
  save.style.marginTop="10px"
  save.style.color="Blue"

  var name1 =document.createElement('p')
  name1.setAttribute("id","tech13")
  name1.textContent=elem.name1




  div1.append(name1,a)
  var div2=document.createElement('div');
  div2.setAttribute("id","tech12");
  div2.append(p1,name,save)
  div.append(div1,div2);

  document.querySelector("#tech9").append(div)

})
box4.map(function(elem){

  var div =document.createElement('div');
  div.setAttribute("id","tech10");
  var div1=document.createElement('div');
  div1.setAttribute("id","tech11")

  var a = document.createElement('a')
  a.setAttribute("href"," /Soundbox/Hw.html")

  var image =document.createElement('img')
  image.setAttribute("src",elem.imgUrl)
  image.setAttribute("id","tech6")
  a.append(image)

  var name =document.createElement('p')
  name.textContent=elem.name
  var p1 =document.createElement('h4')
  p1.textContent =elem.price
  p1.setAttribute("id","tech5")

  var save =document.createElement('h5')
  save.textContent=elem.save
  save.style.marginTop="10px"
  save.style.color="Blue"

  var name1 =document.createElement('p')
  name1.setAttribute("id","tech13")
  name1.textContent=elem.name1



  div1.append(name1,a)
  var div2=document.createElement('div');
  div2.setAttribute("id","tech12");
  div2.append(p1,name,save);
  div.append(div1,div2);

  document.querySelector("#tech9").append(div)

})
