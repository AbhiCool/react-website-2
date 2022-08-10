import React from 'react'

function VmcCard({title, description}) {
    return (
        <div className='col-md-4 text-center'>
            <h6>{title}</h6>
            <p>
                {description}
            </p>
        </div>
    )
}

export default VmcCard