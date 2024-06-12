//usamos addEventListener para hechar andar el codigo y que pueda sumar la cantidad de stickers
document.addEventListener("click", () =>{
    //almacenamos en valor1,valor2,valor3 las cantidades de los stickres que desea el usuario
    //almacenamos el total de stickers en total
    let valor1 = Number(document.getElementById("Input1").value);
    let valor2 = Number(document.getElementById("Input2").value);
    let valor3 = Number(document.getElementById("Input3").value);
    let total= Number(valor1+valor2+valor3);
   //apliacamos la condicion para los mensajes
   if  (total <= 10 && total >=0){
    document.getElementById("cantidad").textContent = total+" estamos ok " ;
   }
   else{
       document.getElementById("cantidad").textContent =total+" te pasaste, la suma de stickers es mayor o igual a 11";
   
   }
   }
   )