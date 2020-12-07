var obj = JSON.parse($response.body);
 obj= {
 "code": 0,
 "msg": "OK",
 "result": {
  "status": 1,
  "isexpert": true,
  "endTime": "2022-11-02",
  "vipType": 0,
  "beginTime": "2019-11-03",
  "isRenewals": 1,
  "vipLevel": 0,
  "openCourseIds": [],
  "choreographySkills": 0,
  "has_append_service": 0,
  "vipDaysOverdue": -1,
  "vipResidualDay": 999,
  "imeiVIPOrderBindStatus": 1
 }
};
$done({body: JSON.stringify(obj)});
//
