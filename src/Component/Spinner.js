import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center my-3" >
                <div className="spinner-border text-center" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
        )
    }
}

export default Spinner
