import React from 'react';
import Link from 'next/link';
import Layout from './Layout';

const Footer = () => {
  return (
    <div>
      <footer className='w-full border-t-2 border border-solid  border-dark 
      font-medium text-lg
      '>
        <Layout className='!mt-0  py-8 flex items-center xjustify-between '>
        <span>
            Rights
        </span>
        <Link href="/" >
            Oussama
        </Link>
        <Link href="/" >
            Say hello
        </Link>
        </Layout>
        
      </footer>
    </div>
  )
}

export default Footer
