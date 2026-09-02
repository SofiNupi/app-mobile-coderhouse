import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native'

import { signIn } from '../../services/auth/authService'
import { colors, spacing, typography } from '../../theme'

import Button from '../../components/Button'

type Props = {
  navigation: any
}

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleLogin = async () => {
    setError('')

    if (!email.trim() || !password) {
      setError('Completá email y contraseña')
      return
    }

    try {
      await signIn(email.trim(), password)
    } catch (error) {
      console.error(error)
      setError('Email o contraseña incorrectos')
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskFlow</Text>
      <Text style={styles.subtitle}>Iniciar sesión</Text>

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

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : null}

      <Button
        label="Ingresar"
        onPress={handleLogin}
      />

      <Pressable
        onPress={() => navigation.navigate('Register')}
      >
        <Text style={styles.link}>
          ¿No tenés una cuenta? Registrate
        </Text>
      </Pressable>
    </View>
  )
}

export default LoginScreen

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