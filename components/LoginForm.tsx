import React from 'react';
import button from './button'; // Adjust the import path according to your project structure

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center">
      <button type="button" title="Log in" />
      <button type="button" title="Continue with Google" icon="/path-to-google-icon.png" full />
      <button type="button" title="Continue with Apple" icon="/path-to-apple-icon.png" full />
    </div>
  );
};

export default LoginForm;
