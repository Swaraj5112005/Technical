import Nav from '../components/Nav'
import Footer from '../components/Footer'
import EventCard from '../components/EventCard'

export default function Events(){
  const events = [
    {title:'The Code Construct', date:'2 Oct, DT-702', desc:'AI-based project-building session.'},
    {title:'Buildathon', date:'15 Nov', desc:'24-hour team hackathon.'},
    {title:'Code Storm', date:'Dec', desc:'Competitive programming challenge.'},
  ]
  return (
    <div>
      <Nav />
      <main className="container">
        <h1 style={{marginTop:12}}>Events</h1>
        <p style={{color:'#94a3b8'}}>Attend workshops, hackathons and meetups organised by TCB.</p>
        <div className="cards" style={{marginTop:16}}>
          {events.map((e,i)=>(<EventCard key={i} title={e.title} date={e.date} desc={e.desc}/>))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
