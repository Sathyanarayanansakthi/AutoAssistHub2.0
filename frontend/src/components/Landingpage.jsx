function Landingpage() {
  return (
    <div className="min-h-screen bg-slate-800 flex items-center justify-center">
      <div className="text-center">
        <p className="text-white mb-6 px-20"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ducimus dignissimos necessitatibus ex mollitia natus 
          sequi consequuntur vero rerum esse, eum ad nostrum perspiciatis corrupti tempore ullam. Voluptatem, inventore delectus.
        </p>
        <div className="flex justify-center space-x-6">
          <button className="bg-blue-500 text-white font-bold py-6 px-12 rounded-full hover:bg-blue-700"> 
            Sign Up 
          </button>
          <button className="bg-blue-500 text-white font-bold py-6 px-12 rounded-full hover:bg-blue-700"> 
            Sign In 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
