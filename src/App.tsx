import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import About from '@/components/about'
import Portfolio from '@/components/portfolio'
import ContactMe from '@/components/contactme'
import { useEffect, useState } from 'react'
import { SelectedPage } from '@/shared/enums'

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  useEffect(() => {
    console.log('selectedPage: ' + selectedPage.toString())
  }, [selectedPage])

  return (
    <div>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Hero setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Portfolio setSelectedPage={setSelectedPage} />
      <ContactMe setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App
