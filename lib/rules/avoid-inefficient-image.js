/**
 * @fileoverview Avoid inefficient image formats
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
      description: 'Avoid inefficient image formats',
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    messages: {
      AvoidPNG: 'prefer SVG for graphics and WEBP or AVIF for photographs',
      AvoidGIF: 'prefer SVG for graphics and WEBP for animations',
      AvoidICO: 'prefer SVG for icons',
      AvoidJPG: 'prefer WEBP or AVIF for photographs',
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    const inefficientFormats = new Map([
      ['png', 'AvoidPNG'],
      ['gif', 'AvoidGIF'],
      ['ico', 'AvoidICO'],
      ['jpeg', 'AvoidJPG'],
      ['jpg', 'AvoidJPG'],
      ['bmp', 'AvoidJPG'],
      ['tiff', 'AvoidJPG'],
      ['jfif', 'AvoidJPG'],
      ['jfif', 'AvoidJPG'],
      ['pjpeg', 'AvoidJPG'],
      ['pjp', 'AvoidJPG'],
    ])

    return {
      ImportDeclaration(node) {
        const fileFormat = node.source.value.split('.').at(-1)
        const messageId = inefficientFormats.get(fileFormat)
        if (messageId) {
          context.report({ node, messageId })
        }
      },
    }
  },
}
