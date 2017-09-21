#!/usr/bin/env node

const execa = require('execa')

function rebuildNodeSass() {
	console.log('rebuilding node-sass')
	return execa('npm', ['rebuild', 'node-sass'])
	  .catch(e => {
	  	console.error('Could not rebuild node-sass')
	  	console.error(e.message)
	  	process.exit(-1)
	  })
}

execa('node-sass', ['--version'])
  .catch(rebuildNodeSass)