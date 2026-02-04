import { Users, TrendingUp, Network } from "lucide-react";

export function ProgramArchitecture() {
  const features = [
    {
      icon: Users,
      title: "Масштабування",
      description: "Групи Чернівців та Online об'єднуються в єдиний потужний міжнародний потік у форматі Zoom."
    },
    {
      icon: TrendingUp,
      title: "Подвійна сила",
      description: "На 6 семінарі приєднується другий тренер онлайн. Це дає вам можливість бачити різні стилі роботи та отримувати вдвічі більше професійної експертизи."
    },
    {
      icon: Network,
      title: "Нетворкінг",
      description: "Це ваш вихід у велику спільноту, де досвід людей з різних міст та країн стає вашим спільним ресурсом для переходу на професійний 2-й ступінь."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-blue-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Унікальна архітектура курсу
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-700">
            <p>
              Ми підготували для вас унікальну архітектуру курсу. Ви починаєте в стартових групах (офлайн або онлайн), щоб створити безпечний простір для перших кроків.
            </p>
            <p className="text-xl font-semibold text-indigo-900">
              Після 5 семінару ваше поле розширюється:
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center"
            >
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
