'use client'

import { useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'

export default function ProfilePage() {
    const { user } = useAuth()
    const [isEditing, setIsEditing] = useState(false)

    return (
        <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
                <h1 className="text-2xl font-semibold text-gray-900">Profile Settings</h1>
                <p className="mt-2 text-sm text-gray-600">
                    Manage your account preferences and personal information.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-medium text-gray-900">Personal Information</h2>
                        <button
                            onClick={() => setIsEditing(!isEditing)}
                            className="text-sm font-medium text-blue-600 hover:text-blue-500"
                        >
                            {isEditing ? 'Cancel' : 'Edit'}
                        </button>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input
                                type="text"
                                disabled={!isEditing}
                                defaultValue={user?.name}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                disabled={!isEditing}
                                defaultValue={user?.email}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Employee ID</label>
                            <input
                                type="text"
                                disabled
                                defaultValue="EMP-2024-001"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50 text-gray-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Department</label>
                            <input
                                type="text"
                                disabled
                                defaultValue="Engineering"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm bg-gray-50 text-gray-500"
                            />
                        </div>
                    </div>

                    {isEditing && (
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={() => setIsEditing(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                                Save Changes
                            </button>
                        </div>
                    )}
                </div>

                <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 rounded-b-xl">
                    <h3 className="text-sm font-medium text-gray-900">Account Security</h3>
                    <div className="mt-4 space-y-3">
                        <button className="text-sm text-blue-600 hover:text-blue-500">
                            Change Password
                        </button>
                        <button className="block text-sm text-blue-600 hover:text-blue-500">
                            Enable Two-Factor Authentication
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm">
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">Notification Preferences</h2>
                    <div className="mt-4 space-y-4">
                        {notifications.map((notification) => (
                            <div key={notification.id} className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id={notification.id}
                                        type="checkbox"
                                        defaultChecked={notification.enabled}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                </div>
                                <div className="ml-3">
                                    <label htmlFor={notification.id} className="text-sm font-medium text-gray-700">
                                        {notification.name}
                                    </label>
                                    <p className="text-sm text-gray-500">{notification.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

const notifications = [
    {
        id: 'benefits-updates',
        name: 'Benefits Updates',
        description: 'Get notified when there are changes to your benefits package',
        enabled: true,
    },
    {
        id: 'enrollment-reminders',
        name: 'Enrollment Reminders',
        description: 'Receive reminders about upcoming enrollment deadlines',
        enabled: true,
    },
    {
        id: 'claim-status',
        name: 'Claim Status',
        description: 'Stay updated on the status of your benefit claims',
        enabled: false,
    },
] 