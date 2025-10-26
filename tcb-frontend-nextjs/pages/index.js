import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div>
      <Nav />
      <main className="container">
        <section className="hero">
          <div className="left">
            <h1>The CodeBreakers Club — Build. Learn. Share.</h1>
            <p>Join workshops, hackathons and tech talks. Empower your coding journey with hands-on projects and community events.</p>
            <div style={{display:'flex',gap:12}}>
              <a className="btn" href="/events">Explore Events</a>
              <a style={{alignSelf:'center',color:'#94a3b8'}} href="/about">Learn more →</a>
            </div>
          </div>
          <div className="right" style={{width:360}}>
            <div style={{background:'rgba(255,255,255,0.02)',padding:18,borderRadius:12}}>
              <h3 style={{marginBottom:6}}>Upcoming</h3>
              <div className="cards">
                <div className="card"><strong>Code Construct</strong><div style={{fontSize:13,color:'#94a3b8'}}>2 Oct · DT-702</div></div>
                <div className="card"><strong>Buildathon</strong><div style={{fontSize:13,color:'#94a3b8'}}>15 Nov · Online</div></div>
              </div>
            </div>
          </div>
        </section>

        <section style={{marginTop:36}}>
          <h2>What we do</h2>
          <div className="cards" style={{marginTop:12}}>
            <div className="card"><h3>Workshops</h3><p style={{color:'#94a3b8'}}>Practical sessions on web, ML and system design.</p></div>
            <div className="card"><h3>Hackathons</h3><p style={{color:'#94a3b8'}}>Collaborative coding events to build real projects.</p></div>
            <div className="card"><h3>Competitions</h3><p style={{color:'#94a3b8'}}>Competitive programming and problem-solving contests.</p></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
