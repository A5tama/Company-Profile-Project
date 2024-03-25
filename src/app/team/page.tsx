"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RandomUserResponse, User } from "@/types/user.type";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const URL = "https://randomuser.me/api?results=6&nat=CA,US,AU";

// Interface untuk data tambahan
interface TeamMember extends User {
  position: string;
  description: string;
}

const OurTeam = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const positions = [
    "Supply Chain Manager",
    "Head of Research & Development",
    "IT Manager",
    "Social Media Coordinator",
    "IT Support Specialist",
    "Finance Manager",
  ];
  const descriptions = [
    "oversees MANNA's supply chain operations, ensuring efficient sourcing and distribution of herbal ingredients and finished products.With a background in logistics and a passion for sustainability, implements strategies to minimize environmental impact.",
    "Manages the formulation and development of MANNA's products, ensuring efficacy, safety, and top-notch quality. With a background in chemistry and a strong dedication to natural skincare, this individual is deeply committed to driving innovation and achieving excellence in their work..",
    "oversees MANNA's information technology infrastructure, ensuring the security and efficiency of digital systems. With expertise in network administration and cybersecurity, implements technology solutions that support MANNA's operations and protect customer data..",
    "Responsible for spreading the word about MANNA's products and mission. With expertise in digital marketing and a genuine belief in the power of herbal skincare, this dedicated, passionate individual tirelessly helps customers discover the benefits of MANNA's natural solutions.",
    "provides technical support to MANNA's employees, resolving IT issues and optimizing digital workflows. With a passion for technology and a knack for problem-solving, keeps MANNA's systems running smoothly, enabling the team to focus on delivering exceptional skincare products.",
    "leads MANNA's finance team, overseeing budgeting, accounting, and financial reporting processes. With a background in finance and a keen eye for detail, ensures that MANNA's financial operations are transparent, efficient, and compliant with regulatory standards.",
  ];

  const getRandomUsers = async () => {
    try {
      const response = await fetch(URL);
      const { results }: RandomUserResponse = await response.json();
      const teamData: TeamMember[] = results.map(
        (user: User, index: number) => ({
          ...user,
          position: positions[index],
          description: descriptions[index],
        })
      );
      setTeamMembers(teamData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomUsers();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-serif font-semibold text-center py-3">
        Our Experts are like no Other
      </h1>
      <p className="text-xl lg:text-2xl mb-8 text-center">
        Meet the passionate individuals behind MANNA. Our diverse team of
        experts drives innovation and excellence in herbal skincare, finance,
        and IT.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          teamMembers.map((member, index) => (
            <Card key={index} className="max-w-sm mx-auto bg-gray-200">
              <div className="relative mt-4 rounded-full overflow-hidden w-40 h-40 mx-auto">
                <Image
                  className="object-cover w-full h-full"
                  src={member.picture.medium}
                  alt=""
                  width={160}
                  height={160}
                />
              </div>
              <div className="text-center mt-4">
                <Badge color="success" className="mx-14 bg-teal-600 block mb-2">
                  <MapPin className="inline mr-1" />
                  {member?.location.country}
                </Badge>
                <h5 className="text-lg font-bold mb-2">
                  {member?.name.first} {member?.name.last}
                </h5>
                <p className="text-sm font-semibold px-4 text-gray-700 mb-4">
                  {member.position}
                </p>
                <p className="text-sm px-4 text-gray-700 mb-4">
                  {member.description}
                </p>
                <div className="flex justify-center space-x-4">
                  <FaTwitter className="text-xl text-blue-500 cursor-pointer hover:text-blue-700" />
                  <FaInstagram className="text-xl text-pink-500 cursor-pointer hover:text-pink-700" />
                  <FaLinkedin className="text-xl text-blue-700 cursor-pointer hover:text-blue-900" />
                </div>
                <div className="flex justify-center items-center space-x-1">
                  <Mail className=" text-gray-600 py-auto cursor-pointer hover:text-red-500"/>
                  <p className="font-serif mt-2 cursor-pointer hover:text-blue-800 py-auto">{member?.email}</p>
                </div>
              </div>
              <div className="text-center mt-3 mb-5">
                <Button color="success" className=" bg-green-900 mb-0">
                  Read More
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};

export default OurTeam;
