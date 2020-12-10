import { Component } from "react"

// Class Component de React
class LifecycleClass extends Component {
	// Le constructeur est la première méthode appelé. Le constructeur n'est appelé que lors de la création du composant
	constructor(props) {
		super(props)
		console.log("Constructeur appelé")
		// Ici, j'initialise les valeurs utiles de mon state
		// le state peut avoir tout type de valeurs (Number, String, Boolean, Array, Object...)
		this.state = {
			compteur: 0,
			prenom: "Fabio",
		}
		// this.handleClick = this.handleClick.bind(this)
	}

	// componentDidMount est appelé une seule fois: lors de phase de création et uniquement après le premier rendu (render)
	componentDidMount() {
		console.log("componentDidMount appelé")
	}

	// Si on retourne "true", on accepte la mise à jour de l'UI - render sera appelé
	// Si on retourne "false", on refuse la mise à jour de l'UI - render NE SERA PAS appelé
	// shouldComponentUpdate() {
		// console.log("shouldComponentUpdate appelé")
	// 	return false
	// }

	// Appelé après chaque mise à jour de l'UI (après chaque render)
	componentDidUpdate() {
		console.log("componentDidUpdate appelé")
	}

	// Appelé juste avant la "destruction" du composant - lorsque le composant va disparaitre de l'UI
	componentWillUnmount() {
		console.log("componentWillUnmount appelé")
	}

	// Méthode que l'on a créé
	onChangeCounter(valeur) {
		// setState est utilisé pour mettre à jour le state et prévenir React qu'il va devoir se mettre à jour
		// setState prend en paramètre les parties du state que l'on souhaite mettre à jour
		// Si la valeur future de notre state, dépend du state actuel, il convient d'utiliser une fonction (prenant en paramètre le state actuel) et de retourner le nouveau state (en fonction de prevState et non this.state) - cela évitera les erreurs dus au fait que setState soir asynchrone
		this.setState((prevState) => {
			return {
				compteur: prevState.compteur + valeur
			}
		})
		/*
		this.state - version 0 -> setState -> this.state - version 1 
		*/
	}

	// render est appelé pour rafraichir l'UI.
	render() {
		console.log("Render appelé")
		return (
			<div>
				<h2>Composant "Lifecycle" avec une Classe</h2>
				<div>
					<h2>Compteur: {this.state.compteur}</h2>
					<button onClick={() => {this.onChangeCounter(1)}}>Incrémenter</button>
					<button onClick={() => {this.onChangeCounter(-1)}}>Décrémenter</button>
					{/* Attention, si on passe dans le "onClick" un appel de fonction et non une référence à une fonction, on pourrait avoir l'équivalent d'une boucle infinie (render infini) */}
				</div>
			</div>
		)
	}
}

export default LifecycleClass