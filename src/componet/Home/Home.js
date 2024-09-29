import React from 'react'
import Gotop from '../Gotop/Gotop'

import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
import Nav from '../Nav'
import Footer from '../Footer'






function Home() {
    window.scrollTo({ top: 0, behavior: "instant" })
    return (
        <>        
            <Gotop />
            <Nav />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Footer />
        </>
    )
}

export default Home


