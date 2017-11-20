/**
 *
 * @authors wfy
 * @date    2017-11-20 20:27:20
 * @version $Id$
 */

//声明并定义
var name = 'wfy';
var age = 18;
var height = 170,weight = 120.2;
var isMan = true;
var student = false;
var xinshengUserName = 'qiqi';
var wechat_user_name = 'qiqi';
var locaitonBase = 'Beijing';
var company = locaitonBase + 'alibaba';
var myLikeColorsList = ['yellow','red','black','write'];
var myLikeFoods = ['麻辣烫','饺子','馄炖','大拉面'];

// 定义一个函数变量buildPerson(表达式函数定义法)
var buildPerson = function(){
    var wfy = {
        name:name,
        config:{
            age,
            height,
            weight,
            isMan,
            student,
            bloodType:'A',
            haveGirFiend:true
        },
        like:{
            myLikeColorsList,
            myLikeFoods
        },
        work:{
            locaitonBase,
            company
        }
    };
    return wfy;
};
var personObj = buildPerson();
console.log(personObj);
