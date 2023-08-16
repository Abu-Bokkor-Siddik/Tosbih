
let a = document.getElementById('Subhan1');
let Subhan1incremtnt = 0;
a.addEventListener('click',function(){
    
//     let b = 0;
//  b += 1;
if(Subhan1incremtnt == 33){
    return alert('Complete SubhanAllah 🥰😇')
}
Subhan1incremtnt += 1;
// console.log(Subhan1incremtnt)


let c = document.getElementById('Subhan4');
c.innerText= Subhan1incremtnt


})

document.getElementById('Subhan2').addEventListener('click',function(){
    // console.log('hi')
    if(Subhan1incremtnt<= 0){
       return alert('Dont decrement')
    }
    Subhan1incremtnt -= 1;
    // console.log(Subhandecremtnt)
    let d = document.getElementById('Subhan4')
    d.innerText = Subhan1incremtnt
})




let d = document.getElementById('Alhamdullilah1');
let Alhamdullilah1p = 0;
d.addEventListener('click',function(){
    
//     let b = 0;
//  b += 1;
if(Alhamdullilah1p == 33){
    return alert('Complete Alhamdullilah 🥰😇')
}
Alhamdullilah1p += 1;
// console.log(Subhan1incremtnt)


let e= document.getElementById('Alhamdullilahp');
e.innerText= Alhamdullilah1p;


})

document.getElementById('Alhamdullilah2').addEventListener('click',function(){
    // console.log('hi')
    if(Alhamdullilah1p<= 0){
       return alert('Dont decrement')
    }
    Alhamdullilah1p -= 1;
    // console.log(Subhandecremtnt)
    let d = document.getElementById('Alhamdullilahp')
    d.innerText =Alhamdullilah1p;
})





let f = document.getElementById('Allahuakber1');
let Allahuakber1i = 0;
f.addEventListener('click',function(){
    
//     let b = 0;
//  b += 1;
if(Allahuakber1i == 33){
    return alert('Complete Allahuakber 🥰😇')
}
Allahuakber1i += 1;
// console.log(Subhan1incremtnt)


let g= document.getElementById('Allahuakber1p');
g.innerText= Allahuakber1i;


})

document.getElementById('Allahuakber2').addEventListener('click',function(){
    // console.log('hi')
    if(Allahuakber1i<= 0){
       return alert('Dont decrement')
    }
    Allahuakber1i -= 1;
    // console.log(Subhandecremtnt)
    let h = document.getElementById('Allahuakber1p')
    h.innerText =Allahuakber1i;
})





let resets = document.getElementById('reset1').addEventListener('click',function(){
// console.log('hi')


let c = document.getElementById('Subhan4');
c.innerText= 0;
Subhan1incremtnt = 0;


let d = document.getElementById('Alhamdullilahp')
    d.innerText =0;
    Alhamdullilah1p = 0;


let h = document.getElementById('Allahuakber1p')
    h.innerText =0;
     Allahuakber1i = 0;




    


})
