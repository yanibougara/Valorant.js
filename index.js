let attaquants = ["OmenAtt", "JettAtt", "PhoenixAtt", "FadeAtt", "ChamberAtt"];
let defenseurs = ["OmenDEff", "JettDeff", "PhoenixDeff", "FadeDeff", "ChamberDeff"];


function killer() {
    
    if (Math.random() < 0.5) {
        let attaquantRandom = (Math.floor(Math.random() * attaquants.length));
        let defenseurRandom = (Math.floor(Math.random() * attaquants.length));
        console.log(attaquants[attaquantRandom] + " tue " + defenseurs[defenseurRandom]);
        defenseurs.splice(defenseurRandom, 1);
        console.log(defenseurs)
    } else if (Math.random() > 0.5) {
        let defenseurRandom = (Math.floor(Math.random() * attaquants.length));
        let attaquantRandom = (Math.floor(Math.random() * attaquants.length));
        console.log(defenseurs[defenseurRandom] + " tue " + attaquants[attaquantRandom]);
        attaquants.splice(attaquantRandom, 1);
        console.log(attaquants)
    }
}

function spikePlanté() {
    // let probaSPike = Math.random();
    if (attaquants.length > defenseurs.length) {
        if (Math.random() < 0.6) {
            console.log("Spike planté");
            if (Math.random() < 0.7) {
                let attaquantRandom = (Math.floor(Math.random() * attaquants.length));
                let defenseurRandom = (Math.floor(Math.random() * attaquants.length));
                console.log(attaquants[attaquantRandom] + " tue " + defenseurs[defenseurRandom]);
                defenseurs.splice(defenseurRandom, 1);
                console.log(defenseurs)
            } else if (Math.random() > 0.3) {
                let defenseurRandom = (Math.floor(Math.random() * attaquants.length));
                let attaquantRandom = (Math.floor(Math.random() * attaquants.length));
                console.log(defenseurs[defenseurRandom] + " tue " + attaquants[attaquantRandom]);
                attaquants.splice(attaquantRandom, 1);
                console.log(attaquants)
            }
        } else {
            console.log("Spike non planté");
        }
    } else {
        if (Math.random() < 0.4) {
            console.log("Spike planté")
            if (Math.random() < 0.7) {
                let attaquantRandom = (Math.floor(Math.random() * attaquants.length));
                let defenseurRandom = (Math.floor(Math.random() * attaquants.length));
                console.log(attaquants[attaquantRandom] + " tue " + defenseurs[defenseurRandom]);
                defenseurs.splice(defenseurRandom, 1);
                console.log(defenseurs)
            } else if (Math.random() > 0.3) {
                let defenseurRandom = (Math.floor(Math.random() * attaquants.length));
                let attaquantRandom = (Math.floor(Math.random() * attaquants.length));
                console.log(defenseurs[defenseurRandom] + " tue " + attaquants[attaquantRandom]);
                attaquants.splice(attaquantRandom, 1);
                console.log(attaquants)
            }
        } else {
            console.log("Spike non planté");
        }
    }
}

let = SpikeWasPlanted = false















killer();
spikePlanté();

//    if (defenseur && random < 0.6) {
//      console.log("Le spike est amorcé !");
//    } else {
//      console.log("Le spike n'est pas amorcé.");
//    }


//    if (attaquant && random < 0.4) {
//      console.log("Le spike est amorcé !");
//    } else {
//      console.log("Le spike n'est pas amorcé.");
//    }


//    function duel() {
//      const random = Math.random();
  
//      if (random < 0.5) {
//        console.log("Le joueur gagne le duel.");
//      } else {
//        console.log("Le joueur perd le duel.");
//      }
//    }
  
//    function amorcerSpikeEnCasDeMort() {
//      const random = Math.random();
//      const defenseur = true; 
  
//      if (estDefenseur && random < 0.6) {
//        console.log("Le spike est amorcé !");
//      } else {
//        console.log("Le spike n'est pas amorcé.");
  
       // Si le spike n'est pas amorcé, effectuez le duel
    //    duel();
//      }
//   }
//  amorcerSpikeEnCasDeMort();
  













// class Joueur {
//   constructor(name, role, pv) {
//     this.name = name;
//     this.role = role;
//     this.pv = pv;
//   }

//   tuerAdversaire(adversaire) {
//     const random = Math.random();
//     if (random < 0.5) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   amorcerSpike(attaquant) {
//     const random = Math.random();
//     if (attaquant && random < 0.4) {
//       return true;
//     } else if (!attaquant && random < 0.6) {
//       return true;
//     }
//     return false;
//   }
// }

// const attaquants = [
//   new Joueur("OmenAtt", "smoker", 100),
//   new Joueur("JettAtt", "killer", 100),
//   new Joueur("PhoenixAtt", "flasher", 100),
//   new Joueur("FadeAtt", "pas de caractéristique", 100),
//   new Joueur("ChamberAtt", "pas de caractéristique", 100)
// ];

// const defenseurs = [
//   new Joueur("OmenDEff", "smoker", 100),
//   new Joueur("JettDeff", "killer", 100),
//   new Joueur("PhoenixDeff", "flasher", 100),
//   new Joueur("FadeDeff", "pas de caractéristique ", 100),
//   new Joueur("ChamberDeff", "pas de caractéristique", 100)
// ];

// let manchesAttaquants = 0;
// let manchesDefenseurs = 0;

// while (manchesAttaquants < 13 && manchesDefenseurs < 13) {
// const attaquantAleatoire = attaquants[Math.floor(Math.random() * attaquants.length)];
// const defenseurAleatoire = defenseurs[Math.floor(Math.random() * defenseurs.length)];

//   if (attaquantAleatoire.tuerAdversaire(defenseurAleatoire)) {
//     if (defenseurAleatoire.amorcerSpike(false)) {
//       console.log("Les attaquants ont amorcé le spike.");
//       manchesAttaquants++;
//     } else {
//       console.log("Les attaquants n'ont pas réussi à amorcer le spike");
//     }
//   } else {
//     if (attaquantAleatoire.amorcerSpike(true)) {
//       console.log("Les défenseurs ont amorcé le spike");
//       manchesDefenseurs++;
//     } else {
//       console.log("Les défenseurs n'ont pas réussi à amorcer le spike");
//     }
//   }
// }

// if (manchesAttaquants === 13) {
//   console.log("Les attaquants ont remporté la partie !");
// } else {
//   console.log("Les défenseurs ont remporté la partie !");
// }
