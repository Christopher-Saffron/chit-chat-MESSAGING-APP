import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";

//// TEMPORARY FIX
type UserStoreState = {
  currentUser: any;
  isLoading: any;
  fetchUserInfo: any;
};

export const useUserStore = create<UserStoreState>((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid: any) => {
    if (!uid) return set({ currentUser: null, isLoading: false });

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        set({ currentUser: docSnap.data(), isLoading: false });
      } else {
        set({ currentUser: null, isLoading: false });
      }
    } catch (err) {
      console.log(err);
      return set({ currentUser: null, isLoading: false });
    }
  },
}));
