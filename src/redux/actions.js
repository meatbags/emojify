export const TOGGLE_LIST_ITEM = 'TOGGLE_LIST_ITEM';
export function toggleListItem(index) {
  return {
    type: TOGGLE_LIST_ITEM,
    index
  };
}
