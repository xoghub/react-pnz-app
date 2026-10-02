import React from 'react'

type Props = {
  items: { name: string; message: string }[]
}

export default function TaskList({ items }: Props) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>{item.message}</p>
        </div>
      ))}
    </div>
  )
}