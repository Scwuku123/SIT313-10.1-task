import { useState } from 'react'
import { welcomeUser } from '../api/router'
import './subscriber.css'
import {Col,Row} from 'antd';

export default function Subscriber() {
  const [email, setEmail] = useState('')

  const onEmailChange = event => {
    const value = event.target.value
    setEmail(value ? String(value).trim() : '')
  }

  const subscribe = () => {
    console.log('email:', email)
    if (!email) {
      return
    }
    console.log('email:', email)
    welcomeUser({ useremail: email })
    setEmail('')
  }

  return (
    <Row sx={{ py: 1 }} maxWidth="md" align="center">
    <Col className="subscriber-box" sx={{ py: 1 }}>
        <label htmlFor="subscribe-email">SIGN UP FOR OUR DAILY INSEIDER</label>
        <input id="subscribe-email" type="text" placeholder="Enter your email" value={email} onChange={onEmailChange} />
        <button type="submit" onClick={subscribe}>
          Subscribe
        </button>
      </Col>
    </Row>
  )
}
