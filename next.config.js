module.exports = {

  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
      {
        source: '/:path*/store/:path*',
        destination: '/home',
        permanent: true
      }
    ]
  },
  env: {
    customKey: 'my-value-with-custom-env-key'
  }
}