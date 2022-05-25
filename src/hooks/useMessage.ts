import { ChangeEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../constants'

export const useMessage = (user: string, chatRoom: string) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])

  const onMessageHandler = (e: ChangeEvent<HTMLInputElement>) => setMessage(e.currentTarget.value)

  const onSendMessage = async () => {
    try {
      const response = await axios.post(`${URL}/messages`, {
        message,
        user,
        chatRoom,
      })

      setMessages((prevState) => [...prevState, response.data.messages])
    } catch (e) {
      console.log('Some error in useMessage hook', { e })
    }
  }

  // Receive messages only firs rendering
  useEffect(() => {
    axios
      .get(`${URL}/messages?chatRoom=${chatRoom}&user=${user}`)
      .then((res) => setMessages(res.data.result))
      .catch((error) => console.log(error))
  }, [])

  return { message, onMessageHandler, onSendMessage, messages }
}
