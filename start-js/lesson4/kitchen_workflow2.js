/**
 *
 * 其实生活是与编程息息相关的，
 * 我们要吃饭睡觉等等；
 * 现在我们模拟厨房的做菜流程；
 *
 */

    // 采购食材

    function buyFoods(){
        var buyFoodsStr = '上街去买菜！';
        var foodsList = ['fish','egg','meat'];
        console.log(buyFoodsStr);
        return {
            buyFoodsStr:buyFoodsStr,
            foodsList:foodsList
        };
    };

    // 准备工作
    function prepare(){
        var prepareStr = '切菜，洗菜，磨刀......';
        var foo = Math.random()>0.5;
        console.log(prepareStr);
        return {
            prepareStr:prepareStr,
            foo:foo
        };
    };

    // 做菜函数
    function cooking(foodsList){
        var cookingStr = '开始做菜了......'+foodsList;
        var feast = ['西红柿炒鸡蛋','青椒肉丝','鱼香肉丝'];
        console.log(foodsList+'开始做菜了......');
        console.log(feast);
        return {
            cookingStr:cookingStr,
            feast:feast
        };
    };
    //
    // // 控制流程函数
    function startWork(){
        this.success = prepare().foo;
        // if(this.success){
            this.prepareStr = prepare().prepareStr;
            this.foodsList = buyFoods();
            this.feast = cooking(foodsList);
            console.log('----酒席准备好了----');

        // }else{
        //     console.log('还没准备好')
        // }
    };
var start = new startWork();
console.log(start);
