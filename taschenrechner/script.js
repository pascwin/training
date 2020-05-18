
function addieren(zahl1, zahl2) {
    return Number(zahl1) + Number(zahl2);
}

function subtrahieren(zahl1, zahl2) {
    return Number(zahl1) - Number(zahl2);
}

function multiplizieren(zahl1, zahl2) {
    return Number(zahl1) * Number(zahl2);
}

function dividieren(zahl1, zahl2) {
    return Number(zahl1) / Number(zahl2);
}

function rechnen(zahl1, zahl2) {
    var operation = prompt("Möchtest du deine Zahlen addieren, subtrahieren, multiplizieren oder dividieren?");
    var zahl1 = prompt("Nenne deine erste Zahl")
    var zahl2 = prompt("Nenne deine zweite Zahl")
    if (operation === "addieren") {
        return addieren(zahl1, zahl2);
    } else if (operation === "subtrahieren") {
        return subtrahieren(zahl1, zahl2);
    } else if (operation === "multiplizieren") {
        return multiplizieren(zahl1, zahl2);
    }  else if (operation === "dividieren") {
        return dividieren(zahl1, zahl2);
    } else {
        return "diese Operation gibt es nicht";
    }
}

