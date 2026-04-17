import '../css/infoBoutique.css';

const boutiqueExemple = {
  nom: "La Maison du Café",
  description: "Le meilleur café artisanal de la ville",
  adresse: "123 Rue de la Paix, 75001 Paris",
  telephone: "+33 1 23 45 67 89",
  email: "contact@lamaisonducafe.fr",
  imageFond: "https://images.unsplash.com/photo-1442512595331-e89e73853f31",
  note: 4,
  horaires: [
    { jour: "Lundi - Vendredi", heures: "08:00 - 20:00" },
    { jour: "Samedi", heures: "09:00 - 22:00" },
    { jour: "Dimanche", heures: "10:00 - 18:00" }
  ]
};

const InfoBoutique = ({ boutique = boutiqueExemple }) => {
  const containerStyle = {
    backgroundImage: `url(${boutique.imageFond})`,
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="overlay">
        <h1 className="title">{boutique.nom}</h1>
        <p>{boutique.description}</p>
        
        
        <div className="infoGrid">
            <div className='infoHoraires'>
                <div className="label">🕒 Horaires d'ouverture</div>
                <div className="value">
                {boutique.horaires.map((horaire, index) => (
                    <div key={index}>{horaire.jour}: {horaire.heures}</div>
                ))}
                </div>
            </div>
        
            <div className="infoCard">
                <div className="label">📍 Adresse</div>
                <div className="value">{boutique.adresse}</div>
            </div>
            
            <div className="infoCard">
                <div className="label">📞 Téléphone</div>
                <div className="value">{boutique.telephone}</div>
            </div>

            <div className="infoCard">
                <div className="label">✉️ Email</div>
                <div className="value">{boutique.email}</div>
            </div>
        
        </div>
          
      </div>
    </div>
  );
};

export default InfoBoutique;