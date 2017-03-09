
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
         page.open('http://kimamahouse.com/');
     },
     function(){
         page.render('1.png');
         page.open('http://kimamahouse.com/profile');
     },
     function(){
         page.render('2.png');
         page.open('http://kimamahouse.com/%E3%83%96%E3%83%AD%E3%82%B0');
     },
     function(){
         page.render('3.png');
         page.open('http://kimamahouse.com/fs/kimamahouse/gr36/nintei');
     },
     function(){
         page.render('4.png');
         page.open('http://kimamahouse.com/archives/12871');
     },
     function(){
         page.render('5.png');
         page.open('http://kimamahouse.com/archives/24839');
     },
     function(){
         page.render('6.png');
         page.open('https://c24.future-shop.jp/fs/kimamahouse/InquiryEdit.html?goods=gd36');
     },
     function(){
         page.render('7.png');
         page.open('http://kimamahouse.com/fs/kimamahouse/c/full');
     },
     function(){
         page.render('8.png');
         page.open('http://kimamahouse.com/fs/kimamahouse/full/hajimete');
     },
     function(){
         page.render('9.png');
         page.open('http://kimamahouse.com/no_page');
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
