let btn = document.getElementById('btn')
let btn1 = document.getElementById('btn1')
let anv = document.getElementById('lt')
let sec = document.getElementById('section')
let rt = document.getElementById('rt')
btn.onclick=function(){
    btn.style.display='none'
    anv.style.display='none'
    btn1.style.display='flex'
    sec.style.display='grid'
    sec.style.display='flex'
    sec.style.justifyContent='flex-start'
    sec.style.alignItems='flex-start'
    rt.style.width='100vw'

}
btn1.onclick=function(){
    btn1.style.display='none'
    anv.style.display='flex'
    btn.style.display='flex'
    sec.style.display='grid'
    sec.style.gridTemplateColumns='22% 77.5%'
    sec.style.gridTemplateAreas="lt rt"
    rt.style.width='100%'
}
let dos = document.getElementById('dos')
let pass = document.getElementById('pass')
let btn26 = document.getElementById('btn26')
let btn27 = document.getElementById('btn27')

btn26.onclick=function(){
    dos.style.display='flex'
    pass.style.display='none'
}
btn27.onclick=function(){
    dos.style.display='none'
    pass.style.display='flex'
}
