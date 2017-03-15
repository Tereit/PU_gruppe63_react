import {auth, database} from "./firebaseApp";


//Logger bruker ut
export function logoutUser(){
	auth.signOut().then( () => {
		database.ref().off()
	})
}
