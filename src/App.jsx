import React, {useState, useEffect} from 'react'
import { 
    Navbar, HeroSection, CountDownSection, AboutCoupleSection, LoverStorySection,
    EventsSection, PeopleSection, GallerySection, InvitationFormSection, Cursor, Loader
} from './components/index.js'

export const WeddingLanding = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => setIsLoading(false), 3000)

        // clearTimeout(timeout)
    }, [isLoading])
    return (
        <div id='wedding' className='w-full overflow-x-hidden'>
            <Cursor />
            <Loader isLoading={isLoading} />
            {
                !isLoading 
                    ? <div>
                        <Navbar />
                        <HeroSection />
                        <CountDownSection />
                        <AboutCoupleSection />
                        <LoverStorySection />
                        <EventsSection />
                        <PeopleSection />
                        <GallerySection />
                        <InvitationFormSection />
                    </div>
                    : null
            }
        </div>
    )
}