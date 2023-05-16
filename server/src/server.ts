import fastify from "fastify";
import { PrismaClient } from "@prisma/client";

const app = fastify();
const prisma = new PrismaClient();

// HTTP Method: Get, Post, Put, Patch, Delete

app.get("/users", async () => {
  const users = await prisma.user.findMany;

  return users;
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server runnning on http://localhost:3333");
  });
