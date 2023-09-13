import Image from "next/image"
import Play from "../../assets/svg/Play.svg"
import IMBd from "../../assets/svg/IMDb.svg"
import Tomato from "../../assets/svg/RottenTomato.svg"

export default function Hero() {
  return (
    <section className="flex flex-col gap-4 w-[400px] my-24">
            <h1 className="text-5xl font-bold leading-[56px]">John Wick 3 : Parabellum</h1>
            <div className="flex gap-20">
                <div className="flex gap-2 items-center">
                    <Image src={IMBd} alt="imdb icon" width={30} height={30}/>
                    <p>86.0/100</p>
                </div>
                <div className="flex gap-2 items-center">
                    <Image src={Tomato} alt="" width={20} height={20}/>
                    <p>97%</p>
                </div>
            </div>
            <p className="font-medium">John Wick is on the run after killing a member of the international assassins&apos; guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            <div></div>
            <button className="flex gap-2 items-center rounded-md bg-[#BE123C] self-start py-3 px-8 font-bold">
                <Image src={Play} alt="" width={20} height={20}/>
                <p>WATCH TRAILER</p>
            </button>
        </section>
  )
}
