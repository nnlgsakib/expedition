import { createStore } from "reusable";
import useEthRPC from "../hooks/useEthRPC";
import useChainListStore from "../stores/useChainListStore"
import { Chain } from "../models/chain";

export default createStore(async () => {
  const [chains] = useChainListStore();

  return useEthRPC(chains);
});
