koa2-history-api-fallback
=========================
base 'connect-history-api-fallback' for SPA

### Reason
Koa v2.x don't use `yield*`, so 'koa-connect-history-api-fallback' can't adapter for Koa v2.x .   

Adapter for 'connect-history-api-fallback' for use with Koa ^2.0.0.

### Solution

1. use **'koa2-history-api-fallback'**      
2. use **'koa-convert'** convert old middleware ...

### Installation

```
$ npm install --save 'koa2-history-api-fallback'
```

### Example
```
const Koa = require('koa')

const historyFallback = require('koa2-history-api-fallback')

app.use(historyFallback())

app.use('other middleware')

```
