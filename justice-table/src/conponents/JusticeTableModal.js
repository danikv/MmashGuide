import React from 'react'
import { connect } from 'react-redux'
import { editJustice, deleteJustice } from '../actions/JusticeActions'
import {
    Modal,
    Button,
    FormControl
} from 'react-bootstrap'

class AbstractJusticeTableModal extends React.Component
{

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            hours: 0
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

    onEnter() {
        this.setState({
            name: this.props.item.name,
            hours: this.props.item.hours
        })
    }

    edit(event) {
        event.preventDefault()
        this.props.edit({
            name: this.state.name,
            hours: this.state.hours
        })
        this.props.onClose()
    }

    delete(event) {
        event.preventDefault()
        this.props.delete({
            name: this.state.name
        })
        this.props.onClose()
    }

    render() {
        return (
        <Modal show={ this.props.showModal } onEnter={() => this.onEnter()} onHide={() => this.props.onClose()}>
            <Modal.Header closeButton>
                <Modal.Title> Daniel </Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={(event) => this.edit(event)}> Edit </Button>
                <Button onClick={(event) => this.delete(event)}> Delete </Button>
            </Modal.Footer>
        </Modal>
    )}
}

const mapStateToProps = (state, props) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        edit: (justice) => {
            dispatch(editJustice(justice))
        },
        delete: (name) => {
            dispatch(deleteJustice(name))
        }
    }
}

const JusticeTableModal = connect(
    mapStateToProps,
    mapDispatchToProps
)(AbstractJusticeTableModal)

export default JusticeTableModal