import { Outlet } from 'react-router'
import App from '@/App'
const AuthLayout = () => {
  return (
    <>
    <div className="w-full h-auto flex items-center justify-center">
       <Outlet />
       <App/>
    </div>
   </>
  )
}

export default AuthLayout