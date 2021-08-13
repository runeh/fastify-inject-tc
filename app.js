const fastify = require("fastify");

const app = fastify({
  logger: true,
});

app.get("*", function (request, reply) {
  reply.send({ url: request.url });
});

module.exports = app;
