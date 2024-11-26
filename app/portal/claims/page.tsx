export default function ClaimsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-semibold text-gray-900">Claims History</h1>
                <p className="mt-2 text-sm text-gray-600">
                    View and track your benefit claims.
                </p>
            </div>

            <div className="bg-white shadow-sm rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <div className="text-center text-gray-500">
                        No claims to display
                    </div>
                </div>
            </div>
        </div>
    )
} 