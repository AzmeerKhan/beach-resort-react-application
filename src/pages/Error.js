import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

function Error() {
    return (
        <Hero>
            <Banner title="our rooms">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
    )
}

export default Error
