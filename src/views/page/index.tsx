import { TemplateBase } from "../template/templateBase";

export interface IDigi {
  name: string;
  img: string;
  level: string;
}

export const Home = ({ digimon }: { digimon: IDigi[] }) => {
  return (
    <TemplateBase>
      <div style="text-align:center">
        <div>DIGIMON DATA</div>
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
          {digimon.map((digi) => {
            return (
              <>
                <div>{digi.name}</div>

                <img src={digi.img} alt=""></img>
              </>
            );
          })}
        </div>
      </div>
    </TemplateBase>
  );
};
