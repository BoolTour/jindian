<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>comment</title>
<link href="/templets/default/style/dedecms.css" rel="stylesheet" media="screen" type="text/css" />
<script language="javascript" type="text/javascript" src="/include/dedeajax2.js"></script>
<script>
function CheckLogin(){
	var taget_obj = document.getElementById('_ajax_feedback');
	myajax = new DedeAjax(taget_obj,false,false,'','','');
	myajax.SendGet2("/member/ajax_feedback.php");
	DedeXHTTP = null;
}
function checkSubmit(){
	if(document.feedback.msg.value!='') document.feedback.submit();
	else alert("评论内容不能为空！");
}
function postBadGood(ftype,fid)
{
	var taget_obj = document.getElementById(ftype+fid);
	var saveid = GetCookie('badgoodid');
	if(saveid != null)
	{
		var saveids = saveid.split(',');
		var hasid = false;
		saveid = '';
		j = 1;
		for(i=saveids.length-1;i>=0;i--)
		{
			if(saveids[i]==fid && hasid) continue;
			else {
				if(saveids[i]==fid && !hasid) hasid = true;
				saveid += (saveid=='' ? saveids[i] : ','+saveids[i]);
				j++;
				if(j==10 && hasid) break;
				if(j==9 && !hasid) break;
			}
		}
		if(hasid) { alert('您刚才已表决过了喔！'); return false;}
		else saveid += ','+fid;
		SetCookie('badgoodid',saveid,1);
	}
	else
	{
		SetCookie('badgoodid',fid,1);
	}
	myajax = new DedeAjax(taget_obj,false,false,'','','');
	myajax.SendGet2("/plus/feedback.php?aid="+fid+"&action="+ftype+"&fid="+fid);
	DedeXHTTP = null;
}
</script>
</head>
<body>
<div class="pleft mt1">
			<dl class="tbox">
				<dt>
					<strong>最新评论</strong>
					<span class="more"><a href="/plus/feedback.php?aid=<?php echo $id;?>" target="_blank">查看所有评论</a></span>
				</dt>
				<dd>
					<div class="dede_comment">

					</div><!-- /dede_comment -->
				</dd>
			</dl>
		</div><!-- /comment -->
<div class="mt1 pleft">
		<dl class="tbox">
			<dt>
				<strong>发表评论</strong>
				<span class="more"><a href="/plus/feedback.php?aid=<?php echo $id;?>" target="_blank">查看所有评论</a></span>
			</dt>
			<dd>
				<div class="dede_comment_post">
          <form action="/plus/feedback.php" method="post" name="feedback" target="_blank">
          <input type="hidden" name="action" value="send" />
          <input type="hidden" name="comtype" value="comments">
          <input type="hidden" name="aid" value="<?php echo $id;?>" />
          <input type="hidden" name="isconfirm" value="yes" />
                    <div class="dcmp-title">
						<small>请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。</small>
					</div><!-- /dcmp-title -->
					<div class="dcmp-stand">
						<strong>评价:</strong>
							<input type="radio" name="feedbacktype" checked="1" value="feedback" id="dcmp-stand-neu" /><label for="dcmp-stand-neu"><img src="/templets/images/cmt-neu.gif" />中立</label>
							<input type="radio" name="feedbacktype" value="good" id="dcmp-stand-good" /><label for="dcmp-stand-good"><img src="/templets/images/cmt-good.gif" />好评</label>
							<input type="radio" name="feedbacktype" value="bad" id="dcmp-stand-bad" /><label for="dcmp-stand-bad"><img src="/templets/images/cmt-bad.gif" />差评</label>
					</div><!-- /dcmp-stand -->
					<div class="dcmp-content">
						<textarea cols="60" name="msg" rows="5" class="ipt-txt"></textarea>
					</div><!-- /dcmp-content -->

					<div class="dcmp-mood">
						<strong>表情:</strong>
						<ul>
								<li><input type="radio" name='face' value='6' checked="1" /><img src="/templets/images/mood/ico-mood-6.gif" /></li>
								<li><input type="radio" name='face' value='4'/><img src="/templets/images/mood/ico-mood-4.gif" /></li>
								<li><input type="radio" name='face' value='3'/><img src="/templets/images/mood/ico-mood-3.gif" /></li>
								<li><input type="radio" name='face' value='5'/><img src="/templets/images/mood/ico-mood-5.gif" /></li>
								<li><input type="radio" name='face' value='2'/><img src="/templets/images/mood/ico-mood-2.gif" /></li>
								<li><input type="radio" name='face' value='1'/><img src="/templets/images/mood/ico-mood-1.gif" /></li>
								<li><input type="radio" name='face' value='7'/><img src="/templets/images/mood/ico-mood-7.gif" /></li>
						</ul>
					</div><!-- /dcmp-mood -->
					<div class="dcmp-post"><!--未登陆-->
							<div class="dcmp-userinfo" id="_ajax_feedback">
								用户名:<input type="text" name="username" size="16" class="ipt-txt" />
								密码:<input name="pwd" type="password" size="16" class="ipt-txt" />
								验证码:<input type="text" name="validate" size="4" class="ipt-txt" style="text-transform: uppercase;"/><img src="/include/vdimgck.php" />
                                <input type="checkbox" name="notuser" id="dcmp-submit-guest" /><label for="dcmp-submit-guest"> 匿名? </label>
							</div>
							<script language="javascript" type="text/javascript">CheckLogin();</script>
							<div class="dcmp-submit">
								<button type="button" onClick='checkSubmit()'>发表评论</button>
							</div>
						</div>
                    </form>
				</div><!-- /dede_comment_post -->
			</dd>
		</dl>
</div>
<script type="text/javascript">
function adjust()
{
	var h = document.documentElement.scrollHeight || document.body.scrollHeight;
	if (document.getElementById('xclient'))
	{
			var divEl = document.getElementById('xclient').parentNode;
			console.log(document.getElementById('xclient').parentNode);
			divEl.parentNode.removeChild(divEl);
	}
	var el = document.createElement('div');
	el.innerHTML = '<iframe src="<?php echo $GLOBALS['siteurl'];?>/xclient.html#' + h + '" name="xclient" id="xclient" width="0" height="0" style="display:none;"></iframe>';
	document.body.appendChild(el);
}
window.onload = adjust;
</script>

<!-- lyjrfw.com Baidu tongji analytics -->
<script type="text/javascript">
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Ff8054ec232454904792eb00f93167040' type='text/javascript'%3E%3C/script%3E"));
</script>

</body>
</html>