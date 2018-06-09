import React from 'react'
import { connect } from 'react-redux'
import ReactTable from "react-table"
import JusticeTableModal from './JusticeTableModal'
import "react-table/react-table.css"

const columns = [{
        Header: 'Name',
        accessor: 'name'
    },{
        id: 'hours',
        Header: 'Hours',
        accessor: 'hours'
}]

class AbstractJusticeTable extends React.Component
{

    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            clickedElement: {
            }
        }
    }

    show(element) {
        this.setState({
            clickedElement: element,
            showModal: true
        })
    }

    close() {
        this.setState({
            ...this.state,
            showModal: false
        })
    }

    render() {
        return (
        <div>
            <JusticeTableModal showModal={this.state.showModal} onClose={() => this.close()} item={this.state.clickedElement}/>
            <ReactTable className="-highlight"
                data={this.props.soliders}
                columns={columns}
                getTdProps={(state, rowInfo, column, instance) => {
                    return {
                    onClick: (e, handleOriginal) => {
                        this.show(rowInfo.original)
                    }}
                }}    
            >
            </ReactTable>
        </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        soliders: state.justiceReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const JusticeTable = connect(
    mapStateToProps,
    mapDispatchToProps
)(AbstractJusticeTable)

export default JusticeTable