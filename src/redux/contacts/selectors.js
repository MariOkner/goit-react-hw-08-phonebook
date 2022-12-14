// import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectLoading = state => state.contacts.Loading;

// export const selectError = state => state.contacts.error;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(({ name }) => {
//       return name.toLowerCase().includes(filter.toLowerCase());
//     });
//   }
// );
