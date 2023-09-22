import { createSlice } from '@reduxjs/toolkit';

const order = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    getObjet: (state, action) => {
      const newData = action.payload.map((objet) => {
        return {
          id: objet._id,
          Data: [
            {
              adresseDepart: objet.Data[0].adresseDepart,
              dateValue: objet.Data[0].dateValue,
              hourValue: objet.Data[0].hourValue,
              minuteValue: objet.Data[0].minuteValue,
              isAtTruck: objet.Data[0].isAtTruck,
              quantities: [objet.Data[0].quantities],
              iselevator: objet.Data[0].iselevator,
            },
          ],
          Data_a: [
            {
              adresseArrivee: objet.Data_a[0].adresseArrivee,
              isAtTruck: objet.Data_a[0].isAtTruck,
              quantities: [objet.Data_a[0].quantities],
              iselevator: objet.Data_a[0].iselevator,
            },
          ],
          Data_o: [
            {
              objetList: [objet.Data_o[0].objetList],
              quantities: [objet.Data_o[0].quantities],
            },
          ],
          totale: objet.totale,
          payement: objet.payement,
          userId: objet.userId,
        };
      });
      const uniqueNewData = newData.filter(
        (newObjet) =>
          !state.some((existingObjet) => existingObjet.id === newObjet.id)
      );

      return [...state, ...uniqueNewData];
    },
    Deleteobjet: (state, action) => {
      const id = action.payload;

      // Filtrer l'objet par ID directement dans state
      return state.filter((u) => u.id !== id);
    },
  },
});
// Exportez les actions du slice
export const { getObjet, Deleteobjet } = order.actions;

export default order.reducer;
