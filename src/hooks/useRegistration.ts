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

  const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const fetchInputData = async () => {
    try {
      const response = await axios.post<ResponseSignInType>(`${URL}/${urlParam}`, {
        email: inputData.email.replaceAll(' ', ''),
        password: inputData.password.trim(),
        chatRoom: inputData.chatRoom || chatRoom,
      })

      setFetchingStatus(response.data)
    } catch (e) {
      console.log('Some error in custom hook', { e })
    }
  }

  return { inputData, onInputHandler, fetchInputData, fetchingStatus }
}
