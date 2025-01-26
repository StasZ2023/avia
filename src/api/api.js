const _mainURL = 'https://aviasales-test-api.kata.academy/'

const fetchApi = (url) => {
  return fetch(url).then((res) => res.json())
}

export const setSearchId = () => {
  if (sessionStorage.getItem('searchId')) {
    return sessionStorage.getItem('searchId')
  }

  return fetchApi(`${_mainURL}search`).then(({ searchId }) => {
    sessionStorage.setItem('searchId', searchId)
    return searchId
  })
}

export const getTickets = async () => {
  const searchId = await setSearchId()

  const response = await fetchApi(`${_mainURL}tickets?searchId=${searchId}`)
  if (response.stop) sessionStorage.removeItem('searchId')

  return response
}
