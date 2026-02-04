import { ClipboardList, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export function HowToStart() {
  const steps = [
    {
      icon: ClipboardList,
      title: "Натисніть «Записатися на співбесіду»",
      description: "Заповніть коротку анкету"
    },
    {
      icon: Phone,
      title: "15-хвилинне знайомство",
      description: "Zoom або телефон, щоб обрати ваш формат"
    },
    {
      icon: CheckCircle,
      title: "Отримайте підтвердження",
      description: "Станьте частиною групи"
    }
  ];

  const handleRegistration = () => {
    // This would open a registration form or redirect to a registration page
    alert("Форма реєстрації буде доступна незабаром. Ви можете зв'язатися з нами через соціальні мережі внизу сторінки.");
  };

  return (
    <section id="how-to-start" className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Як почати?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center h-full">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-blue-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
  href="https://docs.google.com/forms/d/1Cj0ykRWanLopRCjUTBv7tERYPgdR1POf4DIakEehCYU/viewform?edit_requested=true"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-6 text-xl font-semibold shadow-xl"
  >
    ХОЧУ В ГРУПУ (АНКЕТА)
  </Button>
</a>

        </div>
      </div>
    </section>
  );
}
