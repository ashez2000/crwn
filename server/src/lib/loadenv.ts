export default function loadenv(name: string) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`env ${value} undefined`)
  }

  return value
}
