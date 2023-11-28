/**
 * @fileoverview High accuracy geolocation consumes more power and returns result slower
 * @author Anders Clark
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion', // `problem`, `suggestion`, or `layout`
    docs: {
      description:
        'High accuracy geolocation consumes more power and returns result slower',
      recommended: 'warn',
    },
    messages: {
      AvoidUsingAccurateGeolocation: 'Avoid high accuracy geolocation',
    },
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here
    // any helper functions should go here
    return {
      Property(node) {
        if (
          node.key.name === 'enableHighAccuracy' &&
          node.value.value === true
        ) {
          context.report({ node, messageId: 'AvoidUsingAccurateGeolocation' })
        }
      },
    }
  },
}
