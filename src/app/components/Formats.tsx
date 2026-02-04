import { MapPin, Video, Calendar, Users } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Button } from "@/app/components/ui/button";

export function Formats() {
  const scrollToHowToStart = () => {
    const section = document.getElementById("how-to-start");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="formats" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Формати та Шлях студента
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Offline Format */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1639059851892-95c80412298c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwbW9kZXJuJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5Njk0OTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Offline space in Chernivtsi"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                ОФЛАЙН
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="text-blue-600" size={28} />
                Група ЧЕРНІВЦІ
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Жива група, глибокий контакт, фізична присутність
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Локація:</p>
                    <p className="text-gray-600">Центр міста, затишний простір</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Особливості:</p>
                    <p className="text-gray-600">Для тих, кому важливий фізичний контакт та «магія» присутності</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Формат:</p>
                    <p className="text-gray-600">Живі зустрічі у затишному просторі</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={scrollToHowToStart}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
              >
                Записатися на співбесіду
              </Button>
            </div>
          </div>

          {/* Online Format */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-video relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjB2aWRlbyUyMGNhbGwlMjB6b29tfGVufDF8fHx8MTc2OTY5NDk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Online learning"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-purple-600 text-white px-4 py-2 rounded-full font-semibold">
                ONLINE
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Video className="text-purple-600" size={28} />
                Група ONLINE
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Навчання з будь-якої точки світу в комфортному форматі Zoom
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Video className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Платформа:</p>
                    <p className="text-gray-600">Zoom - зручний та надійний формат</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Особливості:</p>
                    <p className="text-gray-600">Для тих, хто цінує мобільність та міжнародне середовище</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-semibold text-gray-900">Формат:</p>
                    <p className="text-gray-600">Навчання з будь-якої точки світу</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={scrollToHowToStart}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-6 text-lg"
              >
                Записатися на співбесіду
              </Button>
            </div>
          </div>
        </div>

        {/* Strategy Note */}
        {/* <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Стратегія об'єднання</h3>
          <p className="text-lg">
            Ми стартуємо окремо на 1-му ступені, щоб на 2-му ступені об'єднатися у велику онлайн-спільноту для професійної підготовки.
          </p>
        </div> */}
      </div>
    </section>
  );
}
