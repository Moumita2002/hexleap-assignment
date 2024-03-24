import './globals.css';
import Collcont from './Collcont';

export default function Collection() {
    return (
      <main>
        <div className="collection">
            <h1>Collection Spotlight</h1>
            <p>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
            <div className="largecoll">
                <div className="pre">
                ◀
                </div>
            <div className="subcoll">
            <Collcont
                imageurl="https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BZDcos--1UzSQRlT-N9cx65GfMLCdY1bDgUpPVGWaSaeNFqn5f3mWqPPavOC3dwIVAQ5LSFSV87f4nqFWTL47SpM9SAoK-Hik~QDb9r9ZcMQi0f2bLc~CwVSIVqTWUUErwccA~nln3KASNGTwveym6PUgIPSqPuS0TzUtzpGFgI80gg31qkC0KXNRC--XF6vFtVP5szniy~A5-hhak8Ct-WgvgQLqVThJm~LXpDkB0NIVZ8NQ9O2y6whQDm0gf7Ex7i03oFtipY19gbTtPAr6mzV-0RZKivl-0woyvGsK-aA1JzKvWYgzExzhjqGFCca1yvb2KbomyjjpZHxtvZV-A__"
                text="Las Vegas Aviators"
                time="OCT 15 | SUN | 4:30PM"
                address='Las Vegas Ballpark, Las Vegas, Nevada'
                coll='Take Flight Collection'
            />
            <Collcont
                imageurl="https://s3-alpha-sig.figma.com/img/3de4/4e83/b6e3aeda879dc6f22f94711c788789b5?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nUF~1EVyrZGHV5Y2m287PwrLOJlkr894fLVacxtljXvPD4wxG9g4D2HNAj17sY960ZApdFZ7vZXHvZjq0~7Vb0wM3nF3b6Vi4SHLk4ztO3tAouszbmpZp~d~lEZl3-95hpbTXgrwtNGB8ujsBxQL5KUsZwG3wCPXLt61kJIpz2pmCQcmY9vS-JuNgfHT13F0ObY4jJSYeFrRcihRJfTmLxzOCbyXqncFRQhnBCuL50D-E1XAHNLFOX5AXJVnBoisGHVAYJbjfoz3UWH0g-bApbnLTUyR5vEZUBdIwoQISiaSttjGTQD6NhpHyKXKHWuE3yVUN2jmWzVwOnvPzn1nEA__"
                text="Sacramento River Cats"
                time="OCT 15 | SUN | 4:30PM"
                address='Sutter Health Park, Sacramento, California'
                coll='Orange Collection'
            />
            <Collcont
                imageurl="https://s3-alpha-sig.figma.com/img/bc7b/d2d1/a2c7e5def5b347470305864869a894b6?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BZDcos--1UzSQRlT-N9cx65GfMLCdY1bDgUpPVGWaSaeNFqn5f3mWqPPavOC3dwIVAQ5LSFSV87f4nqFWTL47SpM9SAoK-Hik~QDb9r9ZcMQi0f2bLc~CwVSIVqTWUUErwccA~nln3KASNGTwveym6PUgIPSqPuS0TzUtzpGFgI80gg31qkC0KXNRC--XF6vFtVP5szniy~A5-hhak8Ct-WgvgQLqVThJm~LXpDkB0NIVZ8NQ9O2y6whQDm0gf7Ex7i03oFtipY19gbTtPAr6mzV-0RZKivl-0woyvGsK-aA1JzKvWYgzExzhjqGFCca1yvb2KbomyjjpZHxtvZV-A__"
                text="Las Vegas Aviators"
                time="OCT 15 | SUN | 4:30PM"
                address='Las Vegas Ballpark, Las Vegas, Nevada'
                coll='Take Flight Collection'
            />
            </div>
            <div className="pre">
                ▶
                </div>
            </div>
            
        </div>
      </main>
      
    );
  }
  