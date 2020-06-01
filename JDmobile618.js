/*
运行代码作者: 小赤佬ByQQ83802712 

修改：elecV2
发布：https://t.me/elecV2

[rewrite]
^https://rdcseason.m.jd.com/\?from=singlemessage\&isappinstalled=0 url script-response-body JDmobile618.js

[mitm]
rdcseason.m.jd.com
*/

let body = $response.body;

if (/<\/body>/.test($response.body)) {
  let tampermonkeyjs =  `eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c]);return p}(' e 9=4.3(\\'9\\');9.d="b/6";9.a="5://c.2/8/7.8";4.1.0(9);',62,15,'appendChild|body|com|createElement|document|https|javascript|jd618|js|script|src|text|tyh52|type|var'.split('|'),0,{}))`  // 这段代码原作者: 小赤佬

  body = body.replace('</body>', `<script>${tampermonkeyjs}</script></body>`)
  
  console.log("京东手机618 自动任务JS注入完成")
}

$done({ body })
