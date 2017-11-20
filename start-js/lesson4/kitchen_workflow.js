/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-11-20 21:23:59
 * @version $Id$
 */

// 采购食材
function buyFoods(){
    console.log('上街去买菜了！');
    var foodsList = ['fish', 'egg', 'meat'];
    return foodsList;
};
// 准备工作
function prepare(){
    console.log('切菜，洗菜，磨刀......');
    return true;
};


// 做菜函数
function cooking(foodsList){
    console.log(foodsList+'开始做菜了......');
    var feast = ['西红柿炒鸡蛋','青椒肉丝','鱼香肉丝'];
    return feast;
};
// 控制流程函数
function init(){

    if(prepare){
        var food = buyFoods();
        var read = prepare();
        var fese = cooking(food);
        console.log('准备酒席了~~~~');
        // for(var i = 0;i<fese.length;i++ ){
        //     console.log(fese[i]);
        // };
        fese.forEach((e)=>{
            console.log(e)
        })
    }else{
        console.log('正在做菜');
    }
};

//干活了
init();
