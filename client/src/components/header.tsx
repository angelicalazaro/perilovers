// import Vichy from "../assets/images/Vichy.jpg";
import "../CSS/header.css";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

function Header() {
	return (
		<>
			<header>
				<Link to="/">
					<img src={Logo} alt="Logo_Périlove" id="Logo" />
				</Link>
				<nav className="NavBar">
					<Link to="/profils" className="boutons_du_footer">
						<span>Nos membres </span>
						<img src="https://www.smiley-lol.com/smiley/heureux/coeurtendu.gif" alt="" />
					</Link>

					<Link to="/" className="boutons_du_footer">
						<span>Nos événements </span>
						<img src="https://www.smiley-lol.com/smiley/expressifs/communiquer/expressif07.gif" alt="" />
					</Link>

					<Link to="/livre-dor" className="boutons_du_footer">
						<img src="https://code.divshot.com/geo-bootstrap/img/test/new.gif" alt="new" />
						<span> Livre d'or </span>
						<img src="https://www.smiley-lol.com/smiley/expressifs/communiquer/blah1.gif" alt="" />
					</Link>

					<Link to="/forum" className="boutons_du_footer">
						<span>Forum </span>
						<img src="https://www.smiley-lol.com/smiley/ordinateurs/ordi1fun.gif" alt="" />
					</Link>

					<Link to="/faq" className="boutons_du_footer">
						<span>FAQ </span>
						<img src="https://www.smiley-lol.com/smiley/expressifs/communiquer/secret02.gif" alt="" />
					</Link>

					<Link to="/aide" className="boutons_du_footer">
						<span>Aidez-moi ! </span>
						<img src="https://www.smiley-lol.com/smiley/halloween-peur/peurblanc.gif" alt="" />
					</Link>
				</nav>

				{/* <img src={Vichy} alt="VichyBackground" id="vichy_background" /> */}
			</header>
		</>
	);
}

export default Header;
