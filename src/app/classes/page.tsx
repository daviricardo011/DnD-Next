import { SimpleCard } from "@/presentation/components/SimpleCard";
import { ScreenTtitle } from "@/presentation/components/ScreenTitle";
import { getAllClasses } from "@/services/dndApi/classes";
import { FaPersonHiking } from "react-icons/fa6";

export default async function Classes() {
  const classes = await getAllClasses();

  return (
    <div className="">
      <ScreenTtitle
        title={"Classes"}
        subtitle={"Select the class to see more details"}
      />

      <main className="grid grid-cols-3 gap-4">
        {classes.map((job) => (
          <SimpleCard
            key={job.index}
            path={`/classes/${job.index}`}
            icon={<FaPersonHiking size={32} />}
            name={job.name}
          />
        ))}
      </main>
    </div>
  );
}
