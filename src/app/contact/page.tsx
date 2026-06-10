import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionHeader } from "@/components/SectionHeader";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with WearWhere — beta access, brand partnerships, press, or general questions.",
  alternates: {
    canonical: "/contact",
  },
};

const EMAIL = "erdemcisse98@icloud.com";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-6 lg:px-8 pt-16 pb-24">
        <SectionHeader
          eyebrow="Contact"
          title="One inbox. Real replies."
          description="Beta access, partnerships, press, bugs — pick a subject and it lands directly with the founder. No automated drips."
        />

        <div className="mt-12 rounded-[2rem] border border-mist/60 bg-ivory-soft p-7 md:p-10 shadow-[0_1px_2px_rgba(20,20,20,0.04),0_24px_48px_-20px_rgba(20,20,20,0.12)]">
          <ContactForm />
        </div>

        <div className="mt-10 rounded-2xl border border-ink/[0.08] bg-ivory px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-ink/45 mb-1">
              Prefer email directly?
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="font-display text-xl text-ink underline decoration-coral underline-offset-4 hover:text-coral-deep transition-colors"
            >
              {EMAIL}
            </a>
          </div>
          <p className="text-xs text-ink/50 max-w-xs sm:text-right">
            We reply from this address. No newsletters, no automated drip
            sequences.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
