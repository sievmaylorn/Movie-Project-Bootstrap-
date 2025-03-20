
new Typed('.auto-type', 
    {
        strings:['រឿងខ្មែរ','រឿងបរទេស','រឿងផ្សេងៗ'],
        loop: true,
        typeSpeed: 120,
        backSpeed: 120,
    }
)

const header = document.getElementById('nav')

header.style.padding = "35px 0";

window.onscroll = function(){
    const scrollvalue = window.scrollY;
    // console.log(scrollvalue);

    if(scrollvalue > 120)
    {
        header.style.padding = "16px 0";
        header.style.backgroundColor = "gray";
        header.style.transition = "0.3s ease-in";
    } else
    {
        header.style.backgroundColor = "transparent";
        header.style.padding = "35px 0";
        header.style.transition = "0.3s ease-out";
    }
}
// -----AOS
 AOS.init();

// ----------Scary movie
var movieAarr = [
    {title:"The Dark Mother",year:"២០១៨",duration:120,rate:4.3,category:"scary",img:"./assets/img/movie1.jpg"},
    {title:"ឃើញក្បាលខ្ញំុទេ",year:"២០២២",duration:90,rate:3.9,category:"scary",img:"./assets/img/movie2.jpg"},
    {title:"បណ្តាសារនាងរាត្រី",year:"២០១៩",duration:200,rate:5.8,category:"scary",img:"./assets/img/movie3.jpg"},
    {title:"ខ្មោចពោះធំ",year:"២០២៤",duration:185,rate:2.2,category:"scary",img:"./assets/img/movie4.jpg"},
    {title:"Z-MOM",year:"២០១៤",duration:185,rate:2.2,category:"scary",img:"./assets/img/movie5.jpg"},
]

var scarymovie = document.getElementById('scarymovie');
scarymovie.innerHTML = "";
movieAarr.forEach((e)=>{
    scarymovie.innerHTML += 
    `                                <div data-aos="zoom-in" data-aos-delay="100" class="col-12 col-md-6 col-lg-3">
                                        <div class="px-2">
                                            <div style="height: 450px;" class="bg-blue-100 overflow-hidden hover-image rounded-2 ">
                                                <img src="${e.img}" 
                                                alt="" class="w-100 h-100 object-fit-cover">
                                            </div>

                                            <div class="d-flex justify-content-between mt-3 mb-2">
                                                <h3 class="text-light font-kh-bayon">${e.title}</h3>
                                                <h3 class="text-blue-400 fw-bold">${e.year}</h3>
                                            </div>
                                            <div class="d-flex justify-content-between mt-3">
                                                <p class="border-danger border-2 px-2 text-light fw-bold m-0 text-blue-400">HD</p>
                                                <div class="pe-4 pe-md-2 pe-lg-0 d-flex align-items-center">
                                                    <i class="bi bi-alarm me-2 fw-bolder text-light"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.duration}</p>
                                                    &ensp;
                                                    <i class="bi bi-star-fill me-2 fw-bolder text-blue-400 fw-bold"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.rate}</p>
                                                </div>
                                            </div>
                                        </div>
                                     </div> `
})

// -----------------Funny
var movieAarr1 = [
    {title:"ស្រឡាញ់បងល្អពេក",year:"២០១៨",duration:120,rate:4.3,category:"funny",img:"./assets/img/funny1.jpg"},
    {title:"អាភ្លេច",year:"២០២២",duration:90,rate:3.9,category:"funny",img:"./assets/img/funny2.jpg"},
    {title:"លោកប៉ាមហាកូរ",year:"២០១៩",duration:200,rate:5.8,category:"funny",img:"./assets/img/funny3.jpg"},
    {title:"ប្រុសលក់ខ្លួន",year:"២០២៤",duration:185,rate:2.2,category:"funny",img:"./assets/img/funny4.jpg"},
]

var funnymovie = document.getElementById('funnymovie');
funnymovie.innerHTML = " ";
movieAarr1.forEach((e)=>{
    funnymovie.innerHTML += 
    `                                <div class=" col-12 col-md-6 col-lg-3">
                                        <div class="px-2">
                                            <div style="height: 450px;" class="bg-blue-100 overflow-hidden hover-image rounded-2 ">
                                                <img src="${e.img}" 
                                                alt="" class="w-100 h-100 object-fit-cover">
                                            </div>

                                            <div class="d-flex justify-content-between mt-3 mb-2">
                                                <h3 class="text-light font-kh-bayon">${e.title}</h3>
                                                <h3 class="text-blue-400 fw-bold">${e.year}</h3>
                                            </div>
                                            <div class="d-flex justify-content-between mt-3">
                                                <p class="border-danger border-2 px-2 text-light fw-bold m-0 text-blue-400">HD</p>
                                                <div class="pe-4 pe-md-2 pe-lg-0 d-flex align-items-center">
                                                    <i class="bi bi-alarm me-2 fw-bolder text-light"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.duration}</p>
                                                    &ensp;
                                                    <i class="bi bi-star-fill me-2 fw-bolder text-blue-400 fw-bold"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.rate}</p>
                                                </div>
                                            </div>
                                        </div>
                                     </div> `
})

// ------------------------History 
var movieAarr2 = [
    {title:"ស្រឡាញ់បងល្អពេក",year:"២០១៨",duration:120,rate:4.3,category:"history",img:"./assets/img/history1.jpg"},
    {title:"អាភ្លេច",year:"២០២២",duration:90,rate:3.9,category:"history",img:"./assets/img/history2.jpg"},
    {title:"លោកប៉ាមហាកូរ",year:"២០១៩",duration:200,rate:5.8,category:"history",img:"./assets/img/history3.jpg"},
    {title:"ប្រុសលក់ខ្លួន",year:"២០២៤",duration:185,rate:2.2,category:"history",img:"./assets/img/history4.jpg"},
]

