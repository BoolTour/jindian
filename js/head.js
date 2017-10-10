$(document).ready(function() {

	$("a.list-nav").hover(function() {
		$(this).not(".click").find("span").addClass("icon-hover");
		$(this).not(".click").addClass("hover");
		$(this).next(".sub").css("display", "block");
	}, function() {
		$(this).not(".click").find("span").removeClass("icon-hover");
		$(this).removeClass("hover");
		$(this).next(".sub").css("display", "none");
	});

	$(".sub").hover(function() {
		$(this).css("display", "block");
		$(this).siblings().not(".click").addClass("hover");
	}, function() {
		$(this).css("display", "none");
		$(this).siblings().removeClass("hover");
	});
	$("a.list-nav").click(function() {
		$(this).addClass("click").parent().siblings().find("a").removeClass("click");
		$(this).find("span").addClass("icon-hover").parent().parent().siblings().find("a").find("span").removeClass("icon-hover");
	});
	


});