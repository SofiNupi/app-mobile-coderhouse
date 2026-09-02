import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    query,
    serverTimestamp,
    updateDoc,
    where,
  } from 'firebase/firestore'
  
  import { db } from '../../config/firebase'
  import type { TaskType } from '../../types'
  
  export type NewTaskData = Omit<TaskType, 'id'>
  
  export const createTask = async (
    task: NewTaskData,
    userId: string
  ) => {
    await addDoc(collection(db, 'tasks'), {
      ...task,
      userId,
      createdAt: serverTimestamp(),
    })
  }
  
  export const subscribeToTasks = (
    userId: string,
    callback: (tasks: TaskType[]) => void
  ) => {
    const tasksQuery = query(
      collection(db, 'tasks'),
      where('userId', '==', userId)
    )
  
    return onSnapshot(tasksQuery, (snapshot) => {
      const tasks: TaskType[] = snapshot.docs.map((document) => {
        const data = document.data()
  
        return {
          id: document.id,
          title: data.title,
          description: data.description,
          category: data.category,
          done: data.done,
          time: data.time,
        }
      })
  
      callback(tasks)
    })
  }
  
  export const updateTaskStatus = async (
    taskId: string,
    done: boolean
  ) => {
    const taskRef = doc(db, 'tasks', taskId)
  
    await updateDoc(taskRef, {
      done,
    })
  }
  
  export const removeTask = async (taskId: string) => {
    const taskRef = doc(db, 'tasks', taskId)
  
    await deleteDoc(taskRef)
  }