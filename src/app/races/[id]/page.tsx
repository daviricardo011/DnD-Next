import { ScreenTtitle } from "@/presentation/components/ScreenTitle";
import { getRaceByIndex } from "@/services/dndApi/races";
import { JSX } from "react";

interface RacePageProps {
  params: { id: string };
}

export const DescriptionSection = ({
  title,
  children,
}: {
  title: string;
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <div className="py-4">
      <h3 className="text-xl font-bold pb-1">{title}</h3>
      {children}
    </div>
  );
};

export const FeatureTag = ({
  content,
  bgColor,
}: {
  content: string;
  bgColor: string;
}) => {
  return (
    <span className={`${bgColor} p-2 px-4 rounded-lg w-fit max-h-fit`}>
      {content}
    </span>
  );
};

export default async function Races({ params }: RacePageProps) {
  const raceDetails = await getRaceByIndex(params.id);
  console.log(raceDetails);
  return (
    <div className="flex justify-center flex-col items-center">
      <ScreenTtitle
        title={raceDetails?.name || "Error"}
        subtitle={"Race Details"}
      />
      <main className="flex flex-col px-9">
        <DescriptionSection title="Description">
          <p>
            {raceDetails?.alignment} {raceDetails?.age}{" "}
            {raceDetails?.size_description} {raceDetails?.language_desc}
          </p>
        </DescriptionSection>

        <DescriptionSection title="Abilities Bonuses">
          <div className="flex flex-wrap gap-2">
            {raceDetails?.ability_bonuses.map((bonus) => (
              <FeatureTag
                key={bonus.ability_score.index}
                content={`${bonus.ability_score.name} ${
                  bonus.bonus >= 0 ? "+" : "-"
                }
                ${bonus.bonus}`}
                bgColor={"bg-gray-600"}
              />
            ))}
          </div>
        </DescriptionSection>

        <DescriptionSection title="Traits">
          <div className="flex flex-wrap gap-2">
            {raceDetails?.traits.map((trait) => (
              <FeatureTag
                key={trait.index}
                content={trait.name}
                bgColor={"bg-blue-950"}
              />
            ))}
          </div>
        </DescriptionSection>
        {((raceDetails?.starting_proficiencies &&
          raceDetails?.starting_proficiencies.length) ||
          raceDetails?.starting_proficiency_options) && (
          <DescriptionSection title="Proeficiencies">
            <div className="flex flex-wrap gap-2">
              {raceDetails?.starting_proficiencies.map((prof) => (
                <FeatureTag
                  key={prof.index}
                  content={prof.name}
                  bgColor={"bg-violet-950"}
                />
              ))}
              {raceDetails?.starting_proficiency_options?.from?.options?.map(
                (prof) => (
                  <FeatureTag
                    key={prof.item.index}
                    content={prof.item.name}
                    bgColor={"bg-violet-950"}
                  />
                )
              )}
            </div>
          </DescriptionSection>
        )}

        <DescriptionSection title="Languages">
          <div className="flex flex-wrap gap-2">
            {raceDetails?.languages.map((lang) => (
              <FeatureTag
                key={lang.index}
                content={lang.name}
                bgColor={"bg-emerald-950"}
              />
            ))}
          </div>
        </DescriptionSection>
      </main>
    </div>
  );
}
