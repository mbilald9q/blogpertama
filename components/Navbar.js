import { useState } from 'react';
import Container from '@components/Container';
import Link from 'next/link';

export default function Navbar () {
  const [dropdown, setDropdown] = useState(false);
  const [offcanvas, setOffcanvas] = useState(false);
  const [search, setSearch] = useState(false);
  const dropdownList = [
    { text :'Internet', href: '#'},
    { text :'Books', href: '#'},
    { text :'Open', href: '#'},
  ]; 

return (
<nav className="py-10">
      <Container>
        <div className="flex items-center">
          <div className="w-3/12 lg:hidden">
            <button onClick={() => setOffcanvas( !offcanvas) }>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                <path d="M3 12H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 6H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 18H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
            </button>
          </div>
        <div className="lg:w-2/12 w-6/12">
          <Link href="/">
            <a class=" flex items-center justify-center lg:justify-start mr-10" >
              <div className="w-10 h-10 bg-gray-500 rounded flex items-center justify-center mr-4 shadow-2xl">
                B     
              </div>
               BlogBilal
            </a>
          </Link>
        </div>
          <div className="w-3/12 lg:hidden text-right">
            <button onClick={() => setSearch (!search)}>
              <svg className="inline-block" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
            </button>       
          </div>  
        <div className={`p-10 lg:w-7/12 w-full bg-gradient-to-b from-gray-600 to-gray-900 lg:bg-none lg:static fixed top-0 left-0 h-full lg:h-auto lg:p-0 transition-all   
        ${offcanvas ? 'left-0' :'-left-full'}`}>
          <ul className="lg:space-x-10 flex lg:items-center flex-col lg:flex-row space-y-4 lg:space-y-0">
            <button className="absolute top-10 right-10 lg:hidden"
            onClick={() => setOffcanvas(false) }
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            </button>
            <li><Link href="/posts"><a className="hover:underline">UI Design</a></Link></li>
            <li><Link href="/posts"><a className="hover:underline">Front-End</a></Link></li>
            <li><Link href="/posts"><a className="hover:underline">Back-End</a></Link></li>
            <li className="relative">
              <a 
              className="hover:underline cursor-pointer flex items-center"
              onClick={() => setDropdown(!dropdown)}
              >
                Lainnya
                <svg className="ml-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6L8 10L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              {dropdown && (
              <ul className="absolute w-[200px] bg-gray-800 shadow-2xl mt-2">
                  {dropdownList.map(({ text, href }) => (
                  <li key={text} className="border-b border-white/5 hover:bg-gray-700/60 last:border-0">
                    <a href="{href}" className="flex py-3 px-6">
                      {text}
                    </a>
                  </li> 
                  ))}
              </ul>
              )}
            </li>
          </ul>
        </div>
        <div className={`lg:w-3/12 absolute lg:static w-full left-0 px-10 lg:px-0 transition-all ${search ? 'top-10' : '-top-40'} `}>
            <button className="absolute top-2 right-12 text-white/50 lg:hidden"
                onClick={() => setSearch(false) }
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x-circle"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
            </button>
            <input className="bg-gray-700 py-2 px-6 w-full lg:rounded-full rounded-lg bg-search pl-12" placeholder="Search ..." />
        </div>
        </div>
        </Container>
    </nav>
 );
}