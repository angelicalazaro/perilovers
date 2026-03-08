import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

function ErrorPage() {
	const error = useRouteError();

	let message = "Une erreur inattendue s'est produite.";
	let status = "";

	if (isRouteErrorResponse(error)) {
		status = `${error.status}`;
		message =
			error.status === 404
				? "Cette page n'existe pas."
				: error.statusText || message;
	} else if (error instanceof Error) {
		message = error.message;
	}

	return (
		<div style={{ textAlign: "center", padding: "4rem", fontFamily: "sans-serif" }}>
			<h1 style={{ fontSize: "4rem" }}>💔</h1>
			{status && <h2>Erreur {status}</h2>}
			<p>{message}</p>
			<Link to="/">Retour à l'accueil</Link>
		</div>
	);
}

export default ErrorPage;
