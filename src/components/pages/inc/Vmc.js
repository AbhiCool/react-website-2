import React from 'react'
import VmcCard from './VmcCard'

function Vmc() {
    return (
        <section className="section bg-c-light border-top">
            <div className="container">
                <div className="row">
                    <div className='col-md-12 mb-4 text-center'>
                        <h3 className='main-heading'>Vision, Mission and values</h3>
                        <div className='underline mx-auto'></div>
                    </div>
                    <VmcCard title='Our Vision' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>

                    <VmcCard title='Our Mission' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>

                    <VmcCard title='Our Core Values' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."/>
                </div>
            </div>
        </section>
    )
}

export default Vmc