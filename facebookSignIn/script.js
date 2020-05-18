

var database = [
    {
        username: "Pascal",
        password: "1234"
    },

    {
        username: "Sally",
        password: "1234"
    },

    {
        username: "Peter",
        password: "1234"
    },
];

var newsfeed = [
    {
        username: "Pascal",
        timeline: "1234",
    },
    {
        username: "Peter",
        timeline: "567",
    },
    {
        username: "Ulf",
        timeline: "1234",
    }
];

var userNamePrompt = prompt("Wie ist dein Username?");
var passwordPrompt = prompt("Wie ist dein Passwort?");

function isUserValid(username, password) {
    var databaseLength = database.length
    for (i = 0; i < databaseLength; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
}

function logIn(user, pass) {
    var istPasswortKorrekt = isUserValid(user, pass)
    if (istPasswortKorrekt === true) {
        console.log(newsfeed);
    } else 
    console.log("Passwort falsch oder username falsche")
}

logIn(userNamePrompt, passwordPrompt)