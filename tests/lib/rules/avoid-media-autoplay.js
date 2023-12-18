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

const config = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
}

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester(config)
ruleTester.run('avoid-media-autoplay', rule, {
  valid: [
    {
      code: '<video />',
    },
    {
      code: '<video autoplay={false} />',
    },
  ],

  invalid: [
    {
      code: '<video autoplay />',
      errors: [{ message: 'Avoid autoplaying media', type: 'JSXAttribute' }],
    },
    {
      code: '<video autoplay={true} />',
      errors: [{ message: 'Avoid autoplaying media', type: 'JSXAttribute' }],
    },
  ],
})
