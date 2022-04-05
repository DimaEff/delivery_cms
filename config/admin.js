module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e8744e4a6acb3ea6228a2c5fcb8b3c7d'),
  },
});
