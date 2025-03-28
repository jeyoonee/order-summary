import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-center min-w-[330px] max-w-[350px] m-auto">
      <img
        src="/images/illustration-hero.svg"
        alt="girl listening music"
        className="rounded-t-xl"
      />
      <section className="flex flex-col bg-white items-center p-2 rounded-b-xl text-center ">
        <h1 className="text-xl font-extrabold mb-1 text-[var(--color-dark)]">
          Order Summary
        </h1>
        <p className="text-[var(--color-muted)] text-sm leading-1.5 mb-1">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="flex bg-[#F8F9FF] justify-between items-center w-full rounded-xl px-1 py-1.5 text-sm mb-1">
          <img
            src="/images/icon-music.svg"
            alt="music icon"
            className="w-2.5"
          />
          <div className="flex flex-col mr-3 ">
            <h3 className="font-bold text-[var(--color-dark)]">Annual Plan</h3>
            <p className="text-[var(--color-muted)]">$59.99/year</p>
          </div>
          <a
            href="#"
            className="text-[#0000B4] font-bold underline underline-offset-1"
          >
            Change
          </a>
        </div>
        <button className="bg-[var(--color-primary)] hover:bg-[#1e17a0] cursor-pointer focus:ring-2 focus:ring-[var(--color-primary)] transition-colors text-white font-bold w-full rounded-xl py-[12px] text-[14px] mb-1">
          Proceed to Payment
        </button>
        <button className="text-[var(--color-muted)] font-bold text-[14px] cursor-pointer hover:text-[var(--color-dark)] transition">
          Cancel Order
        </button>
      </section>
    </div>
  );
}

export default App;
