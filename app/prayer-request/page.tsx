import Image from "next/image";
import PageHero from "@/components/PageHero";
import { Heart, Clock, Users, Sparkles, Mail, Phone } from "lucide-react";

export default function PrayerRequestPage() {
  return (
    <main>
      <PageHero
        title="Share Your Prayer Request"
        subtitle="We’re here to pray with you."
        imageSrc="/images/prayer-hero.jpg"
      />

      {/* Intro */}
      <section className="max-w-3xl mx-auto px-6 py-10 text-center">
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
            <Sparkles className="text-gold" />
          </div>
        </div>

        <p className="mt-4 text-black/70 leading-relaxed">
          Your prayer matters to God and to us. Our dedicated prayer team commits
          to interceding for every request submitted. Share your heart, and let
          our community stand with you in faith.
        </p>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-6 pb-12">
        <h2 className="text-2xl font-bold text-primary text-center">
          Submit Your Request
        </h2>
        <div className="mt-5 bg-white border shadow rounded-2xl p-6">
          <form className="flex flex-col gap-4">
            <div>
              <label className="text-sm font-semibold">Your Name</label>
              <input
                className="mt-2 w-full border rounded-xl p-3 outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Prayer Request</label>
              <textarea
                className="mt-2 w-full border rounded-xl p-3 min-h-[140px] outline-none focus:ring-2 focus:ring-primary/30"
                placeholder="Share what’s on your heart... We’re listening."
              />
              <p className="mt-2 text-xs text-black/50">
                Be as detailed as you’d like.
              </p>
            </div>

            <label className="flex items-start gap-3 text-sm text-black/70">
              <input type="checkbox" className="mt-1" />
              <span>
                Submit this request anonymously
                <span className="block text-xs text-black/50 mt-1">
                  Your request will be seen by our prayer team but shared publicly
                  without your name.
                </span>
              </span>
            </label>

            <button className="mt-2 rounded-full bg-primary text-white py-3 font-semibold hover:opacity-95">
              Submit Prayer Request
            </button>
          </form>
        </div>
      </section>

      {/* You’re not alone */}
      <section className="max-w-3xl mx-auto px-6 pb-10 text-center">
        <div className="flex justify-center">
          <Heart className="text-primary" />
        </div>
        <h3 className="mt-3 text-xl font-bold text-primary">You’re Not Alone</h3>
        <p className="mt-3 text-black/70 leading-relaxed">
          Every prayer request receives personal attention from our prayer warriors.
          We believe in the power of united prayer and the faithfulness of God to hear and answer.
        </p>
      </section>

      {/* Prayer community stats */}
      <section className="max-w-5xl mx-auto px-6 pb-14">
        <h3 className="text-2xl font-bold text-primary text-center">
          Our Prayer Community
        </h3>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard icon={<Clock className="text-primary" />} big="24/7" small="Prayer Coverage" />
          <StatCard icon={<Users className="text-primary" />} big="500+" small="Active Prayer Warriors" />
          <StatCard icon={<Sparkles className="text-primary" />} big="1000+" small="Prayers Answered" />
        </div>
      </section>

      {/* Answered prayers */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-bold text-primary text-center">
          Answered Prayers
        </h3>

        <div className="mt-6 flex flex-col gap-4">
          <AnsweredCard
            name="Sarah Johnson"
            location="Austin, TX"
            text="God answered my prayer for healing! The prayer team stood with me through my darkest moments. Their faithfulness brought breakthrough."
          />
          <AnsweredCard
            name="Michael Chen"
            location="Houston, TX"
            text="I submitted a prayer request for my family’s restoration. Within weeks, God moved powerfully. The prayer warriors truly make a difference."
          />
        </div>
      </section>

      {/* Need immediate prayer */}
      <section className="bg-white border-t">
        <div className="max-w-3xl mx-auto px-6 py-14 text-center">
          <h3 className="text-2xl font-bold text-primary">Need Immediate Prayer?</h3>
          <p className="mt-3 text-black/70">Our prayer line is always open.</p>

          <div className="mt-6 flex flex-col items-center gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="text-primary" size={18} />
              <span className="font-semibold">08033480653 / 08164026108</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="text-primary" size={18} />
              <span className="font-semibold">thegoodonesoutreach@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  icon,
  big,
  small,
}: {
  icon: React.ReactNode;
  big: string;
  small: string;
}) {
  return (
    <div className="bg-white border shadow rounded-2xl p-6 text-center">
      <div className="flex justify-center">{icon}</div>
      <div className="mt-3 text-3xl font-extrabold text-primary">{big}</div>
      <div className="mt-1 text-sm text-black/60">{small}</div>
    </div>
  );
}

function AnsweredCard({
  name,
  location,
  text,
}: {
  name: string;
  location: string;
  text: string;
}) {
  return (
    <div className="bg-white border shadow rounded-2xl p-6">
      <div className="flex items-center gap-4">
        <div className="relative w-14 h-14 rounded-full overflow-hidden bg-black/10">
          <Image src="/images/avatar.jpg" alt={name} fill className="object-cover" />
        </div>

        <div>
          <div className="font-bold text-primary">{name}</div>
          <div className="text-xs text-black/60">{location}</div>
        </div>
      </div>

      <p className="mt-4 text-black/70 leading-relaxed">“{text}”</p>

      <div className="mt-4">
        <span className="inline-flex items-center rounded-full bg-gold/25 text-black px-4 py-1 text-xs font-semibold">
          Prayer Answered
        </span>
      </div>
    </div>
  );
}