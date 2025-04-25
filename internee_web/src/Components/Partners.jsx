import React from 'react';
import googleCloud from '../assets/google-cloud.png';
import seePakistan from '../assets/see-pakistan.png';
import microsoftFoundersHub from '../assets/microsoft-founders-hub.png';
import itg from '../assets/itg.png';
import nationalExpansion from '../assets/national-expansion.png';
import pitb from '../assets/pitb.png';
import './Partners.css';

const Partners = () => {
  const partnerLogos = [
    { src: googleCloud, alt: 'Google Cloud' },
    { src: seePakistan, alt: 'SEE Pakistan 2024' },
    { src: microsoftFoundersHub, alt: 'Microsoft for Startups Founders Hub' },
    { src: itg, alt: 'ITG' },
    { src: nationalExpansion, alt: 'National Expansion Plan of NICs' },
    { src: pitb, alt: 'pitb' },
  ];

  return (
    <section className="partners">
      <h2>Collaborated with Trusted Worldwide Partners</h2>
      <div className="partners-logos">
        {partnerLogos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="partner-logo" />
        ))}
      </div>
    </section>
  );
};

export default Partners;