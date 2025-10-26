export default function Footer(){
  return (
    <footer className="container">
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>© {new Date().getFullYear()} The CodeBreakers Club</div>
        <div style={{color:'#94a3b8'}}>Built for TCB Task</div>
      </div>
    </footer>
  )
}
