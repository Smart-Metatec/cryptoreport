import React from 'react'
import Link from 'next/link'

const Header: React.FC = (): JSX.Element => {
  return (
    <div className='bg-green-500 h-10v text-lg flex justify-between px-5 text-white'>
        <div className='my-auto'>
            <Link href="/" className='text-2xl font-bold'>Crypto Report</Link>
        </div>
        <div className='my-auto'>
            <Link href="/cryptotax">Crypto Tax Calculator</Link>
        </div>
    </div>
  )
}

export default Header