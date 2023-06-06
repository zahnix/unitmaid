"use client"

import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from '@/components/Head'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Head/>
      </head>
      <body>
        <ChakraProvider>
          <Navbar/>
          {children}
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  )
}
