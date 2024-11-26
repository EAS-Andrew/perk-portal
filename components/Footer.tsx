export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="py-8 md:flex md:items-center md:justify-between">
                    <div className="text-center md:text-left">
                        <p className="text-sm text-gray-500">
                            &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
                        </p>
                    </div>
                    <div className="mt-4 flex justify-center space-x-6 md:mt-0">
                        <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
                        <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
                        <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Contact Support</a>
                    </div>
                </div>
            </div>
        </footer>
    )
} 