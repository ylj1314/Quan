
const senku=init()
const url = "https://happy.mail.10086.cn/jsp/cn/club/sign/checkin.do?t=0.09461932556201713";
const body = "";
const headers = {
    "Cookie": "YZKF_SESSION=51F6CA69C4A031B571874AE658DF143F; Os_SSo_Sid=00U5NzczMTc4NzAwMDg3ODc502D8546A000003; RMKEY=58fc95d8a60b5095; Hm_lvt_36ad2bded45c3d4d445e9e37ffd7688b=1597731870",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 139mail (139PE_WebView_IOS_4.3.5)",
    "X-Requested-With": "XMLHttpRequest",
    "Host": "happy.mail.10086.cn",
    "Referer": "https://happy.mail.10086.cn/jsp/cn/club/wap/twoLevelSign/index.html",
    "Origin": "https://happy.mail.10086.cn"
};
const request = {
    url: url,
    headers: headers,
    body: body
};

senku.post(request, function(error, response, data) {

senku.log(data)
const res=JSON.parse(data)
        const title = '139邮箱'

         let subTitle =  `签到: ${res.success}`
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

