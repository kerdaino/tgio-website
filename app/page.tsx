import Image from "next/image";
import Button from "@/components/Button";
import { BookOpen, HandHelping, Megaphone, Users } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-[78vh] min-h-[520px] flex items-center justify-center text-center text-white">
        {/* Background image placeholder */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="TGIO Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        <div className="relative z-10 px-6 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            The Good Ones <br /> International Outreach
          </h1>

          <p className="mt-4 text-white/90">
            Spreading Hope, Sharing Love, Serving Communities.
          </p>

          <div className="mt-7 flex flex-col gap-3 items-center">
            <Button variant="outline" href="/about">
              Join Our Fellowship
            </Button>
            <Button variant="gold" href="/prayer-request">
              Submit Prayer Request
            </Button>
            <Button variant="outline" href="/donate">
              Support the Mission
            </Button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-5xl mx-auto px-6 py-14 text-center">
        <h2 className="text-2xl font-bold text-primary">About Us</h2>
        <p className="mt-4 text-black/70 leading-relaxed">
          Good Ones International Outreach is a faith-based fellowship committed to building a united
          community of believers who grow spiritually through prayer, Bible study, and mutual support,
          while actively sharing the Gospel and serving others through outreach and community service.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="relative w-36 h-36 rounded-full overflow-hidden shadow">
            <Image
              src="/images/about-circle.jpg"
              alt="Fellowship"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="max-w-5xl mx-auto px-6 pb-10">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl shadow p-6 border">
            <div className="flex items-start gap-3">
              <span className="text-gold font-bold text-xl">✦</span>
              <div>
                <h3 className="font-bold text-primary">Our Mission</h3>
                <p className="mt-2 text-black/70 text-sm leading-relaxed">
                  Building unity, spiritual growth, and active outreach through prayer, the Word,
                  fellowship, and community service.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 border">
            <div className="flex items-start gap-3">
              <span className="text-gold font-bold text-xl">✦</span>
              <div>
                <h3 className="font-bold text-primary">Our Vision</h3>
                <p className="mt-2 text-black/70 text-sm leading-relaxed">
                  Raising a united community of believers who grow in God’s Word and impact lives
                  through evangelism and service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINISTRIES */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-primary text-center">Our Ministries</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <Card
            icon={<Users className="text-primary" />}
            title="Prayer Network"
            desc="A committed community standing together in prayer and intercession."
          />
          <Card
            icon={<BookOpen className="text-primary" />}
            title="Bible Study Groups"
            desc="Growing in God’s Word through weekly studies, teaching, and discipleship."
          />
          <Card
            icon={<Megaphone className="text-primary" />}
            title="Evangelism Outreach"
            desc="Sharing the Gospel and winning souls through local and community outreach."
          />
          <Card
            icon={<HandHelping className="text-primary" />}
            title="Community Support"
            desc="Serving communities with love through charity, visits, and service projects."
          />
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-primary text-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold text-center">Our Impact</h2>

          <div className="mt-6 grid grid-cols-3 text-center gap-3">
            <ImpactStat big="500+" small="Lives Touched" />
            <ImpactStat big="15" small="Communities Served" />
            <ImpactStat big="1000+" small="Prayers Answered" />
          </div>

          <div className="mt-8 rounded-2xl overflow-hidden">
            <div className="relative w-full h-48 md:h-64">
              <Image
                src="/images/impact.jpg"
                alt="Outreach"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-primary text-center">Testimonies</h2>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <TestimonyCard
            text="The ministry transformed my life through prayer and fellowship. I found family and purpose."
            name="Sarah"
            role="Community Member"
          />
          <TestimonyCard
            text="Through outreach programs we touched many lives, and I personally grew deeper in God."
            name="Michael"
            role="Volunteer"
          />
        </div>
      </section>

      {/* LATEST UPDATES */}
      <section className="max-w-5xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold text-primary text-center">Latest Updates</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <UpdateCard title="New Community Outreach" />
          <UpdateCard title="Annual Prayer Conference" />
          <UpdateCard title="Volunteer Training Program" />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold">
        <div className="max-w-5xl mx-auto px-6 py-14 text-center">
          <h2 className="text-3xl font-extrabold text-primary">
            Join Us in Making a Difference
          </h2>
          <p className="mt-3 text-black/70">
            Your support can change lives. Get involved today.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-3 justify-center">
            <a className="rounded-full bg-primary text-white px-6 py-3 font-semibold" href="/programs">
              Explore Programs
            </a>
            <a className="rounded-full bg-white px-6 py-3 font-semibold" href="/contact">
              Volunteer With Us
            </a>
            <a className="rounded-full bg-primary text-white px-6 py-3 font-semibold" href="/donate">
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-white border shadow rounded-2xl p-6">
      <div className="flex gap-3 items-start">
        <div className="mt-1">{icon}</div>
        <div>
          <h3 className="font-bold text-primary">{title}</h3>
          <p className="mt-2 text-sm text-black/70 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function ImpactStat({ big, small }: { big: string; small: string }) {
  return (
    <div className="py-3">
      <div className="text-3xl md:text-4xl font-extrabold text-gold">{big}</div>
      <div className="text-white/80 text-sm mt-1">{small}</div>
    </div>
  );
}

function TestimonyCard({ text, name, role }: { text: string; name: string; role: string }) {
  return (
    <div className="bg-white border shadow rounded-2xl p-6">
      <p className="text-black/70 leading-relaxed">“{text}”</p>
      <div className="mt-4">
        <div className="font-bold text-primary">{name}</div>
        <div className="text-xs text-black/60">{role}</div>
      </div>
    </div>
  );
}

function UpdateCard({ title }: { title: string }) {
  return (
    <div className="bg-white border shadow rounded-2xl overflow-hidden">
      <div className="relative w-full h-36">
        <Image src="/images/update.jpg" alt="Update" fill className="object-cover" />
      </div>
      <div className="p-4">
        <div className="font-bold text-primary">{title}</div>
        <p className="mt-2 text-sm text-black/70">
          Placeholder summary — we’ll replace this with their real update content later.
        </p>
        <div className="mt-3 text-sm font-semibold text-primary">Read more →</div>
      </div>
    </div>
  );
}