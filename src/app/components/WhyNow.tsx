import { Shield, Users, Award } from "lucide-react";

export function WhyNow() {
  const reasons = [
    {
      icon: Users,
      title: "Група як острів стабільності",
      description: "Група як острів стабільності, Поки зовнішній світ в хаосі, наша група стає місцем відносної передбачуваності."
    },
    {
      icon: Shield,
      title: "Вихід із розриву та ізоляції",
      description: "Постійна напруга війни руйнує нашу цілісність. Гештальт-група допомагає збирати себе по частинах, вчитися витримувати невизначеність і відновлювати здатність до глибокого контакту з іншими."
    },
    {
      icon: Award,
      title: "Легальність як професійна опора",
      description: "Згідно з оновленим законодавством 2026 року, практика потребує належної акредитації. У часи хаосу професійний статус та стандарти EAGT (Європейська Асоціація Гештальт-терапії) дають вам твердий ґрунт під ногами."
    }
  ];

  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Психотерапія 2026: чому це важливо саме зараз
          </h2>
          <p className="text-xl text-gray-600">Легальність та Стійкість</p>
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Світ навколо нас став крихким. У 2026 році ми продовжуємо жити у фоні війни, де кожен день несе ризики розриву зв'язків, втрат та руйнації звичних сенсів. У таких умовах психотерапія перестає бути просто «навчанням» - вона стає життєво необхідним ресурсом.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <reason.icon className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
