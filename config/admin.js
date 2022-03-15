module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '88738d1ebf183a8f7a36dce532f8de1a'),
    url: '/dashboard',
  },
});
