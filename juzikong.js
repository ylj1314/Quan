
const senku=init()
const url = "https://api.juzikong.com/mobi/m/task/signIn";
const body = "";
const headers = {
    "n2c": "jugg",
    "Content-Type": "application/x-www-form-urlencoded",
    "n2v": "2.0",
    "n2deviceId": "321ae03303e69b7d60d1bf96fa12d089",
    "n2p": "ios",
    "Host": "api.juzikong.com",
    "User-Agent": "jugg5/2.0 (com.juzicon.jugg; build:2040; iOS 14.0.0) Alamofire/5.2.1",
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLmp1emlrb25nLmNvbVwvbW9iaVwvb2F1dGhcL2xvZ2luIiwiaWF0IjoxNTkzODEyODA4LCJleHAiOjE2MjUzNDg4MDgsIm5iZiI6MTU5MzgxMjgwOCwianRpIjoiakpmTnA4NnpWazNZaEVZRCIsInN1YiI6MjkyMzQxLCJwcnYiOiIyYmM1YTVlNzJjNWI0ZjQ5MTY3YTMzMmJhNWJmMzU4NzE4YjM2ZTk3IiwidXVpZCI6IjE0MTlmZDY5LWUwOTEtNDRlMi1iZDA1LTkzZDllY2QxMTYxNSIsInVzZXJuYW1lIjoiUVE1ODhud3AifQ.nMFbSQLITNfpO9qHEXjWYNurhjxMG1HNob1qEP3E0zw"
};
const request = {
    url: url,
    headers: headers,
    body: body
};

senku.post(request, function(error, response, data) {
       //这里是以后要写的代码,大概几行就写完了
senku.log(data)
const res=JSON.parse(data)
         const title = '句子控'

         let subTitle =  `签到: ${res.success}`
     let detail = `说明: ${res.data.title}`
    
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
