/*
* 模拟报数过程 - 调用对象方法
*
* 对象soldierA代表士兵A, 依次类推。
* startSoundOff()函数是开始报数的处理函数。
*/

var soldierA = {
    soundOff:function(){
        console.log('1到');
    }
};

var soldierB = {
    soundOff:function(){
        console.log('2到');
    }
};

var soldierC = {
    soundOff:function(){
        console.log('3到');
    }
};

var soldierD = {
    soundOff:function(){
        console.log('4到');
    }
};
// startSoundOff()按顺序调用每个对象的报数方法
function startSoundOff(){
    soldierA.soundOff();
    soldierB.soundOff();
    soldierC.soundOff();
    soldierD.soundOff();
};

// 执行报数函数startSoundOff()
startSoundOff();
