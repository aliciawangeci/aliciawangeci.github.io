import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './p-pic.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Kyle Mathews`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Alicia Wangeci</strong> who works at <a href="http://merglabs.com" target="_blank">Merglabs</a> building useful things.{' '}
          <a href="https://twitter.com/WangeciAlicia" target="_blank">
            You should follow her on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
