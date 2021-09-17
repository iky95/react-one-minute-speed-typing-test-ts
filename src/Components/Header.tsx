import React, { memo } from 'react'

const DarkIcon = () => {
  return (
    <svg
      focusable='false'
      viewBox='0 0 24 24'
      aria-hidden='true'
      height='34'
      width='34'
      fill='#333'
    >
      <path d='M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49zM12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z' />
    </svg>
  )
}
const LightIcon = () => {
  return (
    <svg
      focusable='false'
      viewBox='0 0 24 24'
      aria-hidden='true'
      height='34'
      width='34'
      fill='#eee'
    >
      <path d='M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z' />
    </svg>
  )
}

interface Props {
  handleThemeMode: () => void
  darkMode: boolean
}

function Header({ handleThemeMode, darkMode }: Props) {
  return (
    <header
      className={`navbar navbar-expand-md fixed-top shadow-sm ${
        darkMode ? 'bg-light navbar-light' : 'bg-dark navbar-dark'
      }`}
    >
      <nav className='container flex-wrap flex-md-nowrap'>
        <a className='navbar-brand' href='/'>
          <span className='fw-bold'>Typing</span>Speed Test
        </a>
        <ul className='navbar-nav flex-row flex-wrap ms-md-auto'>
          <li className='nav-item col-6 col-md-auto me-3'>
            <a
              className='nav-link p-2'
              href='https://github.com/awran5/react-one-minute-speed-typing-test-ts'
              target='_blank'
              rel='noopener noreferrer'
            >
              <svg
                focusable='false'
                viewBox='0 0 24 24'
                aria-hidden='true'
                height='30'
                width='30'
                fill={darkMode ? '#333' : '#eee'}
              >
                <path d='M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27' />
              </svg>
            </a>
          </li>
          <li className='nav-item col-6 col-md-auto'>
            <span
              className='nav-link p-2'
              aria-hidden='true'
              style={{ cursor: 'pointer' }}
              onClick={handleThemeMode}
            >
              {darkMode ? <DarkIcon /> : <LightIcon />}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default memo(Header)
