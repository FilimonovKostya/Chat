import { ChangeEvent, useState } from 'react'
import axios from 'axios'
import { URL } from '../constants'

export const useMessage = (user: string) => {
  const [message, setMessage] = useState('')

  const onMessageHandler = (e: ChangeEvent<HTMLInputElement>) => setMessage(e.currentTarget.value)

  const onSendMessage = async () => {
    console.log('user', user)
    console.log('message', message)

    try {
      const response = await axios.post(`${URL}/sendMessage`, {
        message,
        user,
      })

      console.log('response in useMessage -->', response)
    } catch (e) {
      console.log('Some error in useMessage hook', { e })
    }
  }

  return { message, onMessageHandler, onSendMessage }
}