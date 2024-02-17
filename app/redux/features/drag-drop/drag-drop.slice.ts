import { createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";

const initialState: any[] = [];

const DragDropSlice = createSlice({
  name: "drag-drop",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { columnId, value } = action.payload;
      return produce(state, (draftState) => {
        const columnIndex = draftState.findIndex(
          (column) => column.id === columnId
        );
        if (columnIndex !== -1) {
          if (draftState[columnIndex].items) {
            draftState[columnIndex].items.push({ id: uuidv4(), ...value });
          } else {
            draftState[columnIndex].items = [{ id: uuidv4(), ...value }];
          }
        }
      });
    },
    removeItem: (state, action) => {
      const { columnId, itemId } = action.payload;
      return produce(state, (draftState) => {
        const columnIndex = draftState.findIndex(
          (column) => column.id === columnId
        );
        if (columnIndex !== -1 && draftState[columnIndex].items) {
          const itemIndex = draftState[columnIndex].items.findIndex(
            (item) => item.id === itemId
          );
          if (itemIndex !== -1) {
            draftState[columnIndex].items.splice(itemIndex, 1);
          }
        }
      });
    },
    addColumn: (state, action) => {
      const { title } = action.payload;
      const id = uuidv4();
      return produce(state, (draftState) => {
        draftState.push({
          id,
          title,
          items: [],
        });
      });
    },
    updateColumn: (state, action) => {
      const { columnId, property, value } = action.payload;
      return produce(state, (draftState) => {
        const columnIndex = draftState.findIndex(
          (column) => column.id === columnId
        );
        console.log({ columnIndex });
        if (columnIndex !== -1) {
          draftState[columnIndex][property] = value;
        }
      });
    },
    removeColumn: (state, action) => {
      const { columnId } = action.payload;
      return produce(state, (draftState) => {
        const columnIndex = draftState.findIndex(
          (column) => column.id === columnId
        );
        if (columnIndex !== -1) {
          draftState.splice(columnIndex, 1);
        }
      });
    },
    addState: (state, action) => {
      const { value } = action.payload;
      return value;
    },
  },
});

export const {
  addItem,
  removeItem,
  addColumn,
  addState,
  updateColumn,
  removeColumn,
} = DragDropSlice.actions;
export default DragDropSlice.reducer;
