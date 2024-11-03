import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const userTypes = ['Student', 'Alumni', 'Mentor'];
  const [selectedRole, setSelectedRole] = useState(null);

  const InputField = ({ label, placeholder, type = 'text' }) => {
    return (
      <div className="flex flex-col flex-1 shrink w-full basis-0 min-w-[160px] max-md:max-w-full px-4 py-3">
        <label className="pb-2 w-full font-medium text-stone-900 max-md:max-w-full">
          {label}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className="overflow-hidden self-stretch px-4 py-4 w-full bg-white rounded-xl border border-solid border-stone-300 min-h-[56px] text-stone-500 max-md:max-w-full"
        />
      </div>
    );
  };

  const Button = ({ children, primary, secondary }) => {
    const baseClasses = "flex overflow-hidden justify-center items-center px-5 w-full h-[48px] rounded-3xl min-w-[84px] max-md:max-w-full";
    const primaryClasses = "text-white bg-blue-600";
    const secondaryClasses = "bg-lime-50 text-stone-900";

    return (
      <button className={`${baseClasses} ${primary ? primaryClasses : ''} ${secondary ? secondaryClasses : ''}`}>
        {children}
      </button>
    );
  };

  const RegistrationForm = () => {
    return (
      <div className="flex flex-col w-full max-w-[480px] justify-center align-items-center">
        <InputField label="Full Name" placeholder="Full Name" />
        <InputField label="Email Address" placeholder="Email Address (for login and communication)" type="email" />
        <InputField label="Phone Number" placeholder="Phone Number (optional)" type="tel" />
        <div className="flex flex-row gap-4 items-end px-4 py-3 max-md:max-w-full">
          <InputField label="Password" placeholder="Password" type="password" />
          <InputField label="Confirm Password" placeholder="Confirm Password" type="password" />
        </div>
        <div className="flex flex-row gap-3 items-start p-4 max-w-full text-sm font-medium whitespace-nowrap text-stone-900 w-[405px]">
          <span>Role: </span>
          {userTypes.map((type, index) => (
            <button
              key={index}
              className={`self-stretch px-4 rounded-xl border border-solid border-stone-300 min-h-[44px] w-[100px] ${selectedRole === type ? 'bg-blue-600 text-white' : ''}`}
              onClick={() => setSelectedRole(type)}
            >
              {type}
            </button>
          ))}
        </div>
        <Button primary>Register</Button>
        <div className="mt-8">
          <Link to="/login" className="flex overflow-hidden justify-center items-center px-5 w-full h-[48px] rounded-3xl bg-lime-50 text-stone-900">
            Already registered? Login here
          </Link>
        </div>
      </div>
    );
  };

  return (
    <main className="flex overflow-hidden flex-col bg-white">
      <div className="w-full bg-white max-md:pr-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <section className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex bg-blue-600 bg-center bg-no-repeat bg-cover rounded-none bg-[url(https://cdn.builder.io/api/v1/image/assets%2F429991b1a8064bfb9c2ba368b8bc5166%2Fec095066492ca3c89e45298bcdfdd551a2b6659cd51caa5728515bc60dfa18c4)] max-w-[720px] min-h-[1024px]">
              <h1 className="text-white text-7xl font-bold mt-12 ml-12">Welcome to alumanet</h1>
            </div>
            <div className="flex flex-col text-7xl font-bold text-center leading-[70px] max-w-[478px] text-zinc-100">
              <div className="flex flex-col items-start" />
            </div>
          </section>
          <section className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col self-stretch my-auto w-full text-base min-h-[709px] max-md:mt-10 max-md:max-w-full">
              <RegistrationForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default RegistrationPage;