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
body.data.user = {
  "uid": "10081",
  "uniqkey": "IJABCDE",
  "username": "~小小影迷-么么哒",
  "nickname": "",
  "mobi": "86.13800138000",
  "email": "~112134124",
  "sysgid": "5",
  "gid": "1",
  "gids": null,
  "gicon": "V5",
  "isvip": 1,
  "regtime": "2020-07-01 00:00:00",
  "gender": "1",
  "avatar": "sysavatar\/man\/6.png",
  "avatar_url": "https:\/\/img.ynkmjj.com\/sysavatar\/man\/6.png",
  "newmsg": "1",
  "goldcoin": 5,
  "duetime": "2021-07-01 00:00:00",
  "dueday": "365天后过期"
}
if (body.data.hasOwnProperty('uinfo')) {
  body.data.uinfo = {
      "goldcoin": "5",
      "play_daily_remainders": 888,
      "down_daily_remainders": 88,
      "curr_group": {
        "gid": "5",
        "gname": "尊贵VIP",
        "gicon": "V5",
        "minup": "20"
      },
      "next_group": {
        "gid": "6",
        "gname": "禁止发言",
        "gicon": "",
        "minup": "65535"
      },
      "next_upgrade_need": 65535
    }
}
body=JSON.stringify(body)
$done({body})

