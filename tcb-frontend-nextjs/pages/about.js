import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div>
      <Nav />
      <main className="container">
        <h1 style={{marginTop:12}}>About The CodeBreakers Club</h1>
        <p style={{color:'#94a3b8',marginTop:8}}>We are a student-run tech community focused on learning, building and sharing knowledge. Our mission is to make technology accessible and fun for all students.</p>

        <section style={{marginTop:18}}>
          <h2>Vision & Mission</h2>
          <div className="cards" style={{marginTop:12}}>
            <div className="card"><h3>Learn</h3><p style={{color:'#94a3b8'}}>Hands-on workshops & mentorship.</p></div>
            <div className="card"><h3>Build</h3><p style={{color:'#94a3b8'}}>Project-driven events and hackathons.</p></div>
            <div className="card"><h3>Share</h3><p style={{color:'#94a3b8'}}>Community showcases and talks.</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
