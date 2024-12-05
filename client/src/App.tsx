import "./App.css";
import ProfilePage from "./ProfilePage";
import MovingImage from "./MovingImage";
import Charentaise from "./assets/images/Charentaise.png";
import FakeAd from "./FakeAd";

// Ajout des URLs des images
const imageUrls = [Charentaise, Charentaise, Charentaise, Charentaise];

function App() {
	return (
		<>
			<header>
				<h1 className="logo">Périlovers</h1>
			</header>

			<div style={{ height: "100vh", width: "100vw" }}>
				{imageUrls.map((url, index) => (
					<MovingImage key={index} src={url} />
				))}

				<ProfilePage />
				<div>
					<FakeAd />
				</div>
				<footer> </footer>
			</div>
		</>
	);
}

export default App;
