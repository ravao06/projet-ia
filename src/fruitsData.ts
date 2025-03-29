import pomme from "../src/assets/images/pomme.png" 
import banana from "../src/assets/images/banana.jpg"  
import paytaya from "../src/assets/images/Pitaya.png"  
import Ramboutan from "../src/assets/images/Ramboutan.jpeg"  
import Durian from "../src/assets/images/Durian.jpg"  
import Longane from "../src/assets/images/Longane.png"  
import Jacquier from "../src/assets/images/Jacquier.png"  
import Baobab from "../src/assets/images/Baobab.png"  
import Tamarin from "../src/assets/images/Tamarin.png"  
import Cupuaçu from "../src/assets/images/Cupuaçu.png"  
import Açaï from "../src/assets/images/Açaï.png"  
import Figue from "../src/assets/images/Figue.png"  
import Main from "../src/assets/images/Main.png"  
import Kiwano from "../src/assets/images/Kiwano.png"  
import Chérimole from "../src/assets/images/Chérimole.png"  
import Feijoa from "../src/assets/images/Kiwano.png"  
import Sapotille from "../src/assets/images/Sapotille.png"  
import cannelle from "../src/assets/images/cannelle.png"  

const fruitsData = [
  {
    name: 'Pomme',
    image: pomme,
    origin: 'Asie centrale',
    taste: 'Doux et croquant'
  },
  {
    name: 'Banane',
    image: banana,
    origin: 'Asie du Sud-Est',
    taste: 'Doux et crémeux'
  },

  // Fruits tropicaux
  {
    name: 'Fruit du dragon (Pitaya)',
    image: paytaya,
    origin: 'Amérique centrale',
    taste: 'Doux et légèrement sucré'
  },
  {
    name: 'Ramboutan',
    image: Ramboutan,
    origin: 'Asie du Sud-Est',
    taste: 'Sucré et juteux'
  },
  {
    name: 'Durian',
    image: Durian,
    origin: 'Bornéo et Sumatra',
    taste: 'Crémeux et odorant'
  },

  // Fruits asiatiques
  {
    name: 'Longane',
    image: Longane,
    origin: 'Chine',
    taste: 'Doux et floral'
  },
  {
    name: 'Jacquier',
    image: Jacquier,
    origin: 'Inde',
    taste: 'Sucré avec une texture filandreuse'
  },

  // Fruits africains
  {
    name: 'Baobab',
    image: Baobab,
    origin: 'Afrique',
    taste: 'Acide et poudreux'
  },
  {
    name: 'Tamarin',
    image: Tamarin,
    origin: 'Afrique tropicale',
    taste: 'Acide et sucré'
  },

  // Fruits sud-américains
  {
    name: 'Cupuaçu',
    image: Cupuaçu,
    origin: 'Amazonie',
    taste: 'Chocolaté et acidulé'
  },
  {
    name: 'Açaï',
    image: Açaï,
    origin: 'Brésil',
    taste: 'Boisé et légèrement métallique'
  },

  // Fruits méditerranéens
  {
    name: 'Figue fraîche',
    image: Figue,
    origin: 'Moyen-Orient',
    taste: 'Très sucré avec des notes de miel'
  },

  // Fruits insolites
  {
    name: 'Main de Bouddha',
    image: Main,
    origin: 'Chine',
    taste: 'Zesté et aromatique (peu de pulpe)'
  },
  {
    name: 'Kiwano (Melon à cornes)',
    image: Kiwano,
    origin: 'Afrique',
    taste: 'Mélange de banane et citron vert'
  },

  // Autres fruits notables
  {
    name: 'Chérimole',
    image: Chérimole,
    origin: 'Andes',
    taste: 'Crème vanillée avec des notes tropicales'
  },
  {
    name: 'Feijoa',
    image: Feijoa,
    origin: 'Amérique du Sud',
    taste: 'Mélange d`ananas et goyave'
  },
  {
    name: 'Sapotille',
    image: Sapotille,
    origin: 'Mexique',
    taste: 'Très sucré avec des notes de caramel'
  },
  {
    name: 'Pomme cannelle',
    image: cannelle,
    origin: 'Amérique tropicale',
    taste: 'Crémeux avec des notes de vanille'
  },
  // {
  //   name: 'Lulo (Naranjilla)',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Solanum_quitoense_fruit.jpg',
  //   origin: 'Andes',
  //   taste: 'Acide et citrus'
  // },
  // {
  //   name: 'Camu-camu',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Camu_camu_fruit.jpg',
  //   origin: 'Amazonie',
  //   taste: 'Extrêmement acide'
  // },
  // {
  //   name: 'Jaboticaba',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Jaboticaba_fruit.jpg',
  //   origin: 'Brésil',
  //   taste: 'Semblable au raisin mais plus intense'
  // },
  // {
  //   name: 'Mangue des bois (Garcinia)',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Garcinia_indica_fruit.jpg',
  //   origin: 'Inde',
  //   taste: 'Acide et fruité'
  // },
  // {
  //   name: 'Pomme malacca',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Syzygium_malaccense_fruit.jpg',
  //   origin: 'Malaisie',
  //   taste: 'Croquant et légèrement astringent'
  // },
  // {
  //   name: 'Pulasan',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Pulasan_fruit.jpg',
  //   origin: 'Asie du Sud-Est',
  //   taste: 'Plus sucré que le ramboutan'
  // },
  // {
  //   name: 'Salak (Fruit serpent)',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Salak_fruit.jpg',
  //   origin: 'Indonésie',
  //   taste: 'Croquant et légèrement astringent'
  // },
  // {
  //   name: 'Santol',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/d/db/Santol_fruit.jpg',
  //   origin: 'Asie du Sud-Est',
  //   taste: 'Doux-acide selon la variété'
  // },
  // {
  //   name: 'Bilimbi',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Bilimbi_fruit.jpg',
  //   origin: 'Indonésie',
  //   taste: 'Extrêmement acide'
  // },
  // {
  //   name: 'Carambole',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Carambola.jpg',
  //   origin: 'Asie du Sud-Est',
  //   taste: 'Croquant et rafraîchissant'
  // },
  // {
  //   name: 'Gac',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Gac_fruit.jpg',
  //   origin: 'Asie du Sud-Est',
  //   taste: 'Doux et légèrement terreux'
  // },
  // {
  //   name: 'Pitanga',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/c/c0/Pitanga_fruit.jpg',
  //   origin: 'Amérique du Sud',
  //   taste: 'Acide-doux et aromatique'
  // },
  // {
  //   name: 'Physalis (Amour en cage)',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Physalis_peruviana_fruit.jpg',
  //   origin: 'Amérique du Sud',
  //   taste: 'Doux-tartre et légèrement tropical'
  // },
  // {
  //   name: 'Quenette',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Melicoccus_bijugatus_fruit.jpg',
  //   origin: 'Amérique tropicale',
  //   taste: 'Sucré et juteux'
  // },
  // {
  //   name: 'Corossol',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Annona_muricata_fruit.jpg',
  //   origin: 'Amérique tropicale',
  //   taste: 'Crémeux avec des notes d`agrumes'
  // },
  // {
  //   name: 'Pomme de lait',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Chrysophyllum_cainito_fruit.jpg',
  //   origin: 'Amérique centrale',
  //   taste: 'Doux et laiteux'
  // },
  // {
  //   name: 'Pomme rose',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Syzygium_jambos_fruit.jpg',
  //   origin: 'Asie du Sud-Est',
  //   taste: 'Croquant avec des notes de rose'
  // },
  // {
  //   name: 'Abiu',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Abiu_fruit.jpg',
  //   origin: 'Amazonie',
  //   taste: 'Crème caramel'
  // },
  // {
  //   name: 'Biribá',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Biribá_fruit.jpg',
  //   origin: 'Amazonie',
  //   taste: 'Crémeux et acidulé'
  // },
  // {
  //   name: 'Pêche du Brésil',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pech%C3%A9_du_Brazil.jpg',
  //   origin: 'Amérique tropicale',
  //   taste: 'Acide-doux et aromatique'
  // },
  // {
  //   name: 'Pomme de Cythère',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Spondias_dulcis_fruit.jpg',
  //   origin: 'Polynésie',
  //   taste: 'Croquant et acidulé'
  // },
  // {
  //   name: 'Pomme d\'éléphant',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Dillenia_indica_fruit.jpg',
  //   origin: 'Asie du Sud-Est',
  //   taste: 'Acide et rafraîchissant'
  // },
  // {
  //   name: 'Fruit à pain',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Artocarpus_altilis_fruit.jpg',
  //   origin: 'Pacifique',
  //   taste: 'Féculent et légèrement sucré'
  // },
  // {
  //   name: 'Langsat',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Lansium_domesticum_fruit.jpg',
  //   origin: 'Asie du Sud-Est',
  //   taste: 'Doux et légèrement acidulé'
  // },
  // {
  //   name: 'Mombin rouge',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Spondias_mombin_fruit.jpg',
  //   origin: 'Amérique tropicale',
  //   taste: 'Acide et aromatique'
  // },
  // {
  //   name: 'Safou',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Dacryodes_edulis_fruits.jpg',
  //   origin: 'Afrique centrale',
  //   taste: 'Gras et fruité après cuisson'
  // },
  // {
  //   name: 'Zapote noire',
  //   image: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Zapote_noir.jpg',
  //   origin: 'Mexique',
  //   taste: 'Crème chocolatée'
  // }
];

export default fruitsData;
