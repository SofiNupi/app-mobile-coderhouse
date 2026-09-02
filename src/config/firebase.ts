import { getApps, initializeApp } from 'firebase/app'
//@ts-ignore
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const persistence = getReactNativePersistence(ReactNativeAsyncStorage);

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAMwOGBtypYv5msZQTK79v8XM2XOnN6bs",
    authDomain: "task-flow-c8b50.firebaseapp.com",
    projectId: "task-flow-c8b50",
    storageBucket: "task-flow-c8b50.firebasestorage.app",
    messagingSenderId: "832132180386",
    appId: "1:832132180386:web:d70f5bf2c0a87d30ba2afb"
};

const app =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0]

const auth = initializeAuth(app, {
  persistence
});

export { auth }

export const db = getFirestore(app)

export default app