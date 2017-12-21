/**
 * Created by 105 on 2017/8/12.
 */
var http = require("http");
var urlParse = require("url");
http.createServer(function (req,res) {
    console.log(urlParse.parse(req.url).path);
    res.end();
}).listen(3000,"localhost");