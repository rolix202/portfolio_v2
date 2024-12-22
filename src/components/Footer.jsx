import React from 'react'

const Footer = () => {
  return (
    <section className='py-10'>
        <div className='max-w-6xl mx-auto px-6 flex justify-between'>
            <p>© {" "}{new Date().getFullYear()}, Roland.</p>
            <div>
                <ul className='flex gap-4'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Work</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </div>
            
        </div>
    </section>
  )
}

export default Footer