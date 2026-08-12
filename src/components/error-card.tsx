import { ErrorCardProps } from "@/app/lib/types";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function ErrorCard({ error }: ErrorCardProps) {
  return (
    <Card className="col-span-2 m-2 shadow-xl/20 bg-transparent backdrop-blur-sm hover:brightness-110">
      <CardTitle className="px-6 font-extrabold text-destructive">
        Error
      </CardTitle>
      <CardContent className="text-primary">
        <b>An error was encountered:</b> {error}
      </CardContent>
    </Card>
  );
}
