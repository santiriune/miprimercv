document.getElementById("ford")
.addEventListener("click",()=>
cambiarFondo("#d39f9f", "#ffd9d9")
);

document.getElementById("avion")
.addEventListener("click",()=>
cambiarFondo("#9a9acd","rgb(228, 225, 253)")
);

document.getElementById("territory")
.addEventListener("click",()=>
cambiarFondo("#a1a180","rgb(247, 253, 225)")
);

function cambiarFondo(colorIzquierda,colorDerecha){
if(document.documentElement.style.getPropertyValue('--color-izquierda')===colorIzquierda){
    document.documentElement.style.setProperty('--color-izquierda', "rgb(121, 118, 120)");
    document.documentElement.style.setProperty('--color-derecha', "white"); 
}
else{
    document.documentElement.style.setProperty('--color-derecha', colorDerecha);
    document.documentElement.style.setProperty('--color-izquierda',colorIzquierda );
}


}