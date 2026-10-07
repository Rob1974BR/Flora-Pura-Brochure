export default function Page() {
  return (
    <main className="cover">
      <img className="cover-photo" src="https://static.wixstatic.com/media/7b3f98_fdb3763794ec4737a2b01fc52f5df875~mv2.jpg/v1/fill/w_1600,h_1066,al_c,q_90/DSC_8133.jpg" alt="Flora Pura rose greenhouse in Kenya" />
      <div className="shade" />

      <div className="brand">
        <div className="brand-logo-window">
          <img className="brand-logo" src="https://static.wixstatic.com/media/7b3f98_a7c5177ea87649da91df48b2c1af0b09~mv2.png/v1/fill/w_600,h_398,al_c,q_90/FloraPura-Brand%20Guidelines_Logo_Neg.png" alt="Flora Pura" />
        </div>
        <div className="brand-location">NAIVASHA · KENYA</div>
      </div>

      <div className="edition">DIGITAL COLLECTION · 2026</div>

      <section className="hero-copy">
        <h1>Premium roses.<br/>Grown with purpose.</h1>
        <p className="intro">A family-owned flower farm in Kenya's Rift Valley, cultivating high-quality blooms with dedication to people, community and sustainable practices.</p>
        <a className="enter" href="#collection">Discover our collection <span>→</span></a>
      </section>

      <footer className="cover-footer"><span>FLORA PURA</span><span>FROM KENYA WITH CARE</span></footer>

      <section id="collection" className="next-section">
        <p className="eyebrow">THE COLLECTION</p>
        <h2>Our roses</h2>
        <p>The Flora Pura assortment and colour filters will be added in the next brochure step.</p>
      </section>
    </main>
  )
}
