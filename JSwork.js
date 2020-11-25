/*Наведення-відведення на вікно вибору категорій */ 
let menukategory = document.getElementById('menuKat');
let kategory = document.getElementById('kat');
menukategory.onmouseover=()=>{
    kategory.style.display ='inline-block';
    menukategory.style.border ='2px solid orange';
}
menukategory.onmouseout=()=>{
    kategory.style.display='none';
    menukategory.style.border ='2px solid black';
}
/*Натискання на категорії */ 
let katP1 = document.getElementById('katP1');
let katP2 = document.getElementById('katP2');
let katP3 = document.getElementById('katP3');
let mainDivOne =document.getElementById('mainDivOne');
let mainDivTwo = document.getElementById('mainDivTwo');
let mainDivThree = document.getElementById('mainDivThree');
katP1.onclick=()=>{
    mainDivOne.style.display = 'inline-block';
    mainDivTwo.style.display= 'none';
    mainDivThree.style.display='none';
}
katP2.onclick=()=>{
    mainDivOne.style.display = 'none';
    mainDivTwo.style.display= 'inline-block';
    mainDivThree.style.display='none';
}
katP3.onclick=()=>{
    mainDivOne.style.display = 'none';
    mainDivTwo.style.display= 'none';
    mainDivThree.style.display='inline-block';
}

/*Товари-cклади */
/*Склад Протипопожежних товарів */
let skladPPT=[
towar={
    imege: 'https://img01.flagma.ua/photo/ognetushitel-op-5-12081951_medium.jpg' ,
    name: "vognegasnik AF-3000",
    cost: 300
}
,
towar={
    imege: 'https://torgeat.ru/goodimg/_eat/52/832252/98/4716898-ognetushitel-op-4.jpeg' ,
    name: "vognegasnik ARos-5",
    cost: 500
}
,
towar={
    imege: 'https://cdn.shopify.com/s/files/1/0442/5567/4523/products/IMG_1670_1024x1024@2x.jpg?v=1599839033' ,
    name: "Шланг червоний ТТ-200",
    cost: 150
}
,
towar={
    imege: 'https://101.net.ua/image/cache/800-700/data/new2019/setka-vsasyvayushchaya-sv-80-2306.png' ,
    name: "Сітка всмоктуюча",
    cost: 700
}
,
towar={
    imege: 'https://101.net.ua/image/cache/800-700/data/new2019/verevka-pozharnaya-spasatelnaya-vps-50-2375.jpg' ,
    name: "Шнур рятувальний",
    cost: 450   
}

]
/*Склад Противогазових товари */

/*Функція створення ППТ товару */
    
    for(i=0;i<skladPPT.length;i++){
     let mistsePPT = document.createElement('div');
     mistsePPT.style.display='inline-block'
     mistsePPT.style.width = '257px';
     mistsePPT.style.height ='310px';
     mistsePPT.style.backgroundColor ='white';
     mistsePPT.style.border ='2px solid black';
     mistsePPT.style.margin='3px';
     mistsePPT.style.borderRadius ='10px';
     mistsePPT.style.padding='6px';
     mistsePPT.style.float='left';
     mainDivOne.appendChild(mistsePPT);
     mistsePPT.innerHTML = `<img src=${ skladPPT[i].imege}><br> Назва: ${skladPPT[i].name} <br> Ціна: ${skladPPT[i].cost} <br> `;
     /* Інпут*/
     let numb = document.createElement('input');
     numb.style.float='left';
     numb.min=1;
     numb.max=100;
     numb.value=1;
     numb.type='number';
     numb.style.width='50px'
     numb.style.margin='5px';
     mistsePPT.appendChild(numb);

     let razom = document.createElement('div');
    razom.style.display='inline-block';
     razom.value=1;
     razom.type='number';
     razom.style.width='170px'
     razom.style.margin='5px';
     razom.style.color='orange';
     razom.innerHTML=('Разом: '+numb.value*skladPPT[i].cost);
     let r =skladPPT[i].cost;
     numb.onkeyup=function () {
         razom.innerHTML = ('Разом: ' + numb.value * r);
         if(numb.value*r>r){
            razom.style.color='red';
            }else{
                razom.style.color='orange';
            }
     }
     numb.onmouseup=function () {
        razom.innerHTML = ('Разом: ' + numb.value * r);
        if(numb.value*r>r){
        razom.style.color='red';
        }else{
            razom.style.color='orange';
        }

    }
     mistsePPT.appendChild(razom);     
     /* Кнопка в корзину*/
     let korzyna = document.getElementById('korzyna');
     let korzynaImg = document.getElementById('korzynaImg');
     let some = document.createElement('div');
     some.style.width = '70px';
     some.style.height ='20px';
     some.style.backgroundColor='green';
     some.style.borderRadius='10px';
     some.innerHTML='В корзину';
     some.style.color='white';
     some.style.padding='10px';
     mistsePPT.appendChild(some);
     some.onmouseover=()=>{
         some.style.color='yellow';
     }
     some.onmouseout=()=>{
        some.style.color='white';
     }
      some.onclick=()=>{
      korzynaImg.style.display='table';
      }
    }
    



