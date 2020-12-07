

let obj = JSON.parse($response.body);
obj.data.adType = "1";
$done({body: JSON.stringify(obj)});