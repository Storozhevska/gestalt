import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { AlertTriangle } from "lucide-react";

export function TestimonialsInstructor() {
  const testimonials = [
    {
      name: "Ілона Яковлєва",
       role: "психолог, закінчила програму 2 ступеня",
             image: "/images/avatar.png",
      text: "«Якщо гештальт - то Юля і Таня! Саме з ними подорож буде цікавою»",
      rating: 5
    },
    {
      name: "Юлія",
       role: "психолог, закінчила 2 ступінь",
         image: "/images/avatar.png",
      text: "Проходячи програму поряд із Танею та Юлею, я здобула чутливість - і це для мене найцінніший досвід. Поруч із ними я могла бути собою. З великою вдячністю Тані та Юлі.",
      rating: 5
    },
    {
      name: "Студентка",
  image: "/images/avatar.png",
        text: "Горджуся, що ризикнула і пішла на навчання. Потрапила до найпотужніших тренерів.",
      rating: 5
    },
    {
      name: "Студент",
  image: "/images/avatar.png",
        text: "Життя зміниться в будь-якому разі - зараз чи пізніше. З Юлею і Танею є шанс бути обізнаним і підготовленим.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Відгуки студентів
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Про спільну роботу з Юлею та Танею на 2-ому ступені
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Досвід тих, хто навчався під її керівництвом
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={64} className="text-purple-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-purple-100"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

{/* Personal Message from Yulia */}
        <div className="bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-lg p-6 sm:p-8 border border-purple-100">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
              На 2-му ступені до мене приєднується Тетяна Семібратова - керівник програми. Вона проводить супервізії вже на 1-му ступені (для поглиблення вашої роботи), а на 2-му ми ведемо групу разом онлайн. Це рівень, де все стає ще глибше і професійніше.
            </p>
            <div className="pt-5 border-t border-purple-200">
              <p className="text-base sm:text-lg text-gray-800 font-medium mb-4">
                Готові до власної трансформації?
Заповніть анкету - і почнемо з співбесіди

              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <a
                  href="https://www.instagram.com/storozhevskie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all transform hover:scale-105 text-sm sm:text-base"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Написати в Instagram
                </a>
                <span className="text-gray-500 text-sm">або</span>
<a
  href="https://forms.gle/e5u9aWCiHooSC33r9"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-white border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all text-sm sm:text-base"
>
  Заповнити анкету
</a>              </div>
            </div>
          </div>
        </div>
  <div className="mt-12 text-center">
  <div className="flex items-center justify-center gap-2 mb-4">
    <AlertTriangle className="text-yellow-500" size={28} />
  </div>

  <p className="text-lg text-gray-600 mb-6">
    Відгуки, представлені на цій сторінці, надані випускниками добровільно та виключно після повного завершення навчання.
  </p>
</div>



      </div>
    </section>
  );
}
