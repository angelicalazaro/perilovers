import EvenementsList from "../components/EvenementsList";
import { events } from "../components/Evenements";
import { useState, useEffect } from "react";
import "../CSS/Home.css";
import Header from "../components/header";
import charantaisesImage from "../assets/images/pub_charantaises.png";
import Crazy from "../assets/images/crazy.png";
import Hots from "../assets/images/hots.png";

function Home() {
	const [visitorCount, setVisitorCount] = useState(10245); // Déplacez VisitorCounter ici
	useEffect(() => {
		// Simulation d'une augmentation du nombre de visiteurs
		const interval = setInterval(() => {
			setVisitorCount(
				(prevCount) => prevCount + Math.floor(Math.random() * 5) + 1,
			);
		}, 3000);

		return () => clearInterval(interval);
	}, []);


	return (
		<>
			<header>
				<Header />
			</header>

			<div>
				<p className="visitor">
					Visiteurs : {visitorCount}{" "}
					<img
						src="https://www.smiley-lol.com/smiley/energique/sautillant.gif"
						alt="test"
					/>
				</p>
			</div>
			<div className="banniere">
				<div className="texte-defilant">
					N°1 des sites de rencontre pour Périgordins et Périgordines{" "}
					<img
						src="https://www.smiley-lol.com/smiley/drague/amour/emotlove28.gif"
						alt="test"
					/>
				</div>
			</div>


			<div className="gcse-search">
				<img
					src="https://gifcities.org/assets/search.gif"
					alt="Recherche"
					style={{ width: "30px", height: "30px", cursor: "pointer" }}
				/>
			</div>

			<h2 id="nos_events" className="rainbow">
				<span className="text">Nos événements</span>
			</h2>
			<div className="content-container">
				<div id="events">
					<EvenementsList evenements={events} />
				</div>
				<div id="pub">
					<div id="charentaises">
						<img src={charantaisesImage} alt="charantaise forever" />
					</div>
					<div id="crazy">
						<img src={Crazy} alt="crazy_frog" />
					</div>
					<div id="hot">
						<img src={Hots} alt="Milf" />
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
