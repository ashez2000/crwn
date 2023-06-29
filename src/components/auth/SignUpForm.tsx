'use client'

import axios from 'axios'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { toast } from 'react-hot-toast'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { SignUpInput, signUpSchema } from '@/schemas/auth.schema'

export default function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = async (data: SignUpInput) => {
    try {
      setIsLoading(true)
      await axios.post('/api/auth/sign-up', data)
      router.push('/auth/sign-in')
      toast.success('Sign up successfully!')
    } catch (err) {
      const error = err as any
      console.error(error)
      toast.error(error.response?.data.message || error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Name */}
      <div className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          isInvalid={!!errors.name}
          {...register('name')}
        />
        {errors.name && (
          <Form.Text className="text-danger">{errors.name.message}</Form.Text>
        )}
      </div>

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
        Sign Up
      </Button>
    </Form>
  )
}
