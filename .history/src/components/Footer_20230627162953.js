import React from 'react';
import Link from 'next/link';
import Layout from './Layout';

const Footer = () => {
  return (
    <div>
      <footer className='w-full border-t-2 border border-solid  border-dark 
      font-medium text-lg
      '>
        <Layout className=' py-8 flex items-center justify-between '>
        <span>
            2023 All rights reserved. 
        </span>
        <div>
            <p  >
                Built with &#10084; by Oussama Abderraouf ATTIA
             </Link>
        </div>
        
        </Layout>
        
      </footer>
    </div>
  )
}

export default Footer
