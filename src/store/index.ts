import Vue from "vue";
import Vuex from "vuex";
import products, { IProductsState } from "@/store/modules/products";
import routes, { IRoutesState } from "@/store/modules/routes";

Vue.use(Vuex);

export { IPerson } from "@/store/modules/products";

export interface IRootState {
  routes: IRoutesState;
  products: IProductsState;
}

export default new Vuex.Store<IRootState>({
  modules: {
    products,
    routes
  }
});
