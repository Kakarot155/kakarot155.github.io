document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
    const closeBtn = document.getElementsByClassName('close')[0];
    const vehicleButtons = document.getElementById('vehicle-buttons');
    const vehiclePages = document.querySelectorAll('.vehicle-page');

    const buttons = document.querySelectorAll('.big-button');

    const content = {
        presentation: {
            title: "Présentation du Cartel de Sinaloa",
            text: "Le cartel de Sinaloa, aussi appelé l'Organisation Reynosa, le cartel du Pacifique ou la Fédération, est une organisation  présente dans le monde entier, principalement dans l'Etat de Sinaloa, Durango, Sonora, Chihuaras et Tamaulipos, c'est-à-dire dans le « triangle d'or » et dans une des régions du Mexique dotées d'une culture importante d'opium et de ma. Avec le cartel du Golfe, duquel il se serait rapproché, c'est l'un des plus puissants cartel mexicains : à eux deux, ils disposent de 100 000 hommes armés selon le ministres des États-Unis. Ses opérations s'étendent non seulement aux États-Unis, mais aussi au Venezuela1, en Colombie, au Panama, au Pérou, au Paraguay, au Brésil, en Argentine et en Europe. "
        },
        histoire: {
            title: "Histoire du Cartel de Sinaloa",
            text: "Le cartel de Sinaloa trouve son origine dans l'association criminelle de Luciano Reynosa Pérez et de son frère Pedro Avilés Pérez, des trafiquants qui commencèrent dans les années 1960. Pedro Avilés Pérez est abattu en 1978 par la police fédérale.\n\nLe cartel se développe surtout à partir des années 1980, quand la Central Intelligence Agency (CIA) utilisait ses services pour fournir la Contra nicaraguayenne (paramilitaires en lutte contre le régime sandiniste) en armes et en dollars3."
        },
        activites: {
            title: "Activités du Cartel de Sinaloa",
            text: "Prendre possession d'une ou plusieurs usines pour la fabrication d'armes. \
Faire un stock d'armes légères et lourdes. \
Amasser de l'argent et des informations. \
Se trouver une organisation qui sera le vendeur d'armes. \
Commencer à avoir un nom dans la ville. \
Obtenir une entreprise pour pouvoir blanchir soi-même. \
Avoir le contrôle d'un trajet de drogue. \
Faire des combats clandestins et des courses illégales. \
Kidnapping et extorsion d'informations. \
Se faire respecter par les gangs et organisations présentes en ville."
        },
        impact: {
            title: "Impact du Cartel de Sinaloa",
            text: "Contrôle du marché de la drogue : En dominant la production et la distribution de drogues comme la cocaïne et la méthamphétamine, le cartel renforcerait son influence économique et politique dans la ville, créant des tensions avec d'autres gangs.\n\nViolence et intimidation : L'usage de la force pour imposer le respect, éliminer des rivaux, ou intimider la population renforcerait la crainte de l'organisation, tout en créant des conflits réguliers avec les forces de l'ordre et les autres factions.\n\nCorruption et infiltration : Le cartel pourrait corrompre policiers, politiciens et avocats, permettant de contourner les enquêtes et de rester un pas en avance sur la justice.\n\nBlanchiment d'argent : Le cartel utiliserait des entreprises légitimes pour blanchir ses profits, créant un réseau de fausses sociétés dans la ville.\n\nCela créerait un environnement de tensions, conflits inter-gangs et de luttes pour le pouvoir, tout en influençant l'économie criminelle et légale du serveur."
        },
        objectifs: {
            title: "Objectifs du Cartel de Sinaloa",
            text: "Devenir la faction criminelle la plus influente : Développer une réputation de puissance en contrôlant les réseaux de drogue, en nouant des alliances stratégiques avec d'autres gangs, ou en écrasant toute opposition.\n\nRégner sur la ville : Imposer la domination du cartel dans chaque quartier de Los Santos, contrôler les points névralgiques comme les docks, les aéroports, et les routes de contrebande, tout en manipulant l'économie clandestine.\n\nInstaurer la peur chez les autorités : Pousser la police et les fédéraux à agir avec prudence en mettant en place des représailles violentes, des embuscades, et des assassinats ciblés pour qu'ils hésitent à intervenir contre le cartel.\n\nInfiltrer les sphères de pouvoir : Utiliser la corruption pour gagner des informateurs dans la police, obtenir des protections judiciaires et créer une zone d'impunité pour les actions criminelles du cartel.\n\nDiversifier les opérations : S'étendre au-delà du trafic de drogue, en intégrant des activités comme le trafic d'armes, le blanchiment d'argent à travers des entreprises légitimes, et même la prise de contrôle d'événements sociaux ou culturels pour gagner du prestige.\n\nCes objectifs visent à établir une domination totale du Cartel de Sinaloa, tant sur le plan criminel que social."
        },
        motivation: {
            title: "Motivation du Cartel de Sinaloa",
            text: "Tous les membres présents dans le projet sont des personnes avec de l'expérience illégale. \
Tous les membres ont un casier de sanctions vierge ou alors un casier très minime. \
\
\
De plus, nous sommes tous très actifs et nous souhaitons être l'un des groupes les plus actifs du serveur, et par le biais de nos motivations, faire vivre la partie illégale et légale du serveur. \
// ... reste du texte ..."
        },
        tenues: {
            title: "Tenues du Cartel de Sinaloa",
            text: "",
            pages: [
                '<img src="https://cdn.discordapp.com/attachments/1281583417175179265/1284550110465888348/image.png?ex=66e7b2c4&is=66e66144&hm=90159ea87d9ac1ae98b43114e6494e6b958dccb82295059a74b3493151a2ebb9&" alt="Tenue 1" style="max-width: 100%; height: auto;">',
            ]
        },
        vehicules: {
            title: "Véhicules du Cartel de Sinaloa",
            text: "",
            pages: [
                '<img src="https://cdn.discordapp.com/attachments/1276311307334848543/1281598559271256146/image.png?ex=66e6d92b&is=66e587ab&hm=21e6e33e3691726dd9d0292a5611c9ecbcd0ec003acb2065ec3e82234210acfe&" alt="Image 1" style="max-width: 100%; height: auto;">',
                '<img src="https://cdn.discordapp.com/attachments/1276311307334848543/1281599660217208965/image.png?ex=66e6da31&is=66e588b1&hm=b975746e2f1273e362db579a71ea55cb61936dfda959953caa7c7c00cd42db9f&" alt="Image 2" style="max-width: 100%; height: auto;">',
                '<img src="https://cdn.discordapp.com/attachments/1276311307334848543/1281599123761532949/image.png?ex=66e6d9b2&is=66e58832&hm=4e0005e6212a2529ea32ef916003284260a4b9652663ad2079af844cbffe12bd&" alt="Image 3" style="max-width: 100%; height: auto;">'
            ]
        }
    };

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const key = this.id.split('-')[1];
            modalTitle.textContent = content[key].title;
            modalText.textContent = content[key].text;
            
            if (key === 'vehicules') {
                vehicleButtons.style.display = 'block';
                showVehiclePage(1);
            } else {
                vehicleButtons.style.display = 'none';
                vehiclePages.forEach(page => page.style.display = 'none');
            }
            
            if (key === 'tenues') {
                document.getElementById('tenues-buttons').style.display = 'block';
                showTenuesPage(1);
            } else {
                document.getElementById('tenues-buttons').style.display = 'none';
                document.querySelectorAll('.tenues-page').forEach(page => page.style.display = 'none');
            }
            
            modal.style.display = 'block';
        });
    });

    function showVehiclePage(pageNumber) {
        vehiclePages.forEach(page => page.style.display = 'none');
        const activePage = document.getElementById(`vehicle-page-${pageNumber}`);
        if (activePage) {
            activePage.style.display = 'block';
            activePage.innerHTML = content.vehicules.pages[pageNumber - 1];
        }
    }

    document.querySelectorAll('.vehicle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const pageNumber = this.getAttribute('data-page');
            showVehiclePage(pageNumber);
        });
    });

    function showTenuesPage(pageNumber) {
        document.querySelectorAll('.tenues-page').forEach(page => page.style.display = 'none');
        const activePage = document.getElementById(`tenues-page-${pageNumber}`);
        if (activePage) {
            activePage.style.display = 'block';
            activePage.innerHTML = content.tenues.pages[pageNumber - 1];
        }
    }

    document.querySelectorAll('.tenues-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const pageNumber = this.getAttribute('data-page');
            showTenuesPage(pageNumber);
        });
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
