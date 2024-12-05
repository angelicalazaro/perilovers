import type { Evenement } from "./Evenements";
import { useState } from "react";

interface EvenementCardProps {
	evenement: Evenement;
}
function EvenementCard({ evenement }: EvenementCardProps) {
	const [inscrit, setInscrit] = useState(false);

	return (
		<>
			<figure className="card">
        <img src = {evenement.picture}/>
				<h3>{evenement.name}</h3>
				<p>
					{evenement.description} <br />
					Lieu {evenement.lieu}
					{evenement.date}
				</p>{" "}
				<button className="bouttonInscrit" onClick={() => setInscrit(!inscrit)}>
					{inscrit ? "Je suis inscrit(e) " : "Je m'inscris"}
				</button>
			</figure>
		</>
	);
}

export default EvenementCard;
