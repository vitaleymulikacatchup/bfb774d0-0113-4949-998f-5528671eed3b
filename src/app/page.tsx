"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { "id": "hero-image", "url": "https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers." },
  { "id": "about-image", "url": "https://images.pexels.com/photos/34289012/pexels-photo-34289012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A man enjoys a meal in a warmly-lit indoor restaurant setting." }
];

const heroImage = assetMap.find(a => a.id === "hero-image")?.url;
const heroAlt = assetMap.find(a => a.id === "hero-image")?.alt;
const aboutImage = assetMap.find(a => a.id === "about-image")?.url;
const aboutAlt = assetMap.find(a => a.id === "about-image")?.alt;

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our Pizzeria"
            description="Enjoy the finest pizzas made with fresh ingredients."
            imageSrc={heroImage}
            buttons={[
              { text: "Order Now", href: "menu" },
              { text: "Learn More", href: "about" }
            ]}
            className="bg-yellow-100"
            titleClassName="text-gray-900"
            descriptionClassName="text-gray-700"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Our pizzeria has been serving delicious, fresh pizza for over 20 years."
            buttons={[
              { text: "Our Story", href: "about" }
            ]}
            className="bg-yellow-100"
            titleClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Contact Us"
            title="We'd love to hear from you."
            description="Whether it's feedback or inquiries, feel free to reach out."
            inputPlaceholder="Your email"
            buttonText="Send Message"
            termsText="We respect your privacy. Unsubscribe anytime."
            className="bg-yellow-100"
            titleClassName="text-gray-900"
            descriptionClassName="text-gray-700"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Navigation", items: [
                { label: "Home", href: "home" },
                { label: "Menu", href: "menu" },
                { label: "About Us", href: "about" }
              ]},
              { title: "Legal", items: [
                { label: "Privacy Policy", href: "privacy" },
                { label: "Terms of Service", href: "terms" }
              ]}
            ]}
            copyrightText="© 2025 Pizzeria Co."
            className="bg-yellow-100"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}