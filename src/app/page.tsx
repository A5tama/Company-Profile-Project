"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import pro1 from "../../public/produkHero/pro1.png"
import pro2 from "../../public/produkHero/pro2.png"
import pro3 from "../../public/produkHero/pro3.png"
import pro4 from "../../public/produkHero/pro4.png"
import pro5 from "../../public/produkHero/pro5.png"
import pro6 from "../../public/produkHero/pro6.png"
import pro7 from "../../public/produkHero/pro7.png"

const Homepage = () => {
  return (
    <div>
      <div className="bg-[url(/alo.webp)] bg-cover grid mt-0 lg:grid-cols-2 grid-flow-row lg:h-3/4 my-3">
        {/* GRID#1 */}
        <div className=" flex justify-center mt-40 lg:my-auto">
          <Carousel>
            <CarouselContent className="-z-50">
              <CarouselItem>
                <Image
                  src={pro4}
                  alt="shower gel"
                  width={400}
                  height={20}
                  className="mx-auto lg:size-full"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={pro3}
                  alt="serum"
                  width={400}
                  height={20}
                  className="mx-auto lg:size-full"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={pro5}
                  alt=""
                  width={400}
                  height={20}
                  className="mx-auto lg:size-full"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={pro1}
                  alt=""
                  width={400}
                  height={20}
                  className="mx-auto lg:size-full"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={pro2}
                  alt=""
                  width={400}
                  height={20}
                  className="mx-auto lg:size-full"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={pro7}
                  alt=""
                  width={400}
                  height={20}
                  className="mx-auto lg:size-full"
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={pro6}
                  alt=""
                  width={400}
                  height={20}
                  className="mx-auto lg:size-full"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* GRID#2 */}
        <div className="pl-14 pt-12 lg:pt-15 lg:pl-18 justify-center">
          <h1 className="text-neutral-200  font-bold font-serif  text-2xl lg:text-5xl mb-24 lg:mb-5">
            The Fusion of Nature, Innovation For Your Beauty
          </h1>
          <p className="text-white text-lg p-2 lg:p-4">
            We are committed to providing you with natural skincare solutions
            for a healthier and more radiant complexion
          </p>

          <div className="text-white grid grid-cols-3 py-14">
            <div>
              <h1 className="text-2xl font-bold">20K+</h1>
              <p>Customer Rating.</p>
            </div>

            <div>
              <h1 className="text-2xl font-bold">100+</h1>
              <p>Awards & certifucates </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold">350K</h1>
              <p>Sold Products</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-center mt-2  font-serif text-green-700 ">
          OUR PRODUCTS
        </p>
        <h2 className="mx-auto  text-center my-2 text-xl lg:text-3xl font-serif">
          Natural and Certified Organic
        </h2>
      </div>

      <div className="border grid lg:grid-cols-3 gap-4 my-2">
        <div className="border bg-green-700 rounded-lg ">
          <h1 className="text-center font-semibold text-lg p-4">
            {" "}
            BODY CARE & SKINCARE{" "}
          </h1>
          <div>
            <Image
              src="/img/body.webp"
              alt="."
              width={350}
              height={350}
              className="rounded-lg mx-auto object-fill"
            />
            <p className="pl-8 p-4">
              Nourish and pamper your skin with our range of body care and
              skincare products. From luxurious moisturizers to gentle
              cleansers, each product is thoughtfully crafted to hydrate,
              soothe, and rejuvenate your skin, leaving it soft and supple.{" "}
            </p>
          </div>
        </div>

        <div className="border bg-green-700 rounded-lg">
          <h1 className="text-center font-semibold text-lg p-4">HAIR</h1>
          <div>
            <Image
              src="/img/hair2.webp"
              alt="."
              width={350}
              height={350}
              className="rounded-lg mx-auto object-fill"
            />
            <p className="pl-8 p-4">
              Experience the transformative power of herbal hair care with our
              specialized hair products. Designed to promote healthy hair
              growth, strengthen strands, and enhance shine, our hair care line
              offers natural solutions for all hair types.{" "}
            </p>
          </div>
        </div>

        <div className="border bg-green-700 rounded-lg">
          <h1 className="text-center font-semibold text-lg p-4">SERUM</h1>
          <div>
            <Image
              src="/img/serum1.webp"
              alt="."
              width={350}
              height={350}
              className="rounded-lg mx-auto object-fill"
            />
            <p className="pl-8 p-4">
              Our serum line is formulated to target various skin concerns,
              including aging, dullness, and uneven texture. Infused with potent
              herbal extracts, our serums deliver targeted results for a radiant
              and youthful complexion{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="border grid grid-cols-10 bg-slate-500">
        <div className="col-span-9 flex items-center justify-end px-8 py-10">
          <p className="text-xl font-serif text-green-950">All Our Product</p>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <Link href="/products">
            <div className="cursor-pointer text-green-950">
              <ArrowRight size={24} />
            </div>
          </Link>
        </div>
      </div>

      {/* COMPANY OVER VIEW */}

      <div className="grid lg:grid-cols-2">
        <div className="mt-0 py-10 px-6 md:px-10 bg-[url(/alobg.jpg)] bg-cover backdrop-blur-xl">
          <h2 className="text-3xl font-bold mb-6 text-white text-right border-white border-b-2">
            FAQ
          </h2>
          <div className="text-white text-xl">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Are all Manna Products Organic?
                </AccordionTrigger>
                <AccordionContent>
                  Not all Manna products are certified organic, but they are
                  formulated with natural ingredients whenever possible.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Is it save for sensitive skin?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, Manna products are designed to be gentle and safe for
                  sensitive skin, but it's always recommended to perform a patch
                  test first.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I use Manna products while pregnant?
                </AccordionTrigger>
                <AccordionContent>
                  While many of our products are safe for use during pregnancy,
                  it's best to consult with your healthcare provider before
                  using any skincare products during pregnancy.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  What makes Manna products Vegan friendly?
                </AccordionTrigger>
                <AccordionContent>
                  Manna products are considered vegan-friendly because they are
                  formulated without the use of any animal-derived ingredients
                  or by-products.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        <div className="bg-gray-300 py-10 px-6 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-green-950 text-right border-green-950 border-b-2">
              Our Company
            </h2>
            <p className="text-lg text-justify">
              The brand MANNA, Herbal Skincare Products was founded by Dr. Emily
              Green in the early 2009 with a vision to revolutionize the
              skincare industry by offering natural solutions. Dr. Green's
              expertise as a herbalist and dermatologist, coupled with her
              personal struggles with sensitive skin, fueled her determination
              to create a line of skincare products that prioritized efficacy
              and natural ingredients. From its modest beginnings, the company
              has grown into a trusted name, renowned for its commitment to
              quality, sustainability, and innovation. With an extensive range
              of skincare essentials crafted from the finest herbal ingredients,
              Herbal Skincare Products continues to uphold Dr. Green's original
              vision of providing safe, effective, and eco-friendly skincare
              solutions to individuals worldwide.
            </p>
            <div className="mt-6 ">
              <Link href="/about">
                <Button className="p-4 bg-green-800 text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
