import { ChangeEvent, useState } from 'react'
import axios from 'axios'
import { URL } from '../constants'

type ResponseSignInType = {
  message: string
  newUser: { email: string; password: string }
  status: string
}

export const useRegistration = (urlParam: string, chatRoom?: string) => {
  const [inputData, setInputData] = useState({ email: '', password: '', chatRoom: '' })
  const [fetchingStatus, setFetchingStatus] = useState<ResponseSignInType>()
  const [errorMessage, setErrorMessage] = useState('')
  const [isFetching, setIsFetching] = useState(false)

  const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const fetchInputData = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault()

    setIsFetching(true)

    try {
      const response = await axios.post<ResponseSignInType>(`dada/${urlParam}`, {
        email: inputData.email.replaceAll(' ', ''),
        password: inputData.password.trim(),
        chatRoom: inputData.chatRoom || chatRoom,
      })

      setFetchingStatus(response.data)
      setErrorMessage(response.data.status)
      setIsFetching(false)
    } catch (e) {
      setErrorMessage(JSON.stringify(e))
    }
  }

  return { inputData, onInputHandler, fetchInputData, fetchingStatus, errorMessage, isFetching }
}
