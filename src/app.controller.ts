import { Controller, Get, Res } from '@nestjs/common';
import type { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  getRoot(@Res() res: Response) {
    return res.type('html').send(`<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Teslo Shop API</title>
    <style>
      :root { color-scheme: dark; }
      body {
        margin: 0;
        font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica,
          Arial, "Apple Color Emoji", "Segoe UI Emoji";
        background: #0b1020;
        color: #e6e9f2;
      }
      .wrap { max-width: 760px; margin: 0 auto; padding: 64px 20px; }
      .card { border: 1px solid rgba(255,255,255,.12); border-radius: 14px; padding: 24px; background: rgba(255,255,255,.06); }
      a { color: #8ab4ff; }
      code { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.14); padding: 2px 6px; border-radius: 8px; }
    </style>
  </head>
  <body>
    <div class="wrap">
      <div class="card">
        <h1>Teslo Shop Backend</h1>
        <p>El frontend se despliega por separado. Esta URL expone la API.</p>
        <p>Swagger: <a href="/api">/api</a></p>
        <p>Ejemplo: <a href="/api/products">/api/products</a></p>
      </div>
    </div>
  </body>
</html>`);
  }
}

