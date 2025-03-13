import { SimpleCard } from "@/presentation/components/SimpleCard";
import { ScreenTtitle } from "@/presentation/components/ScreenTitle";
import { getAllRaces } from "@/services/dndApi/races";
import { BsPersonCircle } from "react-icons/bs";

export default async function Races() {
  const races = await getAllRaces();

  return (
    <div className="flex justify-center flex-col items-center ">
      <ScreenTtitle
        title={"Races"}
        subtitle={"Select the race to see more details"}
      />
      <main className="grid grid-cols-3 gap-4">
        {races.map((race) => (
          <SimpleCard
            key={race.index}
            path={`/races/${race.index}`}
            name={race.name}
            icon={<BsPersonCircle size={32} />}
          />
        ))}
      </main>
    </div>
  );
}
