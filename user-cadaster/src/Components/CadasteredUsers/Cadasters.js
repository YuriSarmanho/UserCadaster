import React from 'react'
import './Cadasters.css'

const Cadasters = (props)=>{
    return(
        <div className='cadasters'>
            {`${props.name}: ${props.age} anos de idade`}
        </div>
    )
}
export default Cadasters