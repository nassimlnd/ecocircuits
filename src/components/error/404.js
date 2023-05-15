export default function Error404() {
    return (
        <>
            <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-blue-600">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">Page introuvable</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">Désolé, impossible de trouver la page que vous recherchez.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/"
                            className="bg-blue-600 hover:bg-blue-500 inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                        >
                            Retourner à l'accueil
                        </a>
                    </div>
                </div>
            </main>
        </>
    )
}