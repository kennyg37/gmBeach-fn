import Hero from '@/components/Hero'
import Sections from '@/components/Sections'
import Footer from '@/components/Footer'
import TestimonialsSection from '@/components/TestimonialsSection'

const Home = () => {
  return (
   <div>
     <div>
        <Hero />    
      </div>
      <div>
        <Sections />
      </div>
      <div>
        <TestimonialsSection />
      </div>
      <div>
        <Footer />
      </div>
   </div>
  )
}

export default Home