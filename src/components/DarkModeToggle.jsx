import React from 'react'

const DarkModeToggle = ({toggle, darkMode}) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={toggle}> {/* TODO: Update this text from Dark to Light dynamically */}
    {darkMode? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
