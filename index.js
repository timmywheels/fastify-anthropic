"use strict";

const fp = require("fastify-plugin");

function fastifyAnthropic(fastify, options, done) {
  done();
}

module.exports = fp(fastifyAnthropic, {
  fastify: "5.x",
  name: "fastify-anthropic",
});

module.exports.default = fastifyAnthropic;
module.exports.fastifyAnthropic = fastifyAnthropic;
