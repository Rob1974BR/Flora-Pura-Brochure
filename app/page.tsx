import RoseCollection, { type Rose } from './rose-collection'

const roses: Rose[] = [
  {
    "number": 1,
    "variety": "Attraction",
    "photo": "/roses/attraction.jpg",
    "packing": [{"length":"35","quantity":"280"},{"length":"40","quantity":"260"},{"length":"50","quantity":"240"},{"length":"60","quantity":"160"},{"length":"70","quantity":"140"}],
    "colour": "Bi Colour Red White",
    "thorns": "Medium",
    "profile": "Medium -Long",
    "length": "40-60",
    "dominantLength": "50",
    "headsize": "5CM"
  },
  {
    "number": 2,
    "variety": "Countdown",
    "photo": "/roses/countdown.jpg",
    "packing": [{"length":"35","quantity":"400"},{"length":"40","quantity":"360"},{"length":"50","quantity":"320"},{"length":"60","quantity":"260"},{"length":"70","quantity":"200"}],
    "colour": "White",
    "thorns": "Medium",
    "profile": "Medium- Long",
    "length": "35-60",
    "dominantLength": "40",
    "headsize": "5CM"
  },
  {
    "number": 3,
    "variety": "Eleganza",
    "photo": "/roses/eleganza.jpg",
    "packing": [{"length":"35","quantity":"200"},{"length":"40","quantity":"180"},{"length":"50","quantity":"140"},{"length":"60","quantity":"120"},{"length":"70","quantity":"160"}],
    "colour": "Pink",
    "thorns": "Medium",
    "profile": "Medium- Long",
    "length": "35-60",
    "dominantLength": "40",
    "headsize": "6CM"
  },
  {
    "number": 4,
    "variety": "Eudora",
    "photo": "/roses/eudora.jpg",
    "packing": [{"length":"40","quantity":"300"},{"length":"50","quantity":"280"},{"length":"60","quantity":"220"},{"length":"70","quantity":"160"}],
    "colour": "Dark Pink",
    "thorns": "No",
    "profile": "Long",
    "length": "40-70",
    "dominantLength": "60/70",
    "headsize": "5CM"
  },
  {
    "number": 5,
    "variety": "Eye Candy",
    "photo": "/roses/eye-candy.jpg",
    "packing": [{"length":"35","quantity":"300"},{"length":"40","quantity":"280"},{"length":"50","quantity":"260"},{"length":"60","quantity":"200"},{"length":"70","quantity":"160"}],
    "colour": "Hot Pink",
    "thorns": "Medium",
    "profile": "Long",
    "length": "40-70",
    "dominantLength": "60",
    "headsize": "5.5CM"
  },
  {
    "number": 6,
    "variety": "Fashion girl",
    "photo": "/roses/fashion-girl.jpg",
    "packing": [{"length":"35","quantity":"360"},{"length":"40","quantity":"340"},{"length":"50","quantity":"300"},{"length":"60","quantity":"220"},{"length":"70","quantity":"160"}],
    "colour": "Bi  Colour Pink Green",
    "thorns": "Medium",
    "profile": "Long",
    "length": "40-70",
    "dominantLength": "60/70",
    "headsize": "5CM"
  },
  {
    "number": 7,
    "variety": "Fiore",
    "photo": "/roses/fiore.jpg",
    "packing": [{"length":"40","quantity":"280"},{"length":"50","quantity":"240"},{"length":"60","quantity":"200"},{"length":"70","quantity":"140"}],
    "colour": "Bi  Colour Cherry White",
    "thorns": "Medium",
    "profile": "Long",
    "length": "40-70",
    "dominantLength": "70",
    "headsize": "6CM"
  },
  {
    "number": 8,
    "variety": "Firefly",
    "photo": "/roses/firefly.jpg",
    "packing": [{"length":"40","quantity":"360"},{"length":"50","quantity":"320"},{"length":"60","quantity":"260"},{"length":"70","quantity":"200"}],
    "colour": "Bi Colour Orange Pink",
    "thorns": "No",
    "profile": "Long",
    "length": "40-70",
    "dominantLength": "60/70",
    "headsize": "5CM"
  },
  {
    "number": 9,
    "variety": "Lady Lala",
    "photo": "/roses/lady-lala.jpg",
    "packing": [{"length":"40","quantity":"320"},{"length":"50","quantity":"280"},{"length":"60","quantity":"200"},{"length":"70","quantity":"160"}],
    "colour": "Soft Pink",
    "thorns": "Medium",
    "profile": "Long",
    "length": "40-70",
    "dominantLength": "60/70",
    "headsize": "5CM"
  },
  {
    "number": 10,
    "variety": "Marosa",
    "photo": "/roses/marosa.jpg",
    "packing": [{"length":"35","quantity":"360"},{"length":"40","quantity":"300"},{"length":"50","quantity":"240"},{"length":"60","quantity":"200"}],
    "colour": "Bi Colour Cream Pink",
    "thorns": "Medium",
    "profile": "Medium- Long",
    "length": "35-60",
    "dominantLength": "40/60",
    "headsize": "5CM"
  },
  {
    "number": 11,
    "variety": "Milan",
    "photo": "/roses/milan.jpg",
    "packing": [{"length":"40","quantity":"300"},{"length":"50","quantity":"240"},{"length":"60","quantity":"180"},{"length":"70","quantity":"160"}],
    "colour": "Orange",
    "thorns": "Medium",
    "profile": "Long",
    "length": "40-70",
    "dominantLength": "60",
    "headsize": "5CM"
  },
  {
    "number": 12,
    "variety": "Minion Rose",
    "photo": "/roses/minion-rose.jpg",
    "packing": [{"length":"40","quantity":"340"},{"length":"50","quantity":"300"},{"length":"60","quantity":"220"},{"length":"70","quantity":"160"}],
    "colour": "Yellow",
    "thorns": "Medium",
    "profile": "Medium -Long",
    "length": "40-70",
    "dominantLength": "50",
    "headsize": "5CM"
  },
  {
    "number": 13,
    "variety": "Mont Royal",
    "photo": "/roses/mont-royal.jpg",
    "packing": [{"length":"35","quantity":"280"},{"length":"40","quantity":"340"},{"length":"50","quantity":"300"},{"length":"60","quantity":"200"},{"length":"70","quantity":"180"},{"length":"80","quantity":"160"}],
    "colour": "White",
    "thorns": "Medium",
    "profile": "Long",
    "length": "40-70",
    "dominantLength": "60",
    "headsize": "5CM"
  },
  {
    "number": 14,
    "variety": "Olivia",
    "photo": "/roses/olivia.jpg",
    "packing": [{"length":"40","quantity":"340"},{"length":"50","quantity":"260"},{"length":"60","quantity":"200"},{"length":"70","quantity":"160"}],
    "colour": "Pink",
    "thorns": "Medium",
    "profile": "Medium -Long",
    "length": "40-70",
    "dominantLength": "50/60",
    "headsize": "5CM"
  },
  {
    "number": 15,
    "variety": "Paloma",
    "photo": "/roses/paloma.jpg",
    "packing": [{"length":"35","quantity":"360"},{"length":"40","quantity":"320"},{"length":"50","quantity":"280"},{"length":"60","quantity":"220"}],
    "colour": "Bi  Colour Cherry White",
    "thorns": "Medium",
    "profile": "Medium- Long",
    "length": "35-50",
    "dominantLength": "40",
    "headsize": "5CM"
  },
  {
    "number": 16,
    "variety": "Paloma Steffi",
    "photo": "/roses/paloma-steffi.jpg",
    "packing": [{"length":"35","quantity":"360"},{"length":"40","quantity":"300"},{"length":"50","quantity":"260"},{"length":"60","quantity":"220"},{"length":"70","quantity":"200"}],
    "colour": "Pink",
    "thorns": "Medium",
    "profile": "Medium- Long",
    "length": "35-60",
    "dominantLength": "40",
    "headsize": "5CM"
  },
  {
    "number": 17,
    "variety": "Princess Crown",
    "photo": "/roses/princess-crown.jpg",
    "packing": [{"length":"35","quantity":"340"},{"length":"40","quantity":"300"},{"length":"50","quantity":"260"},{"length":"60","quantity":"200"},{"length":"70","quantity":"160"}],
    "colour": "Peach",
    "thorns": "Medium",
    "profile": "Medium -Long",
    "length": "40-70",
    "dominantLength": "50/60",
    "headsize": "5CM"
  },
  {
    "number": 18,
    "variety": "Ramonda",
    "photo": "/roses/ramonda.jpg",
    "packing": [{"length":"35","quantity":"420"},{"length":"40","quantity":"360"},{"length":"50","quantity":"340"},{"length":"60","quantity":"260"},{"length":"70","quantity":"200"}],
    "colour": "Pink",
    "thorns": "Medium",
    "profile": "Medium- Long",
    "length": "35-60",
    "dominantLength": "40",
    "headsize": "5CM"
  },
  {
    "number": 19,
    "variety": "Renaissance",
    "photo": "/roses/renaissance.jpg",
    "packing": [{"length":"35","quantity":"360"},{"length":"40","quantity":"280"},{"length":"50","quantity":"260"},{"length":"60","quantity":"200"},{"length":"70","quantity":"160"}],
    "colour": "Pink",
    "thorns": "Medium",
    "profile": "Medium- Long",
    "length": "40-70",
    "dominantLength": "40/60",
    "headsize": "5CM"
  },
  {
    "number": 20,
    "variety": "Satsuma",
    "photo": "/roses/satsuma.jpg",
    "packing": [{"length":"40","quantity":"340"},{"length":"50","quantity":"300"},{"length":"60","quantity":"220"},{"length":"70","quantity":"160"}],
    "colour": "Orange",
    "thorns": "Medium",
    "profile": "Medium -Long",
    "length": "40-70",
    "dominantLength": "50",
    "headsize": "5CM"
  },
  {
    "number": 21,
    "variety": "Shocking blue",
    "photo": "/roses/shocking-blue.jpg",
    "packing": [{"length":"40","quantity":"420"},{"length":"50","quantity":"300"},{"length":"60","quantity":"260"},{"length":"70","quantity":"200"}],
    "colour": "Lavender",
    "thorns": "No",
    "profile": "Long",
    "length": "40-60",
    "dominantLength": "60",
    "headsize": "5CM"
  },
  {
    "number": 22,
    "variety": "Solarflare",
    "photo": "/roses/solarflare.jpg",
    "packing": [{"length":"40","quantity":"400"},{"length":"50","quantity":"340"},{"length":"60","quantity":"260"},{"length":"70","quantity":"200"}],
    "colour": "Orange",
    "thorns": "No",
    "profile": "Medium- Long",
    "length": "40-70",
    "dominantLength": "50",
    "headsize": "5CM"
  },
  {
    "number": 23,
    "variety": "Victoria Park",
    "photo": "/roses/victoria-park.jpg",
    "packing": [{"length":"40","quantity":"340"},{"length":"50","quantity":"300"},{"length":"60","quantity":"220"},{"length":"70","quantity":"160"}],
    "colour": "Orange",
    "thorns": "Medium",
    "profile": "Long",
    "length": "40-60",
    "dominantLength": "60",
    "headsize": "5CM"
  },
  {
    "number": 24,
    "variety": "Victorious",
    "photo": "/roses/victorious.jpg",
    "packing": [{"length":"40","quantity":"200"},{"length":"50","quantity":"180"},{"length":"60","quantity":"160"},{"length":"70","quantity":"140"},{"length":"80","quantity":"140"}],
    "colour": "Red",
    "thorns": "No",
    "profile": "Long",
    "length": "40-80",
    "dominantLength": "80",
    "headsize": "5.5CM"
  },
  {
    "number": 25,
    "variety": "Wasabi",
    "photo": "/roses/wasabi.jpg",
    "packing": [{"length":"35","quantity":"260"},{"length":"40","quantity":"240"},{"length":"50","quantity":"220"},{"length":"60","quantity":"220"},{"length":"70","quantity":"180"}],
    "colour": "Green",
    "thorns": "Medium",
    "profile": "Medium- Long",
    "length": "40-60",
    "dominantLength": "60",
    "headsize": "5CM"
  }
]

