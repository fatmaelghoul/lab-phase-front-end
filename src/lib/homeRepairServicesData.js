const homeRepairServicesData = [
  {
    key: "maconnerie-sol",
    title: "Maçonnerie et revêtement de sol",
    description:
      "Nous réalisons tous travaux de maçonnerie, dalles, cloisons, murs porteurs, ainsi que la pose de carrelage, faïence, parquet et autres revêtements de sol. Travail soigné et durable, adapté à tous types de chantiers.",
    image: "https://www.sellessaintdenis.com/wp-content/uploads/2021/08/maconnerie.jpg", // Ajoute cette image dans ton dossier public/images
    expert: {
      name: "Walid Mzoughi",
      phone: "+216 52 987 321",
      email: "walid.macon@example.com",
      specialty: "Maçon-carreleur",
      experience: "12 ans",
      price: "150 TND",
    },
  },

  {
    key: "electricite",
    title: "Électricité",
    description:
      "Notre service d’électricité couvre l’installation, la réparation et la mise en conformité de vos équipements électriques. Que ce soit pour un logement, un bureau ou un commerce, nos électriciens certifiés assurent un travail sécurisé et conforme aux normes.",
    image:
      "https://www.shutterstock.com/image-photo/electricity-electrical-maintenance-service-engineer-260nw-2470025959.jpg", // Place cette image dans ton dossier public/images
    expert: {
      name: "Fayçal Jaziri",
      phone: "+216 99 887 766",
      email: "faycal.jaziri@reparateurs.tn",
      specialty: "Électricien certifié",
      experience: "10 ans",
      price: "100 TND",
    },
  },

  {
    key: "peinture-decoration",
    title: "Peinture et décoration d’intérieur",
    description:
      "Transformez votre espace avec notre service de peinture et décoration d’intérieur. Nous vous proposons des couleurs harmonieuses, des finitions modernes et un style qui reflète votre personnalité. Du conseil déco à l'exécution, nos experts s’occupent de tout.",
    image:
      "https://static.wixstatic.com/media/11062b_def781bc8c7f4cb0b41dde1b54f7187f~mv2.jpg/v1/fill/w_980,h_686,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_def781bc8c7f4cb0b41dde1b54f7187f~mv2.jpg", // Ajoute cette image dans le dossier public/images
    expert: {
      name: "Sonia Ferjani",
      phone: "+216 29 345 678",
      email: "sonia.decoratrice@example.com",
      specialty: "Décoratrice d'intérieur & peintre",
      experience: "7 ans",
      price: "120 TND",
    },
  },
  {
    key: "menuiserie",
    title: "Menuiserie",
    description:
      "Travaux de bois sur mesure et restauration. Fabrication de meubles, réparation de portes et fenêtres, placards et dressings sur mesure, ainsi que la restauration de boiseries.",
    image:
      "https://www.ar-menuiserie-68.fr/wp-content/uploads/2021/06/menuiserie-generale.jpg", // Place cette image dans le dossier public/images
    expert: {
      name: "Kamel Chehbani",
      phone: "+216 55 443 322",
      email: "chehbani@reparateurs.tn",
      specialty: "Menuisier",
      experience: "10 ans",
      price: "130 TND",
    },
  },
  {
    key: "climatisation-chauffage",
    title: "Climatisation et chauffage",
    description:
      "Installation, entretien et réparation de systèmes de climatisation et de chauffage pour un confort optimal en toute saison. Nos experts assurent un service rapide, fiable et écoénergétique, adapté à tous les types de logements.",
    image: "https://www.hascor.org/c/80-category_default/froid-climatisation.jpg", // Place cette image dans ton dossier public/images
    expert: {
      name: "Mehdi Ben Yahia",
      phone: "+216 23 654 321",
      email: "mehdi.clim@example.com",
      specialty: "Technicien en climatisation et chauffage",
      experience: "9 ans",
      price: "130 TND",
    },
  },
  {
    key: "camera-surveillance",
    title: "Installation de caméras de surveillance",
    description:
      "Protégez votre maison ou votre entreprise avec un système de vidéosurveillance performant. Nos techniciens installent des caméras intérieures/extérieures, avec accès à distance et enregistrement sécurisé.",
    image:
      "https://media.gettyimages.com/id/1198543997/fr/photo/security-camera-ip-camera.jpg?s=612x612&w=0&k=20&c=KSRS21GN412u6ugkk3r1KByQVpotTGLKcKXqO-vmsKI=", // à ajouter dans ton dossier public/images
    expert: {
      name: "Yassine Gharbi",
      phone: "+216 21 987 654",
      email: "yassine.securite@example.com",
      specialty: "Systèmes de sécurité",
      experience: "5 ans",
      price: "120 TND",
    },
  },
  {
    key: "plomberie",
    title: "Plomberie",
    description:
      "Nos plombiers qualifiés interviennent rapidement pour tous vos besoins : fuites d’eau, débouchage de canalisations, réparation ou installation de robinetterie, chauffe-eau et sanitaires. Service fiable et garanti.",
    image:
      "https://media.istockphoto.com/id/2197665899/fr/photo/plombier-r%C3%A9parant-une-fuite-deau-dans-un-siphon-de-vidange-d%C3%A9vier.webp?a=1&b=1&s=612x612&w=0&k=20&c=W81SVSoBZohTKYGcA8uI-RMoZqUDMHA5VlCVMzUTFkE=", // ajoute cette image dans ton dossier public/images
    expert: {
      name: "Aymen Gharbi",
      phone: "+216 29 654 321",
      email: "aymen.plomberie@example.com",
      specialty: "Plombier",
      experience: "7 ans",
      price: "120 TND",
    },
  },
  {
    key: "jardinage",
    title: "Jardinage",
    description:
      "Offrez une nouvelle vie à votre espace extérieur grâce à nos services de jardinage. Taille des haies, tonte de pelouse, aménagement paysager ou entretien régulier : nos jardiniers s’occupent de tout avec soin et professionnalisme.",
    image: "https://www.avoirundevis.fr/wp-content/uploads/travaux-jardin-potager.jpg", // Place une image représentative dans public/images
    expert: {
      name: "Youssef Gharbi",
      phone: "+216 20 987 654",
      email: "youssef.jardinier@example.com",
      specialty: "Jardinier paysagiste",
      experience: "6 ans",
      price: "90 TND",
    },
  },
  {
    key: "electromenager",
    title: "Réparation Électroménager",
    description:
      "Nos experts en électroménager réparent vos lave-linge, réfrigérateurs, fours et autres appareils rapidement et efficacement. Service fiable et rapide à domicile.",
    image:
      "https://electromangione.com/images/Mangione_images/photos_magasin/electro01.jpeg", // ajoute cette image dans ton dossier public/images
    expert: {
      name: "Karim Ben Salah",
      phone: "+216 20 123 456",
      email: "karim.repair@example.com",
      specialty: "Électroménager",
      experience: "8 ans",
      price: "80 TND",
    },
  },
];

export default homeRepairServicesData;
