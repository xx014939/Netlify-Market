import React, { useEffect } from 'react';
import {
  ChainId,
  ETH,
  UniswapDappSharedLogicContext,
} from 'uniswap-dapp-integration-shared';
import UniswapReact from 'uniswap-react';
import './App.css'; 

function MeterSwap() {
  const [uniswapDappSharedLogicContext, setUniswapDappSharedLogicContext] =
    React.useState<undefined | UniswapDappSharedLogicContext>(undefined);

  useEffect(() => {
    (async () => {
      // MetaMask
      const accounts = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
      });

      const uniswapDappSharedLogicContext: UniswapDappSharedLogicContext = {
        supportedNetworkTokens: [
          {
            chainId: ChainId.MAINNET,
            defaultInputValue: '0.000001',
            defaultInputToken: ETH.MAINNET().contractAddress,
            defaultOutputToken: '0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F',
            supportedTokens: [
              {
                contractAddress: '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',
              },
              {
                contractAddress: '0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F',
              }
            ],
          },
          {
            chainId: ChainId.RINKEBY,
            defaultInputToken: ETH.RINKEBY().contractAddress,
            defaultOutputToken: '0xef0e839cf88e47be676e72d5a9cb6ced99fad1cf',
            supportedTokens: [
              {
                contractAddress: '0xef0e839cf88e47be676e72d5a9cb6ced99fad1cf',
              },
            ],
          },
        ],
        ethereumAddress: accounts[0],
        ethereumProvider: (window as any).ethereum,
        theming: {
          backgroundColor: 'black',
          button: { textColor: 'black', backgroundColor: '#0ff' },
          panel: { textColor: 'black', backgroundColor: '#0ff' },
          textColor: '#0ff',
        },
      };

      setUniswapDappSharedLogicContext(uniswapDappSharedLogicContext);
    })();
  }, []);

  return (
    <div className="App">
      <div className="uniswap-container">
        {uniswapDappSharedLogicContext !== undefined && (
          <UniswapReact
            uniswapDappSharedLogicContext={uniswapDappSharedLogicContext}
          />
        )}
      </div>
    </div>
  )
}

export default MeterSwap;