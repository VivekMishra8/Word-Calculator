import React from 'react'

export default function Alert(props) {
  return (
    props.alert &&<div className="container">
      <div className="alert alert-primary" role="alert">
        <strong>{props.alert.message}</strong>: {props.alert.type}
      </div>
    </div>
  )
}
