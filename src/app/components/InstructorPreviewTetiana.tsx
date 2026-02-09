import { Award, Users, BookOpen, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function InstructorPreviewTetiana() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about-tetiana-section'); // або ваш id для секції "Про Тетяну"
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative h-64 lg:h-full min-h-[400px]">
              <ImageWithFallback
                src="/images/tetianaFirst.jpg"   // ← змініть на реальний шлях до фото Тетяни
                alt="Тетяна Семібратова"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Ваш провідник у світ гештальт-терапії
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Тетяна Семібратова
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Провідний тренер MIGIS, сертифікований гештальт-терапевт та супервізор. Практичний психолог з 1993 року, в гештальт-терапії з 2008. Супроводжую в питаннях сім'ї, пар, психосоматики, харчової поведінки та глибокого самопізнання.
              </p>

              {/* Key achievements */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-indigo-100 p-2 rounded-lg flex-shrink-0">
                    <Award className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">MIGIS & EAGT</p>
                    <p className="text-sm text-gray-600">Провідний тренер та супервізор</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <Users className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Сім'я та пари</p>
                    <p className="text-sm text-gray-600">Спеціалізація</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <BookOpen className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">30+ років</p>
                    <p className="text-sm text-gray-600">У психології</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToAbout}
                className="group inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl"
              >
                <span className="font-semibold">Детальніше про Тетяну</span>
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}