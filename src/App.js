import gbr from './assets/gb1.jpg';

function App() {
  return (
    <div>
      <div class="hero min-h-screen bg-gradient-to-r from-fuchsia-600 to-pink-600">
        <div class="hero-content text-center">
          <div class="max-w-md backdrop-blur-sm bg-white/30 rounded-lg">
            <div className="flex justify-center">
              <img
                src={gbr}
                alt="gambar"
                className='w-52 mask mask-heart animate-pulse flex justify-center'
              />
            </div>
            <h1 class="text-5xl font-bold font-mono text-white">lsxfrr_</h1>
            <p class="p-3 text-white font-serif">"I'm not the same since i met u, the days turned longer the nights turned colder and u will always have a special place in my heart just for you. <span className='underline'>I Do love you!</span>"</p>

            <div className="p-3">
              <a href='https://github.com/AhmadMukminJamaludin' className='text-lg text-white font-mono badge badge-primary badge-outline border-2 hover:border-rose-600 hover:text-rose-600'>Me?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
