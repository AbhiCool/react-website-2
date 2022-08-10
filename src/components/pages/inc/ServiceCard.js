import React from 'react'

import { Link } from 'react-router-dom'
import Service1 from '../../images/img1.jpg';

function ServiceCard({title}) {
    return (
        <div className='col-md-4 mt-4'>
            <div className="card shadow">
                <img src={Service1} className="w-100 border-bottom" alt="Services" />
                <div className="card-body">
                    <h6>{title}</h6>
                    <div className="underline"></div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Link to="/services" className='btn btn-link'>read more</Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard