// const port = process.env.PORT || 3000
 
// console.log(`Launching Bun HTTP server on port: ${port}, url: http://0.0.0.0:${port} 🚀`)
 
// Bun.serve({
//   port: port,
//   fetch(_request) {
//     return new Response('Hello from Koyeb')
//   },
// })

import {Hono} from 'hono';
import { logger } from 'hono/logger';
// import { expensesHono } from './routes/expenses';

// import { serveStatic } from 'hono/bun';

const app = new Hono();

app.use('*', logger());

app.get("/test", (c) => {
    return c.json({message: "balls!"})
})


// app.route("/api/expenses", expensesHono)

// app.get('/*', serveStatic({ root: './frontend/dist' }))
// app.get('/*', serveStatic({ root: './frontend/dist/index.html' }))

export default app;