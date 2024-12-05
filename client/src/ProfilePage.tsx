import type React from "react";
import { useState } from "react";
import "./ProfilePage.css";

const ProfilePage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const [searchCriteria, setSearchCriteria] = useState({
		gender: "",
		seeking: "",
		ageFrom: "",
		ageTo: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log({ email, password, rememberMe, searchCriteria });
	};

	return (
		<div className="profile-page">
			<header>
				<div className="logo">LOGO</div>
				<h1>PAGE PROFILES</h1>
			</header>

			<main className="profile-container">
				<div className="profile-images">
					{Array(6)
						.fill(null)
						.map((_, index) => (
							<div key={index} className="profile-card">
								<img src="https://via.placeholder.com/150" alt="Profile" />
							</div>
						))}
				</div>

				<div className="form-container">
					<p>Découvrez les merveilles du Périgord et trouvez votre âme soeur</p>

					<form onSubmit={handleSubmit}>
						<div className="search-fields">
							<div className="search-field">
								<label>Je suis</label>
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
								<label>je cherche</label>
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
								<label>âge de</label>
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
								<label>à</label>
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
							<p>Vous êtes déjà inscrit ?</p>
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
									se souvenir de moi
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
