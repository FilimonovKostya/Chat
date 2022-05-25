import { ChangeEvent, useState } from 'react'
import axios from 'axios'
import { URL } from '../constants'

export const useMessage = (user?: string) => {
  const [message, setMessage] = useState('')
  const [messages,setMessages] = useState([])

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
      setMessages(response.data.messages)
    } catch (e) {
      console.log('Some error in useMessage hook', { e })
    }
  }

  console.log('Messages in hook', messages)

  return { message, onMessageHandler, onSendMessage,messages }
}