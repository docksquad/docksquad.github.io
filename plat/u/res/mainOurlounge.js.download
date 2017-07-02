/*****************************************************************************
*    Proyecto: INTRODUCIR NOMBRE DEL PROYECTO
*    Desripcion: Fichero de implementación para libre modificación del equipo
*    de proyecto
******************************************************************************/
$(document).ready(function(){
    //funcion para que se despliegue el menu
    if($(".md_cont_img")){
        $(".md_cont_img").click(function(){
            if($(".md_cont_img").hasClass('seleccionado')){
                $(".md_cont_img").removeClass("seleccionado"); 
            }
            else{
                $(".md_cont_img").addClass("seleccionado");
            }
            
        });
    }
    //fin de la funcion desplegar el menu 
    if($(".menu_navegacion.tabs .list_tab .link_tab").length>0){
        //funcion para el movimiento del foco al hacer click
        tab_focus();    
        //funcion para calcular altura
        tab_height("list_tab","link_tab");        
    } 
    if($(".mdptrol_cont .listado_items").length>0){
            tab_height("mdptrol_cont .listado_items .item","link_item");
    }
    // funcion para el progressbar de preguntas
    /*if($(".list")){
        $( ".progressbar_positivo" ).progressbar({
            value: 62
        });
        $( ".progressbar_negativo" ).progressbar({
            value: 31
        });
        $( ".progressbar_question" ).progressbar({
            value: 28
        }); 
    }*/
    // fin de la funcion para el progressbar de preguntas
    
    //transicion carrusel
    if($(".mod_imgCarousel")){
        $(".mod_imgCarousel").hover(
            function(){$(".rg-image .img").addClass("hover")},
            function(){$(".rg-image .img").removeClass("hover")}
        );
    }
    //transicion imagenes
    if($(".md_question_img")){
        $(".md_question_img").hover(
            function(){$(".cont_img .img").addClass("hover")},
            function(){$(".cont_img .img").removeClass("hover")}
        );
    }
    if($(".mod_news_img")){
        $(".md_news").hover(
            function(){$(".cont_img .img").addClass("hover")},
            function(){$(".cont_img .img").removeClass("hover")}
        );
    }
    if($(".mod_empleado")){
        $(".md_description_discover").hover(
            function(){$(".mod_description_actividad .img_actividad").addClass("hover")},
            function(){$(".mod_description_actividad .img_actividad").removeClass("hover")}
        );
    }
    if($(".list_discover")){
        $(".mod_list").hover(
            function(){$(".cont_img_discover .img_discover").addClass("hover")},
            function(){$(".cont_img_discover .img_discover").removeClass("hover")}
        );
    }
    // Cuando no es menu movil
      
});

//funcion para calcular el height de la pestaña
function tab_height(lista,enlace){ 
    //Guardamos en la variable todos los tabs
    var lis_tabs =$("."+lista);     
    //Contamos el numero de tabs y lo almacenamos, este dato lo queremos para saber hasta donde recoremos el for
    var num_tabs = lis_tabs.length;
    
    $("."+lista+" ."+enlace).css("height","auto");
    
    var max_height_tab = lis_tabs[0].offsetHeight; //almacenamos la altura max del primero 
    //recoremos los tabs para saber quien tiene la altura mayor
    for(i=0; i<num_tabs; i++){
        var li_actual = lis_tabs[i]; //almacenamos el li actual
        if(li_actual.offsetHeight>max_height_tab){ //comprobamos si el li actual tiene un height mayor que el almacenado en la variable max_height
            max_height_tab = li_actual.offsetHeight; //si es mayor guardamos ese valor en la variable.
        }
    }
    //Asignamos a todos las <a> la altura maxima mediante la funcion css() 
    $("."+lista+" ."+enlace).css("height",(max_height_tab)+"px");
  
}

//funcion para el movimiento del foco al hacer click
function tab_focus(){
    var $el, leftPos, topPos, newWidth, newHeight;
    $mainNav2 = $(".mod_nav");
    $mainNav2.append("<li class='magic-line-two'></li>");
    var $magicLineTwo = $(".magic-line-two");
    
    $magicLineTwo
        .width($(".current_page_item_two").width())
        .height($(".menu_navegacion .mod_nav li").height())
        .css("left", $(".current_page_item_two").position().left)
        .data("origLeft", $(".current_page_item_two").position().left)
        .css("top", $(".current_page_item_two").position().top)
        .css("bottom", $(".current_page_item_two").position().bottom)
        .data("origTop", $(".current_page_item_two").position().top)
        .data("origWidth", $magicLineTwo.width());
    
    $(".mod_nav li").click(function(event) {
        $el = $(this);
        leftPos = $el.position().left;
        topPos = $el.position().top;
        newWidth = $el.width();
        newHeight = $el.height();
        $magicLineTwo.stop().animate({
            top: topPos,
            left: leftPos,            
            width: newWidth
        }, 1000);
        event.preventDefault();
    });
    
    /* Kick IE into gear */
    if($(".current_page_item_two a"))
        $(".current_page_item_two a").mouseenter();
    
    /*En menu mobile, ocultar el nivel 1 al hacer click en el nivel 2*/
    
}
//Platinum Card Functions, to position the McDonald's logo and the user portrait inside the card(dinamically)
function platinumCardLogoPosition(){
    if($('.plat-card-wrapper-background').length > 0 && $('.plat-card-logo').length > 0) {
        var platCardHeight = $('.plat-card-wrapper-background').height();
        var platCardLogoHeight = $('.plat-card-logo').height();
        var logoTopPosition = platCardHeight - platCardLogoHeight - 15;
        $('.plat-card-logo').css('top', logoTopPosition + 'px');
        $('.plat-card-logo').css('display', 'block');
    }
}
function platinumCardPortraitPosition(){
    if($('.plat-card-wrapper-background').length > 0 && $('.plat-card-user-portrait-position').length > 0) {
        var platCardHeight = $('.plat-card-wrapper-background').height();
        var portraitTopPosition = (24.63 * platCardHeight) / 100; // 24.63 is the % from top, taken from UX design
        $('.plat-card-user-portrait-position').css('top', portraitTopPosition + 'px');
        $('.plat-card-user-portrait-position').css('display', 'block');
    }
}
$(document).ready(function() {
    platinumCardPortraitPosition()
    platinumCardLogoPosition();
});
$(window).resize(function() {
    platinumCardPortraitPosition()
    platinumCardLogoPosition();
});
