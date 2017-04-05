'use strict'

const url = require('url')

function evaluateRewriteRule(parsedUrl, match, rule) {
	if(typeof rule === 'string') {
		return rule
	}else if(typeof rule !== 'function') {
		throw new Error('Rewrite rule can only be of type string of function.')
	}
	return rule({
		parsedUrl: parsedUrl,
		match: match
	})
}

function acceptsHtml(header) {
	return header.indexOf('text/html') !== -1 || header.indexOf('*/*') !== -1
}

module.exports = async function koa2FallbackApiMiddleware(options) {

}