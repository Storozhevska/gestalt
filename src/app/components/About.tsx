import { Award, BookOpen, Globe } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function About() {
  return (
    <section id="about-section" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Про Провідника у світ Гештальт-терапії. 
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Юлія Сторожевська ведуча I та II ступенів
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              Психолог, сертифікований гештальт-терапевт, тренер МІГІС
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Сертифікація</h4>
                  <p className="text-gray-600">
                    Сертифікований гештальт-терапевт, Сертифікований супервізор
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Освіта Україна</h4>
                  <p className="text-gray-600">
                    Дипломований психолог
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
                    Робота за європейськими стандартами, навчання у топ-гештальт терапевтів світу
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-600">
              <p className="text-lg text-gray-800 italic mb-4">
                "Для мене психотерапія – це завжди про інструмент і як ми його використовуємо залежить від нашої особистості. Моя професійна "фішка" - у синергії: я поєдную духовну глибину та сучасні методи терапії з ясними міжнародними стандартами."
              </p>
              <p className="text-lg text-gray-800 font-semibold">
                Моя місія - допомогти вам знайти опору в собі, віднайти власну силу й унікальність та побудувати легальний шлях у професію.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
    <ImageWithFallback
      src="/images/titleJulia.jpg"   // шлях від папки public
      alt="Yulia Storozhevska"
      className="w-full h-full object-cover"
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}