
const senku=init()
const url = "https://task.qq.com/index.php/api/checkinDaily?taskId=2657&type=2";
const body = "";
const headers = {
    "Cookie": "access_token=FDF92D68FAF44462CA2DDB1469FCF900; appid=1105152396; openid=535CDB5BDE79347D5E5C5C34E8271AC4; useopenid=1; laravel_session=eyJpdiI6ImlhSUc0Z1FqSzVvT2puS3I0QjN2NVNEbTNyNW1mRUdXRTVHYVNRK3dWenM9IiwidmFsdWUiOiI5ZzN2SVp5S0dGNFRMRnhpWE9ETEoycjJ1NWpVT2lLZkYzMUYxVkc1OHFZSFgrTVRTeUQ3VVwvYllJOEF2citNY3FhbzhpRytRYXptWHZpblF1UENXQWc9PSIsIm1hYyI6ImQ2NjkwMzNlNDMzYzA5ZmNmNTgzYzczNmUyNTZiMWMwYjA4NWU0NTFiOTA3ZDBlNTMwNDAyNjVjMTkzOTM4YmEifQ%3D%3D; tphp_arr_nick=1239741325%7C; access_token=FDF92D68FAF44462CA2DDB1469FCF900; appid=1105152396; openid=535CDB5BDE79347D5E5C5C34E8271AC4; useopenid=1",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "X-Requested-With": "XMLHttpRequest",
    "Host": "task.qq.com",
    "Referer": "https://task.qq.com/index.php/appWebSignin",
    "X-CSRF-TOKEN": "isD43gEqMugQSQp94jAitoqCiOukUXUyihTDnysD"
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
