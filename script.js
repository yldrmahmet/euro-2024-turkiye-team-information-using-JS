document.addEventListener("DOMContentLoaded", function() {
  setPlayerCards(); // display all players
});

// variables
const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const euroCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

// object
const myFavoriteFootballTeam = {
  team: "Türkiye",
  sport: "Football",
  year: 2024,
  isEuroCupWinner: false,
  headCoach: {
    coachName: "Vincenzo Montella",
    matches: 5,
  },
  players: [
    {
      name: "Kerem Aktürkoğlu",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "wizard",
    },
    {
      name: "Okay Yokuşlu",
      position: "midfielder",
      number: 5,
      isCaptain: false,
      nickname: null,
    },
     {
      name: "Orkun Kökçü",
      position: "midfielder",
      number: 6,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Yunus Akgün",
      position: "forward",
      number: 25,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Hakan Çalhanoğlu",
      position: "midfielder",
      number: 10,
      isCaptain: true,
      nickname: "maestro",
    },
    {
      name: "Bertuğ Yıldırım",
      position: "forward",
      number: 26,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Zeki Çelik",
      position: "defender",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Merih Demiral",
      position: "defender",
      number: 3,
      isCaptain: false,
      nickname: "golcü defans",
    },
    {
      name: "Arda Güler",
      position: "forward",
      number: 8,
      isCaptain: false,
      nickname: "Wonder Kid",
    },
    {
      name: "Samet Akaydin",
      position: "defender",
      number: 4,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ahmetcan Kaplan",
      position: "defender",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "İrfan Can Kahveci",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Salih Özcan",
      position: "midfielder",
      number: 15,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Cenk Tosun",
      position: "forward",
      number: 9,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "İsmail Yüksek",
      position: "midfielder",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Abdülkerim Bardakcı",
      position: "defender",
      number: 14,
      isCaptain: false,
      nickname: "apo",
    },
    {
      name: "Kaan Ayhan",
      position: "midfielder",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Semih Kılıçsoy",
      position: "forward",
      number: 24,
      isCaptain: false,
      nickname: "the bull",
    },
    {
      name: "Mert Günok",
      position: "goalkeeper",
      number: 1,
      isCaptain: false,
      nickname: "örümcek, ahtapot",
    },
    {
      name: "Mert Müldür",
      position: "defender",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Yusuf Yazıcı",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Altay Bayındır",
      position: "goalkeeper",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Kenan Yıldız",
      position: "forward",
      number: 19,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ferdi Kadıoğlu",
      position: "defender",
      number: 20,
      isCaptain: false,
      nickname: "Roberto Kadıoğlu",
    },
    {
      name: "Uğurcan Çakır",
      position: "goalkeeper",
      number: 23,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Barış Alper Yılmaz",
      position: "forward",
      number: 21,
      isCaptain: false,
      nickname: "the bull",
    },
  ],
};

// constant object
Object.freeze(myFavoriteFootballTeam);

// destructuring
const { coachName } = myFavoriteFootballTeam.headCoach;
const { sport, team, year, players } = myFavoriteFootballTeam;
/* 
const sport = myFavoriteFootballTeam.sport;
const team = myFavoriteFootballTeam.team;
const year = myFavoriteFootballTeam.year;
const players = myFavoriteFootballTeam.players;
4 line is equal to 1 line
*/

// display data
typeOfSport.textContent = sport;
teamName.textContent = team;
euroCupYear.textContent = year;
headCoach.textContent = coachName;

// display players
const setPlayerCards = (arr = players) => {
  playerCards.innerHTML = arr
    .map(
      ({ name, position, number, isCaptain, nickname }) =>
        `
        <div class="player-card">
          <h2>${isCaptain ? "(Kaptan)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

setPlayerCards();

// filtering players
playersDropdownList.addEventListener("change", (e) => {
  const filterValue = e.target.value;
  let filteredPlayers;

  switch (filterValue) {
    case "nickname":
      filteredPlayers = players.filter((player) => player.nickname !== null);
      break;
    case "forward":
      filteredPlayers = players.filter((player) => player.position === "forward");
      break;
    case "midfielder":
      filteredPlayers = players.filter((player) => player.position === "midfielder");
      break;
    case "defender":
      filteredPlayers = players.filter((player) => player.position === "defender");
      break;
    case "goalkeeper":
      filteredPlayers = players.filter((player) => player.position === "goalkeeper");
      break;
    default:
      filteredPlayers = players;
  }

  setPlayerCards(filteredPlayers);
});
