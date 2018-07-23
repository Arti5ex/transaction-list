export function fetchTransaction () {
  return {type: 'TRANSACTION_FETCH', _: ''}
}

export function removeTransaction(transitionId) {
  return { type: 'TRANSACTION_DELETE', data: transitionId }
}

export function addTransaction(transition) {
  return { type: 'TRANSACTION_ADD', data: transition }
}