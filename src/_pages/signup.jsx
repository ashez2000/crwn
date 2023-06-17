import axios from 'axios';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import MainLayout from '../layouts/MainLayout';
import { useEffect } from 'react';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;

  const _handleSubmit = async ({ name, email, password }) => {
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });

      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (result.error) {
        console.error(result.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  return (
    <MainLayout>
      <div>
        <h1 className="text-primary">Sign Up</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(_handleSubmit)}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              {...register('name', { required: true })}
            />
            {errors.name && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className="text-danger">This field is required</span>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
