<?php
$z[0]=Array("global","",236,264);
$z[0][4]['name']="cfg_soft_lang";
$z[1]=Array("field","",277,296);
$z[1][4]['name']="title";
$z[2]=Array("global","",297,323);
$z[2][4]['name']="cfg_webname";
$z[3]=Array("field","",364,393);
$z[3][4]['name']="keywords";
$z[4]=Array("field","",433,491);
$z[4][4]['name']="description";
$z[4][4]['function']="html2text(@me)";
$z[5]=Array("include","",1965,2001);
$z[5][4]['filename']="head1.htm";
$z[6]=Array("include","",2199,2234);
$z[6][4]['filename']="left.htm";
$z[7]=Array("field","",2300,2319);
$z[7][4]['name']="title";
$z[8]=Array("list","\r\n              <div class=\"news-item\">\r\n\r\n                    <a href=\"[field:arcurl/]\">\r\n                  <div class=\"news-item-header\">\r\n                  <p class=\"title\">\r\n                      [field:title/]               \r\n                  </p>\r\n                  <p>\r\n                      <span class=\"small\" style=\"font-weight:normal;\">\r\n                        [field:writer/]\r\n                      </span>&nbsp;\r\n                    <span class=\"text-grey small\" style=\"font-weight:normal;\">\r\n                      [[field:pubdate function=\"GetDateTimeMK(@me)\"/]]\r\n                    </span>\r\n                  </p>\r\n                    </div>\r\n                    <div class=\"news-body\">\r\n                      <p>\r\n                          [field:description function='cn_substr(Html2text(\"@me\").\"...\",80)'/]\r\n                      </p>\r\n                    </div>\r\n                </a>\r\n              </div>\r\n        ",2500,3474);
$z[8][4]['pagesize']="10";
$z[9]=Array("pagelist","",3820,3898);
$z[9][4]['listitem']="info,index,end,pre,next,pageno,option";
$z[9][4]['listsize']="5";
$z[10]=Array("include","",4073,4110);
$z[10][4]['filename']="footer.htm";

?>