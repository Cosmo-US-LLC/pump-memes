import React, { useCallback, useEffect, useMemo, useState } from "react";
import arrwdwn from "../../assets/Svgs/arrwdwn.svg";
import edit from "../../assets/Svgs/edit.svg";
import herovector from "../../assets/Svgs/herovector.svg";
import herovector2 from "../../assets/Svgs/herovector2.svg";
import herovector3 from "../../assets/Svgs/herovector3.svg";
import herovector4 from "../../assets/Svgs/herovector4.svg";
import herocardimg1 from "../../assets/images/herocard (1).png";
import herocardimg2 from "../../assets/images/herocard (2).png";
import herocardimg3 from "../../assets/images/herocard (3).png";
import walletcoin1 from "../../assets/Svgs/walletcoin (4).svg";
import walletcoin2 from "../../assets/Svgs/walletcoin (3).svg";
import walletcoin3 from "../../assets/Svgs/walletcoin (2).svg";
import walletcoin4 from "../../assets/Svgs/walletcoin (1).svg";
import walletcoin from "../../assets/Svgs/walletcoin.svg";
import { useStore } from "@nanostores/react";
import { $apiState } from "../../presale-gg/stores/api.store";
import { formatDollar, getTopTokenList, parseNum, roundToDP, truncateString } from "../../presale-gg/util";
import { tokenImageMap, chainImgMap } from "../../presale-gg/assets/img/tokens"
import { getAbi, getChainIdFromLabel, getConfig, getContractAddress, getDecimals, isCurrencyNative, sendGenericTransaction, useAccount } from "../../presale-gg/web3";
import toast from "react-hot-toast";
import { api } from "../../presale-gg/api";
import { showConnectionModal } from "../../presale-gg/stores"
import { disconnect } from "@wagmi/core";
import TransactionModal from "../../components/common/TransactionModal";
import { BonusCodeInput, ReferralCodeInput } from "../../components/common/CodeInput";
import ReferralShareBox from "../../components/common/ReferralShareBox";


/**
 * @typedef {import("../presale-gg/api/api.types").API.PaymentToken} PaymentToken
 */

export const walletBuyTokens = new Set([
	"ETH-ERC-20",
	"USDT-ERC-20",
	"BNB-BEP-20",
	"BUSD-BEP-20",
	"USDT-BEP-20"
])

