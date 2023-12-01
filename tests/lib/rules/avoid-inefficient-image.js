/**
 * @fileoverview Avoid inefficient image formats
 * @author Anders Clark
 */
'use strict'

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../../../lib/rules/avoid-inefficient-image'),
  RuleTester = require('eslint').RuleTester

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

//Needed to allow the 'import' keyword in the tests
const options = {
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
}

const ruleTester = new RuleTester(options)
ruleTester.run('avoid-inefficient-image', rule, {
  valid: [
    { code: 'import youNameIt from "../images/151.svg"' },
    { code: 'import youNameIt from "../images/151.webp"' },
    { code: 'import youNameIt from "../images/151.avif"' },
  ],

  invalid: [
    {
      code: 'import youNameIt from "../images/151.png"',
      errors: ['prefer SVG for graphics and WEBP or AVIF for photographs'],
    },
    {
      code: 'import youNameIt from "../images/151.gif"',
      errors: ['prefer SVG for graphics and WEBP for animations'],
    },
    {
      code: 'import youNameIt from "../images/151.jpg"',
      errors: ['prefer WEBP or AVIF for photographs'],
    },
    {
      code: 'import youNameIt from "../images/151.tiff"',
      errors: ['prefer WEBP or AVIF for photographs'],
    },
    {
      code: 'import youNameIt from "../images/151.ico"',
      errors: ['prefer SVG for icons'],
    },
  ],
})
