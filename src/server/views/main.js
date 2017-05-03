module.exports = function mainView(req) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="JavaScript Inl 3 -­ Kampanj">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" type="text/css" href="/main.css">
      <title>spelJS</title>
    </head>
    <body>
      <h1>spelJS</h1>
      <div class="gameContainer gameContainer-js">
        <p>Press space or arrow up to jump</p>
        <div class="scoreContainer">Score:<span class="scoreSpan">0</span></div>
        <div class="player"></div>
      </div>

      <div class="login">
        ${!req.isAuthenticated() ?
          '<a href="/login">Logga in</a>' :
          `
            <h1>Hello ${JSON.stringify(req.user.displayName)}!</h1>
            <pre>${JSON.stringify(req.user, null, 2)}</pre>
          `
        }
      </div>

      <script src="/socket.io/socket.io.js"></script>
      <script src="/main.js"></script>
    </body>
    </html>
  `;
};
