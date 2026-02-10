import { Award, Users, BookOpen, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function InstructorPreview() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about-section');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative h-64 lg:h-full min-h-[400px]">
  <ImageWithFallback
    src="/images/juliaFirst.jpg"   // локальний файл у public/images
    alt="Юлія Сторожевська"
    className="w-full h-full object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent"></div>
</div>


            {/* Content */}
            <div className="p-8 lg:p-12">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Ваш провідник у світ гештальт-терапії
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Юлія Сторожевська
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Психолог. Сертифікований гештальт терапевт, тренер.
              </p>

              {/* Key achievements */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <Award className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">MIGIS</p>
                    <p className="text-sm text-gray-600">тренер та супервізор</p>
                  </div>
                </div>

               

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                    <BookOpen className="text-green-600" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">12+ років</p>
                    <p className="text-sm text-gray-600">Досвіду у терапії</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToAbout}
                className="group inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                <span className="font-semibold">Детальніше про Юлію</span>
                <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
