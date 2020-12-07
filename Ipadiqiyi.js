const senku=init()
const url = "http://community.iqiyi.com/openApi/score/add?verticalCode=iQIYI&typeCode=point&agenttype=23&srcplatform=23&appKey=basic_ipad&agentversion=11.8.0&appver=11.8.0&userId=2087110535&authCookie=15RrRo7FhpoKyRXNjgZjfrj3m3cup2fqx7XboxMMu8wiNu1pZoGpbzm3Py5lxj6rW5ZY40&channelCode=Sign_IPAD&scoreType=1&sign=ce2b06157f474bc28acb192abfcc69d1";
const body = "";
const headers = {
    "User-Agent": "QiYiPadVideo/20200811164800 CFNetwork/1188 Darwin/20.0.0",
    "Host": "community.iqiyi.com",
    "Cookie": "P00001=cfh1wsm2R8Ei66ZkBpvom1Rsx2s3nFGm3n4wDfexO1bTfpYgj23cfiKa68gUMROfrojRG40; P00002=%7B%22uid%22%3A2087110535%2C%22pru%22%3A2087110535%2C%22user_name%22%3A%2215069538023%22%2C%22nickname%22%3A%22%5Cu4e09%5Cu4e94%5Cu4e03%5Cu8a00%5Cu7684%5Cu9152%22%2C%22pnickname%22%3A%22%5Cu4e09%5Cu4e94%5Cu4e03%5Cu8a00%5Cu7684%5Cu9152%22%2C%22type%22%3A11%2C%22email%22%3A%22%22%7D; P00003=2087110535; P00004=.1597567243.086eeb9ff7; P00007=cfh1wsm2R8Ei66ZkBpvom1Rsx2s3nFGm3n4wDfexO1bTfpYgj23cfiKa68gUMROfrojRG40; P00010=2087110535; P000email=\"\"; P00PRU=2087110535; P01010=1597593600; QC005=bbe56-8bf6f920f4ec1eeb05485bb760ecd676-23; QC006=u1595834085465"
};
const request = {
    url: url,
    headers: headers,
    body: body
};

senku.get(request, function(error, response, data) {

senku.log(data)
const res=JSON.parse(data)
        const title = 'i奇艺'

         let subTitle =  `签到: ${res.message}`
     let detail = `说明: ${res.data.data}`
    
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
