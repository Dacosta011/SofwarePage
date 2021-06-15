$(document).ready(function(){
    
    $('.xp').click(()=>{
        $('.brand').hide();
        $('.design').hide();
        $('.ml').hide();


        $("#conte").show();
        $("#conte").load("metodologias/xp.html");
    });
    $('.cas').click(()=>{
        $('.design').hide();
        $('.brand').hide();
        $('.ml').hide();


        $("#conte").show();
        $("#conte").load("metodologias/cas.html");
    });
    $('.scr').click(()=>{
        $('.design').hide();
        $('.brand').hide();
        $('.ml').hide();


        $("#conte").show();
        $("#conte").load("metodologias/scr.html");
    });
    $('.esp').click(()=>{
        $('.design').hide();
        $('.brand').hide();
        $('.ml').hide();
        

        $("#conte").show();
        $("#conte").load("metodologias/esp.html");
    });
    $('.kan').click(()=>{
        $('.design').hide();
        $('.brand').hide();
        $('.ml').hide();


        $("#conte").show();
        $("#conte").load("metodologias/kan.html");
    });
    $('.rup').click(()=>{
        $('.design').hide();
        $('.brand').hide();
        $('.ml').hide();


        $("#conte").show();
        $("#conte").load("metodologias/rup.html");
    });
    $('.dev').click(()=>{
        $('.design').hide();
        $('.brand').hide();
        $('.ml').hide();


        $("#conte").show();
        $("#conte").load("metodologias/dev.html");
    });


    $('#bb').click((e)=>{

        $('.design').show();
        $('.brand').show();
        $('.ml').show();

        $("#conte").hide();
    });

  });