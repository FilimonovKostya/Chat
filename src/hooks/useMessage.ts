import { ChangeEvent, useState } from 'react'

export const useMessage = () => {
  const [message, setMessage] = useState('')

  const onMessageHandler = (e: ChangeEvent<HTMLInputElement>) => setMessage(e.currentTarget.value)

  const onSendMessage = () => console.log('message',message)

  return {message, onMessageHandler, onSendMessage}
}