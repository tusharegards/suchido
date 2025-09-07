import { Link } from 'react-router'
import { Button } from '../ui/button'

const Navigator = () => {
  return (
    <>
    <Link to="/auth/sign-in"><Button variant="default">Sign-In</Button></Link>
    <Link to="/auth/sign-up"><Button variant="outline">Sign-Up</Button></Link>
    <Link to="/auth/reset-password"><Button variant="destructive">Reset-Password</Button></Link>
    <Link to="/auth/verify-email"><Button variant="secondary">Verify-Email</Button></Link>
    </>
  )
}

export default Navigator