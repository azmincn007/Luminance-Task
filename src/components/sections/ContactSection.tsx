import Image from "next/image";
import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(5, "Phone required").max(30),
  message: z.string().trim().min(1, "Message required").max(1000),
});

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onChange =
    (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const fe: Record<string, string> = {};
      r.error.issues.forEach((i) => (fe[i.path[0] as string] = i.message));
      setErrors(fe);
      return;
    }
    setErrors({});
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputCls =
    "w-full bg-white text-dark-panel placeholder:text-dark-panel/50 font-inter text-sm px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-brand";

  return (
    <section
      className="relative text-white py-16 md:py-24 overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #000000, #231F20)" }}
    >
      {/* Decorative line art */}
      <Image
        src="/assets/contact2.png"
        alt=""
        width={176}
        height={220}
        className="pointer-events-none absolute left-0 bottom-0 w-32 md:w-44"
      />
      <Image
        src="/assets/contact1.png"
        alt=""
        width={176}
        height={220}
        className="pointer-events-none absolute right-0 top-0 w-32 md:w-44"
      />

      <div className="relative container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left */}
          <div>
            <span className="inline-block bg-brand text-brand-foreground font-inter text-xs px-4 py-1.5 rounded-full mb-6">
              Get in touch
            </span>
            <h2 className="font-lexend text-2xl md:text-4xl font-bold mb-4">
              Let&apos;s discuss your project!
            </h2>
            <p className="font-inter text-sm md:text-base text-white/70 max-w-md">
              Contact us today and learn more about how our interior fit out & custom manufacturing
              services can bring your ideas to life.
            </p>
          </div>

          {/* Right form */}
          <div>
            <h3 className="font-lexend text-xl md:text-2xl font-bold mb-6">
              We Love to Hear From You
            </h3>
            <form onSubmit={submit} className="space-y-3" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <input
                    className={inputCls}
                    placeholder="Your Name"
                    value={form.name}
                    onChange={onChange("name")}
                    maxLength={100}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    className={inputCls}
                    placeholder="Your Email"
                    value={form.email}
                    onChange={onChange("email")}
                    maxLength={255}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
              </div>
              <div>
                <input
                  className={inputCls}
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={onChange("phone")}
                  maxLength={30}
                />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <textarea
                  className={`${inputCls} min-h-32 resize-y`}
                  placeholder="Message"
                  value={form.message}
                  onChange={onChange("message")}
                  maxLength={1000}
                />
                {errors.message && (
                  <p className="text-destructive text-xs mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="font-inter text-sm bg-brand text-brand-foreground px-8 py-2.5 rounded-md hover:opacity-90 transition"
              >
                Submit
              </button>
              {sent && (
                <p className="text-brand text-sm mt-2">Thanks — we&apos;ll be in touch shortly.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
