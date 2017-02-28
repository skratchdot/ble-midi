import { createSelector } from 'reselect';

export const getMidi = state => state.midi;
export const getNote = (state, props) => props.note;
export const getNotes = createSelector([getMidi], midi => midi.get('notes'));
export const getIsPlaying = createSelector([getNotes, getNote], (
  notes,
  note
) => {
  return notes.includes(note);
});
