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



/*Взяття товарів з бд */
fetch('https://my-json-server.typicode.com/Mukolas/Diplomna/towasr')
.then((response) => response.json())
.then((json) => {

   /*Функція створення товару */    
    for(i=0;i<json.length;i++){
     

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
     if(json[i].type =="Протипожежні"){
     mainDivOne.appendChild(mistsePPT);
     }else if(json[i].type =="Протигазові"){
        mainDivTwo.appendChild(mistsePPT);
     }else if(json[i].type =="Загальнобезпечні"){
        mainDivThree.appendChild(mistsePPT);
     }else if(json[i].type =="Пакет"){
        packetBezpekiDiv.appendChild(mistsePPT);
     }
     mistsePPT.innerHTML = `<img src=${ json[i].imege}><br> Назва: ${json[i].name} <br> Тип: ${json[i].type} <br> Ціна: ${json[i].cost} <br> `;
    
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
     razom.innerHTML=('Разом: '+numb.value*json[i].cost);
     /*переоголошуєм змінні */
     let cost =json[i].cost;
     let type = json[i].type;
     let name = json[i].name;
     let tow = json[i];
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
        /*Якщо поля не заповнені */
        if(inputImya.value==''||inputNomer.value==''||inputEmaile.value==''){
        console.log('Zapovnit vse formy');
        }else{

         
        /* Доступ до нової перехідної форми */
        let NameFromForm = document.getElementById('PIBF');
        let NumberFromForm = document.getElementById('NumberF');
        let EmailFromForm = document.getElementById('EmailF');
        let TowaryFromForm = document.getElementById('TowaryF');

        /* Заповнює textaera товарами*/
        for(locI=1;locI<localStorage.length/4;locI++){
        TowaryFromForm.value = TowaryFromForm.value+('   |███|Товар- '+ locI +' | Назва: '+localStorage.getItem('towar'+locI+'- Name')+' |  Тип: '+localStorage.getItem('towar'+locI+'- Type')+' | Кількість: '+localStorage.getItem('towar'+locI+'- Kilkist')+' | Вартість: '+localStorage.getItem('towar'+locI+'- Cost')+' ✅');
        }
        /*присвоєння новій нормальній формі -значення динамічної форми */
        NameFromForm.value= inputImya.value
        NumberFromForm.value= inputNomer.value;
        EmailFromForm.value= inputEmaile.value;

        /*Натискання на кнопку нормальної форми, та відправлення її на пошту */    
document.getElementById("SubmitF").click();

        /*Після того як ми натиснули замовити, форма ховається, а локалсторедж - очищується*/
        form.style.display='none';
        localStorage.clear();
        document.getElementById('TowaryF').value=null;
        
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
    
});


