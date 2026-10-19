import './sustainability-export.css'

const ImageBlock = ({src,alt}:{src:string,alt:string}) => <img className="fp-new-photo" src={src} alt={alt} loading="lazy" />

export default function SustainabilityAndExport(){return <>
<section id="sustainability" className="fp-new-page fp-sustainability" aria-label="Sustainability and Social Responsibility">
  <div className="fp-new-wrap">
    <p className="fp-new-kicker">FLORAPURA · KENYA</p>
    <h2>SUSTAINABILITY &amp;<br/> SOCIAL RESPONSIBILITY</h2>
    <div className="fp-sustainability-feature">
      <div className="fp-sustainability-media"><ImageBlock src="/sustainability/people.webp" alt="FloraPura team member caring for roses"/></div>
      <div className="fp-sustainability-copy"><h3>Growing with Responsibility</h3><p>At FloraPura, sustainability is about more than growing beautiful roses. It means caring for our people, using resources responsibly and continuing to invest in the future of our farm.</p></div>
    </div>
    <div className="fp-sustainability-feature fp-sustainability-feature-reverse">
      <div className="fp-sustainability-media fp-sustainability-solar"><ImageBlock src="/sustainability/solar-2.jpg" alt="Solar panels at FloraPura"/><ImageBlock src="/sustainability/solar-1.jpg" alt="FloraPura solar installation"/></div>
      <div className="fp-sustainability-copy"><h3>Solar Energy</h3><p>Our solar panel installation supports the use of renewable energy and helps reduce our reliance on conventional energy sources.</p></div>
    </div>
    <div className="fp-sustainability-feature">
      <div className="fp-sustainability-media"><ImageBlock src="/sustainability/water-reservoir.jpg" alt="Water storage reservoir at FloraPura"/></div>
      <div className="fp-sustainability-copy"><h3>Responsible Water Management</h3><p>Our own water storage reservoir helps us manage water availability and support responsible use of this essential resource in rose cultivation.</p></div>
    </div>
    <div className="fp-sustainability-feature fp-sustainability-feature-reverse">
      <div className="fp-sustainability-media"><ImageBlock src="/sustainability/medical-centre.jpg" alt="Medical care centre at FloraPura"/></div>
      <div className="fp-sustainability-copy"><h3>Employee Health &amp; Wellbeing</h3><p>Our farm has a dedicated medical care centre. Professional healthcare services are provided by external medical professionals, supporting the wellbeing of our team.</p></div>
    </div>
    <div className="fp-sustainability-cert"><h3>Standards &amp; Certifications</h3><p className="fp-sustainability-company">Florapura PLC · Kenya</p><p>FloraPura's certifications reflect our focus on responsible practices and continuous improvement.</p><div className="fp-sustainability-cert-list"><div><h4>KFC Silver Certificate</h4><p>Flowers &amp; Ornamentals Sustainability Standard</p><p>Scope: Social, G.A.P. &amp; Environment · Sub-Scope: FO</p></div><div><h4>GLOBALG.A.P.</h4><p>GLOBALG.A.P. No. <strong>4069453339545</strong></p></div><div><h4>KS 1758 Part 1</h4><p>Certificate of Compliance</p></div></div><p className="fp-new-note">Certification documentation available on request.</p></div>
  </div>
</section>
<section id="sales-export" className="fp-new-page fp-new-export" aria-label="Sales Export and Contact"><div className="fp-new-wrap"><p className="fp-new-kicker">FLORAPURA · FROM KENYA TO THE WORLD</p><h2>SALES, EXPORT &amp; CONTACT</h2><div className="fp-new-lead"><ImageBlock src="/export/packing-facility.jpg" alt="FloraPura rose packing facility"/><div><h3>From Our Farm to the Market</h3><p>From harvesting and grading to careful packing and export preparation, every step is handled with dedication and attention to detail. Our team prepares roses for international markets with a focus on freshness, consistency and presentation.</p></div></div><div className="fp-new-gallery"><ImageBlock src="/export/grading.jpg" alt="Grading Mont Royal roses"/><ImageBlock src="/export/packing.jpg" alt="Packing Ramonda roses"/><ImageBlock src="/export/boxes.jpg" alt="FloraPura export boxes"/><ImageBlock src="/export/dispatch.jpg" alt="FloraPura boxes prepared for dispatch"/></div><div className="fp-new-contact"><div><h3>Exclusive Sales Partner</h3><p>All FloraPura roses are marketed and sold exclusively through <strong>Van der Deijl Roses</strong> in the Netherlands.</p><p>Royal FloraHolland is a key gateway to the international flower market for our roses. FloraPura roses are auctioned daily at Royal FloraHolland Rijnsburg, connecting our farm in Kenya with buyers worldwide.</p></div><div><h3>Commercial Contact</h3><p><strong>Van der Deijl Roses</strong><br/>Rob Brussee</p><p><a href="tel:+31651610599">+31 6 51610599</a><br/><a href="mailto:sales@vanderdeijl.nl">sales@vanderdeijl.nl</a><br/><a href="https://www.vanderdeijl.nl">www.vanderdeijl.nl</a></p><a className="fp-new-whatsapp" href="https://wa.me/31651610599" target="_blank" rel="noreferrer">Contact via WhatsApp ↗</a></div></div><p className="fp-new-ending">From Kenya with Care. Delivered with Pride.</p></div></section>
</>}
