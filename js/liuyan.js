$(document).ready(function(){
	
	$(".pay_list_c1").click(function() {
	  $(this).addClass("on").siblings().removeClass("on");
	  $(this).children().eq(0).attr("checked",true);
	  $(this).siblings().children().attr("checked",false);
	});
	$("#content").click(function() {
		if($("#content").text()=="欢迎提出您的建议或者在使用过程中遇到的问题"){
			$("#content").attr("value",'');
		}
	});
	$(".shutdownimg").click(function() {
		$(".liuyan-mu").css("display","none");
		$(".liuyan-main").css("display","none");
	});
	$(".tc-cancle").click(function() {
		$(".liuyan-mu").css("display","none");
		$(".liuyan-main").css("display","none");
	});
	$(".tc-submit").click(function() {
		if($("input[name='input-name']").val()==""){
			alert("姓名不能为空");
			return;
		}
		if($("input[name='input-account']").val()==""){
			alert("账户不能为空");
			return;
		}
		if($("input[name='input-number']").val()==""){
			alert("手机号不能为空");
			return;
		}
		if($("input[name='input-emailqq']").val()==""){
			alert("手机号不能为空");
			return;
		}
		if($("input[name='input-gaikuo']").val()==""){
			alert("概括不能为空");
			return;
		}
		if($("#content").text()==""){
			alert("内容不能为空");
			return;
		}
		if($("input[name='input-code']").val()==""){
			alert("验证码不能为空");
			return;
		}
		var atype = $("input[name='paylist'][checked]").val();
		var aname = $("input[name='input-name']").val();
		var aemail = $("input[name='input-emailqq']").val();
		var aaccount = $("input[name='input-account']").val();
		var anumber = $("input[name='input-number']").val();
		var agaikuo = $("input[name='input-gaikuo']").val();
		var axiangxi = $("#content").text();
		var acode = $("input[name='input-code']").val();
		
		var url = "http://www.jdhq.hk/postEmail";
		var request ={
			type:atype,
			name:aname,
			code:acode,
			account:aaccount,
			number:anumber,
			email:aemail,
			gaikuo:agaikuo,
			xiangxi:axiangxi
			
		}
		 $.ajax({
                type : 'POST',
                url : url,
                dataType : 'json',
　　　　　　　　contentType : 'application/json',
                data : JSON.stringify(request),
                success : function (data) { // 返回的RequestResult的json对象
					console.log(data);
                    if(data.status=="ERROR"&&data.type=="CODE"){
						alert("验证码错误请重新输入");
						return;
					}
					if(data.status=="SUCCESS"){
						alert("留言成功");
						$(".liuyan-mu").css("display","none");
						$(".liuyan-main").css("display","none");
						$(".input-email").val("");
						$("#imgcode").attr("src",$("#imgcode").attr("src")+"?date="+ new Date());
						return;
					};
                },
            });
	});
	$("#imgcode").click(function() {
		$("#imgcode").attr("src",$("#imgcode").attr("src")+"?date="+ new Date());
	});
	$("#liuyan-button").click(function() {
		$(".liuyan-mu").css("display","block");
		$(".liuyan-main").css("display","block");
	});
});