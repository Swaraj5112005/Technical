import Link from 'next/link'

export default function Nav(){
  return (
    <header className="container">
      <div className="brand">
        <div className="logo">CB</div>
        <div>
          <div style={{fontWeight:700}}>The CodeBreakers</div>
          <div style={{fontSize:12,color:'#94a3b8'}}>Tech Club</div>
        </div>
      </div>
      <nav>
        <ul>
          <li><Link href='/'><a>Home</a></Link></li>
          <li><Link href='/about'><a>About</a></Link></li>
          <li><Link href='/events'><a>Events</a></Link></li>
          <li><Link href='/contact'><a>Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  )
}
