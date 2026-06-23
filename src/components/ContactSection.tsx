import ContactForm from "@/components/ContactForm";
import { business, getFullAddress, getMapsEmbedUrl, getMapsLink } from "@/lib/business";

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
            Kontakt
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[#4A1942] sm:text-4xl">
            Hitta &amp; kontakta oss
          </h2>
          <p className="mt-4 text-lg text-[#4A1942]/70">
            Skomakargatan 5B — boka online eller maila oss.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <ContactForm />

            <div className="rounded-2xl border border-[#4A1942]/10 bg-[#FAF5FF] p-6">
              <h3 className="font-semibold text-[#4A1942]">Kontaktuppgifter</h3>
              <address className="mt-4 space-y-3 text-sm not-italic text-[#4A1942]/80">
                <p>
                  <strong className="text-[#4A1942]">Adress:</strong>
                  <br />
                  {getFullAddress()}
                </p>
                <p>
                  <strong className="text-[#4A1942]">Telefon:</strong>
                  <br />
                  <a href={business.phoneLink} className="font-semibold text-[#4A1942] hover:underline">
                    {business.phone}
                  </a>
                </p>
                <p>
                  <strong className="text-[#4A1942]">Bokning:</strong>
                  <br />
                  <a
                    href={business.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D4AF37] hover:underline"
                  >
                    {business.bookingLabel}
                  </a>
                </p>
              </address>
            </div>

            <div className="rounded-2xl border border-[#4A1942]/10 bg-[#FAF5FF] p-6">
              <h3 className="font-semibold text-[#4A1942]">Öppettider</h3>
              <p className="mt-2 text-xs text-[#4A1942]/60">{business.hours.note}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {business.hours.regular.map((row) => (
                  <li key={row.day} className="flex justify-between text-[#4A1942]/80">
                    <span>{row.day}</span>
                    <span className={row.hours === "Stängt" ? "text-[#4A1942]/40" : "font-medium"}>
                      {row.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-[#4A1942]/10 shadow-sm">
              <iframe
                title={`Karta — ${business.name}`}
                src={getMapsEmbedUrl()}
                className="h-80 w-full border-0 lg:h-full lg:min-h-[28rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={getMapsLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-semibold text-[#4A1942] hover:underline"
            >
              Öppna i Google Maps →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
