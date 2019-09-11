const server = require('./server.js');

const port = proccess.env.PORT || 9000;

server.use(function(req, res) {
  res.status(404).send('<h1>Its working!</h1>');
});

server.listen(port, () => console.log(`Server is running on ${port}`));
