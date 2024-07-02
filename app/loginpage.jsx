// LoginForm.js
import Image from 'next/image'
import Button from './button'

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4 space-y-4">
      <div className="w-full">
        <input 
          type="text" 
          placeholder="Email or username" 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
      </div>
      <div className="w-full relative">
        <input 
          type={passwordVisible ? "text" : "password"} 
          placeholder="Password" 
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button 
          type="button" 
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
        >
          {passwordVisible ? '🙈' : '👁️'}
        </button>
      </div>
      <div className="w-full">
        <a href="#" className="text-purple-600 hover:underline">
          Log in with phone number
        </a>
      </div>
      <div className="w-full">
        <button 
          type="button" 
          className="w-full py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
