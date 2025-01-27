/**
 * @typedef {import("../../presale-gg/api/api.types").API.PaymentToken} PaymentToken
 */

/**
 * @typedef {object} PaymentTokenList
 * @property {PaymentToken[]} PaymentTokenList.currencies
 * @property {PaymentToken} [PaymentTokenList.defaultToken]
 * @property {string} [PaymentTokenList.placeholder]
 * @property {string} [PaymentTokenList.network]
 */

/**
 * @param {PaymentToken[]} tokens
 * @returns {PaymentTokenList[]}
 */
export const groupTokens = (tokens) => {
	let grouped = {
		"ERC-20": {
			tokens: [],
			defaultTokenSymbol: "ETH",
			network: "Ethereum"
		},
		"BEP-20": {
			tokens: [],
			defaultTokenSymbol: "BNB",
			network: "BNB"
		},
		"TRC-20": {
			tokens: [],
			defaultTokenSymbol: "TRX",
			network: "TRON"
		},
		"BITCOIN": {
			tokens: [],
			defaultTokenSymbol: "BTC",
			network: "Bitcoin"
		},
		"TON CHAIN": {
			tokens: [],
			defaultTokenSymbol: "TON",
			network: "TON"
		},
		"MORE": {
			tokens: []
		}
	}

	tokens.forEach((token) => {
		if (grouped[token.chain.toUpperCase()]) grouped[token.chain.toUpperCase()].tokens.push(token)
		else grouped["MORE"].tokens.push(token)
	})

	return Object.entries(grouped).map(([key, value]) => {
		const getSortValue = ([token, i]) => token.symbol.toUpperCase() === value.defaultTokenSymbol?.toUpperCase() ? -1 : i
		return {
			currencies: value.tokens
				.map((token, i) => [token, i])
				.sort((a, b) => getSortValue(a) - getSortValue(b))
				.map(([token]) => token),
			placeholder: key === "MORE" ? "More" : undefined,
			defaultToken: value.tokens.find((token) => token.symbol.toUpperCase() === value.defaultTokenSymbol),
			network: value.network
		}
	})
}

/**
 * @param {PaymentToken[]} tokens
 * @returns {PaymentToken[]}
*/
export const getTopTokenList = (tokens) => {
  let list = [
    tokens.find((token) => token.symbol.toUpperCase() === "SOL" && token.chain.toUpperCase() === "SOLANA"),
    tokens.find((token) => token.symbol.toUpperCase() === "BNB" && token.chain.toUpperCase() === "BEP-20"),
    tokens.find((token) => token.symbol.toUpperCase() === "USDT" && token.chain.toUpperCase() === "ERC-20"),
    tokens.find((token) => token.symbol.toUpperCase() === "ETH" && token.chain.toUpperCase() === "ERC-20"),
  ]

  list = list.filter((item) => item !== undefined)
  for (let i = list.length - 1; i < 3; i++) {
    const newToken = tokens.find((token) => list.every((token2) => token2.id !== token.id))
    if (!newToken) break
    list.push(newToken)
  }

  return list
}