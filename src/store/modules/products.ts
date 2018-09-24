import { Module } from "vuex";
import { IRootState } from "@/store";

export interface IPerson {
  first_name: string;
  last_name: string;
}

export interface IProductsState {
  isLoading: boolean;
  people: IPerson[];
}

const productsModule: Module<IProductsState, IRootState> = {
  state: {
    isLoading: true,
    people: []
  },
  mutations: {
    setPeople(state, people: IPerson[]) {
      state.people = people;
      state.isLoading = false;
    }
  },
  actions: {
    async getPeople({ commit }) {
      try {
        const response = await fetch("/api/data");
        const { people }: IProductsState = await response.json();

        commit("setPeople", people.slice(0, 12));
      } catch (e) {
        // tslint:disable-next-line:no-console
        console.error(e);
      }
    }
  }
};

export default productsModule;
