"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap: { id: string; url: string; alt?: string }[] = [
  { id: 'heroPizza', url: 'https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers.' },
  { id: 'aboutUs', url: 'https://images.pexels.com/photos/5216394/pexels-photo-5216394.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Warm and inviting Italian cafe with a variety of pizzas and drinks displayed on a counter.' },
  { id: 'menuItem1', url: 'https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Appetizing gourmet pizza cooked in a wood-fired oven, showcasing artisanal toppings.' },
  { id: 'menuItem2', url: 'https://images.pexels.com/photos/6605214/pexels-photo-6605214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Close-up of a freshly baked Margherita pizza topped with basil leaves, ready to savor.' },
  { id: 'menuItem3', url: 'https://images.pexels.com/photos/5848245/pexels-photo-5848245.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Delicious gourmet pizza in an open cardboard box, shot from above for a classic flat lay presentation.' },
  { id: 'teamPhoto', url: 'https://images.pexels.com/photos/6605239/pexels-photo-6605239.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A cheerful baker in an apron hands pizza boxes to customers inside a bakery.' },
  { id: 'customerTestimonial', url: 'https://images.pexels.com/photos/4350101/pexels-photo-4350101.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A joyful group of diverse women enjoying a meal together at a cozy café, engaging in cheerful conversation.' }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Contact", id: "contact" },
          ]}
          brandName="Pizzeria"
          buttonText="Order Now"
          buttonVariant="slide-background"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-yellow-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Welcome to Our Pizzeria"
            description="Experience the best pizza in town with fresh ingredients and traditional flavors."
            imageSrc={assetMap.find(a => a.id === 'heroPizza')?.url}
            imageAlt={assetMap.find(a => a.id === 'heroPizza')?.alt}
            buttons={[
              { text: "View Menu", href: "menu" },
              { text: "Order Now", href: "contact" },
            ]}
            imagePosition="right"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-yellow-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            bulletPoints={[
              { title: "Tradition", description: "Our recipes have been perfected over generations.", icon: CheckCircle },
              { title: "Quality Ingredients", description: "We use only the freshest ingredients for our pizzas." },
            ]}
            imageSrc={assetMap.find(a => a.id === 'aboutUs')?.url}
            imageAlt={assetMap.find(a => a.id === 'aboutUs')?.alt}
            imagePosition="right"
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-yellow-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            products={[
              {
                id: "1",
                brand: "Pizzeria",
                name: "Gourmet Pizza",
                price: "$15.99",
                rating: 5,
                reviewCount: "250",
                imageSrc: assetMap.find(a => a.id === 'menuItem1')?.url,
              },
              {
                id: "2",
                brand: "Pizzeria",
                name: "Margherita Pizza",
                price: "$12.99",
                rating: 4,
                reviewCount: "200",
                imageSrc: assetMap.find(a => a.id === 'menuItem2')?.url,
                isFavorited: true,
              },
              {
                id: "3",
                brand: "Pizzeria",
                name: "Vegetarian Pizza",
                price: "$14.99",
                rating: 5,
                reviewCount: "150",
                imageSrc: assetMap.find(a => a.id === 'menuItem3')?.url,
              },
            ]}
            title="Our Menu"
            description="Explore our selection of delicious pizzas crafted to perfection."
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24 bg-yellow-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardTwo
            testimonials={[
              {
                id: "1",
                name: "John Doe",
                role: "Food Blogger",
                testimonial: "The best pizza I've ever had! Authentic and delicious.",
                imageSrc: assetMap.find(a => a.id === 'customerTestimonial')?.url,
              },
            ]}
            title="What Our Customers Say"
            description="Real feedback from our pizza lovers."
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-yellow-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Newsletter"
            title="Get In Touch"
            description="Contact us or sign up for updates!"
            imageSrc={assetMap.find(a => a.id === 'aboutUs')?.url}
            imageAlt={assetMap.find(a => a.id === 'aboutUs')?.alt}
            mediaPosition="right"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-yellow-100 text-gray-800">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: "Explore", items: [{ label: "Home", href: "hero" }, { label: "About", href: "about" }] },
              { title: "Legal", items: [{ label: "Privacy Policy", href: "/privacy-policy" }, { label: "Terms of Service", href: "/terms-of-service" }] },
            ]}
            copyrightText="© 2025 Pizzeria Inc."
          />
        </div>
      </div>
    </ThemeProvider>
  );
}