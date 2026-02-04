import { Star, TrendingUp, Heart, Sparkles } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function TestimonialsResults() {
  const testimonials = [
    {
      name: "Марія Коваленко",
      role: "Гештальт-терапевт, приватна практика",
      image: "https://images.unsplash.com/photo-1560073743-0a45c01b68c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwc21pbGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk4NzU4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Після курсу відкрила приватну практику і вже працюю з 20 постійними клієнтами. Отримала сертифікат EAGT і впевнено консультую. Це не просто курс – це нове життя і нова професія!",
      result: "20 клієнтів у практиці",
      icon: TrendingUp,
      color: "blue"
    },
    {
      name: "Віктор Сидоренко",
      role: "Випускник курсу 2023",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5ODc1ODYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Навчання повністю змінило мої стосунки з партнером на 180 градусів. Тепер розумію свої емоції, можу їх називати і керувати ними. Це вплинуло не тільки на особисте життя, а й на роботу.",
      result: "Трансформація особистості",
      icon: Heart,
      color: "purple"
    },
    {
      name: "Тетяна Левченко",
      role: "Психолог, супервізор",
      image: "https://images.unsplash.com/photo-1725370997666-eb3b199dfd91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHRoZXJhcGlzdHxlbnwxfHx8fDE3Njk4NzU4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Курс дав практичні інструменти роботи з депресією, травмою та залежностями. Зараз веду групові та індивідуальні сесії, а також стала супервізором для молодих терапевтів.",
      result: "Кар'єра супервізора",
      icon: Sparkles,
      color: "green"
    },
    {
      name: "Олександр Морозов",
      role: "Випускник 2024",
      image: "https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc2OTgzMzg0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Прожив і відпустив багаторічні блокування та страхи. Навчився будувати здорові межі з батьками та колегами. Відчуваю себе цілісною людиною вперше за багато років.",
      result: "Особистісна цілісність",
      icon: Heart,
      color: "pink"
    },
    {
      name: "Наталія Бондаренко",
      role: "Гештальт-терапевт",
      image: "https://images.unsplash.com/photo-1739303987875-db274ba45b60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3Njk4NzU4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Знайшла свій унікальний стиль роботи терапевта. Навчилася відокремлювати свої почуття від почуттів клієнта та витримувати сильні емоції. Моя мрія – допомагати людям – стала реальністю.",
      result: "Знайшла стиль терапевта",
      icon: Sparkles,
      color: "orange"
    },
    {
      name: "Дмитро Іваненко",
      role: "Психолог, онлайн-практика",
      image: "https://images.unsplash.com/photo-1733685318562-c726472bc1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRoZXJhcGlzdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2OTc3NDg5NXww&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Запустив онлайн-практику одразу після 1 ступеня. Маю стабільний дохід та постійних клієнтів з різних країн. Гештальт-терапія стала моєю професією та покликанням.",
      result: "Онлайн-практика",
      icon: TrendingUp,
      color: "blue"
    }
  ];

  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    pink: "bg-pink-100 text-pink-600",
    orange: "bg-orange-100 text-orange-600"
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Результати випускників
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Реальні трансформації та успіхи
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ваші можливості після завершення курсу
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all border border-gray-100"
              >
                {/* Result Badge */}
                <div className={`inline-flex items-center gap-2 ${colorClasses[testimonial.color as keyof typeof colorClasses]} px-3 py-1.5 rounded-full text-sm font-semibold mb-4`}>
                  <Icon size={16} />
                  <span>{testimonial.result}</span>
                </div>

                {/* Text */}
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Готові до власної трансформації?
          </p>
          <a
  href="https://docs.google.com/forms/d/1Cj0ykRWanLopRCjUTBv7tERYPgdR1POf4DIakEehCYU/viewform?edit_requested=true"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl font-semibold">
    Почати навчання
  </button>
</a>

        </div>
      </div>
    </section>
  );
}
