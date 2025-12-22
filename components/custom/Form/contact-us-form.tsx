"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
export default function ContactUsForm() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
  });

  const onsubmit: SubmitHandler<{
    name: string;
    email: string;
    phoneNumber: string;
    message: string;
  }> = (data) => {
    console.log(data);
  };

  return (
    <form className="grid gap-2 my-5" onSubmit={handleSubmit(onsubmit)}>
      <Controller
        name="name"
        control={control}
        render={({ field }) => {
          return (
            <Field className="gap-2">
              <FieldLabel>Name</FieldLabel>
              <Input
                className="h-[55px]"
                {...field}
                placeholder="Enter your full name"
              />
            </Field>
          );
        }}
      />
      <Controller
        name="email"
        control={control}
        render={({ field }) => {
          return (
            <Field className="gap-2">
              <FieldLabel>Email Address</FieldLabel>
              <Input {...field} placeholder="Enter your email address" />
            </Field>
          );
        }}
      />
      <Controller
        name="name"
        control={control}
        render={({ field }) => {
          return (
            <Field className="gap-2">
              <FieldLabel>Phone Number</FieldLabel>
              <Input {...field} placeholder="Enter your mobile number" />
            </Field>
          );
        }}
      />
      <Controller
        name="name"
        control={control}
        render={({ field }) => {
          return (
            <Field className="gap-2">
              <FieldLabel>Message</FieldLabel>
              <Input
                {...field}
                placeholder="Please tell us what you're trying to achieve..."
              />
            </Field>
          );
        }}
      />
      <div className="flex items-center gap-3 my-5">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-xs">
          By clicking the checkbox you agree to the Privacy Policy and terms of
          service
        </Label>
      </div>
      <Button size={"lg"}>Submit</Button>
    </form>
  );
}
