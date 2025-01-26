import React from 'react'
import { addMinutes, format } from 'date-fns'

import styles from './Ticket.module.css'

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.coast}>{price.toLocaleString()} Р</span>
        <img className={styles.logo} src={`//pics.avs.io/99/36/${carrier}.png`} alt="Логотип авиакомпании." />
      </div>
      <TicketInfo info={segments[0]} />
      <TicketInfo info={segments[1]} />
    </div>
  )
}

const TicketInfo = ({ info }) => {
  const { origin, destination, stops, date, duration } = info
  const stopsText = (value) => {
    if (value === 0) return 'Без пересадок'
    if (value === 1) return `${value} пересадка`
    if (value >= 2 && value <= 4) return `${value} пересадки`
    if (value >= 5) return `${value} пересадок`
  }

  const m = duration % 60
  const h = (duration - m) / 60
  const flightTime = `${h}Ч ${m}М`

  const departureTime = format(date, 'HH.mm')
  const arrivalTime = format(addMinutes(date, duration), 'HH.mm')

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            {origin} – {destination}
          </th>
          <th>В пути</th>
          <th>{stopsText(stops.length)}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {departureTime} – {arrivalTime}
          </td>
          <td>{flightTime}</td>
          <td>{stops.length > 0 ? `${stops.join(', ')}` : ''}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Ticket
