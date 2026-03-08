import { Link } from "react-router-dom";
import Header from "../components/header";
import sauteur from "../assets/images/sau1teur.gif";
import "../CSS/UnderConstruction.css";

interface Props {
	pageName: string;
}

function UnderConstruction({ pageName }: Props) {
	return (
		<div className="construction-page">
			<Header />
			<div className="construction-content">
				<h2 id="nos_events" className="rainbow">
					<span className="text">{pageName}</span>
				</h2>

				<div className="construction-banner">
					<img src="https://code.divshot.com/geo-bootstrap/img/test/new.gif" alt="new" />
					<span>Page en cours de construction !</span>
					<img src="https://code.divshot.com/geo-bootstrap/img/test/new.gif" alt="new" />
				</div>

				<div className="construction-body">
					<img
						src={sauteur}
						alt="smiley"
						className="construction-smiley"
					/>
					<p className="construction-message">
						Revenez bientôt, cette page est en cours de construction !<br />
						<em>Nos développeurs travaillent d'arrache-pied pour vous</em> 💪
					</p>
					<img
						src={sauteur}
						alt="smiley"
						className="construction-smiley"
					/>
				</div>

				<div className="banniere">
					<span className="texte-defilant">
						🚧 Page en construction — Merci de votre patience ! 🚧 &nbsp;&nbsp;&nbsp;
						Périlove Aventures — Loin, mais confort ! 🚧 Page en construction — Merci de votre patience !
					</span>
				</div>

				<Link to="/" className="bouttonInscrit construction-back">
					⬅ Retour à l'accueil
				</Link>
			</div>
		</div>
	);
}

export default UnderConstruction;
