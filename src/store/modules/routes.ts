import { Module } from "vuex";
import { IRootState } from "@/store";

export interface IRoutesState {
  isLoading: boolean;
}

const routesModule: Module<IRoutesState, IRootState> = {
  state: {
    isLoading: true
  },
  mutations: {
    setLoading(state, isLoading: boolean) {
      state.isLoading = isLoading;
    }
  }
};

export default routesModule;
