import { Outlet } from 'react-router'
import Navigator from '@/components/playgorund/Navigator'
const AuthLayout = () => {
  return (
    <>
       <Outlet />
       <Navigator />
   </>
  )
}

export default AuthLayout