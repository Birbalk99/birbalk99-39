import { CometCard } from "@/components/ui/comet-card";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const MAX_VISIBLE = 8;

const certificates = [
  {
    title: "Artificial Intelligence Engineer",
    org: "Simplilearn",
    url: "https://success.simplilearn.com/df110e96-6ab3-4f2f-9f38-3cbb0078b9a1#acc.Xws57tyD",
    icon: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/78309242"
  },
  {
    title: "Data Science",
    org: "Simplilearn",
    url: "https://success.simplilearn.com/f595d641-9812-49a0-aec8-4e2f32591f68#acc.ckfm1eT2",
    icon: "https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/61935232"
  },
  {
    title: "Neo4j Certified Professional",
    org: "Neo4j Graph Academy",
    url: "https://graphacademy.neo4j.com/c/7f55bca8-af44-4977-9fbd-ad7919cbdb6d",
    icon: "/certs/neo4j.png"
  },
  {
    title: "Advanced Deep Learning and Computer Vision",
    org: "Simplilearn",
    url: "/certs/Advanced Deep Learning and Computer Vision_4789010_1.jpg",
    icon: "/certs/Advanced Deep Learning and Computer Vision_4789010_1.jpg"
  },
  {
    title: "AI Capstone Project",
    org: "Simplilearn",
    url: "/certs/AI Capstone Project_4795149_1.jpg",
    icon: "/certs/AI Capstone Project_4795149_1.jpg"
  },
  {
    title: "Business Analytics with Excel",
    org: "Simplilearn",
    url: "/certs/Business Analytics with Excel_3742154_1.jpg",
    icon: "/certs/Business Analytics with Excel_3742154_1.jpg"
  },
  {
    title: "Deep learning for NLP using Python",
    org: "Simplilearn",
    url: "/certs/Deep learning for NLP using Python_3396668_1.jpg",
    icon: "/certs/Deep learning for NLP using Python_3396668_1.jpg"
  },
  {
    title: "Deep Learning with Keras and Tensorflow",
    org: "Simplilearn",
    url: "/certs/Deep Learning with Keras and Tensorflow_1.jpg",
    icon: "/certs/Deep Learning with Keras and Tensorflow_1.jpg"
  },
  {
    title: "Industry Master Class – Artificial Intelligence",
    org: "Simplilearn",
    url: "/certs/Industry Master Class – Artificial Intelligence_3107735_1.jpg",
    icon: "/certs/Industry Master Class – Artificial Intelligence_3107735_1.jpg"
  },
  {
    title: "Introduction to Artificial Intelligence",
    org: "Simplilearn",
    url: "/certs/Introduction to Artificial Intelligence_2996727_1.jpg",
    icon: "/certs/Introduction to Artificial Intelligence_2996727_1.jpg"
  },
  {
    title: "Machine Learning Advanced Certification Training",
    org: "Simplilearn",
    url: "/certs/Machine Learning Advanced Certification Training_3299388_1.jpg",
    icon: "/certs/Machine Learning Advanced Certification Training_3299388_1.jpg"
  },
  {
    title: "Math Refresher",
    org: "Simplilearn",
    url: "/certs/Math Refresher_2998360_1.jpg",
    icon: "/certs/Math Refresher_2998360_1.jpg"
  },
  {
    title: "Python for Data Science by IBM",
    org: "IBM",
    url: "/certs/Python for Data Science by IBM_3056547_1.jpg",
    icon: "/certs/Python for Data Science by IBM_3056547_1.jpg"
  },
  {
    title: "SQL",
    org: "Simplilearn",
    url: "/certs/SQL_3913784_1.jpg",
    icon: "/certs/SQL_3913784_1.jpg"
  },
  {
    title: "Statistics Essential for Data Science",
    org: "Simplilearn",
    url: "/certs/Statistics Essential for Data Science_1.jpg",
    icon: "/certs/Statistics Essential for Data Science_1.jpg"
  },
  {
    title: "Tableau",
    org: "Simplilearn",
    url: "/certs/Tableau_3915311_1.jpg",
    icon: "/certs/Tableau_3915311_1.jpg"
  }
];

export function CertificateSection() {
  const [showAll, setShowAll] = useState(false);
  const [ratios, setRatios] = useState({}); // store image aspect ratios

  const visibleCertificates = showAll ? certificates : certificates.slice(0, MAX_VISIBLE);

  const handleImageLoad = (index, e) => {
    const img = e.target;
    const aspect = img.naturalWidth / img.naturalHeight;
    setRatios(prev => ({
      ...prev,
      [index]: aspect
    }));
  };

  return (
    <div className="w-full">
      <Card className="p-8 w-full animate-fade-up transition-all duration-700 hover:shadow-xl hover:scale-[1.01] bg-white/5 backdrop-blur-md border border-white/10 hover:ring-1 hover:ring-primary/40">
        <h3 className="text-2xl font-semibold mb-6 text-primary">Certificates</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {visibleCertificates.map(({ title, org, url, icon }, idx) => {
            const aspectClass =
              ratios[idx] > 1.3 ? "aspect-video" : "aspect-[3/4]"; // horizontal vs vertical
            return (
              <CometCard key={title} className="w-[250px]">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col rounded-[16px] bg-[#1F2121] p-4 cursor-pointer"
                >
                  <div className={`relative ${aspectClass} w-full rounded-[16px] overflow-hidden`}>
                    <img
                      src={icon}
                      alt={org}
                      onLoad={(e) => handleImageLoad(idx, e)}
                      className="h-full w-full object-contain bg-black contrast-75 rounded-[16px]"
                      style={{ boxShadow: "rgba(0,0,0,0.1) 0px 5px 6px" }}
                    />
                  </div>
                  <div className="mt-3 text-white font-mono">
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="text-xs text-muted-foreground">{org}</p>
                    <span className="text-[10px] text-blue-400 mt-1 block">Click to view →</span>
                  </div>
                </a>
              </CometCard>
            );
          })}
        </div>

        {certificates.length > MAX_VISIBLE && (
          <div className="flex justify-center mt-6">
            <button
              className="text-sm text-primary hover:underline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "View All Certificates"}
            </button>
          </div>
        )}
      </Card>
    </div>
  );
}
