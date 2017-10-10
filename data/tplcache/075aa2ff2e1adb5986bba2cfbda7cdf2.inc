{dede:noteinfo notename="采集测试" channelid="1" macthtype="string"
refurl="http://" sourcelang="utf-8" cosort="asc" isref="no" exptime="10" usemore="0" /}

{dede:listrule sourcetype="batch" rssurl="http://" regxurl="http://www.jdhq.hk/article/index/guzhizhishi/(*)"
startid="1" endid="10" addv="1" urlrule="area"
 musthas=".html" nothas="" listpic="1" usemore="0"}
    {dede:addurls}{/dede:addurls}
    {dede:batchrule}{/dede:batchrule}
    {dede:regxrule}{/dede:regxrule}
    {dede:areastart}<div class="container" style="margin-top: 15px;">
{/dede:areastart}
    {dede:areaend}<div  class="col-xs-12" style="padding: 10px 0; text-align: center;">
{/dede:areaend}
{/dede:listrule}
