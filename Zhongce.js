
const senku=init()
const url = "https://task.qq.com/index.php/api/checkinDaily?taskId=2657&type=2";
const body = "";
const headers = {
    "Cookie": "access_token=001865750D9160B6FD917375DE3C3D2E; appid=1105152396; openid=FD0688596EC940A55E54F8CE5DAC402C; useopenid=1; laravel_session=eyJpdiI6IkRkTUh0WUo5eDJERzE5N21WdUE0XC83Uk5vSTB2QzgzRjVXOE5mVFZSRjRnPSIsInZhbHVlIjoiMjY5M2tmK095UFwvSEpBdHNMeHBTdEZGZlF5ZkZXOWZYY0RLWUVWM3ZKV25HWmxsZ2JpQlN2WXBHU01UZ1ZpcHlURU9uQnlQVE12MjJmNFdyVm53Wk9BPT0iLCJtYWMiOiI5N2QzOTRlMDg1ZjU4ZTljZTRhZWJkZGY0NzE2OTVlMjc4YjVhYTc1MDQ5Yjg4ZWU4ZTIzOWRhYTNhZjIwMTQ2In0%3D; tphp_arr_nick=917326587%7C; access_token=001865750D9160B6FD917375DE3C3D2E; appid=1105152396; openid=FD0688596EC940A55E54F8CE5DAC402C; useopenid=1",
    /*"User-Agent": "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",*/
   /* "X-Requested-With": "XMLHttpRequest",
    "Host": "task.qq.com",
    "Referer": "https://task.qq.com/index.php/appWebSignin",*/
    "X-CSRF-TOKEN": "57dDNM55AJbiOEWDJmjU4aQjIg9ebpLmCdCcJWSJ"
};
const request = {
    url: url,
    headers: headers,
    body: body
};

senku.get(request, function(error, response, data) {
senku.log(data)
const res=JSON.parse(data)
         const title = 'qq众测'

         let subTitle =  `签到: ${res.msg}`
     let detail = `说明: ${res.msg}`
    
      senku.msg(title, subTitle, detail)
});

function init() {
  isSurge = () => {
      return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
      return undefined === this.$task ? false : true
  }
  getdata = (key) => {
      if (isSurge()) return $persistentStore.read(key)
      if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
      if (isSurge()) return $persistentStore.write(key, val)
      if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
      if (isSurge()) $notification.post(title, subtitle, body)
      if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
      if (isSurge()) {
          $httpClient.get(url, cb)
      }
      if (isQuanX()) {
          url.method = 'GET'
          $task.fetch(url).then((resp) => cb(null, resp, resp.body))
      }
  }
  post = (url, cb) => {
      if (isSurge()) {
          $httpClient.post(url, cb)
      }
      if (isQuanX()) {
          url.method = 'POST'
          $task.fetch(url).then((resp) => cb(null, resp, resp.body))
      }
  }
  done = (value = {}) => {
      $done(value)
  }
  return {
      isSurge,
      isQuanX,
      msg,
      log,
      getdata,
      setdata,
      get,
      post,
      done
  }
}
