# fastify inject testcase

TC for mismatch between behavior of a real running server vs using `app.inject`:
https://github.com/fastify/fastify/issues/3257

To test the behaviour with a real running server run `yarn start` and request a
URL with `curl http://localhost:3000//foo`. The server returns the value of the
`request.url` field.

To run the test suite, that contains a single failing test, run `yarn test`.
