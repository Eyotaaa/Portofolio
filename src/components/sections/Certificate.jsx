
import Carousel from "../ui/carousel";

export function Certificate() {
  const slideData = [
    {
      title: "CCNA R S Introduction to Networks",
      button: "Explore Component",
      src: "src/assets/Sertifikat/CCNA_R-S-_Introduction_to_Networks_certificate_dzamir169-gmail-com_68959884-d2d1-4a30-b10d-6476a30f133f_page-0001.jpg",
    },
    {
      title: "CCNA R S Routing and Switching Essentials",
      button: "Explore Component",
      src: "src/assets/Sertifikat/CCNA_R-S-_Routing_and_Switching_Essentials_certificate_dzamir169-gmail-com_0c6b8214-5cae-4938-a83e-0a394810853d_page-0001.jpg",
    },
    {
      title: "Introduction to Cybersecurity",
      button: "Explore Component",
      src: "src/assets/Sertifikat/Introduction_to_Cybersecurity_certificate_dzamir169-gmail-com_ed5a4e04-5213-4f64-b88e-a1ed860ebc0b_page-0001.jpg",
    },
    {
      title: "Partner NDG Linux I",
      button: "Explore Component",
      src: "src/assets/Sertifikat/Partner-_NDG_Linux_I_certificate_dzamir169-gmail-com_0aae0ad4-add9-4e6d-9dc0-3e471fb2165a_page-0001.jpg",
    }, {
      title: "Certified Studi Independent",
      button: "Explore Component",
      src: "src/assets/Sertifikat/Sertifikat_Perusahaan_Dzamir Akmal.png",
    },
  ];
  return (

    <div className="relative overflow-hidden w-full h-full py-20">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent text-center">
        Certificates
      </h2>
      <Carousel slides={slideData} />
    </div>
  );
}
