module.exports = {
  apps: [
    {
      name: 'atmosfera',
      script: './server.js',
      env: {
        NODE_ENV: 'production'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}


