import Image from "next/image";

export default function PageHero({
  title,
  subtitle,
  imageSrc,
}: {
  title: string;
  subtitle?: string;
  imageSrc: string;
}) {
  return (
    <section className="relative h-[38vh] min-h-[260px] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative z-10 px-6 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-extrabold">{title}</h1>
        {subtitle ? <p className="mt-3 text-white/90">{subtitle}</p> : null}
      </div>
    </section>
  );
}