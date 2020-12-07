
const senku=init()
const url = "https://task.qq.com/index.php/api/checkinDaily?taskId=2657&type=2";
const body = "";
const headers = {
    "Cookie": "access_token=EA69989A38E035B329DDBB163CC05ABC; appid=1105152396; openid=FD0688596EC940A55E54F8CE5DAC402C; useopenid=1; laravel_session=eyJpdiI6InhMb1FmTHluOExjeXJ6U01ZTlU2Nk44aDZwYnJTTjZ6NjBGOWk2c0h3eUU9IiwidmFsdWUiOiJqSzJqM3VyaEREQWk1ZXQwTk8wdktacVZZUkdLc0lDVnA1d2ZOWGJoVTRuaXhLK2x1WDVMK2dDYjVBVDhQOWI0VmN2K0VmZWsrRHRhY3pNaU1oNWg3dz09IiwibWFjIjoiZGYxOWNiNTQ3Mjc3OWVhZGJkYWIyNWI0MTZlN2M2NDY5NDQ5YWZlMTUxNzRjYjlmYzIyZTBjZDQ5NTNhYjAzMSJ9; tphp_arr_nick=917326587%7C; access_token=EA69989A38E035B329DDBB163CC05ABC; appid=1105152396; openid=FD0688596EC940A55E54F8CE5DAC402C; useopenid=1",
    /*"User-Agent": "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",*/
   /* "X-Requested-With": "XMLHttpRequest",
    "Host": "task.qq.com",
    "Referer": "https://task.qq.com/index.php/appWebSignin",*/
    "X-CSRF-TOKEN": "sliaBOXInrt7JFcK1vgISMbH3DACGDf4G5gbXm02"
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
