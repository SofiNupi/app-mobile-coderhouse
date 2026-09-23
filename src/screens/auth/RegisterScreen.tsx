import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native'
import Button from '../../components/Button'

import { createAccount } from '../../services/auth/authService'
import { colors, typography, spacing } from '../../theme'
import { useAppDispatch } from '../../store/hooks'
import { setUserDisplayName } from '../../features/auth/authSlice'

type Props = {
  navigation: any
}

const RegisterScreen = ({ navigation }: Props) => {
  const dispatch = useAppDispatch()
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async () => {
    setError('')

    const trimmedName = displayName.trim()

    if (!trimmedName || !email.trim() || !password || !confirmPassword) {
      setError('Completá todos los campos')
      return
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden')
      return
    }

    try {
      await createAccount(email.trim(), password, trimmedName)
      // onAuthStateChanged suele correr antes de updateProfile; sincronizamos Redux.
      dispatch(setUserDisplayName(trimmedName))
    } catch (error) {
      console.error(error)
      setError('No se pudo crear la cuenta')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskFlow</Text>
      <Text style={styles.subtitle}>Crear cuenta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={displayName}
        onChangeText={setDisplayName}
        autoCapitalize="words"
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        style={styles.input}
        placeholder="Repetir contraseña"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}


      <Button

        label="Crear cuenta"
        onPress={handleRegister}
      />

      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>¿Ya tenés una cuenta? Ingresá</Text>
      </Pressable>

      
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacing.paddingL,
    padding: spacing.paddingL,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.surface,
  },

  title: {
    fontSize: typography.titleSize,
    fontWeight: 'bold',
    color: colors.textColor,
  },

  subtitle: {
    fontSize: typography.descriptionSize,
    color: colors.textColor,
  },

  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
   
  },

  button: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  buttonText: {
    fontSize: typography.descriptionSize,
    fontWeight: 'bold',
    color: colors.textColor,
  },

  link: {
    fontSize: typography.descriptionSize,
    color: colors.primary,
    textDecorationLine: 'underline',
  },

  error: {
    fontSize: typography.descriptionSize,
    color: colors.error,
  },
})