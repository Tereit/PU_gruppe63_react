import {auth, database} from "./firebaseApp";


//Logger bruker ut
export function logoutUser(){
	return auth.signOut();
}
