/*Наведення-відведення на вікно вибору категорій */ 
let menukategory = document.getElementById('menuKat');
let kategory = document.getElementById('kat');
menukategory.style.backgroundColor= 'rgba(199, 199, 199, 0.84)';
menukategory.onmouseover=()=>{
    kategory.style.display ='inline-block';
    menukategory.style.border ='6px solid yellow';
}
menukategory.onmouseout=()=>{
    kategory.style.display='none';
    menukategory.style.border ='3px solid orange';
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

/*Наведення на самі категорії*/
katP1.onmouseover=()=>{
    katP1.style.backgroundColor ='rgba(252, 232, 205, 0.71)';
}
katP1.onmouseout=()=>{
    katP1.style.backgroundColor ='white';
}

katP2.onmouseover=()=>{
    katP2.style.backgroundColor ='rgba(210, 252, 205, 0.71)';
}
katP2.onmouseout=()=>{
    katP2.style.backgroundColor ='white';
}
katP3.onmouseover=()=>{
    katP3.style.backgroundColor ='rgba(205, 225, 252, 0.71)';
}
katP3.onmouseout=()=>{
    katP3.style.backgroundColor ='white';
}

/*Склад  товарів */
let skladPPT=[
towar={
    imege: 'https://img01.flagma.ua/photo/ognetushitel-op-5-12081951_medium.jpg' ,
    name: "vognegasnik AF-3000",
    type: 'Протипожежні',
    cost: 300
}
,
towar={
    imege: 'https://torgeat.ru/goodimg/_eat/52/832252/98/4716898-ognetushitel-op-4.jpeg' ,
    name: "vognegasnik ARos-5",
    type: 'Протипожежні',
    cost: 500
}
,
towar={
    imege: 'https://cdn.shopify.com/s/files/1/0442/5567/4523/products/IMG_1670_1024x1024@2x.jpg?v=1599839033' ,
    name: "Шланг червоний ТТ-200",
    type: 'Протипожежні',
    cost: 150
}
,
towar={
    imege: 'https://101.net.ua/image/cache/800-700/data/new2019/setka-vsasyvayushchaya-sv-80-2306.png' ,
    name: "Сітка всмоктуюча",
    type: 'Протипожежні',
    cost: 700
}
,
towar={
    imege: 'https://101.net.ua/image/cache/800-700/data/new2019/verevka-pozharnaya-spasatelnaya-vps-50-2375.jpg' ,
    name: "Шнур рятувальний",
    type: 'Протипожежні',
    cost: 450   
}
,
    towar={
        imege: 'https://i2.rozetka.ua/goods/22018079/74602224_images_22018079678.jpg' ,
        name: "Датчик газу JKD 512COM",
        type: 'Протигазові',
        cost: 1000
    }
,
    towar={
        imege: 'https://i2.rozetka.ua/goods/16513977/ajax_000016461_images_16513977761.jpg' ,
        name: "Сигналізація Ajax StarterKit",
        type: 'Загальнобезпечні',
        cost: 8000
    },
    towar={
        imege: 'https://avpharma.com.ua/wp-content/uploads/2020/01/first-aid-kit-medical-automobile-ama-1-in-a-red-bag-600x600.jpg' ,
        name: "Автомобільна аптечка AMA-1",
        type: 'Пакет',
        cost: 500
    }
]

/*Функція створення товару */
    
    for(i=0;i<skladPPT.length;i++){
     let mistsePPT = document.createElement('div');
     mistsePPT.style.display='inline-block'
     mistsePPT.style.width = '257px';
     mistsePPT.style.height ='340px';
     mistsePPT.style.backgroundColor ='white';
     mistsePPT.style.border ='2px solid black';
     mistsePPT.style.margin='3px';
     mistsePPT.style.borderRadius ='10px';
     mistsePPT.style.padding='6px';
     mistsePPT.style.float='left';
     if(skladPPT[i].type =="Протипожежні"){
     mainDivOne.appendChild(mistsePPT);
     }else if(skladPPT[i].type =="Протигазові"){
        mainDivTwo.appendChild(mistsePPT);
     }else if(skladPPT[i].type =="Загальнобезпечні"){
        mainDivThree.appendChild(mistsePPT);
     }else if(skladPPT[i].type =="Пакет"){
        packetBezpekiDiv.appendChild(mistsePPT);
     }
     mistsePPT.innerHTML = `<img src=${ skladPPT[i].imege}><br> Назва: ${skladPPT[i].name} <br> Тип: ${skladPPT[i].type} <br> Ціна: ${skladPPT[i].cost} <br> `;
    
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
     /*Блок який рахує вартість товарів */
     let razom = document.createElement('div');
    razom.style.display='inline-block';
     razom.value=1;
     razom.type='number';
     razom.style.width='170px'
     razom.style.margin='5px';
     razom.style.color='orange';
     razom.style.textDecoration='underline';
     razom.innerHTML=('Разом: '+numb.value*skladPPT[i].cost);
     /*переоголошуєм змінні */
     let cost =skladPPT[i].cost;
     let type = skladPPT[i].type;
     let name = skladPPT[i].name;
     let tow = skladPPT[i];
     /*функції при зміні кількості товару */
     numb.onkeyup=function () {
        razomcost= numb.value * cost;
         razom.innerHTML = ('Разом: ' + razomcost);
         if(numb.value*cost>cost){
            razom.style.color='red';
            }else{
                razom.style.color='orange';
            }
     }
     numb.onmouseup=function () {
         razomcost= numb.value * cost;
        razom.innerHTML = ('Разом: ' + razomcost);
        if(numb.value*cost>cost){
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
     some.style.margin='5px';
     some.style.marginTop='10px';
     mistsePPT.appendChild(some);
     some.onmouseover=()=>{
         some.style.color='yellow';
     }
    
     some.onmouseout=()=>{
        some.style.color='white';
     }
     /* Записуємо данні при кліці на кнопку В Корзину*/
     klick=0;
     let towaryWKoshiku =document.getElementById('towaryWKoshiku');
      some.onclick=()=>{
          klick++;
      korzynaImg.style.display='table';
      localStorage.setItem(`towar${klick}- Name`, name);
      localStorage.setItem(`towar${klick}- Type`,type);
      localStorage.setItem(`towar${klick}- Kilkist`,numb.value);
      localStorage.setItem(`towar${klick}- Cost`,numb.value*cost);
      localStorage.setItem(`towar${klick}`,'-----------------------------------------------------');
      /* заповнюємо корзину блоками товарів ,в яких містиця інформація про товар */
      let towform = document.createElement('div');
      towform.style.width='430px';
      towform.style.height='90px';
      towform.style.border='2px solid black';
      towform.style.borderRadius='10px';
      towform.style.marginBottom='5px';
      towform.style.padding='5px';
      towform.innerHTML= `Назва: ${localStorage.getItem('towar'+klick+'- Name')} <br> Тип: ${localStorage.getItem('towar'+klick+'- Type')} <br> Кількість: ${localStorage.getItem('towar'+klick+'- Kilkist')} <br> Ціна за товар: ${localStorage.getItem('towar'+klick+'- Cost')} `;
      /* Створюєм кнопу видалити з Товарів */
      let buttonDelete = document.createElement('button');
      buttonDelete.textContent='❌';
      buttonDelete.personalId=klick; // присвоєння кожній кнопці видалити - персональний номер
      buttonDelete.style.paddingLeft='1px';
      buttonDelete.style.float='right';
      buttonDelete.style.marginTop='-60px';
      buttonDelete.style.height='23px';
      buttonDelete.style.width='25px';
      towform.appendChild(buttonDelete);

      towaryWKoshiku.appendChild(towform);  
      /* Видалення при натисканні на кнопку*/
      buttonDelete.onclick=()=>{
      localStorage.removeItem('towar'+buttonDelete.personalId+'- Name');
      localStorage.removeItem('towar'+buttonDelete.personalId+'- Type');
      localStorage.removeItem('towar'+buttonDelete.personalId+'- Click');
      localStorage.removeItem('towar'+buttonDelete.personalId+'- Kilkist');
      localStorage.removeItem('towar'+buttonDelete.personalId+'- Cost');
      localStorage.removeItem('towar'+buttonDelete.personalId);
      towaryWKoshiku.removeChild(towform);
      }

    /* При натисканні на кнопку замовити */
    let zamovyty = document.getElementById('zamovyty');
    zamovyty.onclick=()=>{
        if(inputImya.value==''||inputNomer.value==''||inputEmaile.value==''){
        console.log('Zapovnit vse formy');
        }else{
        console.log(inputImya.value);
        console.log(inputNomer.value);
        console.log(inputEmaile.value);
        for(locI=1;locI<localStorage.length/4;locI++){
        console.log(localStorage.getItem('towar'+locI+'- Name'));
        console.log(localStorage.getItem('towar'+locI+'- Type'));
        console.log(localStorage.getItem('towar'+locI+'- Kilkist'));
        console.log(localStorage.getItem('towar'+locI+'- Cost'));
        console.log(localStorage.getItem('towar'+locI));

        }
        form.style.display='none';
        localStorage.clear();
        }
        
    }
      }
      /*При кліці на значок корзини - показує форму покупки */
      let form = document.getElementById('Form');
      let nazaddotowariw = document.getElementById('NazadDoTowariw');
      let packetyBezp = document.getElementById('packetBezpekiDiv');
     korzyna.onclick=()=>{
         form.style.display='inline-block';
         nazaddotowariw.style.display='inline-block';
         mainDivOne.style.display = 'none';
         mainDivTwo.style.display = 'none';
         mainDivThree.style.display = 'none';
         packetyBezp.style.display='none';
     }
     /* При наведенні-відведенні від корзини*/
     korzynaImg.onmouseover=()=>{
     korzynaImg.src='Korzyna2.png';
     }
     korzynaImg.onmouseout=()=>{
        korzynaImg.src='Korzyna1.png';
        }
        /* Кнопка натискання назад до товарів */
        nazaddotowariw.onclick=()=>{
            mainDivOne.style.display = 'inline-block';
            form.style.display ='none';
            nazaddotowariw.style.display='none';
            packetyBezp.style.display='inline-block';
            
        }

    }
    



