"use client"; // Necesario porque usamos useRouter y hooks

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FieldDemo() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita recargar la página
    router.push("/quest"); // Navega a /quest
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md text-center p-6 bg-white rounded-2xl shadow-md">
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <FieldSet>
              <FieldLegend>SIGN UP</FieldLegend>
              <FieldDescription>
                All provided data is confidential and secure.
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="username">Username</FieldLabel>
                  <Input id="username" placeholder="@LaReinaDeLosDragones" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="name">Name</FieldLabel>
                  <Input id="name" placeholder="Jon" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="surname">Surname</FieldLabel>
                  <Input id="surname" placeholder="Snow" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input id="password" type="password" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="phone">Phone number</FieldLabel>
                  <Input id="phone" placeholder="213-543-1243" required />
                  <FieldDescription>Enter your 10-digit number</FieldDescription>
                </Field>
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input id="email" placeholder="thekinginthenorth@gmail.com" required />
                </Field>
                <Field>
                  <FieldLabel htmlFor="postal">Postal code</FieldLabel>
                  <Input id="postal" placeholder="90001" required />
                </Field>
              </FieldGroup>
            </FieldSet>

            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="comments">Comments</FieldLabel>
                  <Textarea
                    id="comments"
                    placeholder="Add any additional comments"
                    className="resize-none"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>

            <Field orientation="horizontal" className="flex justify-between mt-4">
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
