import deepEqual from 'deep-equal'

export function notChanged(binding) {
	if (binding.oldValue !== undefined) {
		if (typeof binding.value === 'object') {
			return deepEqual(binding.value, binding.oldValue)
		} else {
			return binding.value === binding.oldValue
		}
	} else {
		return false
	}
}

export function isEmpty(binding){
	return binding.value === '' || binding.value === undefined || binding.value === null
}