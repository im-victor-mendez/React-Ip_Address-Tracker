import '../../style/components/common/Board.css'
import React from 'react'

function Board({ id, view }) {
  return <section id={id} className='board'>
    {view}
  </section>
}

export default Board