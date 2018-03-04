import MtaH5 from 'mta-h5-analysis'
import mta from './mta'

export default function install(Vue, options) {
	if (this.install.installed) return false

	if (options.debug) {
		this.debug = console.log
	} else {
		this.debug = () => {}
	}

	let { sid } = options
	if (!sid) {
		return console.error(`sid is required`)
	}

	MtaH5.init(options)

	Vue.directive('statis', mta)

	Object.defineProperty(Vue.prototype, '$statis', {
		get: () => this
	})

	this.install.installed = true
}