import { TaskType } from '../types'

export type RootStackParamList = {
  Tasks: undefined
  Detail: {
    taskId: string
  }
}

export type AuthStackParamList = {
  Login: undefined
  Register: undefined
}