var historymovie = document.getElementById('historymovie');
historymovie.innerHTML = " ";
movieAarr2.forEach((e)=>{
    historymovie.innerHTML += 
         `                                <div class="col-12 col-md-6 col-lg-3">
                                        <div class="px-2">
                                            <div style="height: 450px;" class="bg-blue-100 overflow-hidden hover-image rounded-2 ">
                                                <img src="${e.img}" 
                                                alt="" class="w-100 h-100 object-fit-cover">
                                            </div>

                                            <div class="d-flex justify-content-between mt-3 mb-2">
                                                <h3 class="text-light font-kh-bayon">${e.title}</h3>
                                                <h3 class="text-blue-400 fw-bold">${e.year}</h3>
                                            </div>
                                            <div class="d-flex justify-content-between mt-3">
                                                <p class="border-danger border-2 px-2 text-light fw-bold m-0 text-blue-400">HD</p>
                                                <div class="pe-4 pe-md-2 pe-lg-0 d-flex align-items-center">
                                                    <i class="bi bi-alarm me-2 fw-bolder text-light"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.duration}</p>
                                                    &ensp;
                                                    <i class="bi bi-star-fill me-2 fw-bolder text-blue-400 fw-bold"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.rate}</p>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
             `
})


// -------------------Top Rate

var movieAarr3 = [
    {title:"ស្រឡាញ់បងល្អពេក",year:"២០១៨",duration:120,rate:4.3,category:"history",img:"./assets/img/funny1.jpg"},
    {title:"អាភ្លេច",year:"២០២២",duration:90,rate:3.9,category:"funny",img:"./assets/img/funny2.jpg"},
    {title:"ប្រុសលក់ខ្លួន",year:"២០២៤",duration:185,rate:2.2,category:"funny",img:"./assets/img/funny4.jpg"},
    {title:"Z-MOM",year:"២០១៤",duration:185,rate:2.2,category:"funny",img:"./assets/img/movie5.jpg"},
]

var Ratemovie = document.getElementById('Ratemovie');
Ratemovie.innerHTML = " ";
movieAarr3.forEach((e)=>{
    Ratemovie.innerHTML += 
    `                                <div class=" col-12 col-md-6 col-lg-3">
                                        <div class="px-2">
                                            <div style="height: 450px;" class="bg-blue-100 overflow-hidden hover-image rounded-2 ">
                                                <img src="${e.img}" 
                                                alt="" class="w-100 h-100 object-fit-cover">
                                            </div>

                                            <div class="d-flex justify-content-between mt-3 mb-2">
                                                <h3 class="text-light font-kh-bayon">${e.title}</h3>
                                                <h3 class="text-blue-400 fw-bold">${e.year}</h3>
                                            </div>
                                            <div class="d-flex justify-content-between mt-3">
                                                <p class="border-danger border-2 px-2 text-light fw-bold m-0 text-blue-400">HD</p>
                                                <div class="pe-4 pe-md-2 pe-lg-0 d-flex align-items-center">
                                                    <i class="bi bi-alarm me-2 fw-bolder text-light"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.duration}</p>
                                                    &ensp;
                                                    <i class="bi bi-star-fill me-2 fw-bolder text-blue-400 fw-bold"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.rate}</p>
                                                </div>
                                            </div>
                                        </div>
                                     </div> `
})
// ------------------------Best TV Series----------------
var movieAarr4 = [
    {title:"ទេពហត្ថា",year:"២០១៨",duration:120,rate:4.3,category:"history",img:"./assets/img/history1.jpg"},
    {title:"រាមកេរ្តិ័",year:"២០២២",duration:90,rate:3.9,category:"history",img:"./assets/img/history2.jpg"},
    {title:"The Dark Mother",year:"២០១៨",duration:120,rate:4.3,category:"scary",img:"./assets/img/movie1.jpg"},
    {title:"Z-MOM",year:"២០១៤",duration:185,rate:2.2,category:"funny",img:"./assets/img/movie5.jpg"},
]

var Ratemovie1 = document.getElementById('Ratemovie1');
Ratemovie1.innerHTML = " ";
movieAarr4.forEach((e)=>{
    Ratemovie1.innerHTML += 
    `                                <div class="col-12 col-md-6 col-lg-3">
                                        <div class="px-2">
                                            <div style="height: 450px;" class="bg-blue-100 overflow-hidden hover-image rounded-2 ">
                                                <img src="${e.img}" 
                                                alt="" class="w-100 h-100 object-fit-cover">
                                            </div>

                                            <div class="d-flex justify-content-between mt-3 mb-2">
                                                <h3 class="text-light font-kh-bayon">${e.title}</h3>
                                                <h3 class="text-blue-400 fw-bold">${e.year}</h3>
                                            </div>
                                            <div class="d-flex justify-content-between mt-3">
                                                <p class="border-danger border-2 px-2 text-light fw-bold m-0 text-blue-400">HD</p>
                                                <div class="pe-4 pe-md-2 pe-lg-0 d-flex align-items-center">
                                                    <i class="bi bi-alarm me-2 fw-bolder text-light"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.duration}</p>
                                                    &ensp;
                                                    <i class="bi bi-star-fill me-2 fw-bolder text-blue-400 fw-bold"></i>
                                                    <p class="text-light m-0 fw-bolder">${e.rate}</p>
                                                </div>
                                            </div>
                                        </div>
                                     </div> `
})
