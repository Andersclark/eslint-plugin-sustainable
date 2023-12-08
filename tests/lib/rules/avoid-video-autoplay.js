/**
 * @fileoverview Avoid autoplaying videos
 * @author Anders Clark
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/avoid-video-autoplay"),
  RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("avoid-video-autoplay", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "<video autoplay />",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
