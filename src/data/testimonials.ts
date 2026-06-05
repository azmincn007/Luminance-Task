export interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Villa Owner, Dubai",
    avatar: "/images/avatar1.png",
    text: "The 3D design service was incredible! I could see my entire villa interior before spending a dirham. The team delivered exactly what was promised.",
  },
  {
    name: "Alex Roko",
    role: "Customer, Abu Dhabi",
    avatar: "/images/avatar2.png",
    text: "Excellent quality and fast delivery. Having everything from one factory meant no coordination issues. Highly recommend Ideal Factory!",
  },
  {
    name: "Mohammed Al Hashimi",
    role: "Villa Owner, Sharjah",
    avatar: "/images/avatar1.png",
    text: "Professional service from design to installation. The European machinery quality is evident in every detail. Worth every dirham!",
  },
  {
    name: "Lisa Chen",
    role: "Interior Designer",
    avatar: "/images/avatar2.png",
    text: "As a designer, I appreciate their attention to detail and ability to execute complex designs. The coordination between kitchen, doors, and windows was seamless.",
  },
  {
    name: "Ahmed Abdullah",
    role: "Villa Owner, Ajman",
    avatar: "/images/avatar1.png",
    text: "The after-sales support is exceptional. Any minor adjustments were handled quickly. This is what sets Ideal Factory apart from others.",
  },
];
