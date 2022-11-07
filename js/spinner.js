$(window).on("load", function(){			
    //se cargaron todos los recursos, librerías e imágenes
    
    //a la caja con clase .precarga, después de 1.5s, corre el efecto fadeOut
    $(".spinner").delay(1500).fadeOut("normal", function(){
        //cuando finalice la transicion, se disparan las siguientes instrucciones
        $(this).remove(); //remover este elemento del DOM
    });		

    console.log("todos los recursos están");
});


// lo mismo que $(document).ready() pero más cool
$(function(){
    console.log("el documento está listo");
    
    //instrucciones jquery, inicializaciones de plugins, etc

});

