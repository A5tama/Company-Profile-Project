import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div>
      {/* <Head>
        <title>About Us - MANNA Herbal Skincare Products</title>
      </Head> */}
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          <div className="p-8 bg-green-700 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-6">
              Welcome to MANNA Herbal Skincare Products, where the timeless
              wisdom of nature converges with cutting-edge innovation to
              revolutionize your skincare regimen. Driven by a fervent
              commitment to harnessing the power of natural remedies, MANNA was
              established by Dr. Emily Green in 2009. As a distinguished
              herbalist and dermatologist, Dr. Green's journey began from a
              deeply personal place – her own struggles with sensitive skin.
              Drawing upon her profound expertise and intimate understanding of
              botanicals, she embarked on a mission to redefine skincare
              paradigms. With meticulous attention to detail, each product
              within the MANNA lineup is meticulously crafted to prioritize
              efficacy and harness the potent goodness of natural ingredients.
              From its humble origins, MANNA has swiftly ascended to become a
              beacon of excellence in the skincare domain. Our steadfast
              dedication to unwavering quality, environmental sustainability,
              and continuous innovation has cemented our reputation as a trusted
              industry leader. Rooted in a steadfast commitment to purity and
              authenticity, every MANNA creation is imbued with the essence of
              Dr. Green's original vision – to furnish individuals worldwide
              with safe, effective, and eco-conscious skincare solutions.
              Embrace the transformative potential of MANNA and embark on a
              journey towards radiant, revitalized skin, naturally.
            </p>
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className=" p-4 bg-stone-200 rounded-lg shadow-md">
                <Image
                  className="rounded-full mx-auto bg-stone-700 mt-18 object-cover h-40 w-40 p-3 "
                  width={100}
                  height={100}
                  src="/bos/dremi.png"
                  alt=""
                />
                <h3 className="text-xl font-bold mb-2">Dr. Emily Green</h3>
                <p className="text-gray-600 mb-4">Founder & CEO</p>
                <p className="mb-4">
                  A respected herbalist and dermatologist, Dr. Green is the
                  driving force behind MANNA's innovative skincare solutions.
                  With her wealth of knowledge and experience, she continues to
                  lead the company towards new heights.
                </p>
              </div>
              <div className=" p-4 bg-stone-200 rounded-lg shadow-md">
                <Image
                  className="rounded-full bg-stone-300 mx-auto mt-18 object-cover h-40 w-40 p-3 "
                  width={100}
                  height={100}
                  src="/bos/sarah.png"
                  alt=""
                />
                <h3 className="text-xl font-bold mb-2">Sarah Johnson</h3>
                <p className="text-gray-600 mb-4">
                  Head of Research & Development
                </p>
                <p className="mb-4">
                  Sarah oversees the formulation and development of MANNA's
                  products, ensuring they are effective, safe, and of the
                  highest quality. With a background in chemistry and a passion
                  for natural skincare, she's committed to innovation and
                  excellence.
                </p>
              </div>

              <div className=" p-4 bg-stone-200 rounded-lg shadow-md">
                <Image
                  className="rounded-full bg-black mx-auto mt-18 object-cover h-40 w-40 p-3 "
                  width={100}
                  height={100}
                  src="/bos/Tompson.jpg"
                  alt=""
                />
                <h3 className="text-xl font-bold mb-2">Michael Thompson</h3>
                <p className="text-gray-600 mb-4">Marketing Manager</p>
                <p className="mb-4">
                  Michael is responsible for spreading the word about MANNA's
                  products and mission. With his expertise in digital marketing
                  and a genuine belief in the power of herbal skincare, he's
                  dedicated to helping customers discover the benefits of MANNA.
                </p>
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-5 mb-4">Our Culture</h2>
            <p>
              At MANNA, our culture is rooted in integrity, innovation, and a
              deep respect for nature. We believe in transparency and honesty,
              always striving to provide our customers with products that
              deliver real results. Sustainability is at the heart of everything
              we do, from sourcing ingredients responsibly to minimizing our
              environmental footprint. We foster a collaborative and supportive
              work environment, where creativity thrives, and every team member
              is valued.
            </p>
          </div>
          {/* Introduksi Tim dan Tombol "Meet Our Team" */}
          <div className="mt-8 flex flex-col items-center">
            <p className="text-lg text-center mb-4">
            Get to know the passionate individuals behind MANNA. Meet our team of experts dedicated to delivering the best herbal skincare products and discover their stories.
            </p>
            <Link href="/team">
              <Button>Meet Our Team</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
