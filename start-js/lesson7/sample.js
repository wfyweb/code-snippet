// 引入fs
var fs = require('fs');

// 引入file json 库
var jsonfile =  require('jsonfile');

// 定义要扫描的目标文件
var pathString = './words/';

// 用于存放所有的心里话
var writePathString = './all_words.json';

// 用于存放格式不对的json文件名
var errorPathString = './error_data.json';

// 调用fs的readdir函数读取所有的文件
fs.readdir(pathString,function(err,data){
    if (err) {
       //throw err;
       console.log('读取文件失败');
    }else{
       console.log('读取文件成功');
    }
    //把含有"json"字符的文件名过滤出来,把所有文件保存在jsonFiles数组中
    var jsonFile = [];
    for(var i=0;i<data.length;i++){
        if(data[i].includes('.json')){
            jsonFile.push(data[i])
        }
    };

    //循环读取json文件的内容，并都存在jsonList数组内。读取出错的文件名存在errorFiles数组内。
    var jsonList = [];
    var errorFiles = [];
    for(var i=0; i<jsonFile.length; i++){
        try{
            //读取json
            var content = jsonfile.readFileSync(pathString + jsonFile[i] );
            jsonList.push(content);
        }catch(err){
            errorFiles.push(jsonFile[i]);
        }
    };

    //将收集到的数据写入到  writePathString
    jsonfile.writeFileSync(writePathString,jsonList);

    //将收集到的错误文件写入  errorPathString
    jsonfile.writeFileSync(errorPathString,jsonList);

});
