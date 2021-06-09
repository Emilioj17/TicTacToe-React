import React, { useState } from "react";

// const Clickeado = () => {
// 	if (squareClick[1] == undefined) {
// 		return <div></div>;
// 	} else if (squareClick[1] != undefined) {
// 		return <div>1</div>;
// 	}
// };

let squareClick = [];

const Clickeado = evento => {
	if (squareClick[1] == undefined) {
		return <div></div>;
	} else if (squareClick[1] != undefined) {
		console.log(`Hola desde ${evento} ${squareClick[1]}`);
		Home();
		return <div>2</div>;
	}
};

const Click = (casilla, evento) => {
	let aux;
	for (let x in squareClick) {
		// aux = squareClick[x] == casilla ? (aux = "") : (aux = casilla);
		if (squareClick[x] == casilla) {
			aux = "";
			break;
		} else {
			aux = casilla;
		}
	}
	// aux == "" ? console.log("nada") : (squareClick.push(aux));
	if (aux != "") {
		squareClick.push(aux);
		Clickeado(evento);
	}
};

export function Home() {
	return (
		<div className="text-center bg-secondary">
			<div className="superior text-white">
				<h1>
					<div className="display-4 d-inline">Tic Tac Toe</div> in
					React.js
				</h1>
			</div>
			<div className="central d-flex justify-content-center py-3">
				<div className="game">
					<div
						onClick={e => Click(1, e.target.className)}
						className="topLeft">
						<div>
							<Clickeado />
						</div>
					</div>
					<div
						onClick={e => Click(2, e.target.className)}
						className="topCenter">
						<div>
							<Clickeado />
						</div>
					</div>
					<div
						onClick={e => Click(3, e.target.className)}
						className="topRight">
						<div>
							<Clickeado />
						</div>
					</div>
					<div
						onClick={e => Click(4, e.target.className)}
						className="middleLeft">
						<div>
							<Clickeado />
						</div>
					</div>
					<div
						onClick={e => Click(5, e.target.className)}
						className="middleCenter">
						<div>
							<Clickeado />
						</div>
					</div>
					<div
						onClick={e => Click(6, e.target.className)}
						className="middleRight">
						<div>
							<Clickeado />
						</div>
					</div>
					<div
						onClick={e => Click(7, e.target.className)}
						className="bottomLeft">
						<div>
							<Clickeado />
						</div>
					</div>
					<div
						onClick={e => Click(8, e.target.className)}
						className="bottomCenter">
						<div>
							<Clickeado />
						</div>
					</div>
					<div
						onClick={e => Click(9, e.target.className)}
						className="bottomRight">
						<div>
							<Clickeado />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
