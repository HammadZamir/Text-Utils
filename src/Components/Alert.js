import React from 'react'

export default function Alert(props) {

    const toUppercase = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }


  return (
    <div style={{height: '35px'}}>
    {
    props.alert && 
    <div className={`alert alert-${props.alert.type} py-2 alert-dismissible fade show`} role="alert">
        <strong>{toUppercase(props.alert.type)}</strong> {props.alert.msg}
    </div>
    }
    </div>

  )
}
