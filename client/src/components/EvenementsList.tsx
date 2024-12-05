import EvenementCard from "./EvenementCard";
import type { Evenement } from "./Evenements";

interface EvenementListProps {
	evenements: Evenement[];
}

function EvenementsList({ evenements }: EvenementListProps) {
	return (
		<div>
			{evenements.map((evenement: Evenement) => (
				<EvenementCard key={evenement.id} evenement={evenement} />
			))}
		</div>
	);
}

export default EvenementsList;
