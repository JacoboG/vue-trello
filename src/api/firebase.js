/** import firebase from 'firebase' */
import firebase from 'firebase/app'
import 'firebase/database'
import settings from './settings'

const firebaseApp = firebase.initializeApp(settings)

export const db = firebase.database()
export default firebaseApp
