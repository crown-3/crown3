interface SkillProperty {
  icon: React.ReactNode;
  description: React.ReactNode;
}

export interface Skill {
  name: string;
  properties: SkillProperty[];
  description: React.ReactNode;
}
