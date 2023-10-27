 let index=0;
const totalWorkItems=$(".toprated-item").length;
 
 
 $(window).on("load",function(){
       $(".preloader").addClass("loaded");
   }) 



   
   $(document).ready(function(){
     
       $(".nav-toggle").click(function(){
           if($(window).width()<950){
           $(".menu-bar .nav-bar").slideToggle(500);
           }
    })
    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $(".menu-bar").addClass("fixed");
        }
        else{
            $(".menu-bar").removeClass("fixed");
        }
    })
    $("a").on("click",function(event){
        var target=$(this.hash);
         target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if(target.length){
           event.preventDefault();
           $("html,body").animate({
               scrollTop: target.offset().top
           },1000,function(){
               var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
           })
        }
    })

    const wheight=$(window).height();
    $(".lightbox-img").css("max-height",wheight+"px");
    $(".toprated-item").click(function(){
        index=$(this).index();
         $(".lightbox").addClass("open");
         lightBoxSlideShow();
    })
    $(".lightbox .prev").click(function(){ 
        if(index == 0){
            index=totalWorkItems-1;
        }
        else{
            index--;
        }
        lightBoxSlideShow();
    })
    $(".lightbox .next").click(function(){
        if(index==totalWorkItems-1){
            index=0;
        }
        else{
            index++;
        }
        lightBoxSlideShow();
    })
    $(".lightbox-close").click(function(){
        $(".lightbox").removeClass("open");
    })
    $(".lightbox").click(function(event){
        if($(event.target).hasClass(".lightbox")){
            $(this).removeClass("open");
        }
    })
    function lightBoxSlideShow(){
        const imgSrc=$(".toprated-item").eq(index).find("img").attr("data-large");
        const category=$(".toprated-item").eq(index).find("h2").html();
        $(".lightbox-img").attr("src",imgSrc);
        $(".lightbox-category").html(category)
        $(".lightbox-counter").html(totalWorkItems+"/"+(index+1));
    }
   })
   