import './App.css';

function Welcome(props){
  return (
    <section className=" xl:flex-1 lg:flex-1 md:flex-1 sm:h-screen overflow-hidden">
      <h1 className="fixed font-bold text-5xl text-slate-700 px-5 py-5">Quantex™</h1>
      <img 
        src="https://images.unsplash.com/photo-1478186014654-5a7e3898daa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
      />
    </section>
  );
}

function SignUp(props){
  return (
    <section className="h-screen xl:flex-1 lg:flex-1 md:flex-1 sm:h-screen">
      <div className="flex-col">
        <div className="text-center m-10 lg:m-24">
          <h1 className="text-4xl ml">Get Started</h1>
        </div>

        <div className="flex justify-evenly pt-10">
          <input className="bg-inherit p-2 highlight" placeholder="FIRST NAME" />
          <input className="bg-inherit p-2 highlight" placeholder="LAST NAME" />
        </div>

        <div className="flex justify-evenly pt-10">
          <input className="bg-inherit p-2 highlight" placeholder="E-MAIL" />
          <input className="bg-inherit 00 p-2 highlight" placeholder="PHONE" />
        </div>

        <div className="flex justify-evenly pt-10">
          <input className="bg-inherit p-2 highlight" placeholder="PASSWORD" />
          <input
            className="bg-inherit p-2 highlight"
            placeholder="CONFIRM PASSWORD"
          />
        </div>
      </div>

      <div className="flex justify-evenly mt-20">
        <button className="bg-sky-600 text-slate-100 p-3 w-64 rounded ">
          Create Account
        </button>
      </div>
      <div className="flex justify-center items-center mt-5 px-4 py-2">
        <button
          className="flex text-slate-100 p-3 rounded text-xs
          border-2 border-blue-400"
        >
          <img
            className="w-6 h-6"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-plain.svg"
          />
          <span className=" pl-2 text-base text-blue-400">
            SIGN UP WITH FACEBOOK
          </span>
        </button>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="flex-row lg:flex md:flex sm:flex-row w-screen h-screen">
      <Welcome/>
      <SignUp/>
    </main>
  );
}

export default App;
