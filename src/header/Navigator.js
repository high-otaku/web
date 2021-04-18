import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import './sass/Navigator.scss'

import { Switch } from 'antd'

import SearchBar from './SearchBar.js'
import Logo from './Logo.js'

class Navigator extends Component {
  render () {
    const val = []
    const { sections, searchFunction, themeSwitchFunction, location: { pathname } } = this.props
    const selected = pathname.split('/')[1]

    for (const { path, title } of Object.values(sections)) {
      val.push(
        <li key={`/${path}`}>
          <div className={path === selected ? 'selected' : ''}>
            <Link to={`/${path}`}> {title} </Link>
          </div>
        </li>
      )
    }

    return (
      <div className='navigator'>

        <div className='menu'>
          <ul>
            {val}
          </ul>
        </div>

        <div className='theme-switch'>
          <Switch
            checkedChildren='լույս'
            unCheckedChildren='մութ'
            onChange={(isLight) => themeSwitchFunction(isLight ? 'light' : 'dark')}
            defaultChecked
          />
        </div>

        <div className='right-pane'>
          <div className='searchbar'>
            <SearchBar
              show={pathname === '/anime' || pathname === '/manga'}
              searchFunction={searchFunction}
            />
          </div>
          <div className='logo'>
            <Logo />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navigator)
