module.exports = {
  secret: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
  url: process.env.NODE_ENV === 'production' ? process.env.URL : 'http://localhost:3000/'
};
