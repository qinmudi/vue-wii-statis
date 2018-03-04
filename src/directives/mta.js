import statis from './index'
import { notChanged, isEmpty } from '../utils/utils.js'

export default function(el,binding){
	if(notChanged(binding)||isEmpty(binding)){
		return false
	}

	let args = [],
		evtId = ''
	let events = Object.keys(binding.modifiers).map(modifier => {
		if(binding.modifiers[modifier]){
			return modifier
		}
	})

	let { value } = binding
	if(typeof value === 'object'){
		if(value.evtId) evtId = value.evtId
		if(value.value) args = value.value
	}else if(typeof value === 'string'){
		console.error('暂不支持')
	}

	if(!events.length) events.push('click')

	events.map(event => {
		el.addEventListener(event, () => {
			statis.traceEvent(evtId,args)
		}, false)
	})
}