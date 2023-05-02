import './index.css'
import {v4} from 'uuid'
import {Component} from 'react'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {appointmentsList: [], title: '', date: ''}

  addTitle = event => {
    this.setState({title: event.target.value})
  }

  addDate = event => {
    this.setState({date: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state

    const newAppointment = {
      id: v4(),
      title: {title},
      date: {date},
      important: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentList, newAppointment],
      title: '',
      date: '',
    }))
  }

  starChange = id => {
    const {appointmentsList} = this.state
    const changedAppointments = appointmentsList.map(each => {
      if (each.id === id) {
        return {...each, important: !each.important}
      }
      return each
    })
    this.setState({appointmentList: changedAppointments})
  }

  starredAppointmentsList = () => {
    const {appointmentList} = this.state

    const filterAppointmentList = appointmentList.filter(
      each => each.important === true,
    )

    this.setState = {appointmentList: filterAppointmentList}
  }

  render() {
    const {appointmentsList, title, date} = this.state
    console.log(title)
    console.log(date)

    return (
      <div className="main-container">
        <div className="appointments-container">
          <div className="add-appointment-container">
            <div className="input-container">
              <h1 className="main-heading">Add Appointment</h1>
              <form className="form" onSubmit={this.addAppointment}>
                <label htmlFor="title">TITLE</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={this.addTitle}
                />
                <label htmlFor="date">DATE</label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={this.addDate}
                />
                <button type="submit">Add</button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr />
          <div className="appointment-list-container">
            <div className="sub-container">
              <h1 className="heading">Appointments</h1>
              <button
                type="submit"
                onClick={this.starredAppointmentsList}
                className="starred-button "
              >
                Starred
              </button>
            </div>
            <ul className="appointments">
              {appointmentsList.map(eachAppointment => (
                <AppointmentItem
                  Appointment={eachAppointment}
                  starChange={this.starChange}
                  key={eachAppointment.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
