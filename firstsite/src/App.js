import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section";
import ListItem from "./components/ListItem";

const GamesListDate = [
  {
    id: 1,
    href: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg",
    alt: "Imagem do jogo League of Legends",
  },

  {
    id: 2,
    href: "https://www.twitch.tv/directory/game/VALORANT",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg",
    alt: "Imagem do jogo Valorant",
  },

  {
    id: 3,
    href: "https://www.twitch.tv/directory/game/Minecraft",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    alt: "Imagem do jogo Minecraft",
  },

  {
    id: 4,
    href: "https://www.twitch.tv/directory/game/Teamfight%20Tactics",
    src: "https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg",
    alt: "Imagem do jogo TFT",
  },
];

const StreameListDate = [
  {
    id: 1,
    href: "https://www.twitch.tv/maykbrito",
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Mayk Brito",
  },

  {
    id: 2,
    href: "https://www.twitch.tv/alanzoka",
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagem de Alanzoka",
  },

  {
    id: 3,
    href: "https://www.twitch.tv/cellbit",
    src: "https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png",
    alt: "Imagemd de Cellbit",
  },
];

const SocialListDate = [
  {
    id: 1,
    href: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    src: "/assets/twitch.svg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    id: 2,
    href: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    src: "/assets/twitter.svg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    id: 3,
    href: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    src: "/assets/instagram.svg",
    alt: "Imagem do jogo League of Legends",
  },
  {
    id: 4,
    href: "https://www.twitch.tv/directory/game/League%20of%20Legends",
    src: "/assets/youtube.svg",
    alt: "Imagem do jogo League of Legends",
  },
];

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Section title="Meus Jogos" subtitle="os Games" className="games-list">
          {GamesListDate.map(function (item) {
            return (
              <ListItem
                key={item.id}
                href={item.href}
                src={item.src}
                alt={item.alt}
              ></ListItem>
            );
          })}
        </Section>

        <Section
          title="Canais de Stremers"
          subtitle="os canais"
          className="channel-list"
        >
          {StreameListDate.map((item) => {
            return (
              <ListItem
                key={item.id}
                href={item.href}
                src={item.src}
                alt={item.alt}
              ></ListItem>
            );
          })}
        </Section>

        <Section
          title="Minhas redes"
          subtitle="se conecte"
          className="social-list"
        >
          {SocialListDate.map((item) => {
            return (
              <ListItem
                key={item.id}
                href={item.href}
                src={item.src}
                alt={item.alt}
              ></ListItem>
            );
          })}
        </Section>
      </main>
    </div>
  );
}

export default App;
