import Navbar from '@/components/ui/navigation/navbar'
import { ReactNode } from 'react'

const RootLayout = ({ children} : { children: ReactNode}) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  )
}

export default RootLayout