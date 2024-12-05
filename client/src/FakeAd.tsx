import type React from "react";
import pub_charantaises from "./assets/images/pub_charantaises.png";

const FakeAd: React.FC = () => {
	return (
		<div style={styles.adContainer}>
			<h2 style={styles.title}>🥿 Les Charentaises Éternelles !</h2>
			<p style={styles.text}>
				Découvrez le confort ultime avec nos charentaises 100% laine et 100%
				style. Parfaites pour coder en toute sérénité, même par temps glacial.
			</p>
			<button
				type="button"
				style={styles.button}
				onClick={() => alert("Charentaises ajoutées au panier !")}
			>
				Découvrir maintenant
			</button>
			<img src={pub_charantaises} alt="Charentaises" style={styles.image} />
		</div>
	);
};

const styles = {
	adContainer: {
		border: "2px solid #ccc",
		borderRadius: "10px",
		padding: "20px",
		maxWidth: "400px",
		textAlign: "center" as const,
		backgroundColor: "#f9f9f9",
		margin: "20px auto",
		boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
	},
	title: {
		fontSize: "20px",
		fontWeight: "bold",
		marginBottom: "10px",
	},
	text: {
		fontSize: "16px",
		marginBottom: "20px",
	},
	button: {
		padding: "10px 20px",
		fontSize: "16px",
		backgroundColor: "#007BFF",
		color: "#fff",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
	},
	image: {
		marginTop: "15px",
		maxWidth: "100%",
		borderRadius: "5px",
	},
};

export default FakeAd;
