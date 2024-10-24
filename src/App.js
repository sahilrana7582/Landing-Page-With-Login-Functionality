import { MdMailLock } from 'react-icons/md';
import './App.css';
import { TiUser } from 'react-icons/ti';
import { FaLock } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Button,
  LinearProgress,
} from '@mui/joy';

function App() {
  const [state, setState] = useState('true');
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [logIn, setLogIn] = useState(false);

  const onBtnClick = () => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo));

    setLoading((prev) => !prev);

    // Check the current state and reset userInfo when switching forms
    setTimeout(() => {
      setState((state) => {
        // If we are switching to login, reset userInfo
        if (state) {
          setUserInfo({ username: '', email: '', password: '' }); // Resetting the input fields
        }
        return !state;
      });
      setLoading((prev) => !prev);
    }, 3000);
  };

  const onLogin = () => {
    const email = userInfo?.email;
    const password = userInfo?.password;

    const data = localStorage.getItem('userInfo');
    const userData = JSON.parse(data);

    if (email == userData.email && password == userData.password) {
      setLoading((prev) => !prev);
      setTimeout(() => {
        setLogIn((prev) => !prev);
        setUserInfo(userData);
        setLoading((prev) => !prev);
      }, 4000);
    } else {
      console.log('Something went wrong');
    }
  };

  return (
    <div
      className="absolute flex items-center justify-center h-screen w-screen"
      style={{
        backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/827/65/320/firewatch-4k-best-wallpaper-preview.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Main Content */}
      {logIn ? (
        <h1 className="text-6xl text-purple-200 font-semibold">
          Logged In User: {userInfo?.username}
        </h1>
      ) : (
        <div className="flex justify-center  items-center h-screen w-screen">
          {/* Container for gradient background with no opacity */}
          <div className="bg-gradient-to-t from-purple-400 to-gray-900 opacity-40 h-[30rem] w-[28rem] absolute"></div>

          <div className="relative bottom-8 h-[30rem] w-[28rem] p-16 rounded-md ">
            {/* Inner Content - with full opacity */}
            <div className="relative z-10 flex justify-center items-center flex-col">
              <h1 className="text-3xl font-bold text-purple-400 my-[30px]">
                {state ? 'Sign Up' : 'Login'}
              </h1>
              <div className="flex justify-center items-center gap-4 flex-col">
                {state && (
                  <div className="flex gap-2 bg-gray-200 w-full h-fit p-4 items-center rounded-md">
                    <TiUser className="h-6 w-6" />
                    <input
                      name="username"
                      value={userInfo?.username}
                      onChange={(e) => {
                        setUserInfo({
                          ...userInfo,
                          [e.target.name]: e.target.value,
                        });
                      }}
                      placeholder="Enter username"
                      type="text"
                      className="bg-transparent outline-none text-[15px] font-medium"
                    />
                  </div>
                )}

                <div className="flex gap-2 bg-gray-200 w-full h-fit p-4 items-center rounded-md">
                  <MdMailLock className="h-5 w-5" />
                  <input
                    name="email"
                    value={userInfo?.email}
                    onChange={(e) => {
                      setUserInfo({
                        ...userInfo,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    placeholder="Enter email"
                    type="email"
                    className="bg-transparent outline-none text-[15px] font-medium"
                  />
                </div>
                <div className="flex gap-2 bg-gray-200 w-full h-fit p-4 items-center rounded-md">
                  <FaLock className="h-5 w-5" />
                  <input
                    name="password"
                    value={userInfo?.password}
                    onChange={(e) => {
                      setUserInfo({
                        ...userInfo,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    placeholder="Enter password"
                    type="password"
                    className="bg-transparent outline-none text-[15px] font-medium"
                  />
                </div>
                <div className="flex justify-between w-full mb-[30px]">
                  <button
                    className="p-3 h-fit bg-purple-500 rounded-md px-6 text-[20px] font-normal w-full"
                    onClick={state ? onBtnClick : onLogin}
                  >
                    {loading ? (
                      <Button loading variant="plain">
                        Plain
                      </Button>
                    ) : state ? (
                      'Sign Up'
                    ) : (
                      'Login'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
