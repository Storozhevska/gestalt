import { MapPin, Video, Calendar, Users } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Button } from "@/app/components/ui/button";
import { VideoPlayer } from "@/app/components/VideoPlayer";
import { SmallVideoPlayer } from "@/app/components/SmallVideoPlayer";

export function Formats() {
  const scrollToHowToStart = () => {
    const section = document.getElementById("how-to-start");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const mediaItems: Array<
    | { type: "video"; title: string; videoSrc: string; thumbnail?: string }
    | { type: "image"; title: string; src: string }
  > = [
    {
      type: "video",
      title: "Про атмосферу навчання",
      videoSrc: "/video/geshtaltstart.MP4",
      thumbnail: "/video/geshtaltstart.png"
    },
    {
      type: "video",
      title: "Нові знайомства",
      videoSrc: "/video/new-connections.MP4",
      thumbnail: "/video/new-connections.png"
    },
    {
      type: "video",
      title: "Складне простою мовою",
      videoSrc: "/video/simple-language.MP4",
      thumbnail: "/video/simple-language.png"
    },
    {
      type: "video",
      title: "Це натхнення!",
      videoSrc: "/video/inspiration.MP4",
      thumbnail: "/video/inspiration.png"
    },
    {
      type: "video",
      title: "Шокуюче відео тренера",
      videoSrc: "/video/trainer-video.MP4",
      thumbnail: "/video/trainer-video.png"
    },
    {
      type: "image",
      title: "Реальне навчання",
      src: "/images/realteach.jpg"
    }
  ];

  return (
    <section id="formats" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Формат навчання
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          {/* Offline Format */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-[9/16] relative mx-auto max-w-sm">
              <VideoPlayer
                src="/video/videooffline.mp4"
                poster="/video/videooffline.png"
                className="w-full h-full"
                showBadge={true}
                badgeText="ОФЛАЙН"
              />
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
        </div>

        {/* Media Grid */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mediaItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm font-bold text-gray-900 text-center">
                  {item.title}
                </p>
                <div className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg">
                  {item.type === "video" ? (
                    <SmallVideoPlayer
                      src={item.videoSrc}
                      poster={item.thumbnail}
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
}