import type React from "react";
import { useState, useEffect } from "react";
import "../CSS/ProfilePage.css";
import Header from "../components/header";

interface Profile {
	id: string;
	name: string;
	age: number;
	picture: string;
}

const ProfilePage: React.FC = () => {
	const [profiles, setProfiles] = useState<Profile[]>([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const [searchCriteria, setSearchCriteria] = useState({
		gender: "",
		seeking: "",
		ageFrom: "",
		ageTo: "",
	});

	// Fetch profiles from API
	useEffect(() => {
		const fetchProfiles = async () => {
			try {
				const response = await fetch(
					"https://randomuser.me/api/?results=128&nat=us,gb,fr", // Fetch 12 users for filtering
				);
				const data = await response.json();

				// Filter profiles for age > 50
				const filteredProfiles = data.results
					.filter((user: any) => user.dob.age > 50) // Keep only users older than 50
					.slice(0, 6) // Limit to 6 profiles
					.map((user: any) => ({
						id: user.login.uuid,
						name: `${user.name.first} ${user.name.last}`,
						age: user.dob.age,
						picture: user.picture.large,
					}));

				setProfiles(filteredProfiles);
			} catch (error) {
				console.error("Error fetching profiles:", error);
			}
		};

		fetchProfiles();
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log({ email, password, rememberMe, searchCriteria });
	};

	return (
		<div className="profile-page">
			<header>
				<Header />
				<div className="logo">LOGO</div>
				<h1>PAGE PROFILES</h1>
			</header>

			<main className="profile-container">
				<div className="profile-images">
					{profiles.length > 0 ? (
						profiles.map((profile) => (
							<div key={profile.id} className="profile-card">
								<img src={profile.picture} alt={`Profile of ${profile.name}`} />
								<div className="profile-info">
									<h3>{profile.name}</h3>
									<p>Age: {profile.age}</p>
								</div>
							</div>
						))
					) : (
						<p>Loading profiles...</p>
					)}
				</div>

				<div className="form-container">
					<p>Découvrez les merveilles du Périgord et trouvez votre âme soeur</p>

					<form onSubmit={handleSubmit}>
						<div className="search-fields">
							<div className="search-field">
								<label>Je suis :</label>
								<input
									type="text"
									value={searchCriteria.gender}
									onChange={(e) =>
										setSearchCriteria({
											...searchCriteria,
											gender: e.target.value,
										})
									}
								/>
							</div>
							<div className="search-field">
								<label>Je recherche</label>
								<input
									type="text"
									value={searchCriteria.seeking}
									onChange={(e) =>
										setSearchCriteria({
											...searchCriteria,
											seeking: e.target.value,
										})
									}
								/>
							</div>
							<div className="search-field">
								<label>Âge de : </label>
								<input
									type="number"
									value={searchCriteria.ageFrom}
									onChange={(e) =>
										setSearchCriteria({
											...searchCriteria,
											ageFrom: e.target.value,
										})
									}
								/>
								<label>Â</label>
								<input
									type="number"
									value={searchCriteria.ageTo}
									onChange={(e) =>
										setSearchCriteria({
											...searchCriteria,
											ageTo: e.target.value,
										})
									}
								/>
							</div>
						</div>

						<div className="login-section">
							<p>Êtes-vous déjà inscrit ?</p>
							<input
								type="email"
								placeholder="adresse email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<input
								type="password"
								placeholder="mot de passe"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<div className="remember-me">
								<label>
									<input
										type="checkbox"
										checked={rememberMe}
										onChange={(e) => setRememberMe(e.target.checked)}
									/>
									Se souvenir de moi
								</label>
							</div>
							<button type="submit">Se connecter</button>
						</div>
					</form>
				</div>
			</main>
		</div>
	);
};

export default ProfilePage;
