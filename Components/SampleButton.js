import React from 'react'

function SampleButton(props) {
  return (
    <div>
      <button style={{backgroundColor:props.clr}}>{props.userName}</button>
    </div>
  )
}
export default SampleButton;
