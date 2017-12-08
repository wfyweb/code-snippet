//obj = {id:1,name:'gg',...} => arr = [{id:1},{name:'gg'},{...}...]
//对象转化为数组
//1.建立一个空数组，
//2 for in 遍历对象
//3 每次遍历创建一个新对象，然后push到数组里
// * * * * * * * * * * *  
// *    key 是表达式    * 
// *    obj[key]是值    *  
// * * * * * * * * * * * 

var objPeople = {id:0,name:'prerson',mood:'quiet',target:'bent'};
var arrList = [];
for(key in objPeople){
    //console.log(key,objPeople[key])
    arrList.push({[key]:objPeople[key]})
}
var strList = JSON.stringify(arrList)
console.log(strList)