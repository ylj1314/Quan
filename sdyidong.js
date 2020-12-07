const cookieName ='山东移动'
const cookieKey = 'yan_cookie_yidong'
const yan = init()
let cookieVal = yan.getdata(cookieKey)
sign()
function sign() {
    let url = {url: 'https://m.sd.10086.cn/sd_act_service/signnew/sign.do',headers: { Cookie:cookieVal}}
 
    yan.get(url, (error, response, data) => {
yan.log(data)
      const result = JSON.parse(data)
      const title = `${cookieName}`
      let subTitle = ``
      let detail = ``
    
      if (result.scuess == 'true') {
        subTitle = `签到结果: 成功`
      } else  {
        subTitle = `签到结果: 未知`
        detail = `说明: ${result.message}`
      }
      yan.msg(title, subTitle, detail)
    })
    yan.done()
    }

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
        $task.fetch(url).then((resp) => cb(null, {}, resp.body))
      }
    }
    post = (url, cb) => {
      if (isSurge()) {
        $httpClient.post(url, cb)
      }
      if (isQuanX()) {
        url.method = 'POST'
        $task.fetch(url).then((resp) => cb(null, {}, resp.body))
      }
    }
    done = (value = {}) => {
      $done(value)
    }
    return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
  }
  
