import React from 'react';
class Error403 extends React.Component {
    render() {
        return (
            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-blue-600">403</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">Accès interdit</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">Vous ne disposez pas des autorisations nécessaires pour accéder à cette page</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/"
                            className="bg-blue-600 hover:bg-blue-500 inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                        >
                            Retourner à l'accueil
                        </a>
                        <a
                            href="/login"
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        >
                            Se connecter
                        </a>
                    </div>
                </div>
            </main>
        );
    }
}

export default Error403;