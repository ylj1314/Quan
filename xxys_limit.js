/*
  🐬 小小影视 - 【仅限交流学习，请在24小时内删除】

  🐬@toulanboy
  📕地址：https://github.com/toulanboy/scripts

  📌不定期更新各种签到、有趣的脚本，欢迎star🌟

*************************
  【Loon 2.1+ 脚本配置】
*************************
[script]
http-response ^https?:\/\/.*?\.(xxjjappss|xjwdapps|xjxjappss)\.com\/(init|login|ucp\/index) script-path=https://raw.githubusercontent.com/toulanboy/scripts/master/xxys/xxys_vip.js, requires-body=true, timeout=10, tag=xxys_vip
http-response ^https?:\/\/.*?\.(xxjjappss|xjwdapps|xjxjappss)\.com\/(getGlobalData) script-path=https://raw.githubusercontent.com/toulanboy/scripts/master/xxys/xxys_ad.js, requires-body=true, timeout=10, tag=xxys_ad
http-response ^https?:\/\/.*?\.(xxjjappss|xjwdapps|xjxjappss)\.com\/vod\/reqplay script-path=https://raw.githubusercontent.com/toulanboy/scripts/master/xxys/xxys_limit.js, requires-body=true, timeout=10, tag=xxys_limit

hostname = *.xxjjappss.com, *.xjwdapps.com, *.xjxjappss.com

*************************
  【 QX 1.0.10+ 脚本配置 】 
*************************
^https?:\/\/.*?\.(xxjjappss|xjwdapps|xjxjappss)\.com\/(init|login|ucp\/index) url script-response-body https://raw.githubusercontent.com/toulanboy/scripts/master/xxys/xxys_vip.js
^https?:\/\/.*?\.(xxjjappss|xjwdapps|xjxjappss)\.com\/(getGlobalData) url script-response-body https://raw.githubusercontent.com/toulanboy/scripts/master/xxys/xxys_ad.js
^https?:\/\/.*?\.(xxjjappss|xjwdapps|xjxjappss)\.com\/vod\/reqplay url script-response-body https://raw.githubusercontent.com/toulanboy/scripts/master/xxys/xxys_limit.js

hostname = *.xxjjappss.com, *.xjwdapps.com, *.xjxjappss.com


 Surge的老板自己参考上面写下。
 
*/
let body = $response.body
body = JSON.parse(body)
body.data.limittime = 999
body=JSON.stringify(body)
$done({body})
