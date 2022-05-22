import { ChangeEvent, useState } from 'react'
import axios from 'axios'
import { URL } from '../constants'

export const useSignIn = () => {
  const [inputData, setInputData] = useState({ email: '', password: '' })

  const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const fetchInputData = async () => {
    const response = await axios.post(`${URL}/registration`, {
      email: inputData.email.replaceAll(' ', ''),
      password: inputData.password.trim(),
    })

    console.log('Response in custom hook ---> ', response.data)
  }

  return { inputData, onInputHandler, fetchInputData }
}
