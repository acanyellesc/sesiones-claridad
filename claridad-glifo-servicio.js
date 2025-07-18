import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ClaridadGlifoServicio() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Encuentra claridad en tu vida</h1>
      <p className="text-center text-base">¿Te sientes en un momento de confusión, cambio o búsqueda? Te ofrezco un acompañamiento claro, cercano y personalizado para ayudarte a ver con más claridad, tomar decisiones con confianza y reconectar contigo. Cada plan incluye un dibujo único, creado especialmente para ti, con base en tu fecha y hora de nacimiento.</p>

      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">Sesión única — Empieza por ti</h2>
          <p>120 € por sesión</p>
          <ul className="list-disc list-inside text-sm">
            <li>1 sesión individual (60–75 min) para darte claridad inmediata</li>
            <li>Incluye un dibujo personalizado (Glifo del Alma) valorado en 70 €</li>
            <li>Ideal si estás atravesando una decisión importante o un momento puntual de duda</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">Pack de 4 sesiones — Encuentra tu dirección</h2>
          <p>100 € por sesión (total 400 €)</p>
          <ul className="list-disc list-inside text-sm">
            <li>4 sesiones para acompañarte durante un proceso o etapa</li>
            <li>Incluye 2 dibujos: tu esencia y tu propósito (valorados en 140 €)</li>
            <li>Perfecto si estás buscando hacer cambios en tu vida personal, laboral o emocional</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 space-y-2">
          <h2 className="text-xl font-semibold">Pack de 8 sesiones — Transforma tu camino</h2>
          <p>90 € por sesión (total 720 €)</p>
          <ul className="list-disc list-inside text-sm">
            <li>8 sesiones para un proceso profundo de autoconocimiento y transformación</li>
            <li>Incluye 3 dibujos: alma, propósito y visión integradora (valorados en 190 €)</li>
            <li>Para ti si estás atravesando un gran cambio o deseas comprometerte con tu crecimiento</li>
          </ul>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button className="mt-4">Reservar ahora</Button>
        <p className="text-xs mt-2">Cada dibujo se realiza con dedicación para ayudarte a entender mejor tu momento vital. Es una guía visual hecha a tu medida.</p>
      </div>
    </div>
  );
}