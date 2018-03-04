import install from './install'
import MtaH5 from 'mta-h5-analysis'

const deferred = {}
deferred.promise = new Promise((resolve, reject) => {
	deferred.resolve = resolve
	deferred.reject = reject
})

const statis = {
	_resolve() {
		deferred.resolve()
	},
	_reject() {
		deferred.reject()
	},
	debug() {},
	ready() {
		return deferred.promise
	},
	install,
	traceEvent(evtId,args){
		MtaH5.clickStat(evtId,args)
	}
}

export default statis