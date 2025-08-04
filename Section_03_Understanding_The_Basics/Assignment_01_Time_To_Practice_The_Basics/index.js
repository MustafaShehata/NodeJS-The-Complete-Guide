const http = require("http");

const users = ["User 1", "User 2"];

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Welcome Page</title></head>");
    res.write(
      `<body><h1>Hello, Welcome to My Page</h1><form action="/create-user" method="POST"><input type="text" name="username"/><button type="submit">Send</button></form></body>`
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Users Page</title></head>");
    res.write("<body><ul><h1>Users</h1>");

    users.forEach((user) => {
      res.write(`<li>${user}</li>`);
    });

    res.write("</ul></body>");
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody); // username=whatever-the-user-entered
      const username = parsedBody.split("=")[1];
      users.push(username);
      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    });
  }
});

server.listen(3000);