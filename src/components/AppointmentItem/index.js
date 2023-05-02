import './index.css'

const AppointmentItem = props => {
  const {Appointment, starChange} = props
  const {id, title, date, important} = Appointment

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
        <h1 className="title">{title}</h1>
        <img src={starImg} onClick={changingImportance} alt="star-img" />
      </div>
      <p className="date">{date}</p>
    </li>
  )
}
export default AppointmentItem
