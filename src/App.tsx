import {useState, useEffect} from 'react'
import { 
    Navbar, HeroSection, CountDownSection, AboutCoupleSection, LoverStorySection,
    EventsSection, PeopleSection, GallerySection, InvitationFormSection, Cursor, Loader
} from './components/index.ts'

const App = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 3000)
    }, [isLoading])
    return (
        <div id='wedding' data-testid="wedding" className='w-full overflow-x-hidden'>
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

export default App;