export default function Page() {
  return (
    <main className="cover" id="home"><nav className="fp-site-nav" aria-label="Brochure navigation"><a className="fp-site-brand" href="#home"><img src="https://static.wixstatic.com/media/7b3f98_a7c5177ea87649da91df48b2c1af0b09~mv2.png/v1/fill/w_600,h_398,al_c,q_90/FloraPura-Brand%20Guidelines_Logo_Neg.png" alt="Flora Pura original logo" /></a><div className="fp-site-links"><a href="#home">Home</a><a href="#collection">Our Collection</a><a href="#our-story">Our Story &amp; Our Farm</a></div></nav>
      <img className="cover-photo" src="https://static.wixstatic.com/media/7b3f98_fdb3763794ec4737a2b01fc52f5df875~mv2.jpg/v1/fill/w_1600,h_1066,al_c,q_90/DSC_8133.jpg" alt="Flora Pura rose greenhouse in Kenya" />
      <div className="shade" />
      <header className="topbar">
        <div className="brand-group">
          <img className="logo" src="https://static.wixstatic.com/media/7b3f98_a7c5177ea87649da91df48b2c1af0b09~mv2.png/v1/fill/w_600,h_398,al_c,q_90/FloraPura-Brand%20Guidelines_Logo_Neg.png" alt="Flora Pura" />
        </div>
        <span className="edition">DIGITAL COLLECTION · 2026</span>
      </header>
      <section className="hero-copy">
        <h1>Premium roses.<br/>Grown with purpose.</h1>
        <p className="intro">A family-owned flower farm in Kenya's Rift Valley, cultivating high-quality blooms with dedication to people, community and sustainable practices.</p>
        <a className="enter" href="#collection">Discover our collection <span>→</span></a>
      </section>
      <footer className="cover-footer"><span>FLORA PURA</span><span>FROM KENYA WITH CARE</span></footer>
      <RoseCollection roses={roses} />
      <section id="our-story" className="fp-story">
        <div className="fp-story-inner">
          <p className="fp-story-eyebrow">FLORA PURA · KENYA</p>
          <h2>OUR STORY &amp; OUR FARM</h2>
          <h3>Rooted in Passion. Growing with Purpose.</h3>
          <p>Every rose has a story. Ours begins with a passion for flowers, years of experience and a vision to create something special.</p>
          <p>Founded in 2023 by Simon van der Burg, Flora Pura is a family-owned rose farm located in Naivasha, Kenya, in the heart of the Great Rift Valley.</p>
          <p>Born in Kenya and raised in the Netherlands, Simon developed a strong connection with the international flower industry from an early age. Through years of experience in rose breeding, production and international markets, he developed a clear vision: to build a modern rose farm where exceptional quality, distinctive varieties and dedicated people come together.</p>
          <p>That vision became Flora Pura.</p>
          <h3>Our Farm. Our People. Our Pride.</h3>
          <p>At Flora Pura, we believe that exceptional roses begin with exceptional people.</p>
          <p>Our dedicated team in Kenya brings together local expertise, craftsmanship and a shared commitment to growing beautiful roses. From cultivation and harvesting to grading and packing, every stage of production receives the attention it deserves.</p>
          <p>We believe in investing in our people, encouraging professional development and creating an environment where teamwork, responsibility and pride make the difference.</p>
          <p>Because behind every beautiful rose stands a team that cares.</p>
          <h3>Growing Quality. Creating Distinction.</h3>
          <p>Our ambition is not simply to grow roses, but to grow roses that stand out.</p>
          <p>By combining carefully selected varieties, professional cultivation and a deep understanding of international markets, we focus on roses with distinctive colours, beautiful shapes and consistent quality.</p>
          <p>Strong relationships with breeders, customers and partners allow us to continuously develop our collection and respond to the changing needs of the international flower industry.</p>
          <h3>Growing Together. Looking Ahead.</h3>
          <p>Flora Pura represents more than a rose farm. It is a shared ambition to build a reliable, innovative and responsible flower business with a strong future.</p>
          <p>With respect for our people, our surroundings and the flowers we grow, we continue to invest in quality, innovation and long-term partnerships.</p>
          <p>From our farm in Kenya to customers around the world, every Flora Pura rose reflects the passion, dedication and pride of the people behind it.</p>
          <p className="fp-story-signature"><strong>FLORA PURA</strong><em>Grown with Passion. Delivered with Pride.</em></p>
        </div>
      </section>

    </main>
  )
}
