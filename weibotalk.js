/*
By Evilbutcher
weibo supertalk checkin
*/
const tokenurl = "evil_tokenurl";
const tokencheckinurl = "evil_tokencheckinurl";
const tokenheaders = "evil_tokenheaders";
const tokencheckinheaders = "evil_tokencheckinheaders";

var pagenumber = 2; //超话关注数量/20为一页，可自定
var id = [];
var norepeatid = [];
var number;
var message = [];
var i;
var j;
var listurl = $prefs.valueForKey(tokenurl);
var listheaders = $prefs.valueForKey(tokenheaders);
var checkinheaders = $prefs.valueForKey(tokencheckinheaders);
const m = "GET";

async function start() {
  await getid();
  await checkin();
}

start();

//获取超话签到id
function getid() {
  return new Promise(resolve => {
    setTimeout(() => {
      for (j = 1; j <= pagenumber; ) {
        var getlisturl = listurl.replace(
          new RegExp("&page=.*?&"),
          "&page=" + j + "&"
        );
        console.log(getlisturl);
        var idrequest = { url: getlisturl, method: m, header: listheaders };
        $task.fetch(idrequest).then(response => {
          var body = response.body;
          var obj = JSON.parse(body);
          //console.log(obj)
          var group = obj.cards[0]["card_group"];
          //console.log(group);
          number = group.length;
          //console.log(number);
          for (i = 0; i < number; i++) {
            //console.log(group[i].scheme.slice(33, 71))
            var talkid = group[i].scheme.slice(33, 71);
            //console.log(talkid)
            //if (id.indexof(talkid) == -1) {
            id.push(talkid);
            //}
          }
          //console.log(id)
          //console.log("1")
        });
        j = j + 1;
        if (j > pagenumber) {
          number = id.length;
          console.log(id)
          console.log(number);
          resolve();
        }
      }
    }, 500);
  });
}

//签到
function checkin() {
  var checkinurl = $prefs.valueForKey(tokencheckinurl);
  //console.log(checkinurl);
  return new Promise(resolve => {
    console.log(id);
    console.log("2");
    console.log(number);
    setTimeout(() => {
      for (i = 0; i <= number; ) {
        var sendcheckinurl2 = checkinurl.replace(
          new RegExp("&fid=.*?&"),
          "&fid=" + id[i] + "&"
        );
        var sendcheckinurl = sendcheckinurl2.replace(
          new RegExp("pageid%3D.*?%26"),
          "pageid%3D" + id[i] + "%26"
        );
        //console.log(sendcheckinurl);
        var checkinrequest = {
          url: sendcheckinurl,
          method: m,
          header: checkinheaders
        };
        $task.fetch(checkinrequest).then(response => {
          var body = response.body;
          var obj = JSON.parse(body);
          //console.log(obj);
          var result = obj.result;
          //console.log(result);
          if (result == 1) {
            message.push(obj.button.name);
            console.log(obj.button.name);
            $notify("微博超话", "", obj.button.name);
          } else if (result == 382004) {
            message.push(obj.error_msg);
            console.log(obj.error_msg);
            $notify("微博超话", "", error_msg);
          } else if (result == 388000) {
            message.push("需要拼图验证⚠️");
            console.log("需要拼图验证⚠️");
          } else if (result == 382010) {
            message.push("超话不存在⚠️");
            console.log("超话不存在⚠️");
          } else {
            message.push("未知错误⚠️");
            console.log("未知错误⚠️");
          }
        });
        //console.log(body)
        i = i + 1;
        if (i > number) {
          console.log(message);
          resolve();
        }
      }
    }, 500);
    //var text = JSON.stringify(message);//console.log(text);//$notify("微博超话", "", message);
  });
}
