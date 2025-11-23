"use client"


import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
export default function FieldDemo() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md text-center">
        <form>
          <FieldGroup>
            <FieldSet>
              <FieldLegend>SIGN UP</FieldLegend>
              <FieldDescription>
                All provided data is confidential and secure.
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Username
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="@LaReinaDeLosDragones"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Name 
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Jon"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Surname
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="Snow"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Password
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                    Phone number
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-number-uw1"
                    placeholder="213-543-1243"
                    required
                  />
                  <FieldDescription>
                    Enter your 10-digit card number
                  </FieldDescription>
                </Field>
                 <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Email
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="thekinginthenorth@gmail.com"
                    required
                  />
                </Field>
                 <Field>
                  <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                    Postal code
                  </FieldLabel>
                  <Input
                    id="checkout-7j9-card-name-43j"
                    placeholder="90001"
                    required
                  />
                </Field>
                <div className="grid grid-cols-3 gap-4">
                
                </div>
              </FieldGroup>
            </FieldSet>

            <FieldSet>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-optional-comments">
                    Comments
                  </FieldLabel>
                  <Textarea
                    id="checkout-7j9-optional-comments"
                    placeholder="Add any additional comments"
                    className="resize-none"
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <Field orientation="horizontal">
              <Button type="submit">Submit</Button>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </div>
    </div>
  )
}
