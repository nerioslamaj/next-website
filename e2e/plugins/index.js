/* eslint-disable arrow-body-style */
// https://docs.cypress.io/guides/guides/plugins-guide.html

// if you need a custom webpack configuration you can uncomment the following import
// and then use the `file:preprocessor` event
// as explained in the cypress docs
// https://docs.cypress.io/api/plugins/preprocessors-api.html#Examples

// /* eslint-disable import/no-extraneous-dependencies, global-require */
// const webpack = require('@cypress/webpack-preprocessor')
const percyHealthCheck = require('@percy/cypress/task')

module.exports = (on, config) => {
  on('task', percyHealthCheck)

  return Object.assign({}, config, {
    fixturesFolder: 'e2e/fixtures',
    integrationFolder: 'e2e/specs',
    supportFile: 'e2e/support/index.js'
  })
}
