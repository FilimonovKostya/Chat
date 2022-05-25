import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../constants'

export const useFetchMessages = (chatRoom: string, userName: string) => {
  const [messages, setMessages] = useState([])
  const [error, setError] = useState({})

  useEffect(() => {
    axios
      .get(`${URL}/messages?chatRoom=${chatRoom}&user=${userName}`)
      .then((res) => setMessages(res.data.result))
      .catch((error) => setError(error))
  }, [chatRoom, userName])

  return { messages, error }
}
