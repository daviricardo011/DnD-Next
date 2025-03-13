import { BaseEntity } from "./BaseEntity";

export interface JobClass extends BaseEntity {
  hit_die: number;
  updated_at: string;
  class_levels: string;
  proficiency_choices: {
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
  }[];
  proficiencies: BaseEntity[];
  saving_throws: BaseEntity[];
  starting_equipment: {
    equipment: BaseEntity
    quantity: number;
  }[];
  starting_equipment_options: {
    desc: string;
    choose: number;
    type: string;
    from: {
      option_set_type: string;
      options: {
        option_type: string;
        count?: number;
        of?: BaseEntity;
        choice?: {
          desc: string;
          choose: number;
          type: string;
          from: {
            option_set_type: string;
            equipment_category: BaseEntity;
          };
        };
      }[];
    };
  }[];
  multi_classing: {
    prerequisites: {
      ability_score: BaseEntity;
      minimum_score: number;
    }[];
    proficiencies: BaseEntity[];
  };
  subclasses: BaseEntity[];
}
