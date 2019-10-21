import React from 'react'

export default ({ children }) => (
  <div
    style={{
      width: '90vw',
      height: '90vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'nowrap',
      flexDirection: 'column',
      alignContent: 'center'
    }}
  >
    {children}
  </div>
)