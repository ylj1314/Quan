
const senku=init()
const url = "https://task.qq.com/index.php/api/checkinDaily?taskId=2657&type=2";
const body = "";
const headers = {
    "Cookie": "access_token=64540CB1C11E116C0CE31FD38A6D3711; appid=1105152396; openid=9FA064824F647D864193E9EA75E3316C; useopenid=1; laravel_session=eyJpdiI6IlhKeUVVOTludHVvWlBFMlM5c0xYXC9GVnhEeGx5STRUXC9mYWllWjRVanJqaz0iLCJ2YWx1ZSI6IlRockRVNTB6ZlIyU1hLZ1JjSkROWGFTRHBZVU5wNVdjR3RDalFzYUN0eEVjQWN2ZkkyS1BmdVk5SUZhRnMxZVoxRXF4YWI2WXA3WE0rWjZ0ZE1xXC85QT09IiwibWFjIjoiZGU4MjVkOWZjYjU1ZDdiMTUzYjQ4MDgzZTVkY2Y5MGI0YjI0ZTAzNjAzYjY2YjUzNDNkZDQ4YzQwYjJkZmVhYyJ9; tphp_arr_nick=277001038%7C; access_token=64540CB1C11E116C0CE31FD38A6D3711; appid=1105152396; openid=9FA064824F647D864193E9EA75E3316C; useopenid=1",
    /*"User-Agent": "Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",*/
   /* "X-Requested-With": "XMLHttpRequest",
    "Host": "task.qq.com",
    "Referer": "https://task.qq.com/index.php/appWebSignin",*/
    "X-CSRF-TOKEN": "X-CSRF-TOKEN: SAQMYApoiJtgM22MoD1p90osLZrPWaTTuIQ9FI3a"
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
