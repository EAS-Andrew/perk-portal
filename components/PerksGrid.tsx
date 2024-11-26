'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Perk {
    id: string
    title: string
    description: string
    image: string
    details: string
    enrollmentStatus?: 'available' | 'enrolled' | 'pending'
    availableDate?: string
    provider?: string
}

const perks: Perk[] = [
    {
        id: 'health-2024',
        title: 'Blue Cross PPO Health Plan',
        description: 'Comprehensive medical, dental, and vision coverage with low deductibles',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&h=300&fit=crop',
        provider: 'Blue Cross Blue Shield',
        enrollmentStatus: 'available',
        details: 'Premium healthcare plan including $500 deductible, $20 copay, and extensive network coverage.',
    },
    {
        id: 'fitness-2024',
        title: 'Corporate Wellness Program',
        description: 'Access to Equinox, LA Fitness, and local premium gyms',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500&h=300&fit=crop',
        provider: 'GlobalFit Network',
        enrollmentStatus: 'enrolled',
        details: 'Full membership access to premium gyms, including group classes and personal training discounts.',
    },
    {
        id: 'learning-2024',
        title: 'Professional Development',
        description: '$2,500 annual learning budget for courses and certifications',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=300&fit=crop',
        provider: 'Learning & Development',
        enrollmentStatus: 'available',
        details: 'Covers online courses, conferences, certifications, and educational materials.',
    },
    {
        id: 'mental-health-2024',
        title: 'Mental Health Support',
        description: 'Free access to Headspace and therapy sessions',
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&h=300&fit=crop',
        provider: 'Modern Health',
        enrollmentStatus: 'available',
        details: 'Unlimited therapy sessions and premium meditation app access.',
    },
    {
        id: 'commuter-2024',
        title: 'Commuter Benefits',
        description: 'Pre-tax transit and parking benefits up to $280/month',
        image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=300&fit=crop',
        provider: 'WageWorks',
        enrollmentStatus: 'pending',
        details: 'Tax-advantaged commuter benefits for public transit and parking expenses.',
    },
    {
        id: '401k-2024',
        title: '401(k) Retirement Plan',
        description: '100% match on the first 6% of contributions',
        image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=300&fit=crop',
        provider: 'Fidelity',
        enrollmentStatus: 'enrolled',
        details: 'Comprehensive retirement planning with immediate vesting on company match.',
    },
]

export default function PerksGrid() {
    const [selectedPerk, setSelectedPerk] = useState<Perk | null>(null)

    const getStatusColor = (status?: string) => {
        switch (status) {
            case 'enrolled':
                return 'bg-green-100 text-green-800'
            case 'pending':
                return 'bg-yellow-100 text-yellow-800'
            default:
                return 'bg-blue-100 text-blue-800'
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {perks.map((perk) => (
                    <div
                        key={perk.id}
                        className="group bg-white overflow-hidden shadow-md rounded-xl hover:shadow-xl transition-all duration-300"
                    >
                        <div className="relative h-48 w-full">
                            <Image
                                src={perk.image}
                                alt={perk.title}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            {perk.enrollmentStatus && (
                                <span
                                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                        perk.enrollmentStatus
                                    )}`}
                                >
                                    {perk.enrollmentStatus.charAt(0).toUpperCase() + perk.enrollmentStatus.slice(1)}
                                </span>
                            )}
                        </div>
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-900">{perk.title}</h3>
                            <p className="mt-2 text-sm text-gray-600">{perk.description}</p>
                            {perk.provider && (
                                <p className="mt-2 text-xs text-gray-500">Provider: {perk.provider}</p>
                            )}
                            <button
                                onClick={() => setSelectedPerk(perk)}
                                className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
                            >
                                View Details
                                <svg
                                    className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 5l7 7-7 7"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedPerk && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl max-w-lg w-full overflow-hidden">
                        <div className="relative h-56 w-full">
                            <Image
                                src={selectedPerk.image}
                                alt={selectedPerk.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-semibold text-gray-900">{selectedPerk.title}</h3>
                                <button
                                    onClick={() => setSelectedPerk(null)}
                                    className="text-gray-400 hover:text-gray-500"
                                >
                                    <span className="sr-only">Close</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-gray-600 mb-4">{selectedPerk.details}</p>
                            <div className="flex justify-end gap-3">
                                <button
                                    onClick={() => setSelectedPerk(null)}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                                >
                                    Close
                                </button>
                                {selectedPerk.enrollmentStatus === 'available' && (
                                    <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">
                                        Enroll Now
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
} 