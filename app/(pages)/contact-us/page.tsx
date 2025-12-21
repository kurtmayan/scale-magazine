import { ContactUsForm } from "@/components/custom/Form";
import { Inter, TimesNewRoman } from "@/components/custom/Typography";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactUs() {
  const cards = [
    {
      title: "Featured Stories",
      description:
        " Entrepreneurs, leaders, creators, and companies shaping the future",
    },
    {
      title: "Sponsors & Collaborators",
      description:
        "Brands and organizations that want to amplify their presence through a modern media-tech platform",
    },
  ];

  return (
    <div className="p-5 grid gap-5">
      <TimesNewRoman className="text-3xl">
        Do you believe your journey deserves to be told?
      </TimesNewRoman>
      <TimesNewRoman>
        Do you want your brand to connect with high-value audiences,
        decision-makers, and industry professionals?
      </TimesNewRoman>
      <div>
        <TimesNewRoman className="font-bold text-xl my-2">
          Scale is always looking for:
        </TimesNewRoman>
        <div className="grid gap-2">
          {cards.map((card) => (
            <Card key={card.title}>
              <CardContent>
                <Inter className="font-light text-center">
                  <span className="font-bold">{card.title}</span> -{" "}
                  <span>{card.description}</span>
                </Inter>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div>
        <Inter>
          Reach out today. Let&apos;s create meaningful stories, powerful
          content, and breakthrough partnerships together.
        </Inter>
        <ContactUsForm />
      </div>
    </div>
  );
}
