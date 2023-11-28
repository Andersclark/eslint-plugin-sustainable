/**
 * @fileoverview High accuracy geo location consumes more power and returns result slower
 * @author Anders Clark
 */
'use strict'
const rule = require('../../../lib/rules/avoid-using-accurate-geolocation'),
  RuleTester = require('eslint').RuleTester

const config = {
  env: {
    es6: true,
  },
}

const ruleTester = new RuleTester(config)

const errorMessage = {
  message: 'Avoid high accuracy geolocation',
  type: 'Property',
}

ruleTester.run('avoid-using-accurate-geolocation', rule, {
  valid: [
    {
      code: `const options = { enableHighAccuracy: false, timeout: 5000, maximumAge: 0 }
      function success(pos) {
        console.log(pos.coords);
      }
      function error(err) {
        console.warn(err);
      }
      navigator.geolocation.getCurrentPosition(success, error, options);`,
    },
  ],
  invalid: [
    {
      code: `const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        function success(pos) {
          console.log(pos.coords);
        }

        function error(err) {
          console.warn(err);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);`,
      errors: [errorMessage],
    },
  ],
})
