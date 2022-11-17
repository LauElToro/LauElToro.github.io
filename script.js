function totalPagar(evt){
    evt.preventDefault();
    cant = document.getElementById("cantidad").value;
    console.log(cant);

    categoria= document.getElementById("categoria").value;
    console.log(categoria);

    precio = cant *200
    console.log(precio)
    
    switch(categoria){
        case "0":
        desc=precio*0.8
        precio=precio-desc
        break
        case "1":
        desc=precio*0.5
        precio=precio-desc
        break
        case "2":
        desc=precio*0.15
        precio=precio-desc
        break
    }
       
   
       



    document.getElementById("pagar").setAttribute("value",precio);

}
