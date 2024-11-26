export default function DocumentsPage() {
    return (
        <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 border border-blue-100 shadow-sm">
                <h1 className="text-2xl font-semibold text-gray-900">Documents</h1>
                <p className="mt-2 text-sm text-gray-600">
                    Access and download your important employee documents and forms.
                </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-200">
                {documents.map((doc) => (
                    <div key={doc.id} className="p-6 flex items-center justify-between">
                        <div className="flex items-start space-x-4">
                            <div className="p-2 bg-blue-50 rounded-lg">
                                <DocumentIcon className="h-6 w-6 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">{doc.name}</h3>
                                <p className="mt-1 text-sm text-gray-500">{doc.description}</p>
                                <p className="mt-1 text-xs text-gray-400">Updated {doc.updatedAt}</p>
                            </div>
                        </div>
                        <button className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500">
                            Download
                            <DownloadIcon className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

const documents = [
    {
        id: 1,
        name: 'Benefits Summary 2024',
        description: 'Complete overview of your current benefits package',
        updatedAt: 'Jan 15, 2024',
    },
    {
        id: 2,
        name: 'Employee Handbook',
        description: 'Company policies, procedures, and guidelines',
        updatedAt: 'Dec 1, 2023',
    },
    {
        id: 3,
        name: '401(k) Plan Document',
        description: 'Details about your retirement plan options',
        updatedAt: 'Nov 15, 2023',
    },
    {
        id: 4,
        name: 'Health Insurance Policy',
        description: 'Full documentation of your health coverage',
        updatedAt: 'Jan 1, 2024',
    },
    {
        id: 5,
        name: 'Direct Deposit Form',
        description: 'Update your payment information',
        updatedAt: 'Sep 30, 2023',
    },
]

function DocumentIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
    )
}

function DownloadIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
    )
} 