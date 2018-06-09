import React from 'react'
import { connect } from 'react-redux'
import ReactTable from "react-table"
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
    render() {
        return (
        <ReactTable className="-highlight"
            data={this.props.soliders}
            columns={columns}/>
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