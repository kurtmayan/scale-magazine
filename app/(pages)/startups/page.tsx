import { Inter, TimesNewRoman } from "@/components/custom/Typography";

export default function Startups() {
  return (
    <div className="h-[450px]">
      <div className="grid place-items-center h-full bg-[url(/startup-bg.png)] bg-cover">
        <div className="grid gap-5 text-center p-5">
          <TimesNewRoman className="text-2xl">Start-Up Toolkit</TimesNewRoman>
          <Inter className="font-light text-sm">
            At Scale, we believe technology and knowledge are the greatest
            accelerators for growth. Hence, our Start-Up ToolKit combines media,
            Technology, and real-world business wisdom to equip early-stage
            companies with the necessary resources to thrive and scale.
          </Inter>
          <Inter className="font-light text-sm">
            Everything is designed to help, guid, and inspire start-ups to
            launch smarter and grow faster in todays&apos;s rapidly evolving
            digital economy
          </Inter>
        </div>
      </div>
    </div>
  );
}
