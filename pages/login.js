import { getProviders , signIn } from 'next-auth/react';

const Login = ({ providers }) => {
    return (
        <div className="h-screen overflow-hidden bg-black text-white flex flex-col items-center justify-center">
            <img className="w-52 mb-5" src="https://links.papareact.com/9xl" alt="logo" />
            
            {Object.values(providers).map(provider => (
                <div key={provider.name}>
                    <button className="bg-[#18D860] text-black rounded-full p-4"
                        onClick={() => signIn(provider.id, {callbackUrl: "/"})}
                    >
                        Login with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    )
}

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    }
}