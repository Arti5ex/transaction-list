export const fetchBanks = async () => {
  try {
    fetch('/api/fetch-banks', {method: 'GET'})
      .then(function(response) {
        return response.json();
    })
  } catch (e) {
    console.log(e);
  }
}

export const fetchTransactions = async () => {
  try {
    fetch('/api/fetch-transactions', {method: 'GET'})
      .then(function(response) {
        return response.json();
    })
  } catch (e) {
    console.log(e);
  }
}