import { Outlet } from 'react-router'
import App from '@/App'
const AuthLayout = () => {
  return (
    <>
    <div className="h-screen flex items-center justify-center">
       <Outlet />
       <App/>
    </div>
   </>
  )
}

export default AuthLayout