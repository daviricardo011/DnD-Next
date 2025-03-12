import { RaceCard } from "@/presentation/components/RaceCard";
import { ScreenTtitle } from "@/presentation/components/ScreenTitle";
import { getAllRaces } from "@/services/dndApi/races";

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
          <RaceCard key={race.index} index={race.index} name={race.name} />
        ))}
      </main>
    </div>
  );
}
