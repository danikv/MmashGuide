import React from 'react'
import { connect } from 'react-redux'
import {
    FormControl,
    FormGroup,
    Button,
    ControlLabel
} from 'react-bootstrap'
import { addJustice } from '../actions/JusticeActions'

class AddJusticeForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "",
            hours : 0
        }
    }

    nameChange(event) {
        event.preventDefault()
        this.setState({
            ...this.state,
            name : event.target.value,            
        })
    }

    hoursChange(event) {
      event.preventDefault()
      this.setState({
          ...this.state,
          hours : event.target.value,            
      })
  }

    handleSubmit(event) {
      event.preventDefault()
      this.props.add({
        name: this.state.name,
        hours: this.state.hours
      })
    }

    render() {
      return (
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <FormGroup 
          controlId="formBasicText"
        >
          <ControlLabel>Serve Justice</ControlLabel>
          <FormControl
            type="text"
            value={this.state.name}
            placeholder="Name"
            onChange={(event) => this.nameChange(event)}
          />
          <FormControl
            type="number"
            value={this.state.hours}
            placeholder="hours"
            onChange={(event) => this.hoursChange(event)}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button type="submit" onClick={(event) => this.handleSubmit(event)}>Serve</Button>
      </form>
      )}
    }


    const mapStateToProps = (state, props) => {
      return {
      }
    }
  
  const mapDispatchToProps = (dispatch) => {
      return {
          add: (justice) => {
              dispatch(addJustice(justice))
          }
      }
    }

const AddJustice = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddJusticeForm)

export default AddJustice