export interface Evenement {
	id: number;
	name: string;
	description: string;
	lieu: string;
	date: string;
picture : string}

export const events: Evenement[] = [
	{
		id: 1,
		name: "Musée du Liège et du Bouchon ",
		description:
			"Si le Périgord n'a pas son musée de la charentaise, il pourrait se vanter de ses liens avec le liège et l'artisanat traditionnel.",
		date: "samedi 7 décembre 2024",
		lieu: "Mézin",
		picture : "https://les-petits-curieux.fr/wp-content/uploads/2020/03/bouchon-liege-mezin-47.jpg"
	},
	{
		id: 2,
		name: "Créer votre propre poterie préhistorique",
		description:
			"Dans l'esprit des objets trouvés à Lascaux, un atelier où les visiteurs fabriquent des poteries à l'ancienne ou des bijoux en os et pierre.",
		date: "dimanche 8 décembre 2024",
		lieu: "Bergerac",
		picture : "https://www.la-poterie-eponyme.com/wp-content/uploads/2021/07/atelier_prehistoire-La_poterie_eponyme-9.jpg"
	},
	{
		id: 3,
		name: "Initiation à la fabrication de sabots ou de chaises rustiques",
		description:
			"En écho à l'artisanat traditionnel périgourdin, apprenez à concevoir vos sabots pour être au chaud.",
		date: "mercredi 11 décembre 2024",
		lieu: "Coux et Bigaroque-Mouzens",
		picture :"https://www.sabot-breton.com/images/phocagallery/fabrication/thumbs/phoca_thumb_l_dsc_1761rs.jpg"
	},
	{
		id: 4,
		name: "Atelier de fauconnerie décalé",
		description:
			"Apprenez à manipuler des oiseaux de proie tout en explorant des histoires liées à la chasse médiévale.",
		date: "jeudi 12 décembre 2024",
		lieu: "Lamonzie St-Martin",
		picture: "https://images.radio-canada.ca/q_auto,w_1000/v1/ici-info/1x1/empreintes-faucon-paul-jean-terrain.jpg"
	},
	{
		id: 5,
		name: "Une après-midi mots fléchés",
		description:
			"Un moment ludique et convivial autour de la résolution de mots fléchés, parfait pour les amateurs de jeux de lettres.",
		date: "dimanche 15 décembre 2024",
		lieu: "MJC de Saint Meard de Gurçon",
		picture: "https://primanyc.net/wp-content/uploads/2020/03/mots-fleches-de-votre-femmes-daujourdhui-du-3-janvier-interieur-jouer-aux-mots-fleches.jpg"
	},
];

export default Evenement;
