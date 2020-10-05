import { ChainId } from '@coswap/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x80431e5eccbc42f3f3f2521d72c961324ed9050f',
  [ChainId.ROPSTEN]: '0x80431e5eccbc42f3f3f2521d72c961324ed9050f',
  [ChainId.KOVAN]: '0x80431e5eccbc42f3f3f2521d72c961324ed9050f',
  [ChainId.RINKEBY]: '0x80431e5eccbc42f3f3f2521d72c961324ed9050f',
  [ChainId.GÖRLI]: '0x80431e5eccbc42f3f3f2521d72c961324ed9050f'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
