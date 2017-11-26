//引入jsonfile模块
//https://npm.taobao.org/package/jsonfile
var jsonFile = require('jsonfile');

var file = "./test_data/data.json";

jsonFile.readFile(file,function(err,data){
    if(err) throw err;
    console.log('读取成功');
    console.log(data);
})
