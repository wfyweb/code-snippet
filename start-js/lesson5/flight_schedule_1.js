/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-11-29 16:24:37
 * @version $Id$
 */

//函数立即返回
function checkFlinghtSchedule(){
    console.log('开始查询航班');
    // 模拟构建航班的时间信息
    var scheduleInfo = {
        start: '8/23 8:00',
        end: '8/23 10:30',
        from: 'beijing',
        to: 'hangzhou'
    };

  return scheduleInfo.start;
}
// 调用立即函数checkFlightSchedule
var startTime = checkFlinghtSchedule()
console.log(startTime);
