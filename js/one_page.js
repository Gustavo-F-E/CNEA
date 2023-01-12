const bloque = document.querySelectorAll('.bloque')
const h3 = document.querySelectorAll('.h3')

h3.forEach((aCadaH3,i)=>{
    h3[i].addEventListener('click', ()=>{
        bloque.forEach((cadaBloque,i)=>{
            bloque[i].classList.remove('activo')
        })
        bloque[i].classList.add('activo')
    })
})