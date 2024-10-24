import { MdMailLock } from 'react-icons/md';
import './App.css';
import { TiUser } from 'react-icons/ti';
import { FaLock } from 'react-icons/fa';
import { useState } from 'react';
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

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setState(!state);
      setLoading(false);
    }, 3000);
  };
  return (
    <div className="bg-gradient-to-t from-blue-600 to-green-700 flex justify-center items-center h-screen w-screen">
      <div className="h-[30rem] w-[28rem] p-16 roun bg-white flex justify-center  items-center flex-col">
        <h1 className="text-3xl font-bold text-blue-600 my-[30px]">
          {state ? 'Sign Up' : 'Login'}
        </h1>
        <div className="flex justify-center items-center gap-4 flex-col">
          {state && (
            <div className="flex gap-2 bg-gray-200 w-full  h-fit p-4 items-center rounded-md">
              <TiUser className="h-6 w-6" />
              <input
                placeholder="Enter userame"
                type="text"
                className="bg-transparent outline-none text-[15px] font-medium"
              ></input>
            </div>
          )}

          <div className="flex gap-2 bg-gray-200 w-full h-fit p-4 items-center rounded-md">
            <MdMailLock className="h-5 w-5" />
            <input
              placeholder="Enter email"
              type="email"
              className="bg-transparent outline-none text-[15px] font-medium"
            ></input>
          </div>
          <div className="flex gap-2 bg-gray-200 w-fit h-fit p-4 items-center rounded-md">
            <FaLock className="h-5 w-5" />
            <input
              placeholder="Enter password"
              type="password"
              className="bg-transparent outline-none text-[15px] font-medium"
            ></input>
          </div>
          <div className=" flex justify-between w-full mb-[30px]">
            <button
              className="p-3 h-fit bg-blue-500 rounded-md px-6 text-[20px] font-normal w-full"
              onClick={onSubmit}
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
  );
}

export default App;
