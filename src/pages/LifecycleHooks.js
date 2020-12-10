import { useState, useEffect } from "react"

// Class Component de React
const LifecycleHooks = () => {
	// Le corps de la fonction est l'équivalent de la méthode render
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		// Equivalent de componentDidMount car le tableau de dépendances est vide
		return () => {
			// Equivalent du componentWillUnmount
		}
	}, [])

	useEffect(() => {
		// Equivalent de componentDidMount + componentDidUpdate car le tableau de dépendances observe les mises à jour de "count"
		return () => {
			// Equivalent du componentWillUnmount
		}
	}, [counter])

	// Fonction que l'on a créé
	const onChangeCounter = number => {
		setCounter(counter => counter + number)
	}

	return (
		<div>
			<h2>Composant "Lifecycle" avec Hooks</h2>
			<div>
				<h2>Compteur: {counter}</h2>
				<button
					onClick={() => {
						onChangeCounter(1)
					}}
				>
					Incrémenter
				</button>
				<button
					onClick={() => {
						onChangeCounter(-1)
					}}
				>
					Décrémenter
				</button>
				{/* Attention, si on passe dans le "onClick" un appel de fonction et non une référence à une fonction, on pourrait avoir l'équivalent d'une boucle infinie (render infini) */}
			</div>
		</div>
	)
}

export default LifecycleHooks
