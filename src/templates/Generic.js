import React from 'react'

const Generic = ({pageContext}) => {
  return (
    <div>
      <h2>{pageContext.title}</h2>
      <p>{pageContext.description}</p>
    </div>
  )
}

export default Generic
