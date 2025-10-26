export default function EventCard({title, date, desc}){
  return (
    <div className="card">
      <h3 style={{marginBottom:8}}>{title}</h3>
      <div style={{fontSize:13,color:'#94a3b8',marginBottom:8}}>{date}</div>
      <p style={{color:'#cbd5e1'}}>{desc}</p>
    </div>
  )
}
