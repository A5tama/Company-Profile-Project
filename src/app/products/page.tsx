"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

interface Product {
  name: string;
  description: string;
  price: number;
}

interface Service {
  name: string;
  description: string;
}

const Services = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const [services, setServices] = useState<Service[]>([
    {
      name: "Herbal Skincare Consultation",
      description:
        "Get personalized skincare recommendations tailored to your unique needs and concerns. Our experts will analyze your skin and provide guidance on the best herbal skincare products for you.",
    },
    {
      name: "Herbal Facial Treatment",
      description:
        "Indulge in a rejuvenating herbal facial treatment that nourishes and revitalizes your skin. Our experienced estheticians will use gentle herbal formulations to cleanse, exfoliate, and hydrate your skin, leaving you with a radiant glow.",
    },
    {
      name: "Herbal Skincare Workshop",
      description:
        "Join us for an informative and hands-on workshop where you'll learn about the benefits of herbal skincare and how to create your own natural skincare products at home. Perfect for skincare enthusiasts and DIY aficionados!",
    },
  ]);

  const fetchTestimonials = async () => {
    try {
      // Mock API call for testimonials
      const data: Testimonial[] = [
        {
          name: "John Doe",
          text: "I love MANNA's products! My skin has never felt better.",
          rating: 5,
        },
        {
          name: "Jane Smith",
          text: "The herbal facial treatment was amazing. My skin feels so refreshed!",
          rating: 4,
        },
        {
          name: "Michael Brown",
          text: "Attending the skincare workshop was enlightening. I can't wait to try making my own products.",
          rating: 5,
        },
        {
          name: "Emily Johnson",
          text: "The moisturizer is fantastic! It keeps my skin hydrated all day long.",
          rating: 5,
        },
        {
          name: "David Clark",
          text: "Great service and wonderful products. Highly recommended!",
          rating: 4,
        },
      ];
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-4xl  font-bold text-center mb-8">
          Products & Services
        </h1>

        {/* Products */}
        <div className="mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">Our Products</h2>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold mb-6"> Serums </h2>
          </div>
          {/* SERUM PRODUCTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/serumx.png"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Manna Essence Treatment
                    </h3>
                    <p className="mb-4">Rejuvenate and hydrate your skin with our luxurious serum, enriched with potent botanical extracts for a visibly radiant complexion and lasting hydration.</p>
                    <p className="text-gray-600">Price: $29.99</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/serum1.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Manna Magic Serum
                    </h3>
                    <p className="mb-4">Experience the enchantment of our Magic Serum, crafted with powerful antioxidants and vitamins for a glowing, youthful complexion.</p>
                    <p className="text-gray-600">Price: $17.99</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/serum2.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Manna Anti-Acne Serum
                    </h3>
                    <p className="mb-4">Combat blemishes and breakouts with our Anti-Acne Serum, formulated with gentle yet effective ingredients to clarify and soothe troubled skin</p>
                    <p className="text-gray-600">Price: $15.00</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/serum3.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Manna Anti-Aging Serum
                    </h3>
                    <p className="mb-4">Turn back the hands of time with our Anti-Aging Serum, infused with potent peptides and nourishing botanicals to diminish fine lines and wrinkles.</p>
                    <p className="text-gray-600">Price: $17.99</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/serum4.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Manna White Serum
                    </h3>
                    <p className="mb-4">Illuminate your complexion with our White Serum, expertly formulated to brighten, tone, and achieve a radiant, luminous glow effortlessly.</p>
                    <p className="text-gray-600">Price: $12.99</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          {/* BODY PRODUCTS */}
          <div>
            <h2 className="text-xl lg:text-2xl font-bold mt-8 mb-6">
              {" "}
              Body & SkinCare{" "}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/bod4.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Vegan Body Lotion
                    </h3>
                    <p className="mb-4">Nourish and hydrate your skin with our indulgent Vegan Body Lotion, formulated with plant-based ingredients for smooth, supple skin without compromise.</p>
                    <p className="text-gray-600">Price: $64.99</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/body.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Choco & Vanilla Lotion
                    </h3>
                    <p className="mb-4">Indulge your senses with our Choco & Vanilla Lotion, enriched with decadent cocoa and vanilla extracts for irresistibly soft and sweetly scented skin.</p>
                    <p className="text-gray-600">Price: $59.99</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/bod5.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Organic Shower Gel
                    </h3>
                    <p className="mb-4">Cleanse and refresh your body with our Organic Shower Gel, crafted with natural botanicals to gently cleanse and invigorate your skin.</p>
                    <p className="text-gray-600">Price: $30.99</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/bod3.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Avocado Kiwi Hand Cream
                    </h3>
                    <p className="mb-4">Nourish and protect your hands with our Avocado Kiwi Hand Cream, infused with moisturizing avocado oil and revitalizing kiwi extract.</p>
                    <p className="text-gray-600">Price: $10.99</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/bod6.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Manna Gentle Face Wash
                    </h3>
                    <p className="mb-4">Cleanse and purify your skin with our Gentle Face Wash, formulated with mild ingredients to remove impurities and leave your skin feeling refreshed.</p>
                    <p className="text-gray-600">Price: $20.19</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/bod9.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">Manna Clay Mask</h3>
                    <p className="mb-4">Purify and revitalize your skin with our Clay Mask, enriched with natural minerals to deeply cleanse pores and promote a clearer complexion.</p>
                    <p className="text-gray-600">Price: $15.20</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>

                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/bod8.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Manna Nova Sunscreen
                    </h3>
                    <p className="mb-4">Shield your skin from harmful UV rays with our Nova Sunscreen, providing broad-spectrum protection and a lightweight, non-greasy formula for all-day defense.</p>
                    <p className="text-gray-600">Price: $57.00</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/sunsun.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Manna Sunscreen Spray
                    </h3>
                    <p className="mb-4"> Enjoy convenient sun protection on-the-go with our Sunscreen Spray, offering broad-spectrum coverage and easy application for effortless sun care wherever you go.</p>
                    <p className="text-gray-600">Price: $45.99</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          {/* HAIR PRODUCTS */}
          <div>
            <h2 className="text-xl lg:text-2xl font-bold mt-8 mb-6">
              {" "}
              Hair Products{" "}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
            {/* Placeholder for products */}
            <Carousel>
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/hair.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Manna Vegan Shampoo
                    </h3>
                    <p className="mb-4">Cleanse and nourish your hair with our Vegan Shampoo, formulated with plant-based ingredients to gently cleanse and promote healthy, lustrous locks.</p>
                    <p className="text-gray-600">Price: $29.99</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/hair1.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Manna Aloe Vera Shampoo
                    </h3>
                    <p className="mb-4">Revitalize and hydrate your hair with our Aloe Vera Shampoo, infused with soothing aloe vera extracts for soft, manageable hair and a healthy scalp.</p>
                    <p className="text-gray-600">Price: $24.99</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/hair2.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Turmeric Papaya Shampoo
                    </h3>
                    <p className="mb-4">Invigorate and strengthen your hair with our Turmeric Papaya Shampoo, enriched with turmeric and papaya extracts to promote hair growth and vitality.</p>
                    <p className="text-gray-600">Price: $23.99</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/hair3.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">
                      Manna Shampoo With Macha
                    </h3>
                    <p className="mb-4">Energize and cleanse your hair with our Shampoo With Matcha, formulated with antioxidant-rich matcha extracts to detoxify and rejuvenate dull, tired locks.</p>
                    <p className="text-gray-600">Price: $24.99</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <Image
                      className="mx-auto"
                      width={300}
                      height={300}
                      src="/img/hair4.webp"
                      alt=""
                    />
                    <h3 className="text-xl font-bold mb-2">Hair Serum</h3>
                    <p className="mb-4">Nourish and revitalize your hair with our Hair Serum, enriched with essential oils and vitamins for silky-smooth, frizz-free strands and enhanced shine.</p>
                    <p className="text-gray-600">Price: $34.99</p>
                    <Button className="bg-green-700 hover:bg-slate-500 text-white p-3 px-6">
                      Buy
                    </Button>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>

            {/* Add additional product components here */}
          </div>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="mb-4">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Testimonials */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
            <div className="">
              <Carousel>
                <CarouselContent>
                  {[...testimonials].map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-lg mb-4">"{testimonial.text}"</p>
                        <div className="flex items-center mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              size={20}
                              className="text-yellow-400 "
                            />
                          ))}
                          {[...Array(5 - testimonial.rating)].map((_, i) => (
                            <Star key={i} size={20} className="text-gray-400" />
                          ))}
                        </div>
                        <p className="text-gray-600">{testimonial.name}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
          {/* Testimonial Input */}
          <div className="mt-12 gap-2  flex flex-col lg:items-end justify-between ">
            <h2 className="text-3xl font-bold mb-4">Write Testimonial</h2>
            <textarea
              className="lg:w-full p-4 border rounded-lg focus:outline-none focus:border-blue-500 "
              rows={4}
              placeholder="Enter your testimonial..."
            />
            <div className="mt-2 items-center ">
              {[...Array(5)].map((_, i) => (
                <button key={i} className="focus:outline-none">
                  <Star size={24} className="hover:text-yellow-300" />
                </button>
              ))}
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg ml-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
