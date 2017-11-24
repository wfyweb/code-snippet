/**
 *
 *  Closure 的练习
 */

        // var arr =[];
        // for (var i=0;i<7;i++)arr[i]=i;
        //     console.log(arr)


        function fn(){
          console.log('test')
        };
        var timer = setTimeout(fn,2000)
        console.log(timer);


      //   for (var i=1; i<=5; i++) {
      //     (function(i){
      //       setTimeout(function timer(){
      //         console.log(i)
      //       },i*1000)
      //     })(i);
      // }


     // setTimeout(function(){
     //    console.log(1)
     // },0)
     // console.log(2)
     // var fn1 = function(){
     //    console.log("te");
     // };
     // var timer = setTimeout(fn1,2000);
     // console.log(timer)

     //  var i = 0;
     //  setTimeout(function() {
     //      console.log(i);
     //  }, 0);
     //  console.log(i);
     //  i++;
     //  setTimeout(function() {
     //      console.log(i);
     //  }, 0);
     // console.log(i);
     // i++;
     // setTimeout(function() {
     //     console.log(i);
     // }, 0);
     // console.log(i);
     // i++;

     // for(var i=0;i<3;i++){
     //    setTimeout(function timer(){
     //      console.log(i);
     //    },i*1000)
     //  }
