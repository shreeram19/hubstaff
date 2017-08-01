var a = 20;
//anim.addEventListener("animationend", AnimationListener, false);
var list = $(".story-ul li");


function AnimationListener(){
   // debugger;
//$(this).toggle();
}
//debugger;
list.each(function(i,li){
   // debugger;
    li.addEventListener("animationend", AnimationListener, false);
})

