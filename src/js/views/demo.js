import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getAllPlanets();
	});

	return (
		<div className="container">
			<ul className="list-group">
				{store.planets.map((item, index) => {
					return (
						<li key={index} className="list-group-item d-flex justify-content-between">
							<Link to={"/planet/" + index}>
								<span>{item.name}</span>
							</Link>

							<button className="btn btn-danger" onClick={() => actions.deletePlanet(item.id)}>
								Borrar
							</button>
						</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
