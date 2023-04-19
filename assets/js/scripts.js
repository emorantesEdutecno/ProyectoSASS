let invocarModoNoche = ()=>{
    //identificamos el nav

   let elNav = document.getElementsByClassName('header__navigation');
   // aplicamos el estilo del modificador --night al header__navigation
   elNav[0].setAttribute('class', 'header__navigation--night' );
   


   // identificamos la lista
   let laLista = document.getElementsByClassName('header__navigation__list');
   // aplicamos el estilo del modificador --night a header__navigation__list
   laLista[0].setAttribute('class', 'header__navigation__list--night');


   //PRIMER CICLO for para cambiar cada elemento de la lista

   let losItems = document.getElementsByClassName('header__navigation__item');
   console.log(losItems);


   // OPCION UNO CON EL CICLO WHILE
   // mientras losItems[] tenga elementos, ejecutamos el ciclo while
     while(losItems.length != 0){
          console.log('ingreso al while');
          // esta instrucción sería el centinela, pues cada vez que cambiamos la clase de los items, se disminuye en uno la cantidad de elementos del arreglo
          losItems[0].setAttribute('class', 'header__navigation__item--night');
     }


     // identificamos al boton y lo deshabilitamos
     let elboton = document.getElementsByClassName('header__button');
     elboton[0].setAttribute('disabled', 'true');




  /* OPCION 2 FORMA RAPIDA. CAMBIANDO DIRECTAMENTE EL ESTILO DE CADA ELEMENTO SIN USAR METODOLOGIA BEM 
   for(let i=0; i<losItems.length; i++){       
     // forma rápida, pero que no usa la metodologia BEM
          losItems[i].style.backgroundColor = 'black';
   }
*/




   
/* FORMA LENTA OPCION 3   QUE SI USA LA METODOLOGIA BEM  
// ¿MISTERIO? Debo usar un segundo ciclo for para cambiar los elementos restantes de la lista


     for(let i=0; i<losItems.length ; i++){       
     // forma rápida, pero que no usa la metodologia BEM

          losItems[i].setAttribute('class', 'header__navigation__item--night');
          retardoSincrono();
     }




   let losItems2 = document.getElementsByClassName('header__navigation__item');
   console.log(losItems2);
   for(let i=0; i<losItems2.length; i++){
          
     losItems2[i].setAttribute('class', 'header__navigation__item--night');
     retardoSincrono();
     }

     
     // Realizo un ultimo cambio en la lista, del ultimo elemento restante por cambiar
     losItems2[0].setAttribute('class', 'header__navigation__item--night');




*/



}




// funcion para introducir un retardo sincrono en javascript
let retardoSincrono = ()=>{
     console.log('inicio retardo Sincrono');
     let conteo = 0;
     for(let i=0; i < 1000000000; i++){
          conteo = conteo+1;
     }
     console.log('finaliza retardo sincrono: ', conteo);
}