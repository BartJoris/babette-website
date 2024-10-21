import React from 'react';
import './HomePage.css';
import heroImage from '../assets/hero-image.jpg'; // Zorg ervoor dat je de juiste bestandsnaam gebruikt
import babyCategoryImage from '../assets/baby-category.jpg'; // Voeg de juiste bestandsnaam toe
import womenCategoryImage from '../assets/women-category.jpg'; // Voeg de juiste bestandsnaam toe
import kidsCategoryImage from '../assets/kids-category.jpg'; // Voeg de juiste bestandsnaam toe
import brand1 from '../assets/brand.jpg'; // 1 + In The Family
import brand2 from '../assets/brand.jpg'; // American Vintage
import brand3 from '../assets/brand.jpg'; // ARMEDANGELS
import brand4 from '../assets/brand.jpg'; // Another-Label
import brand5 from '../assets/brand.jpg'; // Cozmo
import brand6 from '../assets/brand.jpg'; // Emile & Ida
import brand7 from '../assets/brand.jpg'; // Grimms
import brand8 from '../assets/brand.jpg'; // Hvid
import brand9 from '../assets/brand.jpg'; // Joha
import brand10 from '../assets/brand.jpg'; // LN Knits
import brand11 from '../assets/brand.jpg'; // Oilily
import brand12 from '../assets/brand.jpg'; // Play Up
import brand13 from '../assets/brand.jpg'; // Ray
import brand14 from '../assets/brand.jpg'; // The New Society
import brand15 from '../assets/brand.jpg'; // The tiny big sister
import brand16 from '../assets/brand.jpg'; // Thinking Mu

function HomePage() {
  // Toggle functie voor het menu
  const toggleMenu = () => {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active'); // Toggle de actieve klasse
  };

  return (
    <div className="homepage">
      <header>
        <div className="hero-container">
            <img src={heroImage} alt="Babette Concept Logo" className="hero-logo" />
        </div>
        <nav>
          <div className="button-container">
            <div className="hamburger" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <ul className="nav-list">
              <li><a href="#products">Producten</a></li>
              <li><a href="#brands">Uitgelichte Merken</a></li>
              <li><a href="#about">Over ons</a></li>
              <li><a href="#location">Locatie</a></li>
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section id="products">
          <div className="product-grid">
            <div className="product-category">
              <a href="https://www.babetteconcept.be/shop/category/kleding-0-18m-50">
                <div className="image-container">
                  <img src={babyCategoryImage} alt="Baby Producten" />
                  <h3 className="top-left-title">Baby (0-18M)</h3> {/* Title for Baby */}
                </div>
              </a>
            </div>
            <div className="product-category">
              <a href="https://www.babetteconcept.be/shop/category/kleding-2-8y-32">
                <div className="image-container">
                  <img src={kidsCategoryImage} alt="Kinderen Producten" />
                  <h3 className="top-left-title">Kinderen (2-8Y)</h3> {/* Title for Kinderen */}
                </div>
              </a>
            </div>
            <div className="product-category">
              <a href="https://www.babetteconcept.be/shop/category/kleding-volwassenen-25">
                <div className="image-container">
                  <img src={womenCategoryImage} alt="Volwassenen" />
                  <h3 className="top-left-title">Volwassenen</h3> {/* Title for Volwassenen */}
                </div>
              </a>
            </div>
          </div>
        </section>

        <section id="brands">
          <h2>Uitgelichte Merken</h2>
          <div className="brands-grid">
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/1-plus-in-the-family" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand1} alt="1 + In The Family" />
                  <h3 className="overlay-title">1 + In The Family</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/american-vintage" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand2} alt="American Vintage" />
                  <h3 className="overlay-title">American Vintage</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/armedangels" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand3} alt="ARMEDANGELS" />
                  <h3 className="overlay-title">ARMEDANGELS</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/another-label" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand4} alt="Another-Label" />
                  <h3 className="overlay-title">Another-Label</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/cozmo" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand5} alt="Cozmo" />
                  <h3 className="overlay-title">Cozmo</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/emile-ida" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand6} alt="Emile & Ida" />
                  <h3 className="overlay-title">Emile & Ida</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/grimms" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand7} alt="Grimms" />
                  <h3 className="overlay-title">Grimms</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/hvid" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand8} alt="Hvid" />
                  <h3 className="overlay-title">Hvid</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/joha" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand9} alt="Joha" />
                  <h3 className="overlay-title">Joha</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/ln-knits" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand10} alt="LN Knits" />
                  <h3 className="overlay-title">LN Knits</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/oilily" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand11} alt="Oilily" />
                  <h3 className="overlay-title">Oilily</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/play-up" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand12} alt="Play Up" />
                  <h3 className="overlay-title">Play Up</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/ray" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand13} alt="Ray" />
                  <h3 className="overlay-title">Ray</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/the-new-society" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand14} alt="The New Society" />
                  <h3 className="overlay-title">The New Society</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/the-tiny-big-sister" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand15} alt="The tiny big sister" />
                  <h3 className="overlay-title">The tiny big sister</h3>
                </div>
              </a>
            </div>
            <div className="brand-item">
              <a href="https://www.babetteconcept.be/shop/category/thinking-mu" target="_blank" rel="noopener noreferrer">
                <div className="image-container">
                  <img src={brand16} alt="Thinking Mu" />
                  <h3 className="overlay-title">Thinking Mu</h3>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-container">
            <h2>Over ons</h2>
            <p>
              Babette Concept is uw one-stop shop voor baby-, vrouwen- en kindermode. Wij bieden een zorgvuldig samengestelde selectie van hoogwaardige, stijlvolle producten voor het hele gezin.
            </p>
          </div>
        </section>

        {/* <section id="location">
          <h2>Bezoek Ons</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.905500338372!2d2.7079833!3d51.1225037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDAwJzAwLjAiTiA0wrAwMCcwMC4wIkU!5e0!3m2!1sen!2sbe!4v1686665663619!5m2!1sen!2sbe"
              width="600"
              height="450"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-info">
            <p>Adres: Albert I-laan 75, 8670 Oostduinkerke, België</p>
            <p>Telefoon: +32 460 97 07 42</p>
            <p>Email: <a href="mailto:info@babetteconcept.be">info@babetteconcept.be</a></p>
          </div>
        </section> */}

        <section id="location" className="map-section">
          <h2>Onze Locatie</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.691687539409!2d2.669840877056874!3d51.13259477173045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dc97d86cf17793%3A0xe482f85b0aac115b!2sBabette.!5e0!3m2!1sen!2sbe!4v1729547186525!5m2!1sen!2sbe" // Replace with your copied embed URL
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Babette Concept. Alle rechten voorbehouden.</p>
      </footer>
    </div>
  );
}

export default HomePage;
