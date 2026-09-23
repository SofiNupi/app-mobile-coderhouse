import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../../config/firebase'

export const createAccount = async (
  email: string,
  password: string,
  displayName: string
) => {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )

  await updateProfile(credential.user, {
    displayName: displayName.trim(),
  })

  return credential
}

export const updateDisplayName = async (displayName: string) => {
  const user = auth.currentUser
  if (!user) throw new Error('No hay usuario autenticado')

  await updateProfile(user, {
    displayName: displayName.trim(),
  })
}

export const signIn = async (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const logout = async () => {
  return signOut(auth)
}
