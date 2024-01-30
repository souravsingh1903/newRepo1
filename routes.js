const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
  const method = req.method;
  if (url === '/') {
    // Read the last message from the file
    let lastMessage = '';
    try {
      const messages = fs.readFileSync('message.txt', 'utf8').split('\n').filter(Boolean);
      if (messages.length > 0) {
        lastMessage = messages[messages.length - 1];
      }
    } catch (err) {
      console.error('Error reading file:', err);
    }

    res.write('<html>');
    res.write('<head><title>Enter message</title></head>');
    res.write('<body>');
    
    // Display the last message at the top of the form
    if (lastMessage) {

      res.write(`<p>${lastMessage}</p>`);
    }

    // Display the form for entering a new message
    res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>');
    
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    return req.on('end', () => {
      const parseBody = Buffer.concat(body).toString();
      const msg = parseBody.split('=')[1];

      // Overwrite the entire file with the new message
      try {
        fs.writeFileSync('message.txt', msg + '\n', 'utf8');
        console.log('Message saved to message.txt:', msg);
      } catch (err) {
        console.error('Error writing to file:', err);
      }

      // Redirect to the home page
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });
  }

  res.setHeader('Content-type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from Node.js server!</h1></body>');
  res.write('</html>');
  res.end();
}


module.exports = requestHandler;


//  module.exports = {
//     handler :  requestHandler;
//     someText : Some text;
// }
// npm install nodemon --save this would install as a production dependency.
// --save-dev used for development 