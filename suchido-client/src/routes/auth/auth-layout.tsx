import { useAuth } from '@/provider/auth-context'
import { Navigate, Outlet } from 'react-router'

const AuthLayout = () => {
const {isAuthenticated, isLoading} = useAuth();

if(isLoading){
  return (
    <>
    <div className="h-screen flex items-center justify-center">
      <h1>Loading...</h1>
    </div>
   </>
  )
}

if(isAuthenticated){
  return <Navigate to="/dashboard" replace/>
}


return (
  <>
  <div className="h-screen flex items-center justify-center">
    <Outlet />
  </div>
  </>
)

}
export default AuthLayout