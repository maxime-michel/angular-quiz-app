export interface DifficultyOptions {
  [key: string]: string;
  name: string;
  value: string;
}

export const DIFFICULTY_VALUES: DifficultyOptions[] = [
  {
    name: 'Débutant (demi-ton, ton, tierce mineure, tierce majeure)',
    value: 0
  },
  {
    name: 'Elémentaire (débutant + quarte, quinte, octave)',
    value: 1
  },
  {
    name: 'Intermédiaire (élémentaire + sixième et septième mineures et majeures)',
    value: 2
  },
  {
    name: 'Avancé (intermédiaire + triton)',
    value: 3
  }
];
