import React from 'react'

function Data({ title, value }) {
  return <div className='data'>
    <h1 id='title'>{title}</h1>
    <h2 id='value'>{value}</h2>
  </div>
}

export default Data