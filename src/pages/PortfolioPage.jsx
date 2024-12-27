import React from 'react'
import Menu from '../components/New/Menu'
import ProjectHero from '../components/ProjectHero'
import Work from '../components/New/Work'
import WorkContact from '../components/New/WorkContact'
import Contacts from '../components/New/Contacts'
import Footer from '../components/New/Footer'

const PortfolioPage = () => {
    return (
        <>
            <header>
                <Menu />
                <ProjectHero />
            </header>
            <Work />
            <Contacts />
            <Footer />
            
        </>

    )
}

export default PortfolioPage