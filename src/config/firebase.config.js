import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore/lite'
import {getStorage} from 'firebase/storage'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
  };

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const authentication = getAuth(app)
  const googleAuthProvider = new GoogleAuthProvider()
  const storageDb = getStorage(app)

export { authentication, db, storageDb, googleAuthProvider }

export default app;