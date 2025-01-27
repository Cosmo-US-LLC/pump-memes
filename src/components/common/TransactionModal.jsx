import { useEffect, useMemo, useState } from "react"
import Modal from "./Modal"
import { QRCodeCanvas } from "@akamfoad/qrcode"
import toast from "react-hot-toast"

/**
 * @typedef {object} TransactionModalProps
 * @property {import("../../presale-gg/api/api.types").API.Transaction} TransactionModalProps.transaction
 */

/**
 * @param {Omit<import("./Modal").ModalProps, "title"> & TransactionModalProps} props
 * @returns 
 */
const TransactionModal = ({ transaction, ...others }) => {
	const qrCode = useMemo(() => new QRCodeCanvas(transaction.pay_address), [transaction.pay_address])
	const [ qrRef, setQrRef ] = useState(null)

	useEffect(() => {
		if (!qrRef) return
		qrCode.draw(qrRef)
	}, [qrRef, qrCode])

	return (
		<Modal {...others} title="Transaction" className="!max-w-[32rem] leading-[1.4] <md:gap-3">
			<div className="flex gap-4 height-[fit-content] items-center <md:gap-3 <md:flex-col">
				<canvas className="rounded-[0.5rem] w-[10.5rem] h-[10.5rem] p-0 border-4 border-[#000]" ref={setQrRef} />
				<div className="flex flex-col w-[25rem] gap-4 flex-1 <md:gap-3 <md:w-full">
					<NumberValue
						value={transaction.pay_amount}
						label={`Pay amount (${transaction.pay_currency})`}
					/>
					<NumberValue
						value={transaction.payment_id}
						label={`Payment ID`}
					/>
				</div>
			</div>
			{transaction.payin_extra_id && <>
				<NumberValue
					value={transaction.payin_extra_id}
					label="Destination Tag"
				/>
				<p className="text-[1rem] <md:text-[0.85rem]">
					You <span className="font-bold">must include</span> the destination tag in the transaction or you will not receive your tokens
				</p>
			</>}
			<NumberValue
				value={transaction.pay_address}
				label={`Payment address`}
			/>
			<p className="text-[1rem] <md:text-[0.85rem]">
				Pay <span className="font-bold">{transaction.pay_amount}</span> of <span className="font-bold">{transaction.pay_currency.toUpperCase()}</span> on the <span className="font-bold">{transaction.network.toUpperCase()}</span> network{transaction.payin_extra_id ? <>, with the destination tag of <span className="font-bold">{transaction.payin_extra_id}</span></> : ""} to the address above to confirm the payment.
			</p>
			<p className="text-[1rem] <md:text-[0.85rem]">
				The tokens will automatically be deposited upon received payment. Note that it can take between 10 minutes and 1 hour for transactions to go through.
			</p>
			<p className="text-[1rem] <md:text-[0.85rem]">
				Refresh the page to check your balance.
			</p>
		</Modal>
	)
}

export default TransactionModal

/**
 * 
 * @param {object} props 
 * @param {string | number} props.value
 * @param {string} props.label
 * @returns {import("react/jsx-runtime").JSX.Element}
 */
export const NumberValue = (props) => {
	const copy = () => {
		try {
			navigator.clipboard.writeText(props.value.toString())
			toast.success("Copied text")
		} catch (err) {
			toast("Error copying text, copy manually")
		}
	}
	return (
		<div className="grid gap-x-2 font-weight-bold py-2 px-3 border-2 border-[#000]" style={{gridTemplateColumns: "1fr auto"}}>
			<p className="uppercase text-[#666] text-[0.875rem] font-bold <md:text-[0.75rem] <md:whitespace-nowrap" style={{gridColumn: "1 / 3"}}>{props.label}</p>
			<input
				size={0}
				className="text-[1.125rem] w-auto min-w-0 !outline-none bg-transparent p-0 border-0 <md:text-[1rem]"
				value={props.value}
				onInput={(e) => e.currentTarget.value = props.value.toString()}
				readOnly
			/>
			<button className="px-2 py-1 bg-[#ffce00] text-[#000] <md:text-[0.75rem] font-bold border border-[#000]" onClick={copy}>
				Copy
			</button>
		</div>
	)
}