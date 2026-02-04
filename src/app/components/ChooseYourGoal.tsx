import { GraduationCap, Heart, CheckCircle } from "lucide-react";

export function ChooseYourGoal() {
  const professionalFeatures = [
    "Вихід із «самозванця»: Отримаєте чітку методологію, розуміння процесів, а не просто набір вправ.",
    "Легальний статус 2026: Ваша підготовка відповідає оновленому Закону України «Про охорону здоров'я». Напрацюєте години терапії та супервізії для міжнародної сертифікації.",
    "Міжнародний сертифікат: Навчання в акредитованому інституті МІГІС за стандартами EAGT - це ваш квиток у професійну спільноту Європи",
    "Глобальна гештальт-родина: навчайтесь у провідних тренерів, відвідуйте лекції та будуйте професійні зв’язки з колегами з усього світу",
    "Професійна стійкість і впевненість: 1 ступінь - це ваш фундамент, де ви проживаєте метод на собі, щоб бути впевненим з клієнтом. Програма структурована, логічна та академічно обґрунтована.",
    "Професіоналізм і сучасна психотерапія: Ми не просто \"говоримо про почуття\", ми готуємо фахівців високого рівня. Ви навчитеся працювати через стосунки, систему, теорію поля ситуації і використовувати невизначеність для народження нового досвіду в рамках терапії."
  ];

  const personalFeatures = [
    "Керувати, а не залежати: Зрозумієте механіку своїх реакцій та сценаріїв. Ви отримаєте «інструкцію» до своєї психіки.",
    "Доторкнутися до глибини: Це простір для тих, хто втомився від поверхневих рішень і неперевірених методів-бульбашок, і хоче справжньої зустрічі із собою.",
    "Якість стосунків: Навчитеся будувати чесні зв'язки та відчувати власні межі без почуття провини й сорому.",
    "Безпека та Етика: Ви навчаєтесь у фахівця міжнародного рівня — це гарантія екологічності вашої трансформації.",
    "розплутати власні дитячі травми та страхи, які «передаються» далі по роду, регулювати свою тривогу, знайти спокій",
    "безпечний простір пройти власну терапію, перевірити покликання, отримати досвід клієнтської ролі на 1 ступені і без тиску вирішити — йти далі чи ні",
    "розібрати хронічну провину та сором, повернути право на бажання, гнів, межі. Відчути: «Я можу бути собою - і це нормально»"
  
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Оберіть свою ціль навчання
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* For Professionals */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <GraduationCap className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Для психологів та тих, хто прагне нової професії
            </h3>
            <p className="text-xl text-blue-900 font-semibold mb-6">
              «Побудуйте легальну практику за європейськими стандартами»
            </p>
            <ul className="space-y-4">
              {professionalFeatures.map((feature, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* For Personal Growth */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Для тих, хто хоче змінити життя (Для себе)
            </h3>
            <p className="text-xl text-purple-900 font-semibold mb-6">
              «Психотерапія як перевіренний інструмент керування життям та шлях до глибини»
            </p>
            <ul className="space-y-4">
              {personalFeatures.map((feature, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle className="text-purple-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
