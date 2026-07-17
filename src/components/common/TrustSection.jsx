import { useLanguage } from '../../context/LanguageContext'

const TrustSection = () => {
  const { t } = useLanguage()

  const features = [
    { title: t.feature1Title, description: t.feature1Desc },
    { title: t.feature2Title, description: t.feature2Desc },
    { title: t.feature3Title, description: t.feature3Desc },
    { title: t.feature4Title, description: t.feature4Desc }
  ]

  return (
    <section className="mt-20 py-12 border-t border-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        {t.trustTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="text-center p-6 bg-[#1A1B1E] rounded-xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustSection