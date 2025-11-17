const FORMATS = [
  'Acústico para disfrutar de los sonidos de instrumentos característicos del Country.',
  'Eléctrico para festejar bien arriba.',
  'Mixto para un evento súper climático y completo.',
];

export default function EventsDescription() {
  return (
    <div className="text-body-sm font-roboto xl:text-body-md flex max-w-96 flex-col gap-6 leading-5 tracking-wide xl:col-span-1 xl:row-span-2">
      <p>
        Con más de 40 shows en vivo,{' '}
        <span className="font-bold">Ochenta Noventa</span> continúa programando
        recepciones de <span className="font-bold">Casamientos</span>,{' '}
        <span className="font-bold">Cumpleaños</span> y eventos{' '}
        <span className="font-bold">corporativos</span>.
      </p>
      <div>
        <p className="font-bold">Formatos:</p>
        <ul className="mt-2 space-y-1 pl-4">
          {FORMATS.map((format) => {
            const firstWord = format.split(' ')[0];
            const restOfText = format.substring(firstWord.length).trim();

            return (
              <li key={format} className="list-inside list-disc text-sm">
                <span className="font-bold">{firstWord}</span> {restOfText}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
