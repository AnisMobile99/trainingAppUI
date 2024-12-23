export type Doctor = {
  id: number;
  name: string;
  specialty: string;
  availability: string[];
};

export const doctorsBySpecialty: Record<string, Doctor[]> = {
  psychologue: [
    {
      id: 1,
      name: "Dr. Alice Martin",
      specialty: "Psychologue",
      availability: ["Lundi 9h", "Jeudi 15h"],
    },
  ],
  psychiatre: [
    {
      id: 2,
      name: "Dr. Clara Dubois",
      specialty: "Psychiatre",
      availability: ["Mercredi 11h", "Vendredi 13h"],
    },
  ],
};
