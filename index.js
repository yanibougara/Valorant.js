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

