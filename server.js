const http = require('http');
const url = require('url');
const { getDate } = require('./modules/utils');
const { greetMsg } = require('./lang/en/en');

http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { pathname, query } = parsedUrl;

    res.writeHead(200, {
        'Content-Type':
            'text/html'
    });

    const message = `<h1 style="color: blue;">${greetMsg(query.name)} ${getDate()}</h1>`;

    res.write(message);
    res.end();
}).listen(8888);

console.log("server is running");