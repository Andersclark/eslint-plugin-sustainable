/**
 * @fileoverview Avoid autoplaying videos
 * @author Anders Clark
 */
'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Autplaying media loads data that may not be consumed by the user',
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    messages: {
      AvoidAutoplay: 'Avoid autoplaying media',
    },
    fixable: null,
    schema: [],
  },

  create(context) {
    return {
      JSXAttribute(node) {
        if (node.name.name === 'autoplay') {
          if (!node.value) {
            return context.report({ node, messageId: 'AvoidAutoplay' })
          }
          if (node.value.expression.value === true) {
            return context.report({ node, messageId: 'AvoidAutoplay' })
          }
        }
      },
    }
  },
}
