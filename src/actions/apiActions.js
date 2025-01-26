import { getTickets } from '../api/api'

const getTicketsAC = (payload) => ({ type: 'getTickets', payload })
const toggleErrorAC = (payload) => ({ type: 'error', payload })
const toggleLoadingAC = (payload) => ({ type: 'loading', payload })

export const getTicketsTC = () => (dispatch) => {
  return getTickets()
    .then((res) => {
      dispatch(toggleErrorAC(false))
      dispatch(getTicketsAC(res.tickets))
      dispatch(toggleLoadingAC(false))
    })
    .catch(() => {
      dispatch(toggleErrorAC(true))
      dispatch(toggleLoadingAC(false))
    })
}
