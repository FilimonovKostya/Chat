import { ChangeEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../constants'

export const useMessage = (user: string, chatRoom: string) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<string[]>([])
  const [isFetching, setIsFetching] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onMessageHandler = (e: ChangeEvent<HTMLInputElement>) => setMessage(e.currentTarget.value)

  const onSendMessage = async (event: ChangeEvent<HTMLDivElement>) => {
    event.preventDefault()
    setMessage('')

    try {
      const response = await axios.post(`${URL}/messages`, {
        message,
        user,
        chatRoom,
      })

      setMessages((prevState) => [...prevState, response.data.messages])
    } catch (e) {
      setErrorMessage(JSON.stringify(e))
    }
  }

  // Receive messages only first rendering
  useEffect(() => {
    setIsFetching(true)

    axios
      .get(`${URL}/messages?chatRoom=${chatRoom}&user=${user}`)
      .then((res) => {
        setMessages(res.data.result)
        setIsFetching(false)
      })
      .catch((error) => console.log(error))
  }, [])

  return { message, onMessageHandler, onSendMessage, messages, isFetching, errorMessage }
}
