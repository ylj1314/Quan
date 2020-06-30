
/*
By Evilbutcher
weibo supertalk checkin
get url

[rewrite_local]
https:\/\/api\.weibo\.cn\/2\/cardlist? url script-request-header weibotalk.url.js
https:\/\/api\.weibo\.cn\/2\/page\/button? url script-request-header weibotalk.url.js

[mitm]
api.weibo.cn

进入超话已关注页面，提示获取已关注超话链接成功，点进一个超话页面，手动签到一次，提示获取超话签到链接成功，即可注释掉两条重写

*/
const tokenurl = 'evil_tokenurl';
const tokencheckinurl = 'evil_tokencheckinurl'
const tokenheaders = 'evil_tokenheaders'
const tokencheckinheaders = 'evil_tokencheckinheaders'

if ($request && $request.method != 'OPTIONS' && $request.url.match(/\_\-\_myfollow\&need\_head\_cards/) && $request.url.match(/cardlist/)){
  const listurl = $request.url
  console.log(listurl)
  const listheaders = JSON.stringify($request.headers)
  $prefs.setValueForKey(listurl, tokenurl)
  $prefs.setValueForKey(listheaders, tokenheaders)
  $notify("微博超话","", "获取已关注超话链接成功🎉")
}

if ($request && $request.method != 'OPTIONS' && $request.url.match(/\_\-\_followsuper/) && $request.url.match(/\&fid/)){
  const checkinurl = $request.url
  console.log(checkinurl)
  const checkinheaders = JSON.stringify($request.headers)
  $prefs.setValueForKey(checkinurl, tokencheckinurl)
  $prefs.setValueForKey(checkinheaders, tokencheckinheaders)
  $notify("微博超话","", "获取超话签到链接成功🎉")
}
