import { Tinos, TiroDevanagariSanskrit } from "@/components/custom/Typography";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function SignUp() {
  return (
    <div className="px-5 py-28 grid gap-8 justify-center">
      <div>
        <TiroDevanagariSanskrit className="text-[26px] text-center text-[#111111]">
          Stay Connected with SCALE Business Magazine
        </TiroDevanagariSanskrit>
        <Tinos className="text-[26px] text-center font-tinos text-[#111111]">
          Join our growing community of business owners and entrepreneurs.
        </Tinos>
      </div>

      <div className="justify-center flex">
        <div className="flex sm:w-143.5 sm:h-11.25 border border-black/15">
          <Input
            type="email"
            placeholder="Email address"
            className="h-full rounded-none font-tiro-devanagari-sanskrit text-base"
            style={{
              backgroundColor: "transparent",
            }}
          />
          <Button
            type="submit"
            className="h-full rounded-none sm:w-45.5 bg-[#1E1E1E]"
          >
            <TiroDevanagariSanskrit className="text-base uppercase">
              Sign Up
            </TiroDevanagariSanskrit>
          </Button>
        </div>
      </div>

      <TiroDevanagariSanskrit className="w-177.5 text-center mx-0 self-center justify-center flex italic">
        By entering your email, you agree to share your email address with the
        site owner and receive real-time updates on marketing, new releases,
        published articles, and other emails from us. Use the unsubscribe link
        in those emails to opt out at any time.
      </TiroDevanagariSanskrit>
    </div>
  );
}