function MobileHeroSec() {
  const [isOpen, setIsOpen] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const apiData = useStore($apiState);

  const topPaymentTokens = useMemo(() => getTopTokenList(apiData.paymentTokens ?? []), [apiData.paymentTokens])

  /** @type {[PaymentToken | null, (token: PaymentToken) => void]} */
  const [selectedPaymentToken, setSelectedPaymentToken] = useState(null);
  const [paymentUsdAmountStr, setPaymentUsdAmountStr] = useState("1")
  const [receiveTokenAmountStr, setReceiveTokenAmountStr] = useState("1")

  /** @param {string} amount */
  const updateUsdAmount = (amount) => {
    setPaymentUsdAmountStr(amount)
    const numUsd = parseNum(amount)
    const receiveNum = roundToDP(numUsd / parseNum(apiData.stage?.token_price ?? "1"), 4)
    setReceiveTokenAmountStr(receiveNum.toString())
  }

  /** @param {string} amount */
  const updateReceiveAmount = (amount) => {
    setReceiveTokenAmountStr(amount)
    const numReceive = parseNum(amount)
    const usdNum = roundToDP(numReceive * parseNum(apiData.stage?.token_price ?? "1"), 2)
    setPaymentUsdAmountStr(usdNum.toString())
  }

  const accountData = useAccount()
  const partialNumRegex = /(\d+(\.\d*)?)?/

  const countdownComponents = useMemo(() => {
    return {};
  }, [apiData.stage]);

  useEffect(() => {
    if (!topPaymentTokens.length === 0 || selectedPaymentToken) return
    setSelectedPaymentToken(topPaymentTokens[0])
    updateUsdAmount(1)
  }, [topPaymentTokens[0]?.price, updateUsdAmount])

  useEffect(() => {
    updateUsdAmount(paymentUsdAmountStr)
  }, [apiData.stage?.token_price])

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleButtonClick = (token) => {
    setSelectedPaymentToken(token)
    setIsOpen(false)
  };

  const minimum = useMemo(() => {
		if (!selectedPaymentToken || !selectedPaymentToken.nowpayments_minimum) return null
		return Math.ceil((parseNum(selectedPaymentToken.nowpayments_minimum) / parseNum(selectedPaymentToken.price)) * 10**6) / 10**6
	}, [selectedPaymentToken])

	const [ transactionLoading, setTransactionLoading ] = useState(false)
	const [ createdTransaction, setCreatedTransaction ] = useState(null)
	const [ transactionModalOpen, setTransactionModalOpen ] = useState(false)

	const buy = useCallback(async () => {
    if (transactionLoading) return
    if (!acceptedTerms) return  toast.error("You must first accept the terms")
		if (apiData.presaleEnded) return toast.error("Presale has ended")
		const { config } = await getConfig()
		const currency = selectedPaymentToken
		if (!currency) return
		const min = minimum
    const usdAmount = parseNum(paymentUsdAmountStr)
    const paymentTokenAmount = usdAmount / currency.price
		if (usdAmount === 0) return toast.error(`Must pay more than $0`)
		if (min !== null && paymentTokenAmount < min) return toast.error(`Must pay more than ${formatDollar(min * currency.price)} with ${currency.symbol}`)
		const address = accountData.address
		if (!address) return
		try {
			await toast.promise((async () => {
				const walletTransfer = walletBuyTokens.has(currency.symbol.toUpperCase() + "-" + currency.chain.toUpperCase())
				if (walletTransfer) {
          const chainId = getChainIdFromLabel(currency.chain)
          if (!chainId) return toast.error(`Invalid chain id for chain ${currency.chain}`)
          const abi = getAbi(chainId)
          if (!abi) return toast.error(`Invalid ABI for chain id ${chainId}`)
          setTransactionLoading(true)
          const native = isCurrencyNative(currency.symbol, chainId)
          const contractAddress = getContractAddress(chainId, currency.symbol) ?? undefined
          const decimals = currency.symbol ? getDecimals(chainId, currency.symbol) : 18
          if (!native && !contractAddress) return toast.error(`Invalid contract address for token ${currency.symbol}`)
					toast("Confirm in your wallet")
					const transactionHash = await sendGenericTransaction(config, {
						to: apiData.info.main_payment_wallet_address,
						value: paymentTokenAmount,
						abi,
						chainId,
						contractAddress,
						decimals: decimals,
						native
					})
					toast.success("Transaction successfully completed", {duration: 10_000})
					api.createTransactionMetadata(address ?? "", transactionHash)
					setTransactionLoading(false)
					return "sent"
				} else {
					setTransactionLoading(true)
					const res = await api.createTransaction({
						payment_token_id: currency.id,
						usd_amount: (paymentTokenAmount * parseNum(currency.price)).toString(),
						wallet_address: address ?? "",
						token_amount: paymentTokenAmount.toString()
					})
					setCreatedTransaction(res.data)
					setTimeout(() => {
						setTransactionModalOpen(true)
						setTransactionLoading(false)
					}, 100)
					return "created"
				}
			})(), {
				loading: "Starting transaction",
				error: (err) => api.getApiErrorMessage(err, "Transaction failed"),
				success: (val) => val === "created" ? "Created transaction" : "Successfully confirmed transaction"
			})
		} catch(err) {
			console.error(err)
		}
		setTransactionLoading(false)
	}, [selectedPaymentToken, paymentUsdAmountStr, apiData.presaleEnded, accountData.address, apiData.info?.main_payment_wallet_address, minimum, acceptedTerms, transactionLoading])

  return (
    <div className="herobg !bg-cover  relative pb-[3rem] pt-[68px] w-[100%] overflow-hidden">
          <img
            className="absolute top-[5.5%] h-[100px] left-[-6%]"
            src={herovector}
            alt=""
          />
      <div className="w-[90%] mx-auto">
        <div className="max-w-[695px] relative w-[100%] pt-[87px]">
          <img
            className="absolute top-[3%] h-[80px] right-[-18%]"
            src={herovector2}
            alt=""
          />
          <h4 className="text-[16px] text-center font-[600] text-[#000] pb-[19px]">
            MORE PUMPS, MORE FUN
          </h4>
          <h2 className="text-[36px] font-[700] text-center font-[Tomorrow] leading-[125%]">
            The Easiest And Most Fun Way  To Launch And Trade Meme Coins
          </h2>
          <p className=" text-center text-[18px] font-[400] text-[#000] py-[20px]">
          Pump Memes is a launchpad where users earn, not just the developers. It’s secure, fair, and built for the community. $PUMP holders get rewards in SOL from every coin launched on Pump Memes, all while reaching for the moon together!
          </p>
          <h3 className="text-[24px] text-center font-[500] font-[Tomorrow] leading-[109.566%] pt-[8px] pb-[30px]">
            Find the Next <br /> Crypto Moonshot
          </h3>
          <div className="flex space-x-[10px] max-w-[304px] w-[100%] mx-auto py-[15px] px-[13px] bg-[#7D67BF] shadow-3xl">
            <div className="px-[7px] py-[8px] shadow-3xl flex flex-col items-center bg-[#FFD92F] border border-[#000]">
              <img className="p-1 rounded-full" src={herocardimg1} alt="" />
              <h3 className="text-[16px] font-[900] text-[#000]">Chill Guy</h3>
              <p className="text-[16px] font-[400] text-[#000]">$418M</p>
            </div>
            <div className="px-[7px] py-[8px] shadow-3xl flex flex-col items-center bg-[#FFD92F] border border-[#000]">
              <img className="p-1 rounded-full" src={herocardimg3} alt="" />
              <h3 className="text-[16px] font-[900] text-[#000]">SPX6900</h3>
              <p className="text-[16px] font-[400] text-[#000]">$574M</p>
            </div>
            <div className="px-[7px] py-[8px] shadow-3xl flex flex-col items-center bg-[#FFD92F] border border-[#000]">
              <img className="p-1 rounded-full" src={herocardimg2} alt="" />
              <h3 className="text-[16px] font-[900] text-[#000]">PNUT</h3>
              <p className="text-[16px] font-[400] text-[#000]">$1.24B</p>
            </div>
          </div>
          <img
            className="absolute top-[68%] h-[50px] left-[-6%]"
            src={herovector3}
            alt=""
          />
          <img
            className="absolute top-[61%] h-[50px] right-[-8%]"
            src={herovector4}
            alt=""
          />
        </div>
        <div className="max-w-[483.742px] relative w-[100%] min-h-[665px] herowalletbg px-[35px] pb-[35px] pt-[45px] space-y-[20px] !mt-[50px]">
          <div className="max-w-[88.033px] w-[100%] top-[1%] absolute right-[38%] h-[28.895px] flex justify-center text-center items-center mx-auto bg-[#FFCE00] border border-[#000] text-[#000] text-[12.189px] font-[700]">
            BUY $PUMP
          </div>
          <div>
            <h4 className="text-[#2AFF00] text-center text-[26px] font-[900]">
              {formatDollar(parseNum(apiData.stage?.cumulative_usd_raised))} Raised
            </h4>
          </div>
          <div className="border border-[#FFCE00] py-[10px]">
            <p className="text-[16.491px] text-[#fff] font-[700] text-center">
              Price Increase In
            </p>
            <div className="flex justify-center space-x-[33px]">
              <div className="flex flex-col items-center">
                <p className="text-center text-[#FFCE00] text-[33px] font-[700] leading-[100%]">
                  00
                </p>
                <p className="text-center text-[10.994px] font-[400] text-[#fff]">
                  DAYS
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center text-[#FFCE00] text-[33px] font-[700] leading-[100%]">
                  20
                </p>
                <p className="text-center text-[10.994px] font-[400] text-[#fff]">
                  HOURS
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center text-[#FFCE00] text-[33px] font-[700] leading-[100%]">
                  37
                </p>
                <p className="text-center text-[10.994px] font-[400] text-[#fff]">
                  MINS
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center text-[#FFCE00] text-[33px] font-[700] leading-[100%]">
                  38
                </p>
                <p className="text-center text-[10.994px] font-[400] text-[#fff]">
                  SECS
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-x-[10px]">
            {apiData.paymentTokensLoading && new Array(4).fill(0).map((_, i) => <div key={i} className="w-[90px] h-[45.8px] bg-[#50505040]"></div>)}
            {topPaymentTokens.map((token, index) => (
              <button
                key={index}
                onClick={() => handleButtonClick(token)}
                className={`w-[90px] h-[45.809px] bg-[#50505040] flex items-center justify-center space-x-[5px] px-1 ${
                  selectedPaymentToken === token
                    ? "border border-[#FFCE00]"
                    : "border border-transparent"
                }`}
              >
                <div className="relative">
                  <img className="w-7 h-7" src={tokenImageMap[token.symbol.toLowerCase()]} alt="" />
                  <img className="w-[14px] h-[14px] absolute bottom-[-2px] right-[-2px] border border-[#fff] rounded-full" src={chainImgMap[token.chain.toUpperCase()]} alt="" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[12.826px] text-[#fff] font-[400] leading-[1.1]">
                    {token.symbol.toUpperCase()}
                  </span>
                  <span className="text-[10px] text-[#aaa] font-[400] leading-[1.1]">
                    {token.chain}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-[12.826px] font-[400] text-[#fff]"
            >
              You Pay:
            </label>
            <div className="h-[56px] flex items-center justify-between border-[1.832px] border-[#50505040] p-[5px]">
              <div className="relative inline-block w-[70px]">
                <button
                  onClick={handleToggleDropdown}
                  className="px-[5px] w-[68px] h-[45.809px] bg-[#50505040] flex items-center space-x-[8px] border border-transparent "
                >
                  <div className="relative w-7 h-7">
                    {selectedPaymentToken && <>
                      <img className="w-full h-full" src={tokenImageMap[selectedPaymentToken?.symbol.toLowerCase()]} alt={selectedPaymentToken?.symbol.toUpperCase()} />
                      <img className="w-[14px] h-[14px] absolute bottom-[-2px] right-[-2px] border border-[#fff] rounded-full" src={chainImgMap[selectedPaymentToken?.chain.toUpperCase()]} alt="" />
                    </>}
                  </div>
                  <img
                    src={arrwdwn}
                    alt="Arrow Down"
                    className="w-[12px] h-[12px]"
                  />
                </button>
                {isOpen && (
                  <div className="absolute top-full mt-2 w-[60px] bg-[#2d2d2d] shadow-md z-10 w-[max-content] mt-2 bg-[#2d2d2d] shadow-md z-10 max-h-[250px] overflow-y-auto">
                    {(apiData.paymentTokens ?? []).map((token, index) => (
                      <button
                        key={index}
                        onClick={() => handleButtonClick(token)}
                        className="flex items-center w-full gap-[12px] px-[10px] h-[45.809px] hover:bg-[#404040]"
                      >
                        <div className="relative flex-shrink-0">
                          <img className="w-7 h-7" src={tokenImageMap[token.symbol.toLowerCase()]} alt="" />
                          <img className="w-[14px] h-[14px] absolute bottom-[-2px] right-[-2px] border border-[#fff] rounded-full" src={chainImgMap[token.chain.toUpperCase()]} alt="" />
                        </div>
                        <div className="flex flex-col text-start">
                          <span className="text-[12.826px] text-[#fff] font-[400] leading-[1.1]">
                            {token.symbol.toUpperCase()}
                          </span>
                          <span className="text-[10px] text-[#aaa] font-[400] leading-[1.1]">
                            {token.chain}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="space-x-1 flex items-center w-[50%]">
                <input
                  type="text"
                  className="w-[70%] placeholder-[#fff] text-[#fff] text-end h-[45.809px] bg-[#000] outline-none m-0"
                  value={paymentUsdAmountStr}
                  onFocus={(e) => {
                    if (e.currentTarget.value === "0") updateUsdAmount("")
                  }}
                  onBlur={(e) => {
                    if (e.currentTarget.value === "") updateUsdAmount("0")
                  }}
                  onInput={(e) => {
                    let val = e.currentTarget.value
                    if (!partialNumRegex.test(val)) {
                      val = paymentUsdAmountStr
                    }
                    e.currentTarget.value = val
                    updateUsdAmount(val)
                  }}
                />
                <span className="text-[#808080] text-[16.491px] font-[400]">
                  USD
                </span>
              </div>
              <div className="flex items-cennter space-x-[3.66px] ml-1">
                <button className="h-[45.809px] px-[6.875px] bg-[#50505040]">
                  <img src={edit} alt="" />
                </button>
                <div className="space-y-[3.66px]">
                  <button
                    className="h-[21.072px] block bg-[#50505040] text-[#fff] w-[41.228px] text-[16.491px] font-[400] leading-[100%]"
                    onClick={() => updateUsdAmount(Math.floor(parseNum(paymentUsdAmountStr) + 1).toString())}
                  >
                    +
                  </button>
                  <button
                    className="leading-[100%] h-[21.072px] block bg-[#50505040] text-[#fff] w-[41.228px] text-[16.491px] font-[400]"
                    onClick={() => updateUsdAmount(Math.floor(parseNum(paymentUsdAmountStr) - 1).toString())}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <label
              htmlFor=""
              className="text-[12.826px] font-[400] text-[#fff]"
            >
              You Receive:
            </label>
            <div className="h-[56px] flex items-center justify-between border-[1.832px] border-[#50505040] p-[5px]">
              <div className="relative inline-block">
                <button className="px-[10px] h-[45.809px] bg-[#50505040] flex items-center space-x-[8px] border border-transparent ">
                  <img src={walletcoin} alt="Coin" />
                  <span className="text-[18px] text-[#fff]">=</span>
                </button>
              </div>
              <div className="space-x-1 w-[80%] flex items-center">
                <input
                  type="text"
                  className="placeholder-[#fff] w-[100%] text-[#fff] text-end h-[45.809px] bg-[#000] outline-none m-0"
                  value={receiveTokenAmountStr}
                  onFocus={(e) => {
                    if (e.currentTarget.value === "0") updateReceiveAmount("")
                  }}
                  onBlur={(e) => {
                    if (e.currentTarget.value === "") updateReceiveAmount("0")
                  }}
                  onInput={(e) => {
                    let val = e.currentTarget.value
                    if (!partialNumRegex.test(val)) {
                      val = receiveTokenAmountStr
                    }
                    e.currentTarget.value = val
                    updateReceiveAmount(val)
                  }}
                />
                <span className="text-[#808080] text-[16.491px] font-[400]">
                  PUMP
                </span>
              </div>
            </div>
          </div>
          {accountData.isConnected && (
            <div className="flex flex-col">
              <p className="text-[#fff] text-[12.826px]">Your Referral Code:</p>
              <ReferralShareBox />
            </div>
          )}
          <div className="flex gap-2">
            <div className="flex flex-col flex-1">
              <p className="text-[#fff] text-[12.826px]">Referral Code</p>
              <ReferralCodeInput />
            </div>
            <div className="flex flex-col flex-1">
              <p className="text-[#fff] text-[12.826px]">Bonus Code</p>
              <BonusCodeInput />
            </div>
          </div>
          <div className="flex space-x-3 ites-center">
            <div>
              <input
                type="checkbox"
                name=""
                className="inputwellat h-[33px] w-[33px] border bg-black border-[#FFCE00] "
                id=""
                checked={acceptedTerms}
                onChange={(e) => {
                  setAcceptedTerms(e.currentTarget.checked)
                }}
              />
            </div>
            <p className="text-[10.994px] font-[400] text-[#fff] leading-[110%]">
              I agree to the{" "}
              <a href="" className="underline">
                Terms of Use
              </a>
              and{" "}
              <a href="" className="underline">
                Privacy Policy,
              </a>{" "}
              certify that I have fully understood the{" "}
              <a href="" className="underline">
                Risks Disclaimer,
              </a>{" "}
              and confirm that I am not from a{" "}
              <a href="" className="underline">
                Blocked Country
              </a>
            </p>
          </div>
          <div>
            <div className="flex gap-4">
              <button
                className="text-[12.491px] font-[700] text-[#000] bg-[#FFCE00] h-[33px] border-[1.214px ] border-[#000] w-[100%] hover:bg-[#000] hover:text-[#fff] hover:border hover:border-[#FFCE00]"
                onClick={() => {
                  if (!accountData.isConnected) showConnectionModal()
                  else buy()
                }}
              >
                {accountData.isConnected ? "Buy Now" : "Connect Wallet"}
              </button>
              {accountData.isConnected && (
                <button
                  className="text-[12.491px] font-[700] text-[#000] bg-[#FFCE00] h-[33px] border-[1.214px ] border-[#000] w-[100%] hover:bg-[#000] hover:text-[#fff] hover:border hover:border-[#FFCE00] leading-[1]"
                  onClick={async () => {
                    const { config } = await getConfig()
                    disconnect(config)
                  }}
                >
                  Disconnect ({truncateString(accountData.address, 12)})
                </button>
              )}
            </div>
            <a
              href=""
              className="text-center flex justify-center text-[#fff] pt-[10px] text-[12.826px] font-[400] underline"
            >
              Full Discount Chart
            </a>
          </div>
        </div>
      </div>
      {createdTransaction && (
        <TransactionModal open={transactionModalOpen} onClose={() => setTransactionModalOpen(false)} transaction={createdTransaction} />
      )}
    </div>
  );
}

export default MobileHeroSec;
