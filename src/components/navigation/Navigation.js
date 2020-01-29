import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export default class Navigation extends Component {

    render() {
        const { names, hrefs } = this.props
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {
                    names.map((name, i) =>
                        <div key={i}>
                            <Link className="nav-link"  to={hrefs[i]} >{name}</Link>
                        </div>
                    )
                }
            </nav>
        )
    }
    
}

