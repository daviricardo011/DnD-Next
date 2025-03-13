import { BaseEntity } from "./BaseEntity";

export interface Race extends BaseEntity {
  speed: number;
  ability_bonuses: {
    ability_score: BaseEntity;
    bonus: number;
  }[];
  alignment: string;
  age: string;
  size: string;
  size_description: string;
  starting_proficiencies: BaseEntity[];
  starting_proficiency_options?: {
    desc: string;
    choose: number;
    type: string;
    from: {
      option_set_type: string;
      options: {
        option_type: string;
        item: BaseEntity;
      }[];
    };
  };
  languages: BaseEntity[];
  language_desc: string;
  traits: BaseEntity[];
  subraces: BaseEntity[];
  updated_at: string;
}
