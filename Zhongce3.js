const senku=init()
const url = "https://task.qq.com/index.php/api/checkinDaily?taskId=2657&type=2";
const body = "";
const headers = {
    "Cookie": "access_token=9D56851EF7F2B19215AD17E23AEB370B; appid=1105152396; openid=9FA064824F647D864193E9EA75E3316C; useopenid=1; laravel_session=eyJpdiI6ImZiVTJsdzU3d0NacUdzSVpYSHlUM0JnaStSaGlJeWVYa1JNZ2VuTHVIYnc9IiwidmFsdWUiOiJiZjFVOEJrUk1nbGhXb0J2U0FPQ2w2eFhpWUR1ZkNNdkNSQ1BuS1VrbzIyTUZETWpWQmFPRFZqYzN2bXRYd2VqaFgrcGJ0ZFNCcVFkZUw3SmR4S0xQUT09IiwibWFjIjoiMWNkYzVjOWE2NjBiODk3M2U3ZmE2MDhhMTVkOGEyMzAwZDE4NDgxZjlhMDI5OThjNzI1YWRhZTk5YWU0NTVjMSJ9; tphp_arr_nick=277001038%7C",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "X-Requested-With": "XMLHttpRequest",
    "Host": "task.qq.com",
    "Referer": "https://task.qq.com/index.php/appWebSignin",
    "X-CSRF-TOKEN": "syVQXGp0MGkUVwCwCaK0cvJ5BEbOLUDFl479eE3G"
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
