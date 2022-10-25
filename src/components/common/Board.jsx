import '../../style/components/common/Board.css'
import React from 'react'

function Board({ view }) {
  return <section className='board'>
    {view}
  </section>
}

export default Board