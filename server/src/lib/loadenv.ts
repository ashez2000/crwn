export default function loadenv(name: string) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`env ${name} undefined`)
  }

  return value
}
