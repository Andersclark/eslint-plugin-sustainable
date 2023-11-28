/**
 * @fileoverview High accuracy consumes more power and returns result slower
 * @author Anders Clark
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/avoid-using-accurate-geolocation"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("avoid-using-accurate-geolocation", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "enableHighAccuracy: true",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
