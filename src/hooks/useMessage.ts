import { ChangeEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../constants'

type Messages = {
  name: string
  password: string
  messages: string[]
}

type ResponseMessages = {
  [key: string]: Messages
}

export const useMessage = (user: string, chatRoom: string) => {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<{ [key: string]: Messages }>({})
  const [isFetching, setIsFetching] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const onMessageHandler = (e: ChangeEvent<HTMLInputElement>) => setMessage(e.currentTarget.value)

  const onSendMessage = async (event: ChangeEvent<HTMLDivElement>) => {
    event.preventDefault()
    setMessage('')

    try {
      const response = await axios.post<{ result: ResponseMessages; lastMessage: string }>(
        `${URL}/messages`,
        {
          message,
          user,
          chatRoom,
        }
      )

      setMessages((prevState) => {
        return {
          ...prevState,
          [user]: {
            ...prevState[user],
            messages: [...prevState[user].messages, response.data.lastMessage],
          },
        }
      })
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
