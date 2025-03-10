new Typed('.auto-type', 
    {
        strings:['ភាគយន្តខ្មែរ','ភាគយន្តបរទេស','ភាគយន្តផ្សេងៗ'],
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
        header.style.backgroundColor = "pink";
        header.style.transition = "0.3s ease-in";
    } else
    {
        header.style.backgroundColor = "transparent";
        header.style.padding = "35px 0";
        header.style.transition = "0.3s ease-out";
    }
}