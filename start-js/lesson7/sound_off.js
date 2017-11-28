/**
 *
 * 需求：模拟 士兵报数场景
 * 重点：A士兵报数之后，
 *       B士兵听到后继续报数
 *      （模拟数据传递）
 * 思路：1.教官发出指令：开始报数
 *       2.士兵A接到指令：报数 1 ，
 *          判断总人数，如何达到总人数，
 *          报数完毕。
 *          反之，继续报数（传递数据）
 * 试错点：A士兵报数之后（发出数据）
 *         听到后才继续报数（得到数据）
 *         那么，就是执行完函数后，一定得到数据
 *          *** 一定，一定要：return出去
 *
 */
// 士兵A
function SoundA(index,content){
    console.log('报数 1');
    if(index<content){
        return SoundB(index+1,content);
    }else{
        return 'finished';
    }
};
// 士兵B
function SoundB(index,content){
    console.log('报数 2');
    if(index<content){
        return SoundC(index+1,content);
    }else{
        return 'finished';
    }
};

// 士兵C
function SoundC(index,content){
    console.log('报数 3');
    if(index<content){
        return SoundD(index+1,content);
    }else{
        return 'finished';
    }
};
// 士兵D
function SoundD(index,content){
    console.log('报数 4');
    if(index<content){
        return SoundE(index+1,content);
    }else{
        return 'finished';
    }
};
// 士兵E
function SoundE(index,content){
    console.log('报数 5');
    if(index<content){
        return 'unfinished'; //还没结束啊。人呢？有人吗。。。'
    }else{
       return 'finished';
    }
};
// 执行函数 判断是否报数完毕
function startSoundOff(){
    var content = 5;
    var result = SoundA( 1,content);
    if (result === 'finished') {
        console.log("好")
    }else{
        console.log("还没有结束，人呐end");
    }

};
// 发出指令：开始
startSoundOff();

