import bcrypt from 'bcryptjs';
import { prisma } from '../conn';

export const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const createUser = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 12);

  return await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
};
