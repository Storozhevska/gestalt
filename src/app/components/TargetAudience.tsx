import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import { CheckCircle } from "lucide-react";

export function TargetAudience() {
  const audiences = [
    "Людей, які хочуть здобути нову професію",
    "Психологів",
    "Педагогів",
    "Лікарів",
    "Соціальних працівників",
    "Фахівців, діяльність яких передбачає контакт із людьми",
    "Студентів старших курсів ВНЗ",
    "Людей, які хочуть розвинути емоційний інтелект"
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Програма призначена для
          </h2>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden">
          <Table>
            <TableHeader>
              {/* <TableRow className="bg-blue-600 hover:bg-blue-600">
                <TableHead className="text-white text-lg font-semibold py-4">
                  Цільова аудиторія
                </TableHead>
              </TableRow> */}
            </TableHeader>
            <TableBody>
              {audiences.map((audience, index) => (
                <TableRow
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-blue-50/50"}
                >
                  <TableCell className="py-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="text-blue-600 flex-shrink-0" size={20} />
                      <span className="text-gray-800 text-lg">{audience}</span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
