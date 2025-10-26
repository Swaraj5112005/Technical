import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'',email:'',message:''})
  const submit = (e)=>{e.preventDefault(); alert('Thanks! Message sent (mock).')}

  return (
    <div>
      <Nav />
      <main className="container">
        <h1 style={{marginTop:12}}>Contact</h1>
        <p style={{color:'#94a3b8'}}>Reach out for collaborations, events or queries.</p>
        <form onSubmit={submit} style={{maxWidth:560,marginTop:14}}>
          <label style={{display:'block',marginBottom:8}}>Name</label>
          <input required value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} style={{width:'100%',padding:10,borderRadius:8,background:'#071125',border:'1px solid rgba(255,255,255,0.03)',color:'#e6eef8'}} />
          <label style={{display:'block',marginTop:12,marginBottom:8}}>Email</label>
          <input required value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} style={{width:'100%',padding:10,borderRadius:8,background:'#071125',border:'1px solid rgba(255,255,255,0.03)',color:'#e6eef8'}} />
          <label style={{display:'block',marginTop:12,marginBottom:8}}>Message</label>
          <textarea required value={form.message} onChange={(e)=>setForm({...form,message:e.target.value})} style={{width:'100%',padding:10,borderRadius:8,background:'#071125',border:'1px solid rgba(255,255,255,0.03)',color:'#e6eef8'}} />
          <div style={{marginTop:12}}><button className="btn" type="submit">Send Message</button></div>
        </form>
      </main>
      <Footer />
    </div>
  )
}
