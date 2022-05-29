import React from 'react'
import DialogItem from './DialogItem'
import Circular from '../../Circular'
import { ResponseMessages } from '../../../hooks/useMessage'

const MessageBody = (props: {
  messages: ResponseMessages
  isFetching: boolean
  email: string
  user: string
}) => {
  return (
    <>
      {props.isFetching && <Circular />}

      {props.messages[props.email] &&
        props.messages[props.user].messages.map((message, index) => (
          <DialogItem key={index} message={message} email={props.email} user={props.user} />
        ))}
    </>
  )
}

export default MessageBody
