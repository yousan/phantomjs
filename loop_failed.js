
// var urls = [
//     'http://www.google.com',
//     'http://www.facebook.com'
// ];
//
//
// function process() {
//     if (urls.length == 0) {
//         phantom.exit();
//     } else {
//         //remove the first item of an array
//         url = urls.shift();
//         //open a page
//         page = require('webpage').create();
//
//         //store the requested url in a separate variable
//         var currentUrl = url;
//
//
//         page.open(url, onFinishedLoading);
//
//         page.onNavigationRequested = function(url, type, willNavigate, main) {
//             console.log('\n' + currentUrl + '\nredirecting to \n' + url);
//         }
//
//     }
// }
//
// function onFinishedLoading(status) {
//
//     console.log(status);
//     page.release();
//     process();
// }
//
// process();

// var urls = [
//     'http://kimamahouse.com/',
//     'http://kimamahouse.com/profile'
// ];

// @link http://tips.hecomi.com/entry/20121229/1356785834

var page = require('webpage').create();
page.viewportSize = { width: 1200, height: 2000 };
page.clipRect = { top: 0, left: 0, width: 800, height: 600 };

 var funcs = [
     function(){
         page.open('http://www.yahoo.co.jp');
     },
     function(){
         page.render('1.png');
         page.open('http://www.yahoo.co.jp/profile');
     },
     function(){
         page.render('10.png');
     },
 ];



var recursive = function(i) {
    if(i < funcs.length){
        page.onLoadFinished = function(){recursive(i+1);};
        console.log(i);
        funcs[i]();
    }else{
        phantom.exit();
    }
};

recursive(0);

// urls.forEach(function(el, index, array){
//     console.log(el);
//     page.open('http://www.yahoo.co.jp/', function (status) {
//         console.log('Status: ' + status);
//         if (status === 'success') {
//             page.render('yahoo.png');
//         }
//         // phantom.exit();
//     });
// });
//
