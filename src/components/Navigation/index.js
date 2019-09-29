/**
 * @file navigation.js
 * @author Mike Joyce [hello@mikejoyce.io]
 */

import React from 'react'
import { Link } from 'gatsby'

class Navigation extends React.Component {

  render() {
    return (
      <nav>
        <div className="navigation-menu">
          <ul>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="about">
                About
              </Link>
            </li>
            <li>
              <Link to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navigation
