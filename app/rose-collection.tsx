'use client'
import { useMemo, useState } from 'react'

export type Rose = { number: number; variety: string; colour: string; thorns: string; profile: string; length: string; dominantLength: string; headsize: string; packing?: {length: string; quantity: string}[]; photo?: string }
const colourGroup = (colour: string) => {
  const c = colour.toLowerCase()
  if (c.includes('bi ') || c.includes('bi colour')) return 'Bicolour'
  if (c.includes('pink')) return 'Pink'
  if (c.includes('white')) return 'White'
  if (c.includes('red')) return 'Red'
  if (c.includes('orange') || c.includes('peach')) return 'Orange & Peach'
  if (c.includes('yellow')) return 'Yellow'
  if (c.includes('lavender')) return 'Lavender'
  if (c.includes('green')) return 'Green'
  return 'Other'
}
const groups = ['All roses','Bicolour','Pink','White','Red','Orange & Peach','Yellow','Lavender','Green']
export default function RoseCollection({ roses }: { roses: Rose[] }) {
  const [group, setGroup] = useState('All roses')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<Rose | null>(null)
  const filtered = useMemo(() => roses.filter(r => (group === 'All roses' || colourGroup(r.colour) === group) && (r.variety + ' ' + r.colour).toLowerCase().includes(query.toLowerCase())).sort((a,b) => a.variety.localeCompare(b.variety)),[roses,group,query])
  return <section id="collection" className="fp-collection">
    <div className="fp-collection-head">
      <p className="fp-kicker">FLORAPURA · DIGITAL COLLECTION 2026</p>
      <h2>Our Collection</h2>
      <p className="fp-collection-intro">Explore our selection of premium roses, grown with care in Kenya.</p>
      <div className="fp-tools">
        <div className="fp-filters" aria-label="Filter roses by colour">
          {groups.map(g => <button type="button" key={g} className={g === group ? 'fp-filter active' : 'fp-filter'} onClick={() => setGroup(g)}>{g}</button>)}
        </div>
        <label className="fp-search"><span className="sr-only">Search varieties</span><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search varieties..." /></label>
      </div>
      <div className="fp-count">{filtered.length} {filtered.length === 1 ? 'variety' : 'varieties'}</div>
    </div>
    <div className="fp-grid">
      {filtered.map(r => <button key={r.variety} type="button" className="fp-card" onClick={() => setSelected(r)} aria-label={'View details for '+r.variety}>
        <div className="fp-photo-placeholder"><span className="fp-photo-mark">FLORAPURA</span><span className="fp-photo-pending">PHOTO COMING SOON</span>{r.photo && <img className="fp-rose-photo" src={r.photo} alt={r.variety} onError={e => { e.currentTarget.style.display = "none" }} />}</div>
        <div className="fp-card-body"><span className="fp-card-colour">{r.colour}</span><h3>{r.variety}</h3><p>Length {r.length} cm <span aria-hidden="true">↗</span></p></div>
      </button>)}
    </div>
    {filtered.length === 0 && <p className="fp-empty">No varieties match your search.</p>}
    {selected && <div className="fp-modal-backdrop" onClick={() => setSelected(null)}>
      <div className="fp-modal" role="dialog" aria-modal="true" aria-label={selected.variety+' details'} onClick={e=>e.stopPropagation()}>
        <button className="fp-close" type="button" onClick={()=>setSelected(null)} aria-label="Close details">×</button>
        <div className="fp-modal-placeholder">FLORAPURA<br/><small>PHOTO COMING SOON</small>{selected.photo && <img className="fp-rose-photo" src={selected.photo} alt={selected.variety} onError={e => { e.currentTarget.style.display = "none" }} />}</div>
        <div className="fp-modal-content fp-detail-content"><div className="fp-detail-heading"><h2>{selected.variety}</h2><span>VIEW DETAILS</span></div><div className="fp-detail-accent" />
          <dl className="fp-detail-specs">
            <div><dt>COLOUR</dt><dd>{selected.colour}</dd></div>
            <div><dt>STEM LENGTH</dt><dd>{selected.length} cm</dd></div>
            <div><dt>DOMINANT LENGTH</dt><dd>{selected.dominantLength} cm</dd></div>
            <div><dt>HEAD SIZE</dt><dd>{selected.headsize.replace(/\s*cm\s*$/i, '').trim()} cm</dd></div>
            <div><dt>THORNS</dt><dd>{selected.thorns}</dd></div>
            <div><dt>PROFILE</dt><dd>{selected.profile}</dd></div>
          </dl>
          <div className="fp-packing"><div className="fp-packing-title">APPROX. PACKING / BOX</div>
            {selected.packing?.length ? <div className="fp-packing-grid">{selected.packing.map((p,i)=><div key={i}><strong>{p.length} CM</strong><span>{p.quantity}</span></div>)}</div> : <p className="fp-packing-pending">Packing rates to be added from FloraPura packing list.</p>}
          </div>
          <button className="fp-back" onClick={()=>setSelected(null)} type="button">← Back to collection</button>
        </div>
      </div>
    </div>}
  </section>
}
