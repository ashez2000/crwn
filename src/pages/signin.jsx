import { useForm } from 'react-hook-form';
import MainLayout from '../layouts/MainLayout';

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const _handleSubmit = async ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <MainLayout>
      <div>
        <h1 className="text-primary">Sign In</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(_handleSubmit)}>
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
            Sign In
          </button>
        </form>
      </div>
    </MainLayout>
  );
}
