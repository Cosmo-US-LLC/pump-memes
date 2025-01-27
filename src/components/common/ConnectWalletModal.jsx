import { useStore } from "@nanostores/react"
import Modal from "./Modal"
import { $modalState, closeConnectionModal } from "../../presale-gg/stores"
import { connections, getConfig } from "../../presale-gg/web3"
import { connect } from "@wagmi/core"

const ConnectWalletModal = (props) => {
  const modalState = useStore($modalState)

  return (
    <Modal open={modalState.connectModalOpen} onClose={closeConnectionModal} title="Connect Wallet">
      <div className="flex flex-col">
        {connections.filter((conn) => !conn.hide || conn.hide() === false).map((conn) => (
          <button
            key={conn.key}
            className="flex items-center gap-4 text-[20px] font-bold px-4 py-3 bg-transparent hover:bg-[rgba(0,0,0,0.2)] transition-colors"
            onClick={async () => {
                const { config, walletConnectModal } = await getConfig()
                if (conn.key === "walletconnect") {
                  walletConnectModal.open()
                } else {
                  connect(config, {connector: config.connectors[conn.connectorIndex]})
                }
                closeConnectionModal()
              }}
          >
            <img
              className="w-12 h-12"
              src={conn.icon}
              alt=""
              aria-hidden
            />
            {conn.label}
          </button>
        ))}
      </div>
    </Modal>
  )
}

export default ConnectWalletModal