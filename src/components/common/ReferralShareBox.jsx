import { useStore } from "@nanostores/react"
import clsx from "clsx"
import { $userState } from "../../presale-gg/stores"

const ReferralShareBox = (others) => {
  const userData = useStore($userState)
  const share = () => {
		const text = `Use my referral code for bonus tokens on Pump Memes`
		const url = `${window.location.origin}?referral_code=${userData.user.referral_code ?? ""}`
		try {
			navigator.share({
				text,
				url
			})
		} catch (err) {
			window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, "_blank")
		}
	}

  return (
    <div {...others} className={clsx("h-[56px] text-[16px] border-[#50505040] border-2 text-[#fff] flex p-[5px] pl-[10px]", others.className)}>
      <p className="self-center flex-1">{userData.user?.referral_code ?? "Loading"}</p>
      <button 
        className="flex items-center justify-center text-[#fff] text-[14px] font-bold bg-[#141414] w-[64px] transition-colors hover:bg-[#181818]"
        onClick={share}
      >
        Share
      </button>
    </div>
  )
}

export default ReferralShareBox