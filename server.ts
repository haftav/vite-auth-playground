require("dotenv").config();

import express from "express";
import { createServer as createViteServer } from "vite";
import fetch, { Headers, Request, Response } from "node-fetch";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import NextAuthHandler from "./server/auth";

if (!globalThis.fetch) {
  // @ts-expect-error
  globalThis.fetch = fetch;
  // @ts-expect-error
  globalThis.Headers = Headers;
  // @ts-expect-error
  globalThis.Request = Request;
  // @ts-expect-error
  globalThis.Response = Response;
}

async function createServer() {
  const app = express();
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.get("/api/auth/*", (req, res) => {
    const nextauth = req.path.split("/");
    nextauth.splice(0, 3);
    req.query.nextauth = nextauth;

    // @ts-expect-error
    NextAuthHandler(req, res);
  });

  app.post("/api/auth/*", (req, res) => {
    const nextauth = req.path.split("/");
    nextauth.splice(0, 3);
    req.query.nextauth = nextauth;

    // @ts-expect-error
    NextAuthHandler(req, res);
  });

  const vite = await createViteServer({
    server: { middlewareMode: "html" },
  });

  app.use(vite.middlewares);

  const port = 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}

createServer();
