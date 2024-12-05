import type React from "react";
import { useState, useEffect } from "react";

interface MovingImageProps {
	src: string;
}

const MovingImage: React.FC<MovingImageProps> = ({ src }) => {
	const newRandom = Math.floor(Math.random() * 800) + 1;
	const [position, setPosition] = useState({ x: newRandom, y: 0 });

	useEffect(() => {
		const interval = setInterval(() => {
			const newRandom = Math.floor(Math.random() * 30) + 1; //modifie la vitesse 
			console.log(newRandom);

			setPosition((prev) => ({
				x: newRandom, // Bouge horizontalement
				y: (prev.y + newRandom) % window.innerHeight,
			}));
		}, 50); // Vitesse d'animation

		return () => clearInterval(interval); // Nettoyage
	}, []);

	return (
		<img
			src={src}
			alt="Moving"
			style={{
				position: "absolute",
				top: position.y,
				left: position.x,
				width: "100px",
				height: "100px",
			}}
		/>
	);
};

export default MovingImage;
