import { createSlice } from '@reduxjs/toolkit';

export const departSlice = createSlice({
  name: 'user',
  initialState: {
    Users: [],
    isLoggedIn: false,
    loggedInEmail: null,
  },
  reducers: {
    getuser: (state, action) => {
      state.Users = action.payload.map((user) => {
        return {
          id: user._id,
          prenom: user.prenom,
          nom: user.nom,
          phone: user.phone,
          email: user.email,
          password: user.password,
          isLoggedIn: user.isLoggedIn,
          loggedInEmail: user._id,
        };
      });
    },

    addUser: (state, action) => {
      state.Users.push(action.payload);
    },
    UpdateUser: (state, action) => {
      const index = state.Users.findIndex((x) => x.id === action.payload.id);
      state.Users[index] = {
        id: action.payload.id,
        prenom: action.payload.prenom,
        nom: action.payload.nom,
        phone: action.payload.phone,
        email: action.payload.email,
        password: action.payload.password,
      };
    },

    login: (state, action) => {
      state.isLoggedIn = true;
      state.loggedInEmail = action.payload; // Stockez l'email de l'utilisateur connecté
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.loggedInEmail = null; // Réinitialisez l'email lors de la déconnexion
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, getuser, addUser, UpdateUser } =
  departSlice.actions;

export default departSlice.reducer;
