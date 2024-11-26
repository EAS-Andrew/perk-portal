'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Footer from '@/components/Footer'
import { useAuth } from '@/contexts/AuthContext'

export default function PortalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    const { signOut, user } = useAuth()

    const navigation = [
        { name: 'Benefits', href: '/portal', icon: 'gift' },
        { name: 'Claims', href: '/portal/claims', icon: 'file-text' },
        { name: 'Documents', href: '/portal/documents', icon: 'folder' },
        { name: 'Profile', href: '/portal/profile', icon: 'user' },
    ]

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-50">
            <nav className="bg-white border-b border-blue-100 sticky top-0 z-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex flex-shrink-0 items-center">
                                <Link href="/portal" className="flex items-center space-x-2">
                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                                        <span className="text-white font-bold">P</span>
                                    </div>
                                    <span className="text-lg font-semibold text-gray-900">PerksPortal</span>
                                </Link>
                            </div>
                            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${pathname === item.href
                                                ? 'border-b-2 border-blue-500 text-gray-900'
                                                : 'text-gray-500 hover:border-b-2 hover:border-gray-300 hover:text-gray-700'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="text-sm text-gray-500">
                                Welcome, {user?.name || 'User'}
                            </div>
                            <button
                                onClick={signOut}
                                className="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                            >
                                Sign out
                                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-grow mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>

            <Footer />
        </div>
    )
} 