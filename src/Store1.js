// @flow
// flow option `all=true` needs to be set in order for `.flow` declaration files to be automatically discovered.
import { ReduceStore } from "flux/utils";

// if flow is working, than an error should be displayed
class Store1 extends ReduceStore {}

const store1: Store1 = new Store1();
export default store1;
