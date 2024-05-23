import Link from "next/link";

export default function Login() {
  return (
    <div>
      <h1 className="title">Comment souhaitez-vous utiliser Threads</h1>

      <div className="mt-5 w-[500px] mx-auto flex flex-col gap-4">
        <Link href="/login/signup">
          <div className="auth-method">
            <h2 className="font-bold text-white">
              S'inscrire ou se connecter avec une adresse email
            </h2>
            <div className="text-threads-gray-light mt-4">
              Connectez-vous ou créez un profil Threads avec une adresse email.
              Cela vous permettra de publier du contenu et d'interagir sur
              Threads.
            </div>
          </div>
        </Link>

        <Link href="/login/pass">
          <div className="auth-method">
            <h2 className="font-bold text-white">Utiliser sans profil</h2>
            <div className="text-threads-gray-light mt-4">
              Vous pouvez naviguer dans Threads sans profil, mais vous ne
              pourrez pas interagir avec du contenu ni en publier.
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
