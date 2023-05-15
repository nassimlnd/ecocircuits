import React from "react";
import logo from "../../assets/logo.png";
import AuthService from "../../services/AuthService";

function onLogin() {
  const identifiant = document.getElementById("identifiant").value;
  const password = document.getElementById("password").value;

  /*console.log(identifiant);
  console.log(password);*/

  AuthService.login(identifiant, password);

}

const LoginForm = () => {

  if (window.location.pathname === "/logout" && localStorage.getItem("user")) {
    AuthService.logout();
    window.location.href = "/login";
  }

  const handleEnter = (event) => {
    if (event.key === 'Enter') {
      onLogin();
    }
  }


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col px-6 py-24 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-28 w-auto"
            src={logo}
            alt="EcoCircuits"
          />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-white">
            Connexion à votre compte
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
              >
                Identifiant
              </label>
              <div className="mt-2">
                <input
                  id="identifiant"
                  name="identifiant"
                  type="text"
                  autoComplete="identifiant"
                  placeholder="Identifiant"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  onKeyDown={handleEnter}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-white"
                >
                  Mot de passe
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-blue-600 hover:text-blue-500"
                  >
                    Mot de passe oublié ?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    onKeyDown={handleEnter}
                />
              </div>
            </div>

            <div>
              <button
                  onClick={onLogin}
                type="button"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
