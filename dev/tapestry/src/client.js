import React from 'react'
import { render } from 'react-dom'
import config from 'tapestry.js'

const Component = config.component

render(
  <Component />,
  document.getElementById('root')
)
