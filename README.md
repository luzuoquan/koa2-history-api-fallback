koa2-history-api-callback
=========================
base 'connect-history-api-fallback' for SPA

### Reason
Koa v2.x don't use `yield*`, so![koa-connect-history-api-fallback](https://github.com/davezuko/koa-connect-history-api-fallback) can't adapter for Koa v2.x .

### Solution
1.use **'koa2-history-api-callback'**
2.use **'koa-convert'** convert old middleware ...

### Installation

```
$ npm install --save 'koa2-history-api-callback'
```

### Example
```
const Koa = require('koa')

const historyFallback = require('koa2-history-api-callback')

app.use(historyFallback())

app.use('other middleware')

```
