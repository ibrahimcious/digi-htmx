import { Home } from "../views/page";

export async function getDigi() {
  try {
    const response = await fetch("https://digimon-api.vercel.app/api/digimon");
    const data = await response.json();
    return <Home digimon={data} />;
  } catch (error) {
    return "Error";
  }
}

export async function randomDigi() {
  const response = await fetch("https://digimon-api.vercel.app/api/digimon");
  const data = await response.json();
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  return (
    <>
      <button
        hx-get="/random-digimon"
        hx-target="#digiDisplay"
        hx-swap="outerHTML"
        hx-swap-oob="true"
      >
        RANDOMIZE IT!
      </button>
      <div
        id="digiDisplay"
        style="display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(4,1fr);gap:20px"
      >
        {shuffleArray(data).map((poke) => {
          return (
            <>
              <div>{poke.name}</div>

              <img src={poke.img} alt=""></img>
            </>
          );
        })}
      </div>
    </>
  );
}
