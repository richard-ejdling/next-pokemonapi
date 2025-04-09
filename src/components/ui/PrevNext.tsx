import { NextPrevPokemon, Pokemon } from "@/types/types";
import Link from "next/link";

export default function PrevNext({
  data,
  prevPokemon,
  nextPokemon,
}: {
  data: Pokemon;
  prevPokemon: NextPrevPokemon;
  nextPokemon: NextPrevPokemon;
}) {
  return (
    <div className="flex justify-between max-sm:text-xs">
      {data.id !== 1 ? (
        <Link
          rel="stylesheet"
          href={`${data.id - 1}`}
        >
          <div className="flex items-center">
            {"< "}
            {prevPokemon ? (
              <div className="flex flex-col sm:flex-row">
                <div className="flex justify-center items-center">
                  #{prevPokemon.id}
                  <img
                    className="h-6 pl-2 max-[400px]:pl-0 sm:hidden"
                    src={prevPokemon?.artwork.default}
                    alt="previous pokemon sprite"
                  />
                </div>
                <div>
                  {prevPokemon.name.charAt(0).toUpperCase()}
                  {prevPokemon.name.slice(1)}
                </div>
              </div>
            ) : (
              "previous"
            )}
            <img
              className="h-6 pl-2 max-[400px]:pl-0 max-sm:hidden"
              src={prevPokemon?.artwork.default}
              alt="previous pokemon sprite"
            />
          </div>
        </Link>
      ) : (
        <div />
      )}
      {data.id !== 1025 && (
        <Link
          rel="stylesheet"
          href={`${data.id + 1}`}
        >
          <div className="flex items-center">
            <img
              className="h-6 pr-2 max-[400px]:pr-0 max-sm:hidden"
              src={nextPokemon?.artwork.default}
              alt="next pokemon sprite"
            />
            {nextPokemon ? (
              <div className="flex flex-col sm:flex-row">
                <div className="flex justify-center items-center">
                  #{nextPokemon.id}
                  <img
                    className="h-6 pr-2 max-[400px]:pr-0 sm:hidden"
                    src={nextPokemon?.artwork.default}
                    alt="next pokemon sprite"
                  />
                </div>
                <div>
                  {nextPokemon.name.charAt(0).toUpperCase()}
                  {nextPokemon.name.slice(1)}
                </div>
              </div>
            ) : (
              "next"
            )}
            {" >"}
          </div>
        </Link>
      )}
    </div>
  );
}
