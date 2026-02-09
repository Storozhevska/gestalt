import { Award, BookOpen, Globe } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function AboutOlena() {
  return (
    <section id="about-olena-section" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            керівник програми Семібратова Тетяна
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Олена Кравець
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              Психологиня, гештальт-терапевтка, супервізорка, викладачка МІГІС
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Сертифікація</h4>
                  <p className="text-gray-600">
                    Сертифікований гештальт-терапевт (EAGT), Сертифікований супервізор та викладач (EAGT & МІГІС)
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Освіта</h4>
                  <p className="text-gray-600">
                    Магістр психології, спеціалізація — клінічна та консультативна психологія
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Міжнародний досвід</h4>
                  <p className="text-gray-600">
                    Багаторазові стажування в Польщі, Німеччині та Італії, робота з травмою за методом Process-Oriented Psychology
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-l-4 border-indigo-600">
              <p className="text-lg text-gray-800 italic mb-4">
                "Гештальт для мене — це мистецтво бути присутнім тут і зараз, без масок і спроб догодити. Я вірю, що справжня зміна починається з чесного контакту з собою."
              </p>
              <p className="text-lg text-gray-800 font-semibold">
                Моя мета — супроводжувати вас у поверненні до власного центру, відновленні чутливості до себе та створенні життя, яке справді ваше.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/images/titleOlena.jpg"   // ← змініть шлях на свій
                alt="Olena Kravets"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}