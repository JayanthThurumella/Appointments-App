import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointment, starChange} = props
  const {id, title, date, important} = appointment

  const dateFormat = format(new Date(date.date), 'dd MMMM yyyy, EEEE')

  const changingImportance = () => {
    starChange(id)
  }

  let starImg
  if (important) {
    starImg =
      'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  } else {
    starImg =
      'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  }

  return (
    <li className="appointment-container">
      <div className="title-container">
        <p className="title">{title.title}</p>
        <button type="submit" data-testid="star" className="star">
          <img
            src={starImg}
            className="star"
            onClick={changingImportance}
            alt="star"
          />
        </button>
      </div>
      <p className="date">{dateFormat}</p>
    </li>
  )
}
export default AppointmentItem
