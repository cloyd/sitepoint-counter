const express = require('express')
const next = require('next')
const bodyParser  = require("body-parser");
const compression = require("compression");
const morgan      = require("morgan");
const Counters    = require("./lib/Counters");

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.use(morgan("combined"));
    server.use(bodyParser.urlencoded({extended: false}));
    server.use(bodyParser.json());
    server.use(compression());
    // => [
    // =>   {id: "asdf", title: "boop",  count: 4},
    // =>   {id: "zxcv", title: "steve", count: 3}
    // => ]
    server.get("/api/v1/counters", function(req, res) {
      res.json(Counters.all())
    });

    // [json] POST {title: "bob"} /api/v1/counters
    // => [
    // =>   {id: "asdf", title: "boop",  count: 4},
    // =>   {id: "zxcv", title: "steve", count: 3},
    // =>   {id: "qwer", title: "bob",   count: 0}
    // => ]
    server.post("/api/v1/counter", function(req, res) {
      res.json(Counters.create(req.body.title));
    })

    // [json] DELETE {id: "asdf"} /api/v1/counter
    // => [
    // =>   {id: "zxcv", title: "steve", count: 3},
    // =>   {id: "qwer", title: "bob",   count: 0}
    // => ]
    server.delete("/api/v1/counter", function(req, res) {
      res.json(Counters.delete(req.body.id));
    });

    // [json] POST {id: "qwer"} /api/v1/counter/inc
    // => [
    // =>   {id: "zxcv", title: "steve", count: 3},
    // =>   {id: "qwer", title: "bob",   count: 1}
    // => ]
    server.post("/api/v1/counter/inc", function(req, res) {
      res.json(Counters.inc(req.body.id));
    });

    // [json] POST {id: "zxcv"} /api/v1/counter/dec
    // => [
    // =>   {id: "zxcv", title: "steve", count: 2},
    // =>   {id: "qwer", title: "bob",   count: 1}
    // => ]
    server.post("/api/v1/counter/dec", function(req, res) {
      res.json(Counters.dec(req.body.id));
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
