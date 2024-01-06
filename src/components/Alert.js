import React from 'react'

function Alert(props) {
  return (
    <dir style={{height:'50px'}}>
  {props.alert &&  <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{props.alert.type}</strong>: {props.alert.msg}

</div>
}
</dir>
  )
}

export default Alert
