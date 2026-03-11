const images=document.querySelectorAll(".gallery img");
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");

let index=0;

images.forEach((img,i)=>{

img.addEventListener("click",()=>{

index=i;
show();

});

});

function show(){

lightbox.style.display="flex";
lightboxImg.src=images[index].src;

}

document.getElementById("close").onclick=()=>{
lightbox.style.display="none";
};

document.getElementById("next").onclick=()=>{

index=(index+1)%images.length;
show();

};

document.getElementById("prev").onclick=()=>{

index=(index-1+images.length)%images.length;
show();

};

document.querySelectorAll(".filters button").forEach(btn=>{

btn.onclick=()=>{

let filter=btn.dataset.filter;

images.forEach(img=>{

if(filter==="all"||img.classList.contains(filter))
img.style.display="block";
else
img.style.display="none";

});

};

});
