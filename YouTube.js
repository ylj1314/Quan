/* 

*/
var body = $response.body;


    let obj = JSON.parse(body);
    obj.log();
    //obj.data.advertising = {};
    delete obj.data.seats_bids_ad0;
    body = JSON.stringify(obj);


$done({body});
