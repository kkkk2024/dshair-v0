"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const subjects = [
  { value: "general", label: "General Enquiry" },
  { value: "order", label: "Order Support" },
  { value: "returns", label: "Returns & Exchanges" },
  { value: "colour-match", label: "Colour Matching Help" },
  { value: "professional", label: "Professional Partnership" },
  { value: "press", label: "Press & Media" },
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      orderNumber: formData.get("order-number"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error("Failed to send message")
      }

      setIsSubmitting(false)
      setIsSubmitted(true)
    } catch (err) {
      setIsSubmitting(false)
      setError("Failed to send message. Please try again.")
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-2xl p-8 text-center border">
        <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-serif text-2xl font-medium mb-2">Message Sent!</h2>
        <p className="text-muted-foreground mb-6">
          Thank you for getting in touch. We will respond to your enquiry within 24 hours.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border">
      <h2 className="font-semibold text-xl mb-6">Send Us a Message</h2>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}
      
      <FieldGroup>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="first-name">First Name</FieldLabel>
            <Input id="first-name" name="first-name" placeholder="Your first name" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
            <Input id="last-name" name="last-name" placeholder="Your last name" required />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="email">Email Address</FieldLabel>
          <Input id="email" name="email" type="email" placeholder="you@example.com" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="phone">Phone Number (Optional)</FieldLabel>
          <Input id="phone" name="phone" type="tel" placeholder="+44 123 456 7890" />
        </Field>

        <Field>
          <FieldLabel htmlFor="subject">Subject</FieldLabel>
          <Select required name="subject">
            <SelectTrigger id="subject">
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((subject) => (
                <SelectItem key={subject.value} value={subject.value}>
                  {subject.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <FieldLabel htmlFor="order-number">Order Number (Optional)</FieldLabel>
          <Input id="order-number" name="order-number" placeholder="e.g. DS-12345" />
        </Field>

        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell us how we can help..."
            rows={5}
            required
          />
        </Field>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </FieldGroup>
    </form>
  )
}
