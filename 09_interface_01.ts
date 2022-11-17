interface IPlayers {
    id: number;
    playerName: string;
    age: number;
    born: string;
    battingStyle: string;
    bollingStyle: string;
    playingRole: string;
    country: string;
}

var player_1: IPlayers = {
    id: 18,
    playerName: "Virat Kohali",
    age: 34,
    born: "Fifth November Nineteen Eigthy Eight",
    battingStyle: "Right hand Bat",
    bollingStyle: "Right arm Medium",
    playingRole: "Top order Batter",
    country: "India"
}

var player_2: IPlayers = {
    id: 45,
    playerName: "Rohit Sharma",
    age: 35,
    born: "Thirtyth April Nineteen Eighty Seven",
    battingStyle: "Right hand Bat",
    bollingStyle: "Right arm Offbreak",
    playingRole: "Top order Batter",
    country: "India"
}

var player_3: IPlayers = {
    id: 15,
    playerName: "KL Rahul",
    age: 30,
    born: "Eighteen April Nineteen Ninety Two",
    battingStyle: "Right hand Bat",
    bollingStyle: "Wicketkeeper",
    playingRole: "Opening Batter",
    country: "India"
}

var player_4: IPlayers = {
    id: 7,
    playerName: "MS Dhoni",
    age: 41,
    born: "Seventh July Nineteen Eighty One",
    battingStyle: "Right hand Bat",
    bollingStyle: "Right arm Medium",
    playingRole: "Wicketkeeper Batter",
    country: "India"
}
var id = Number(prompt("Plase Enter Palyer ID"));
switch (id) {
    case 18:
        console.log(player_1);
        break;

    case 45:
        console.log(player_2);
        break;

    case 15:
        console.log(player_3);
        break;

    case 7:
        console.log(player_4);
        break;

    default:
        console.log("Invalid Enter...");

        break;
}