import { useStore } from "@nanostores/react"
import { $userState, resetUserBonusCode, userApplyBonusCode, userResetReferralCode, userUpdateReferralCode } from "../../presale-gg/stores"
import toast from "react-hot-toast"
import { api } from "../../presale-gg/api"
import clsx from "clsx"
import { useEffect, useState } from "react"

let loaded = false

/**
 * @param {object} props
 * @param {(code: string) => void} props.onApply
 * @param {boolean} props.applied
 * @param {string} props.appliedText
 * @param {() => void} props.onReset
 * @param {string} props.placeholder
 * @param {string} props.urlKey
 * @returns {import("react").JSX.Element}
 */
export const CodeInput = ({ onApply, onReset, applied, appliedText, urlKey, placeholder,  ...others }) => {
  const [ code, setCode ] = useState("")
  const [ loading, setLoading ] = useState(false)
  const [ flash, setFlash ] = useState(false)

  const [ codeInputRef, setCodeInputRef ] = useState(null)

	useEffect(() => {
		const url = new URL(window.location.href)
		const code = url.searchParams.get(urlKey)
		if (!code) return
    setCode(code)
    setFlash(true)
		const timeout = setTimeout(() => {
			if (code && !loaded) {
				const el = codeInputRef
				el?.scrollIntoView({behavior: "smooth", block: "center"})
			}
			loaded = true
		}, 500)
		return () => clearTimeout(timeout)
	}, [codeInputRef, urlKey])

  return (
    <div {...others} ref={setCodeInputRef} className={clsx("flex text-[16px] bg-[transparent] border-[#50505040] border-2 h-[56px] p-[5px] pl-[10px] gap-[5px]", others.className)}>
      {applied ? (
        <p className="text-[#02c746] flex-1 self-center font-[]">{appliedText}</p>
      ) : (
        <input
          value={code}
          onInput={(e) => setCode(e.currentTarget.value)}
          className="bg-transparent flex-1 !outline-none text-[#fff] placeholder-[#aaa]"
          size={1}
          placeholder={placeholder}
        />
      )}
      <button
        className={clsx("flex items-center justify-center text-[#fff] text-[12px] bg-[#141414] w-[56px] transition-colors hover:bg-[#181818]", {"animate-pulse": flash})}
        onClick={async () => {
          if (loading) return
          if (applied) onReset()
          else {
            setLoading(true)
            await onApply(code)
            setLoading(false)
          }
        }}
      >
        {applied ? "Change" : "Apply"}
      </button>
    </div>
  )
}

export default CodeInput

export const ReferralCodeInput = (props) => {
  const userData = useStore($userState)

  const onApply = async (code) => {
    return toast.promise(userUpdateReferralCode(code, {noToast: true}), {
      loading: "Applying referral code",
      error: (err) => api.getApiErrorMessage(err, "Error applying referral code"),
      success: "Successfully applied referral code"
    }).catch(() => {})
  }

  return (
    <CodeInput
      {...props}
      onApply={onApply}
      applied={!!userData.user?.referred_by}
      appliedText="Code applied"
      onReset={userResetReferralCode}
      placeholder="Referral code"
      urlKey="referral_code"
    />
  )
}

export const BonusCodeInput = (props) => {
  const userData = useStore($userState)

  const onApply = async (code) => {
    return toast.promise(userApplyBonusCode(code, {noToast: true}), {
      loading: "Applying bonus code",
      error: (err) => api.getApiErrorMessage(err, "Error applying bonus code"),
      success: "Successfully applied bonus code"
    }).catch(() => {})
  }

  return (
    <CodeInput
      {...props}
      onApply={onApply}
      applied={userData.appliedBonusCode !== null}
      appliedText={`Code applied (+${userData.appliedBonusCode?.percentage}%)`}
      onReset={resetUserBonusCode}
      placeholder="Bonus code"
      urlKey="bonus_code"
    />
  )
}