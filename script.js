    function cambiarColor(elemento){
        elemento.style.color = "red";
    }
    function restaurarColor(elemento){
        elemento.style.color = "blue";
    }





    const titulo = document.getElementById("titulo");



    titulo.addEventListener("mouseover", function () {
        cambiarColor(titulo);
    });

    titulo.addEventListener("mouseout", function () {
        restaurarColor(titulo);
    });

    
