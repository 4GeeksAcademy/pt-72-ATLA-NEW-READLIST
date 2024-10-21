const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favs: []
		},
		actions: {
			addFavs : (fav) => {
				setStore({favs: [...getStore().favs, fav]})
			},
			removeFavs : (fav) => {
				let newFavs = getStore().favs.filter((favorite, index) => {
					return favorite !== fav
				})
				setStore({favs: newFavs})
			},
		}
	};
};

export default getState;
