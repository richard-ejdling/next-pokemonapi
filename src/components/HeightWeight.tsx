export default function HeightWeight({
  height,
  weight,
  artwork,
}: {
  height: number;
  weight: number;
  artwork: string;
}) {
  const maleOrFemale = Math.floor(Math.random() * 2); // 0 = male, 1 = female
  console.log(maleOrFemale);

  const humanHeight = maleOrFemale === 0 ? 17.5 : 16.5;

  const pokemonIsBigger = height > humanHeight;
  console.log(pokemonIsBigger, height, humanHeight);

  const heightRatio = pokemonIsBigger ? humanHeight / height : height / humanHeight;

  console.log(heightRatio);

  return (
    <div className="flex flex-col gap-2 justify-between items-center h-full p-2">
      <div className="flex flex-row gap-4">
        <div className="text-center">
          <h3>Height:</h3>
          <p>{height / 10} m</p>
        </div>
        <div className="text-center">
          <h3>Weight:</h3>
          <p>{weight / 10} kg</p>
        </div>
      </div>
      <div
        className={`flex flex-row items-end justify-center ${
          !pokemonIsBigger && "gap-4 py-2"
        } bg-gray-200 h-40 w-full rounded-lg`}
      >
        <img
          className="brightness-0 object-contain"
          style={{ height: pokemonIsBigger ? "100%" : `${heightRatio * 100}%` }}
          src={artwork}
          alt="Pokémon silhouette"
        />
        <img
          className="brightness-0 object-contain "
          style={{ height: pokemonIsBigger ? `${heightRatio * 100}%` : "100%" }}
          src={
            maleOrFemale === 0
              ? pokemonIsBigger
                ? "/img/Pokemon_Trainer_Male_2.png"
                : "/img/Pokemon_Trainer_Male.png"
              : pokemonIsBigger
              ? "/img/Pokemon_Trainer_Female_2.png"
              : "/img/Pokemon_Trainer_Female.png"
          }
          alt="Pokémon trainer silhouette"
        />
      </div>
    </div>
  );
}
