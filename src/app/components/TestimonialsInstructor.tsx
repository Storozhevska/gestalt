import { Star, Quote } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function TestimonialsInstructor() {
  const testimonials = [
    {
      name: "Олена Ковальчук",
      role: "Психолог, випускниця курсу 2023",
      image: "https://images.unsplash.com/photo-1560073743-0a45c01b68c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwc21pbGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njk4NzU4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Юлія створила таку атмосферу довіри, що я вперше в житті відкрилася повністю. Її здатність бачити суть, підтримувати і водночас ставити питання, які справді змінюють, – це дар. Кожне заняття було не просто навчанням, а справжньою терапією для мене самої.",
      rating: 5
    },
    {
      name: "Максим Шевченко",
      role: "Гештальт-терапевт, студент 2 ступеня",
      image: "https://images.unsplash.com/photo-1758518727888-ffa196002e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY5ODc1ODYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Юлія не просто викладає теорію – вона показує все на власному прикладі. Її присутність, емпатія та професіоналізм створюють простір, де можна і вчитися, і трансформуватися. Вона бачить кожного студента і знає, як допомогти саме тобі розкритися.",
      rating: 5
    },
    {
      name: "Ірина Мельник",
      role: "Випускниця 1 ступеня 2024",
      image: "https://images.unsplash.com/photo-1725370997666-eb3b199dfd91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMHRoZXJhcGlzdHxlbnwxfHx8fDE3Njk4NzU4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Відчувала підтримку Юлії на кожному кроці навчання. Вона пояснює складні концепції так, що все стає зрозумілим і близьким. Її любов до гештальт-терапії заразлива – після кожного семінару виходиш натхненним і готовим до змін.",
      rating: 5
    },
    {
      name: "Андрій Петренко",
      role: "Психолог, випускник 2022",
      image: "https://images.unsplash.com/photo-1652471949169-9c587e8898cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc2OTgzMzg0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      text: "Юлія – це не просто викладач, це наставник у найкращому сенсі слова. Вона допомагає знайти свій унікальний стиль терапевта, не нав'язуючи шаблони. Її зворотний зв'язок завжди точний, підтримуючий і розвиваючий. Дякую за цей шлях!",
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
            Що кажуть про Юлію
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
      </div>
    </section>
  );
}
