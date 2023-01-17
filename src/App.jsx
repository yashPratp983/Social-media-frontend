import { Route, Routes } from 'react-router'
import Register from './components/onboarding/register'
import Login from './components/onboarding/login'
import UploadPhoto from './components/onboarding/uploadPhoto'
import Description from './components/onboarding/description'
import { AuthProvider } from './auth/auth'
import { OpenDrawerProvider } from './contexts/open-drawer'
import { AuthrequireLogin, AuthrequireRegister } from './auth/authrequire'
import Profile from './components/profile/profile'
import Home from './components/home/home'
import EditProfile from './components/editProfile/editProfile'
import { OpenDialogProvider } from './contexts/openFollowerDialog'
import FileUpload from './components/FileUpload/FileUpload'
import { useEffect } from 'react'
import { useAuth } from './auth/auth'
import Cookie from 'js-cookie'
import axios from 'axios'
import EmailVerification from './components/onboarding/emailVerification'
import { useLocation } from 'react-router'
import { useNavigate } from 'react-router'
import Loading from './components/onboarding/loading'
import { useState } from 'react'
import { LoadingProvider, useLoading } from './contexts/loading'
import EditEmailVerification from './components/editProfile/emailVeification'
import ForgotPassword from './components/onboarding/forgotpassword'
import ResetPassword from './components/onboarding/resetPassword'
import Confirmverification from './components/onboarding/confirmverification'
import Confirmverification2 from './components/editProfile/confirmverification'

function App() {
  const { user, setUser } = useAuth();
  // const { loading, setLoading } = useLoading();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getUser = async () => {
      try {
        const token = (localStorage.getItem('token'));
        if (token) {
          axios.defaults.headers.common['authorisation'] = `Bearer ${token}`;
          const user1 = await axios.get('http://localhost:4000/api/v1/user/')

          console.log(user1)
          if (user1.data.data.user) {
            setUser(user1.data.data);

            navigate(location.pathname);
          }
        }
      }
      catch (err) {
        console.error(err)


      }
      setLoading(false)
    };

    getUser();

  }, []);


  return (

    <OpenDrawerProvider>
      <OpenDialogProvider>

        <div className="App">

          <Routes>
            <Route path="/register" element={<Loading><Register /></Loading>} />
            <Route path="/login" element={<Loading><Login /></Loading>} />
            <Route path="/uploadphoto" element={<Loading loading={loading}><AuthrequireRegister><UploadPhoto /></AuthrequireRegister></Loading>} />
            <Route path="/description" element={<Loading loading={loading}><AuthrequireRegister><Description /></AuthrequireRegister></Loading>} />
            <Route path="/" element={<Loading loading={loading}><AuthrequireLogin><Home /></AuthrequireLogin></Loading>} />
            <Route path="/profile" element={<Loading loading={loading}><AuthrequireLogin><Profile /></AuthrequireLogin></Loading>} />
            <Route path="/editprofile" element={<Loading loading={loading}><AuthrequireLogin><EditProfile /></AuthrequireLogin></Loading>} />
            <Route path="/fileupload" element={<Loading loading={loading}><AuthrequireLogin><FileUpload /></AuthrequireLogin></Loading>} />
            <Route path="/emailverification/:token" element={<EmailVerification />} />
            <Route path="/editemailverification/:token" element={<EditEmailVerification />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword/:token" element={<ResetPassword />}></Route>
            <Route path='/confirmverification' element={<Loading loading={loading}><AuthrequireLogin><Confirmverification /></AuthrequireLogin></Loading>}></Route>
            <Route path='/confirmverification2' element={<Loading loading={loading}><AuthrequireLogin><Confirmverification2 /></AuthrequireLogin></Loading>}></Route>
          </Routes>




        </div>

      </OpenDialogProvider >
    </OpenDrawerProvider >
  )
}

export default App
