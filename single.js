// @link http://akagisho.hatenablog.com/entry/2017/02/25/232211

var url = 'http://www.yahoo.co.jp';

var page = require('webpage').create();
page.viewportSize = { width: 1335, height: 2000 };
page.clipRect = { top: 0, left: 0, width: 1335, height: 1450 };
page.open(url, function (status) {
    console.log('Status: ' + status);
    if (status === 'success') {
        //console.log(encodeURI(url));
        page.render(url.replace(/\u002f/g, '') + '.png');
        // page.render('hoge.png');
    }
    phantom.exit();
});
