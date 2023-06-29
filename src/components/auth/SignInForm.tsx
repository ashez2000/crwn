'use client'

import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { SignInInput, signInSchema } from '@/schemas/auth.schema'

export default function SignInForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
  })

  const onSubmit = async (data: SignInInput) => {
    try {
      setIsLoading(true)

      await axios.post('/api/auth/sign-in', data)

      router.push('/')
    } catch (err) {
      const error = err as any
      toast.error(error.response?.data.message || error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Email */}
      <div className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...register('email')}
          isInvalid={!!errors.email}
        />
        {errors.email && (
          <Form.Text className="text-danger">{errors.email.message}</Form.Text>
        )}
      </div>

      {/* Password */}
      <div className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          {...register('password')}
          isInvalid={!!errors.password}
        />
        {errors.password && (
          <Form.Text className="text-danger">
            {errors.password.message}
          </Form.Text>
        )}
      </div>

      <Button variant="primary" type="submit" disabled={isLoading}>
        Sign In
      </Button>
    </Form>
  )
}
