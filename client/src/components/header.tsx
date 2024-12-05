// import Vichy from "../assets/images/Vichy.jpg";
import "./header.css";
import Logo from "../assets/images/Logo.png";

function Header() {
	return (
		<>
			<header>
				<img src={Logo} alt="Logo_Périlove" id="Logo" />
				<nav className="NavBar">
					<button type="button" className="boutons_du_footer">
						Nos membres
					</button>
					<button type="button" className="boutons_du_footer">
						Nos événements
					</button>
					<button type="button" className="boutons_du_footer">
						Livre d'or
					</button>
					<button type="button" className="boutons_du_footer">
						Forum
					</button>
					<button type="button" className="boutons_du_footer">
						FAQ
					</button>
					<button type="button" className="boutons_du_footer">
						Aidez-moi !
					</button>
				</nav>

				{/* <img src={Vichy} alt="VichyBackground" id="vichy_background" /> */}
			</header>
		</>
	);
}

export default Header;
