import { CartProvider } from '@/context/CartContext'

export default function Provider({ children }: { children: React.ReactNode }) {
    return <CartProvider>{children}</CartProvider>
}
