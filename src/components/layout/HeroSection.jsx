import { useLanguage } from '../../context/LanguageContext'

const HeroSection = () => {
  const { t } = useLanguage()

  return (
    <div className="relative overflow-hidden bg-[#0A0B0E] rounded-2xl p-12 mb-12 border border-gray-800">
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
          {t.heroHeading1 || "Your Complete"} {" "}
          <span className="text-[#0052FF]">{t.heroHeading2 || "Crypto Guide"}</span>
          <br />
          {t.heroHeading3 || "for India"}
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          {t.heroSubheading || "From ₹50 to self-custody — everything you need to know, in one place. Learn about Bitcoin, DeFi, and how to stay safe."}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="px-8 py-3 bg-[#0052FF] rounded-lg text-white font-semibold hover:bg-[#0066FF] transition-all duration-300">
            {t.heroCta1Full || "Start Learning Free"} →
          </button>
          <button className="px-8 py-3 bg-transparent border border-gray-700 rounded-lg text-white font-semibold hover:bg-gray-800 transition-all duration-300">
            {t.heroCta2Full || "Explore Tools"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection