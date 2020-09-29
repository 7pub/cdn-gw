var express = require('express');
var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var port = process.argv[2] || 8000;
var WHT = '\033[39m';
var RED = '\033[91m';
var GRN = '\033[32m';

http.createServer(function (request, response) {
    var uri = url.parse(request.url).pathname; // The requested URL, like http://localhost:8000/file.html => /file.html
    var filename = path.join(process.cwd(), uri); // get the /file.html from above and then find it from the current folder
    var contentTypesByExtension = { // Setting up MIME-Type (YOU MAY NEED TO ADD MORE HERE) <--------
        '.html': 'text/html',
        '.css':  'text/css',
        '.js':   'text/javascript',
        '.json': 'text/json',
        '.svg':  'image/svg+xml'
    };
    fs.exists(filename, function (exists) {
        if (!exists) {
            console.log(RED + 'FAIL: ' + filename);
            filename = path.join(process.cwd(), '/404.html');
        } else if (fs.statSync(filename).isDirectory()) {
            console.log(GRN + 'FLDR: ' + WHT + filename);
            filename += 'Customizer/index.html';
        }
        fs.readFile(filename, 'binary', function (err, file) {
            console.log(GRN + 'FILE: ' + WHT + filename);
            if (err) {
                response.writeHead(500, {'Content-Type': 'text/plain'});
                response.write(err + '\n');
                response.end();
                return;
            }
            var headers = {};
            var contentType = contentTypesByExtension[path.extname(filename)];
            if (contentType) {
                headers['Content-Type'] = contentType;
            }
            response.writeHead(200, headers);
            response.write(file, 'binary');
            response.end();
        });
    });
}).listen(parseInt(port, 10));

console.log(WHT + 'Static file server running at\n  => http://localhost:' + port + '/\nCTRL + C to shutdown');