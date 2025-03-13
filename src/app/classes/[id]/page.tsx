import { DescriptionSection } from "@/presentation/components/DescriptionSection";
import { FeatureTag } from "@/presentation/components/FeatureTag";
import { ScreenTtitle } from "@/presentation/components/ScreenTitle";
import { getClassByIndex } from "@/services/dndApi/classes";

interface RacePageProps {
  params: { id: string };
}

export default async function RaceDetailed({ params }: RacePageProps) {
  const { id } = await params;
  const classDetails = await getClassByIndex(id);
  const {
    name,
    hit_die,
    starting_equipment,
    saving_throws,
    proficiencies,
    proficiency_choices,
    starting_equipment_options,
  } = classDetails || {};

  console.log(classDetails);

  return (
    <div className="flex justify-center flex-col items-center">
      <ScreenTtitle title={name || ""} subtitle={"Race Details"} />
      <main className="flex flex-col px-9">
        <DescriptionSection title="Description">
          <p>Hit Point Die: {hit_die}</p>
        </DescriptionSection>

        {starting_equipment && starting_equipment.length > 0 && (
          <DescriptionSection title="Starting Equipment">
            <div className="flex flex-wrap gap-2">
              {starting_equipment.map((start) => (
                <FeatureTag
                  key={start.equipment.index}
                  content={start.equipment.name}
                  bgColor={"bg-gray-600"}
                />
              ))}
              {starting_equipment_options &&
                starting_equipment_options.length > 0 &&
                starting_equipment_options.map((startEquip) =>
                  startEquip.from.options.map((equip) => (
                    <FeatureTag
                      key={
                        equip.of?.index ||
                        equip.choice?.from.equipment_category.index
                      }
                      content={
                        equip.of?.name ||
                        equip.choice?.from.equipment_category.name ||
                        ""
                      }
                      bgColor={"bg-gray-600"}
                    />
                  ))
                )}
            </div>
          </DescriptionSection>
        )}

        {saving_throws && saving_throws.length > 0 && (
          <DescriptionSection title="Saving Throw Proficiencies">
            <div className="flex flex-wrap gap-2">
              {saving_throws.map((sav) => (
                <FeatureTag
                  key={sav.index}
                  content={sav.name}
                  bgColor={"bg-blue-950"}
                />
              ))}
            </div>
          </DescriptionSection>
        )}
        {((proficiencies && proficiencies.length > 0) ||
          proficiency_choices) && (
          <DescriptionSection title="Skill Proficiencies">
            <div className="flex flex-wrap gap-2">
              {proficiencies?.map((prof) => (
                <FeatureTag
                  key={prof.index}
                  content={prof.name}
                  bgColor={"bg-violet-950"}
                />
              ))}
              {proficiency_choices?.map((prof) =>
                prof.from?.options?.map((i) => (
                  <FeatureTag
                    key={i.item.index}
                    content={i.item.name}
                    bgColor={"bg-violet-950"}
                  />
                ))
              )}
            </div>
          </DescriptionSection>
        )}
      </main>
    </div>
  );
}
