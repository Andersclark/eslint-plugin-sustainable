/**
 * @fileoverview Avoid autoplaying videos
 * @author Anders Clark
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/avoid-media-autoplay'),
  RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester()
ruleTester.run('avoid-video-autoplay', rule, {
  valid: [
    {
      code: '<video />',
      errors: [{ message: 'Fill me in.', type: 'Me too' }],
    },
    {
      code: '<video autoplay={false} />',
      errors: [{ message: 'Fill me in.', type: 'Me too' }],
    },
  ],

  invalid: [
    {
      code: '<video autoplay />',
      errors: [{ message: 'Fill me in.', type: 'Me too' }],
    },
    {
      code: '<video autoplay={true} />',
      errors: [{ message: 'Fill me in.', type: 'Me too' }],
    },
  ],
})
