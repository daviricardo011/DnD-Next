import { DescriptionSection } from "@/presentation/components/DescriptionSection";
import { FeatureTag } from "@/presentation/components/FeatureTag";
import { ScreenTtitle } from "@/presentation/components/ScreenTitle";
import { getRaceByIndex } from "@/services/dndApi/races";

interface RacePageProps {
  params: { id: string };
}

export default async function RaceDetailed({ params }: RacePageProps) {
  const { id } = await params;
  const raceDetails = await getRaceByIndex(id);
  const {
    name,
    alignment,
    age,
    size_description,
    language_desc,
    ability_bonuses,
    traits,
    starting_proficiencies,
    starting_proficiency_options,
    languages,
  } = raceDetails || {};

  return (
    <div className="flex justify-center flex-col items-center">
      <ScreenTtitle title={name || ""} subtitle={"Race Details"} />
      <main className="flex flex-col px-9">
        <DescriptionSection title="Description">
          <p>
            {alignment} {age} {size_description} {language_desc}
          </p>
        </DescriptionSection>

        {ability_bonuses && ability_bonuses.length > 0 && (
          <DescriptionSection title="Abilities Bonuses">
            <div className="flex flex-wrap gap-2">
              {ability_bonuses.map((bonus) => (
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
        )}

        {traits && traits.length > 0 && (
          <DescriptionSection title="Traits">
            <div className="flex flex-wrap gap-2">
              {traits.map((trait) => (
                <FeatureTag
                  key={trait.index}
                  content={trait.name}
                  bgColor={"bg-blue-950"}
                />
              ))}
            </div>
          </DescriptionSection>
        )}
        {((starting_proficiencies && starting_proficiencies.length > 0) ||
          starting_proficiency_options) && (
          <DescriptionSection title="Proeficiencies">
            <div className="flex flex-wrap gap-2">
              {starting_proficiencies?.map((prof) => (
                <FeatureTag
                  key={prof.index}
                  content={prof.name}
                  bgColor={"bg-violet-950"}
                />
              ))}
              {starting_proficiency_options?.from?.options?.map((prof) => (
                <FeatureTag
                  key={prof.item.index}
                  content={prof.item.name}
                  bgColor={"bg-violet-950"}
                />
              ))}
            </div>
          </DescriptionSection>
        )}
        {languages && languages.length > 0 && (
          <DescriptionSection title="Languages">
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <FeatureTag
                  key={lang.index}
                  content={lang.name}
                  bgColor={"bg-emerald-950"}
                />
              ))}
            </div>
          </DescriptionSection>
        )}
      </main>
    </div>
  );
}
