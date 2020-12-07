
const senku=init()
const url = "https://task.qq.com/index.php/api/checkinDaily?taskId=2657&type=2";
const body = "";
const headers = {
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_4_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    "Cookie": "access_token=C5A482F6F2A7A19BAFFCDE77F91F2FAA; appid=1105152396; openid=67BB61F0F7C3E51FC52FF84EEBB9A379; useopenid=1; laravel_session=eyJpdiI6IlRkU2x4aEl5UnFkM3A2VHpBRGY2ZHd2K3kwejkyZTdoME9NNnYyXC80NTJJPSIsInZhbHVlIjoiWVd2U2tTdzZLTW0wS1NcL0I5NzgxM05SWXZPMFB6a2NxNFg2dEtLZ2hOVGNlXC82bnhFc25TYldvdkQ5UkFHMXM0aVNDVnpOQmpqalVxUXJCWG5CK0NYZz09IiwibWFjIjoiN2E1NTYxZmUxNDc3OGVjZTI4OTM5MDMwM2NiMzhmYTIxZDFkNDM1Njk0MTRmMmU2NzAyYTViYTMzMjE2MTNiMCJ9; access_token=C5A482F6F2A7A19BAFFCDE77F91F2FAA; appid=1105152396; openid=67BB61F0F7C3E51FC52FF84EEBB9A379; useopenid=1",
    "X-Requested-With": "XMLHttpRequest",
    "Host": "task.qq.com",
    "Referer": "https://task.qq.com/index.php/appWebSignin",
    "X-CSRF-TOKEN": "ObTW7KBXqZOYZDTygJjgzAiRynUrP8JQRWGgEZsV"
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
