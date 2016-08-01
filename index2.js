// var xmlHttpRequest = new XMLHttpRequest();
// xmlHttpRequest.onreadystatechange = function()
// {
//     if( this.readyState == 4 && this.status == 200 )
//     {
//         if( this.response )
//         {
//             console.log(this.response);
//             // 読み込んだ後処理したい内容をかく
//
//         }
//     }
// }
//
// xmlHttpRequest.open( 'GET', 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCnz5XLfPqOzBIKcCrWdQI6eIeRUSXxIEw&q=%E3%82%B5%E3%83%83%E3%82%AB%E3%83%BC&part=id', true );
// xmlHttpRequest.responseType = 'json';
// xmlHttpRequest.send( null );

// var syncBuyApple = function(money) {
//   if(money >= 150) {
//     return {change : money - 150 , error: null };
//   }else {
//     return {change : null, error : 150 - money };
//   }
// };
//
// var result = syncBuyApple(500);
//
//
// if(result.change !== null ) {
//   console.log(result.change + "のお釣りです。");
// }
// if(result.error !== null) {
//   console.log(result.error + "が足りません。");
// }
//
// var result2 = syncBuyApple(result.change);
//
// if(result2.change !== null ) {
//   console.log(result2.change + "のお釣りです。");
// }
//
// if(result2.error !== null) {
//   console.log(result2.error + "が足りません。");
// }
//
// var result3 = syncBuyApple(result2.change);
//
// if(result3.change !== null ) {
//   console.log(result3.change + "のお釣りです。");
// }
//
// if(result3.error !== null) {
//   console.log(result3.error + "が足りません。");
// }
// var result4 = syncBuyApple(result3.change);
//
// if(result4.change !== null ) {
//   console.log(result4.change + "のお釣りです。");
// }
//
// if(result4.error !== null) {
//   console.log(result4.error + "が足りません。");
// }
// var asyncBuyApple = function(payment, callback) {
//   setTimeOut(function(){
//     if(payment >= 150){
//       callback(payment - 150, null);
//     }else{
//       callback(null, '金額が足りません');
//     }
//   }, 1000);
// }

//150円のりんごを１つ買う関数
//第一引数に支払い金額
//第二引数にコールバック関数
//おつりを計算してコールバック関数に渡す

// var asyncBuyApple = function(payment, callback) {
//   setTimeout(function() {
//     if(payment >= 150){
//       callback (payment - 150, null);
//     }else{
//       callback(null , 150 - payment);
//     }
//   }, 5000);
// };
//
// asyncBuyApple(300, function(change, error) {
//   if(change !== null) {
//     console.log(change + 'のお釣りです');
//   }else if(error !== null){
//     console.log(error + '足りません');
//   }
//   asyncBuyApple(change, function(change, error) {
//     if(change !== null) {
//       console.log(change + 'のお釣りです');
//     }else if(error !== null) {
//       console.log(error + '足りません');
//     }
//     asyncBuyApple(change, function(change,error) {
//       if(change !== null) {
//         console.log(change + 'のお釣りです');
//       }else if(error !== null) {
//         console.log(error + '足りません');
//       }
//       asyncBuyApple(change, function(change, error) {
//         if(change !== null) {
//           console.log(change + 'のお釣りです');
//         }else if(error !== null) {
//           console.log(error + '足りません');
//         }
//       });
//     });
//   });
// });
// console.log('500円支払いました');
// var promiseBuyApple = function(payment){
//   return new Promise(function(resolve,reject){
//     if(payment >= 150){
//       resolve(payment-150);
//     }else{
//       reject('金額が足りません');
//     }
//   });
// };
//
//
// promiseBuyApple(100).then(function(change){
//   console.log('お釣りは' + change + '円です');
//   return promiseBuyApple(change);
// }).catch(function(error){
//   console.log('エラーが発生しました' + error);
// });

// var d = new $.Deferred();
//
// async(function() {
//   console.log('async');
//   d.resolve();
// });
//
// d.promise()
// .then(function() {
//   async(function() {
//     console.log('hoge');
//   });
// })
// .then(function() {
//   console.log('fuga');
// });
//
//
// function async(f) {
//   setTimeout(f, 1000);
// }

function delayHello() {
  var d = new $.Deferred;
  setTimeout(function(){
    console.log('Hello');
    d.resolve();
  }, 1000);
  return d.promise();
}

function delayError(){
  var d = new $.Deferred;
  setTimeout(function(){
    d.reject('Error');
  }, 1000);
  return d.promise();
}

function hello1(){
  console.log('Hello sync1');
}
function hello2(){
  console.log('Hello sync2');
}

// var promise = delayHello();
// console.log("promiseの中身"+ promise);
// promise.done(function(){
//   console.log('in promise done');
// });
// promise.fail(function(e){
//   console.log('in promise fail');
// });

// delayHello().then(hello1, hello2);
// delayError().then(hello1, hello2);

// var p1 = delayHello();
// var p2 = p1.then(hello1);
// var p3 = p2.then(hello2);


// console.log(p1);
// console.log(p2);
// console.log(p3);

// delayHello().then(hello1).then(hello1).fail(function(e){
//   console.log(e);
//   console.log('エラーを処理しました');
// });
//delayHello().then(delayHello).then(delayHello).then(delayHello);
// delayError().then(hello1, function(e){
//   console.log(e);
//   console.log('エラーから回復しました');
//   return new $.Deferred().resolve().promise();
// }).then(hello1,hello2);

//$.when(delayHello(),delayError(),delayHello()).fail(hello2);
