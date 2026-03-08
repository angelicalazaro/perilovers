import React, { useState, useEffect } from "react";
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
		const controller = new AbortController();

		const fetchProfiles = async () => {
			try {
				const response = await fetch(
					"https://randomuser.me/api/?results=128&nat=us,gb,fr",
					{ signal: controller.signal },
				);
				const data = await response.json();

				const filteredProfiles = data.results
					.filter((user: any) => user.dob.age > 50)
					.slice(0, 6)
					.map((user: any) => ({
						id: user.login.uuid,
						name: `${user.name.first} ${user.name.last}`,
						age: user.dob.age,
						picture: user.picture.large,
					}));

				setProfiles(filteredProfiles);
			} catch (error: any) {
				if (error.name !== "AbortError") {
					console.error("Error fetching profiles:", error);
				}
			}
		};

		fetchProfiles();

		return () => {
			controller.abort();
		};
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log({ email, password, rememberMe, searchCriteria });
	};

	return (
		
		<div className="profile-page">
			<Header />
			<h2 id="nos_events" className="rainbow">
				<span className="text"><span>Nos profils </span><img src="https://code.divshot.com/geo-bootstrap/img/test/hot.gif" alt="" /></span>
			</h2>

			<div className="profile-container">
				<div className="profile-images">
					{profiles.length > 0 ? (
						profiles.map((profile) => (
							<div key={profile.id} className="profile-card">
								<img src={profile.picture} alt={`Profile of ${profile.name}`} />
								<div className="profile-info">
									<h3>{profile.name}</h3>
									<p>{`Age : ${profile.age}`}</p>
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
								<label>À</label>
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
			</div>
		</div>
	);
};

export default ProfilePage;
