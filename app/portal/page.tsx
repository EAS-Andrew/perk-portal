import PerksGrid from '@/components/PerksGrid'

export default function PortalPage() {
    return (
        <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
                <h1 className="text-2xl font-semibold text-gray-900">Your Benefits</h1>
                <p className="mt-2 text-sm text-gray-600">
                    Review and manage your employee benefits package. Click on any benefit to learn more or make changes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 rounded-xl shadow-sm text-white">
                    <div className="text-sm font-medium text-blue-100">Total Benefits Value</div>
                    <div className="mt-2 text-3xl font-semibold">$24,500/yr</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 rounded-xl shadow-sm text-white">
                    <div className="text-sm font-medium text-purple-100">Next Enrollment</div>
                    <div className="mt-2 text-3xl font-semibold">Oct 15</div>
                </div>
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 rounded-xl shadow-sm text-white">
                    <div className="text-sm font-medium text-emerald-100">Active Benefits</div>
                    <div className="mt-2 text-3xl font-semibold">4/6</div>
                </div>
            </div>

            <PerksGrid />
        </div>
    )
} 