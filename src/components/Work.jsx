import React from 'react'
import '../style/work.css'

function Work() {
    return (
        <section className='work'>
            <div className="container">
                <h3>Why work with us</h3>
                <div className="work_grid">
                    <div className='work_card'>
                        <button className='button1'>Lorem ipsum</button>
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className='work_card'>
                        <button className='button2'>Lorem ipsum</button>
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                    <div className='work_card'>
                        <button className='button3'>Lorem ipsum</button>
                        <h4>Lorem Ipsum</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work
