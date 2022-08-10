import React from 'react'

import ServiceCard from './ServiceCard';

function Services() {
    return (
        <section className="section bg-c-light border-top">
            <div className="container">
                <div className="row">
                    <div className='col-md-12 text-center'>
                        <h3 className='main-heading'>Our Services</h3>
                        <div className='underline mx-auto'></div>
                    </div>
                    <ServiceCard title="Service1"/>
                    <ServiceCard title="Service2"/>
                    <ServiceCard title="Service3"/>
                </div>
            </div>
        </section>
    )
}

export default Services