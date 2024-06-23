import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import { getDigi, randomDigi } from "./controller/digiController";

const app = new Elysia()
  .use(html())
  .get("/", getDigi)
  .get("/random-digimon", randomDigi)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
