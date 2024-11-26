'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface User {
    id: string
    name: string
    email: string
    role: string
}

interface AuthContextType {
    user: User | null
    loading: boolean
    signIn: (email: string, password: string) => Promise<void>
    signOut: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        // Check for stored auth token and validate
        const checkAuth = async () => {
            try {
                // Implement actual auth check here
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        checkAuth()
    }, [])

    const signIn = async (email: string, password: string) => {
        // Implement actual sign in logic here
        setUser({
            id: '1',
            name: 'Demo User',
            email: email,
            role: 'employee'
        })
        router.push('/portal')
    }

    const signOut = () => {
        setUser(null)
        router.push('/')
    }

    return (
        <AuthContext.Provider value={{ user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
} 