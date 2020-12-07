
const senku=init()
const url = "https://credits.bz.mgtv.com/credits/url?_support=10001001&ageMode=0&appVersion=6.3.6&device=iPad&did=0d73a8df4a186936f05b8a2fdabec54da6d3a157&dname=iPad&height=1668&mac=0d73a8df4a186936f05b8a2fdabec54da6d3a157&osType=ios&osVersion=14.0&seqId=f8aaaecc9359d282fb655c0a186ef159&ticket=BSRTOG6VULR0H6S2GVFG&uuid=82d4fd1d190848fd9054dd5b7613c8a9&width=2388";
const body = "";
const headers = {
    "User-Agent": "ImgoTV-ipad-AppStore/6.3.6 (iPad; iOS 14.0; Scale/2.00)",
    "Host": "credits.bz.mgtv.com",
    "Cookie": "mba_deviceid=beec13cd-d9b5-9b0b-04fb-2dd9814d6f92; mg_uuid=47f0e19b-819d-4e5a-a849-a82915d604dd"
};
const request = {
    url: url,
    headers: headers,
    body: body
};

senku.get(request, function(error, response, data) {
 senku.log(data)
const res=JSON.parse(data)
        const title = '芒果tv'

         let subTitle =  `签到: ${res.msg}`
     let detail = `说明: ${res.data.desc}`
    
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
