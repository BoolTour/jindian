$(document).ready(function() {
	//加载头部
	$("#head").load("head.html");
	$("#foot").load("foot.html");
	
	
	//特效2
	$(".product-v").find("li").click(function() {
		$(this).addClass("active2");
		$(this).siblings().removeClass("active2");
		var index = $(".product-v").find("li").index(this);
		var top = 50 + index * 90;
		var scroll = index * 280;
		$(".red-cursor").css("top", top + "px");
		var test = $(".image-scroll").find("img:eq(" + index + ")");
		test.addClass("show-image").siblings().removeClass("show-image");
		//console.log(test);
	});

	$(".sub_s_click").click(function(event) {
		if (event) {
			event.stopPropagation.call(event);
		} else {
			event.cancelBubble = true;
		}
	});




});
function tab(Nav,Num){
      if(Nav.className=="active") return;
      var thisNav=Nav.parentNode.id;
      var navName=Nav.nodeName.toLowerCase();
      var navList=document.getElementById(thisNav).getElementsByTagName(navName);
      for(var i=0;i<navList.length;i++){
              if(i==Num){
                      Nav.className="active";
                      document.getElementById("cont"+i).style.display="block";
              }else{
                      navList[i].className="";
                      document.getElementById("cont"+i).style.display="none";
              }
      }
}
function tab2(Nav,Num){
      if(Nav.className=="active") return;
      var thisNav=Nav.parentNode.id;
      var navName=Nav.nodeName.toLowerCase();
      var navList=document.getElementById(thisNav).getElementsByTagName(navName);
      for(var i=0;i<navList.length;i++){
              if(i==Num){
                      Nav.className="active";
                      document.getElementById("cont2"+i).style.display="block";
              }else{
                      navList[i].className="";
                      document.getElementById("cont2"+i).style.display="none";
              }
      }
}