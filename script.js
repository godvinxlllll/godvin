


$(document).ready(function() {

    $(".customize-se").click(function() {
        var section = $(this).next(".panel");
        section.toggle(); // Toggle the visibility of the panel
    });



    
$("img").click(function(){
    function updateImage(className, imageElement, suffixMapping) {
        var src = imageElement.attr("src");
        var path = src.substring(0, src.lastIndexOf('/'));
        var fileName = src.substring(src.lastIndexOf('/'));
     
        var newFileName = suffixMapping[className];
        
        if (newFileName) {
            var newSrc = path + newFileName;
            imageElement.attr("src", newSrc);
        }
    }

    var topget = $(".top-img").attr("src");
    var fileName = topget.substring(topget.lastIndexOf('/'));
    console.log(fileName+"ddddddd")
    var topSuffixMapping = {
        "top1": "/model-half.png",
        "top2": "/model-full.png",
        // "top3": "/d-3.png",
    };
    if(fileName == "/model-full.png"){
        var bodySuffixMapping = {
            "body1": "/empty.png",
            "body2": "/full-border.png",
            // "body3": "/side-logo.png",
        };
    }   
    else{
        var bodySuffixMapping = {
            "body1": "/empty.png",
            "body2": "/half-border.png",
            // "body3": "/side-logo.png",
        };
    }
    
   
    var buttonSuffixMapping = {
        "button1": "/empty.png",
        "button2": "/homeplat.png",
        // "button3": "/button.png"
    };

    var tieSuffixMapping = {
        "tie1": "/empty.png",
        "tie2": "/tie.png",
        // "button3": "/button.png"
    };
    var pantSuffixMapping = {
        "pant1": "/pant.png",
        "pant2": "/shorts.png",
    };

     var name = this.className;
    var $topImg = $(".top-img");
    var $bodyImg = $(".body-img");
    var $buttonImg = $(".button-img");
    var $tieImg = $(".tie-img");
    var $pantImg = $(".pant-img");
   
    if (name.startsWith("top")) {
        
        updateImage(name, $topImg, topSuffixMapping);
        // console.log(name)
        // if(name == "top1"){
        //     var detailValue = $(".top1").data("detail");
        //         $(".colour_pri").text(detailValue);
        //         console.log(detailValue)
        // }
        // if(name == "top2"){
        //     var detailValue = $(".top2").data("detail");
        //         $(".colour_pri").text(detailValue);
        //         console.log(detailValue)

        // }


        // if(name == "top3"){

        //         $(".colour_pri").text("60");
        // }
    } else if (name.startsWith("body")) {
        updateImage(name, $bodyImg, bodySuffixMapping);
    }
    else if (name.startsWith("button")) {
        updateImage(name, $buttonImg, buttonSuffixMapping);
    }
    else if (name.startsWith("tie")) {
        updateImage(name, $tieImg, tieSuffixMapping);
    }
    else if (name.startsWith("pant")) {
        updateImage(name, $pantImg, pantSuffixMapping);
    }


});

$("img").click(function() {

    // var name = this.className;
    // var src = $(".button_color").attr("src");


    var name = this.className;
    var getname = name.substring(0,3);
    if(getname == "but"){
        var src = $(".button_color").attr("src");
        var path = src.substring(0, src.lastIndexOf('/'));
    var fileName = src.substring(src.lastIndexOf('/'));
    }
    if(getname == "bod"){
        var src = $(".collor-img").attr("src");
        var path = src.substring(0, src.lastIndexOf('/'));
    var fileName = src.substring(src.lastIndexOf('/'));
    }
    // console.log(src+"fffff")
    // console.log(name+"fffff")
    
    // console.log(path+"fffff")
    
    if (name === "button_blue"  ) {
        fileName = "/blue_btn.png"
         $(".button_color").attr("src",  path +  fileName);
        //  console.log(path+colour_path+fileName+"ee")
    }
    if (name === "button_black"  ) {
        fileName = "/black_btn.png"
         $(".button_color").attr("src",  path +  fileName);
        //  console.log(path+colour_path+fileName+"ee")
    }
    if (name === "body3"  ) {
        fileName = "/side-logo.png"
         $(".collor-img").attr("src",  path +  fileName);
         console.log("collor")
         console.log(path+fileName+"collor  ")
    }
    if (name === "body1"  ) {
        fileName = "/empty.png"
         $(".collor-img").attr("src",  path +  fileName);
         console.log("collor")
         console.log(path+fileName+"collor  ")
    }

    console.log(path+fileName)
    console.log(name)
    
});
$("img").click(function() {

    var name = this.className;
    var getname = name.substring(0,3);
    if(getname == "bod"){
        var src = $(".collor-img").attr("src");
        var path = src.substring(0, 11);
        var colour_path = src.substring(12, src.lastIndexOf('/'));
        var fileName = src.substring(src.lastIndexOf('/'));
    }


  
    

    console.log(path+colour_path+fileName)
    console.log(name)

    if (name === "body-color-1" && colour_path !== "red" ) {
        colour_path = "/red";
         $(".collor-img").attr("src",  path + colour_path + fileName);
    }
    if (name === "body-color-2" && colour_path !== "blue") {
        colour_path = "/blue";
        $(".collor-img").attr("src",  path + colour_path + fileName);
    }
    if (name === "body-color-3" && colour_path !== "yellow") {
        colour_path = "/yellow";
        $(".collor-img").attr("src",  path + colour_path + fileName);
    }
   

  
});


$("img").click(function() {

    var name = this.className;
    var getname = name.substring(0,3);
    if(getname == "top"){
        var src = $(".top-img").attr("src");
    }

    if(getname == "bod"){
        var src = $(".body-img").attr("src");
        console.log("bodyget")
    }
    if(getname == "but"){
        var src = $(".button-img").attr("src");
                   console.log("button")
    }
    if(getname == "tie"){
        var src = $(".tie-img").attr("src");
                   console.log("tie")
    }
    if(getname == "pan"){
        var src = $(".pant-img").attr("src");
                   console.log("pant")
    }


    var path = src.substring(0, 11);
    var colour_path = src.substring(12, src.lastIndexOf('/'));
    var fileName = src.substring(src.lastIndexOf('/'));
    

    console.log(path+colour_path+fileName)
    console.log(name)

    if (name === "top-color-1" && colour_path !== "red" ) {
        colour_path = "/red";
         $(".top-img").attr("src",  path + colour_path + fileName);
    }
    if (name === "top-color-2" && colour_path !== "blue") {
        colour_path = "/blue";
        $(".top-img").attr("src",  path + colour_path + fileName);
    }
    if (name === "top-color-3" && colour_path !== "yellow") {
        colour_path = "/yellow";
        $(".top-img").attr("src",  path + colour_path + fileName);
    }
   

  


   

    if (name === "body-color-1" && colour_path !== "red"  ) {
        colour_path = "/red";
            $(".body-img").attr("src", path + colour_path + fileName);
    }
    if (name === "body-color-2" && colour_path !== "blue"  ) {
        colour_path = "/blue";
        $(".body-img").attr("src", path + colour_path + fileName);
    }
    if (name === "body-color-3" && colour_path !== "yellow"  ) {
        colour_path = "/yellow";
        $(".body-img").attr("src", path + colour_path + fileName);
    }


    if (name === "button-color-1" ) {
        colour_path = "/red";
        $(".button-img").attr("src", path + colour_path + fileName);
    }
    if (name === "button-color-2" ) {
        colour_path = "/blue";
        $(".button-img").attr("src", path + colour_path + fileName);
    }
    if (name === "button-color-3" ) {
        colour_path = "/yellow";
        $(".button-img").attr("src", path + colour_path + fileName);
    }
    

    if (name === "tie-color-1" ) {
        colour_path = "/red";
        $(".tie-img").attr("src", path + colour_path + fileName);
    }
    if (name === "tie-color-2" ) {
        colour_path = "/blue";
        $(".tie-img").attr("src", path + colour_path + fileName);
    }
    if (name === "tie-color-3" ) {
        colour_path = "/yellow";
        $(".tie-img").attr("src", path + colour_path + fileName);
    }


    if (name === "pant-color-1" ) {
        colour_path = "/red";
        $(".pant-img").attr("src", path + colour_path + fileName);
    }
    if (name === "pant-color-2" ) {
        colour_path = "/blue";
        $(".pant-img").attr("src", path + colour_path + fileName);
    }
    if (name === "pant-color-3" ) {
        colour_path = "/yellow";
        $(".pant-img").attr("src", path + colour_path + fileName);
    }
    

    // if(colour_path == "/red" && colour_path !== "red"){
    //     var charg = parseInt($(".colour_pri").text()); // Convert text to a number
    //     var sum = charg + 20; // Perform addition
    //     console.log(name+'color')
    //     $(".colour_pri").text(sum);
    // }

    // if(colour_path == "/blue" && colour_path !== "blue"){
    //     var charg = parseInt($(".colour_pri").text()); // Convert text to a number
    //     var sum = charg + 50; // Perform addition
    //     $(".colour_pri").text(sum);
    // }
  // Update image source

  if (name === "top1" ) {
    $(".colour_pri").text("200");
}
  if (name === "top2" ) {
    $(".colour_pri").text("250");
}
  if (name === "tie2" ) {
    $(".ti_pri").text("30");
}
  if (name === "pant1" ) {
    $(".pant-pri").text("300");
}
  if (name === "pant2" ) {
    $(".pant-pri").text("240");
}

  var dre_ch = parseInt($(".colour_pri").text());
  var col_ch = parseInt($(".ti_pri").text());
  var pant_ch = parseInt($(".pant-pri").text());
  $(".ti_total").text(dre_ch+col_ch+pant_ch);
  

  console.log(dre_ch)
  console.log(col_ch)




    $(".close").click(function() {
        $(".quality-co").removeClass("active");
    });


    $(".detail-slider").click(function() {
        $(".quality-co").addClass("active");
    });
            
    $(".detail-slider").click(function() {

        var sli_name =  $(this).attr("class");
        var sli_value = sli_name.slice(0, sli_name.indexOf(' '));
        console.log(sli_value,"wwwww")

        var src = $(".quality-img").attr("src");
            
        if(sli_value == "top"){
            if(name == "top-color-1" ){
                var qu_img = "image/colour/red-bg.png";
            }
            if(name == "top-color-2"){
                var qu_img = "image/colour/blue-bg.png";
            }
            if(name == "top-color-3"){
                var qu_img = "image/colour/yellow-bg.png";
            }
        }

        if(sli_value == "body"){
            if(name == "body-color-1" ){
                var qu_img = "image/colour/red-bg.png";
            }
            if(name == "body-color-2"){
                var qu_img = "image/colour/blue-bg.png";
            }
            if(name == "body-color-3"){
                var qu_img = "image/colour/yellow-bg.png";
            }
        }

        if(sli_value == "lower"){
            if(name == "lower-color-1" ){
                var qu_img = "image/colour/red-bg.png";
            }
            if(name == "lower-color-2"){
                var qu_img = "image/colour/blue-bg.png";
            }
            if(name == "lower-color-3"){
                var qu_img = "image/colour/yellow-bg.png";
            }
        }
            


            $(".quality-img").attr("src", qu_img)
});





});



});





$(window).on('load', function () {
    var dre_ch = parseInt($(".colour_pri").text());
    var col_ch = parseInt($(".ti_pri").text());
    var pant_ch = parseInt($(".pant-pri").text());
    $(".ti_total").text(dre_ch+col_ch+pant_ch);
});