import './index.css'
import {v4} from 'uuid'
import {Component} from 'react'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    title: '',
    date: '',
    starred: false,
    allAppointments: [],
  }

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
      appointmentsList: [...prevState.appointmentsList, newAppointment],
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
    this.setState({appointmentsList: changedAppointments})
  }

  starredAppointmentsList = () => {
    const {appointmentsList, starred, allAppointments} = this.state

    if (!starred) {
      const filterAppointmentList = appointmentsList.filter(
        each => each.important === true,
      )

      this.setState({
        allAppointments: appointmentsList,
        appointmentsList: filterAppointmentList,
        starred: true,
      })
    } else {
      this.setState({
        appointmentsList: allAppointments,
        starred: false,
      })
    }
  }

  render() {
    const {appointmentsList, title, date, starred} = this.state

    const starButtonClass = starred ? 'button-on' : ''

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
                <button className="add-button" type="submit">
                  Add
                </button>
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
                className={`starred-button ${starButtonClass}`}
              >
                Starred
              </button>
            </div>
            <ul className="appointments">
              {appointmentsList.map(eachAppointment => (
                <AppointmentItem
                  appointment={eachAppointment}
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
