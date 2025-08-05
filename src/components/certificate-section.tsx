import { CometCard } from "@/components/ui/comet-card";
import { Card } from "@/components/ui/card";
import { useState } from "react";
const MAX_VISIBLE = 8;

const certificates = [
  {
    title: "Generative AI with LLMs",
    org: "DeepLearning.AI",
    url: "https://success.simplilearn.com/f595d641-9812-49a0-aec8-4e2f32591f68#acc.ckfm1eT2",
    icon: "/certs/deeplearningai.png"
  },
  {
    title: "Prompt Engineering for LLMs",
    org: "Hugging Face x DeepLearning.AI",
    url: "https://huggingface.co/cert/xyz456",
    icon: "/certs/huggingface.png"
  },
  {
    title: "AI for Everyone",
    org: "Andrew Ng / Coursera",
    url: "https://coursera.org/certificate/xyz789",
    icon: "/certs/coursera.png"
  },
  {
    title: "Generative AI with LLMs",
    org: "DeepLearning.AI",
    url: "https://success.simplilearn.com/f595d641-9812-49a0-aec8-4e2f32591f68#acc.ckfm1eT2",
    icon: "/certs/deeplearningai.png"
  },
  {
    title: "Prompt Engineering for LLMs",
    org: "Hugging Face x DeepLearning.AI",
    url: "https://huggingface.co/cert/xyz456",
    icon: "/certs/huggingface.png"
  },
  {
    title: "AI for Everyone",
    org: "Andrew Ng / Coursera",
    url: "https://coursera.org/certificate/xyz789",
    icon: "/certs/coursera.png"
  },
  {
    title: "Generative AI with LLMs",
    org: "DeepLearning.AI",
    url: "https://success.simplilearn.com/f595d641-9812-49a0-aec8-4e2f32591f68#acc.ckfm1eT2",
    icon: "/certs/deeplearningai.png"
  },
  {
    title: "Prompt Engineering for LLMs",
    org: "Hugging Face x DeepLearning.AI",
    url: "https://huggingface.co/cert/xyz456",
    icon: "/certs/huggingface.png"
  },
  {
    title: "AI for Everyone",
    org: "Andrew Ng / Coursera",
    url: "https://coursera.org/certificate/xyz789",
    icon: "/certs/coursera.png"
  }
];

export function CertificateSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, MAX_VISIBLE);

  return (
    <div className="w-full">
      {/* <Card className="p-8 w-full animate-fade-up transition-all duration-700 hover:shadow-xl hover:scale-[1.01] bg-white/5 backdrop-blur-md border border-white/10"> */}
      <Card className="p-8 w-full animate-fade-up transition-all duration-700 hover:shadow-xl hover:scale-[1.01] bg-white/5 backdrop-blur-md border border-white/10 hover:ring-1 hover:ring-primary/40">

        <h3 className="text-2xl font-semibold mb-6 text-primary">Certificates</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
          {visibleCertificates.map(({ title, org, url, icon }) => (
            <CometCard key={title} className="w-[250px]">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col rounded-[16px] bg-[#1F2121] p-4 cursor-pointer"
              >
                <div className="relative aspect-[3/4] w-full rounded-[16px] overflow-hidden">
                  <img
                    src={icon}
                    alt={org}
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
          ))}
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
