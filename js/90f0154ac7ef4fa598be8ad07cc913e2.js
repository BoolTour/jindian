var EC_SS_FUNCTION =1;
var EC_CS_TOKEN ='46c43a8899279ca0bf22e5ca3540da913475ec1f7b9f844878';
var EC_CS_STATUS = new Object();
EC_CS_STATUS["5371896"] = '1';
EC_CS_STATUS["5371804"] = '1';
var EC_PC_STATUS = new Object();
EC_PC_STATUS["5371896"] = '1';
EC_PC_STATUS["5371804"] = '1';
var EC_CS_FOLDER='cl/v4012min';
var EC_CS_IS_INTALK = '0';
var EC_CS_LAST_EDIT='1501659173';
var EC_CS_PIC_OLD_STATUS='0';
var EC_CS_AIDS_SORT='';
if(typeof window.EC_CS_LOADED=="undefined"){
	var EC_CS_SSL = 0; ("https:" == document.location.protocol) && (EC_CS_SSL = 1);
	
	//check if ie or not 
	var regpie=/msie [678]\.0/;
	var regpxp=/nt 5\.1/;
	var EC_IS_XPIE = 1;
	var EC_USER_AGENT = window.navigator.userAgent.toLowerCase();
	if (!regpie.test(EC_USER_AGENT) || !regpxp.test(EC_USER_AGENT)) {
		EC_CS_SSL = 1;
		EC_IS_XPIE = 0;
	}
	
	var EC_CS_Protocol = (EC_CS_SSL == 1? "https://": "http://");
	var EC_CS_ISPREVIEW = '';					//预览标识
	var EC_CS_OPEN = 1;										//在线客服标志
	var EC_CS_ISPREVIEW = '0';
	var EC_CS_PREVIEW = '';//在线客服预览
	var EC_CS_GURL = encodeURIComponent(document.location.href);		//当前页面URL
	var EC_CS_REFERRER = encodeURIComponent(document.referrer);		//来源页面URL
	var EC_CS_DOCTYPE = document.firstChild.nodeValue;
	// var EC_CS_SERVER= EC_CS_Protocol + ((EC_CS_SSL == 1 )? "cs2.ecqun.com/" : "cs.ecqun.com/");
	var EC_CS_SERVER= EC_CS_Protocol +"cs.ecqun.com/" ;

	var EC_CS_STATIC=(EC_CS_SSL==1)?'https://www.staticec.com/cs/':'//www.staticec.com/cs/';  //静态资源地址
	var EC_CS_STATIC_UPLOAD=(EC_CS_SSL==1)?'https://www.staticec.com/':'//www.staticec.com/';  //静态资源地址

	var EC_THUME_FOLDER='/themes/v4011';
	var EC_VERSION='4.0.0.0';
	var EC_CS_ID='5365825';
	
	var EC_CS_THEME='-1';				//
	var EC_CS_SHOWTITLE='金殿环球金融';				//标题头
	var EC_CS_PICSKIN='-1'; 			//skin 0 蓝色 1红色 2绿色 3橙色 4红色
	var EC_CS_FLOAT='0';  					//布局 0左 1右
	var EC_CS_FIXED='0';  					//布局 固定
	var EC_CS_LANG='2'; 					//0中文 1英文 2繁体
	var EC_CS_SCHEME='0'; 					//第几套样式
	var EC_CS_AUTO_HIDE='0'; 			//0不自动隐藏 1自动隐藏
	
	//辅助工具显示
	var EC_AIDS_SHOWTYPE='0';		//横排竖排
	var EC_AIDS_QQ='0';
	var EC_AIDS_CRMQQ='0';
	var EC_AIDS_SKYPE='0';
	var EC_AIDS_YAHOO='0';
	var EC_AIDS_ALIWW='0';
	var EC_AIDS_ALIBB='0';
	var EC_AIDS_ALIGJ='0';
	var EC_AIDS_MSN='0'; 

	var EC_CS_BMODE_STYLE = '0';//按钮模式 样式  长方形；矩形；方形；
	var EC_CS_BMODE_COLOR = '';//按钮模式 样式  颜色
    var EC_CS_TALK_TITLE = '';//按钮模式-会话框，title
	var EC_CS_BMODE_INVITECOLOR = '#199ed8';//按钮模式 邀请框颜色

	var EC_CS_SHOW_STYLE='0'; 			//显示风格 0-列表 1-图片
	var EC_CS_LIST_RAND='0'; 			//随机显示
	var EC_CS_SHOW_PICON=''; 				//在线图片
	var EC_CS_SHOW_PICOFF=''; 			//离线图片
	var EC_CS_SHOW_PHONE='0'; 			//电话回拨开启
	
	var EC_CS_TOP='100';						//高度
	var EC_CS_MARGIN='10';					//边距
	var EC_CS_HIDEOFF='0';				//离线隐藏
	var EC_CS_QQOPEN='0';				//QQ客服开启
	var EC_CS_ALLSET = '[{"id":"94272","name":"\u5728\u7ebf\u5ba2\u670d","expand":"0","item":[{"f_cs_id":"5371896","f_corp_id":"5365825","f_valid":"1","f_show_mobile":"0","f_show_name":"\u91d1\u6bbf\u5b98\u7f51\u5ba2\u670d1","f_group_id":"94272","f_name":"\u91d1\u6bbf\u5b98\u7f51\u5ba2\u670d1","f_title":"\u5ba2\u670d","f_qq":"3376473578","f_scheme":"0","f_mobile":"","f_show_qq":"1","f_sms_online":"0","f_msn":"","f_show_msn":"0","f_email":"","f_tel":"","f_telno":"","f_show_tel":"0","f_contact":"\u5ba2\u670d","f_cs_mobile":"","f_position":"1","f_other1":"0","f_other2":"0","f_other_text1":"","f_other_text2":"","f_qq_first":"1","f_status":"1","f_aids_open":"0","f_aids_qq":"","f_aids_crmqq":"","f_aids_skype":"","f_aids_aliww":"","f_aids_yahoo":"","f_aids_msn":"","f_aids_alibaba":"","f_aids_alitrade":"","uqq":"0"},{"f_cs_id":"5371804","f_corp_id":"5365825","f_valid":"1","f_show_mobile":"0","f_show_name":"\u91d1\u6bbf\u5b98\u7f51\u5ba2\u670d2","f_group_id":"94272","f_name":"\u91d1\u6bbf\u5b98\u7f51\u5ba2\u670d2","f_title":"\u5ba2\u670d","f_qq":"1357089875","f_scheme":"0","f_mobile":"","f_show_qq":"1","f_sms_online":"0","f_msn":"","f_show_msn":"0","f_email":"","f_tel":"","f_telno":"","f_show_tel":"0","f_contact":"\u5ba2\u670d","f_cs_mobile":"","f_position":"2","f_other1":"0","f_other2":"0","f_other_text1":"","f_other_text2":"","f_qq_first":"1","f_status":"0","f_aids_open":"0","f_aids_qq":"","f_aids_crmqq":"","f_aids_skype":"","f_aids_aliww":"","f_aids_yahoo":"","f_aids_msn":"","f_aids_alibaba":"","f_aids_alitrade":"","uqq":"0"}]}]';		 					//客服列表
	var EC_CS_TRACK=''; 						//主动跟踪			
	var EC_CS_TRACKID='';
	var EC_CS_TRACKKEY='';
    var EC_CS_AUTO_OPEN = '0';
	
	var EC_CS_BTN_STYLE = '0';//按钮样式
	var EC_CS_BTN_BG = "/themes/v4011/fad/default";//邀请框按钮样式
	var EC_CS_BTN_TXT = '';//按钮文字颜色
	var EC_CS_THEME_CUS = '/upload/cs/5365825/0picthemelist.gif';//主题自定义图片
	var EC_CS_THEME_CUS_MIN = '/upload/cs/5365825/0picthememin.gif';//最小化自定义图片
	
	var EC_CS_LA_ENABLE= '0';//列表广告开启:1-开启，0-关闭
	var EC_CS_LA_IMG = '';//列表广告图片
	EC_CS_LA_IMG != '' && (EC_CS_LA_IMG += '?'+EC_CS_LAST_EDIT);
	var EC_CS_LA_IMGLINK = '';//列表广告图片链接地址
	
	var EC_CS_BBTN_BG = "/themes/v4011/fad/default";//邀请框按钮样式
	var EC_CS_BTHEME='-1';				//
	var EC_CS_DIALOG_TITLE='金殿环球金融'; 	//主动标题
	var EC_CS_ENABLE_TITLE='1'; 	//主动标题
	var EC_CS_DIALOG_CONTENT='你好欢迎来到我们的网站!请问有什么可以帮助您的？'; //主动会话内容
	var EC_CS_ENABLE_CONTENT='1'; //主动会话内容
	var EC_CS_DIALOG='2';				//0 不主动会话 1 主动会话
	var EC_CS_DIALOG_TIME='3';			//0 主动会话窗口延迟时间
	var EC_CS_BBTN_STYLE = '0';//邀请框按钮样式
	var EC_CS_BBTN_TXT = '#333333';//邀请框按钮文字颜色
	var EC_CS_BTHEME_CUS = '';//邀请框主题自定义图片
	EC_CS_BTHEME_CUS != '' && (EC_CS_BTHEME_CUS += '?'+EC_CS_LAST_EDIT);
	var EC_CS_DIALOG_POSITION='1';//邀请框显示位置(0居中,1右下角)
	var EC_CS_BA_ENABLE= 0;//'0';//邀请框广告开启:1-开启，0-关闭
	var EC_CS_BA_IMG = '';//邀请框广告图片
	var EC_CS_BA_IMGLINK = '';//邀请框广告图片链接地址
	var EC_CS_BA_BCOLOR='#1bb1d6';//邀请框广告边框颜色
	
	var EC_CS_SKIN_STYLE;
			EC_CS_SKIN_STYLE = -1;//自定义
		//邀请框
	var EC_CS_BOX_STYLE;
			EC_CS_BOX_STYLE = -1;//自定义
		
	var EC_CS_BOX_FACE 		= '1';
    //头像，针对加static后企业管理中预览有问题的情况，添加过滤
    var EC_CS_BFU_IMG='/upload/cs/5365825/0picthemeavatar.gif';
    
    
    if (EC_CS_BFU_IMG.indexOf('www.staticec.com')!='-1') {
        var EC_CS_BOX_FACE_URL	= EC_CS_BFU_IMG;
    }else{
        var EC_CS_BOX_FACE_URL	= EC_CS_STATIC+ EC_CS_BFU_IMG;
        (EC_CS_BFU_IMG.indexOf('upload')!='-1')&&(EC_CS_BOX_FACE_URL	= EC_CS_STATIC_UPLOAD+ EC_CS_BFU_IMG);
    }
    
    
	
	function ec_initJS(b,a){var s=document.createElement("script");s.type="text/javascript";s.charset=typeof(a)!="undefined"?a:"utf-8";s.src=b;document.getElementsByTagName("head").item(0).appendChild(s)}
	
	if(EC_CS_OPEN==1&&typeof window.EC_CS_LOADED=="undefined"){
		window.EC_CS_LOADED=1;
		ec_initJS(EC_CS_STATIC+EC_CS_FOLDER+"/c.js");
	}
	//前端-统计用
	if (!window.globalReportImage) {
		setTimeout(function() {
			window.globalReportImage = new Image().src = "//eccollect.workec.com/node/report/pv?pid=1&r=" + Math.random();
		}, 1000);
	};
	
}