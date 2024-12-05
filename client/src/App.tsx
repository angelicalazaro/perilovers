import { Outlet } from "react-router-dom";
import "./App.css";
import ProfilePage from "./ProfilePage";
import MovingImage from "./MovingImage";
import Charentaise from "./assets/images/Charentaise.png";
import FakeAd from "./FakeAd";

// Ajout des URLs des images
// import img from “./assets/images/sau1teur.gif”;
import Header from "./components/header.tsx";
import EvenementsList from "./components/EvenementsList";
import { events } from "./components/Evenements";
// import Home from “./pages/Home”;
// import LoginPage from “./pages/LoginPage”;
const imageUrls = [Charentaise, Charentaise, Charentaise, Charentaise];
function App() {
	return (
		<>
			<h3>
				Cherchez-moi !{" "}
				<img src="./assets/images/sau1teur.gif" alt="gif_sauteur" />
				{/* //ne marche pas pour l'instant */}{" "}
			</h3>
			<div>
				<script
					async
					src="https://cse.google.com/cse.js?cx=b2615d1ca9908476e"
				/>
			</div>
			<div className="gcse-search"></div>
			<main>
				<Outlet />

				<img src="../assets/images/pub_charantaises.png" alt="Pub" />
			</main>
			<footer>
				<p className="liens_footer">
					<a href="https://myspace.com/">myspace </a>
					<a href="https://myspace.com/"> skyblog </a>
					<a href="https://myspace.com/"> latinchat </a>
					<a href="https://myspace.com/"> caramail </a>
					<a href="https://myspace.com/"> wanadoo </a>
					<a href="https://myspace.com/"> msn</a>
				</p>
			</footer>
			{/* <div style={{ height: "100vh", width: "100vw" }}>
				{imageUrls.map((url, index) => (
					<MovingImage key={index} src={url} />
				))}

				<ProfilePage />
				<div>
					<FakeAd />
				</div> */}
		</>
	);
}
export default App;
