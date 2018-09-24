import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export interface IPerson {
  first_name: string;
  last_name: string;
}

interface IState {
  people: IPerson[];
}

export default new Vuex.Store<IState>({
  state: {
    people: []
  },
  mutations: {
    setPeople(state, people: IPerson[]) {
      state.people = people;
    }
  },
  actions: {
    async getPeople({ commit }) {
      try {
        const response = await fetch("/api/data");
        const { people }: IState = await response.json();

        commit("setPeople", people.slice(0, 12));
      } catch (e) {
        // tslint:disable-next-line:no-console
        console.error(e);
      }
    }
  }
});
