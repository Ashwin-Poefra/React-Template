import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, AppActions } from 'store';
import { User } from 'types';

type SignInForm = {
  username: string;
  password: string;
};

export const SignInComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>();

  const onSubmit = (data: SignInForm) => {
    const user: User = {
      name: data.username,
    };
    dispatch(AppActions.me.setMe({ user }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div>
        <div className="flex items-center justify-center text-4xl font-black text-sky-900 m-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-3 w-10 h-10"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
          </svg>
          <h1 className="tracking-wide">To ToDo List</h1>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center"
        >
          <label className="text-sm font-medium">Username</label>
          <input
            className="my-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            type="text"
            placeholder="Username"
            {...register('username', { required: true })}
          />
          {errors.username && (
            <p className="mb-3 text-sm text-red-600 dark:text-red-500">
              Please input your name!
            </p>
          )}
          <label className="text-sm font-medium mt-3">Password</label>
          <input
            className="my-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:invalid:border-red-500 focus:invalid:ring-red-500"
            type="password"
            placeholder="********"
            {...register('password', { required: true })}
          />
          {errors.password && (
            <p className="mb-3 text-sm text-red-600 dark:text-red-500">
              Please input password!
            </p>
          )}
          <button
            className="block mt-3 px-4 py-1.5 rounded-md shadow-lg bg-sky-600 font-medium text-gray-100 hover:bg-sky-700 transition duration-300"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
