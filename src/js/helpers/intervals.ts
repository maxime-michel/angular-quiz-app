export function randomNote(): string {
  let notes: string[] = ["C4", "Db4", "D4", "Eb4", "E4", "F4", "Gb4", "G3", "Ab3", "A3", "Bb3", "B3"];
  // https://stackoverflow.com/a/5915122
  return notes[Math.floor(Math.random() * notes.length)];
}
