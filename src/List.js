import React from 'react'
import Paragraph from './Paragraph'

const List = ({
  items = [
    { id: 1, body: 'Shopping' },
    { id: 2, body: 'Exercise' },
    { id: 3, body: 'Cook' },
  ],
}) => {
  if (items.length === 0) {
    return <Paragraph>This list is empty</Paragraph>
  }
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className='item'>
          {item.body}
        </div>
      ))}
    </div>
  )
}

export default List
