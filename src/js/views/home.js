import React, { useState, useContext, useEffect } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Home = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const { store, actions } = useContext(Context);

	const history = useHistory();

	useEffect(
		() => {
			if (store.isAuthenticate) {
				history.push("/demo");
			}
		},
		[store.isAuthenticate]
	);

	return (
		<div className="text-center mt-5">
			<input type="email" placeholder="Ingresar email" onChange={e => setEmail(e.target.value)} value={email} />
			<input
				type="password"
				placeholder="Ingresar contraseña"
				onChange={e => setPassword(e.target.value)}
				value={password}
			/>
			<button onClick={() => actions.sign_in(email, password)}>Ingresar</button>
		</div>
	);
};
