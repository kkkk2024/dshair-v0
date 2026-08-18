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
import { contactFormLabels, type ContactFormLabels } from "@/lib/i18n/pages/contact-form"

export function ContactForm({ labels }: { labels?: ContactFormLabels }) {
  const t = labels ?? contactFormLabels.en
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
      setError(t.error)
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
        <h2 className="font-serif text-2xl font-medium mb-2">{t.successTitle}</h2>
        <p className="text-muted-foreground mb-6">{t.successBody}</p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          {t.another}
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border">
      <h2 className="font-semibold text-xl mb-6">{t.heading}</h2>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6">{error}</div>
      )}

      <FieldGroup>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field>
            <FieldLabel htmlFor="first-name">{t.firstName}</FieldLabel>
            <Input id="first-name" name="first-name" placeholder={t.firstNamePh} required />
          </Field>
          <Field>
            <FieldLabel htmlFor="last-name">{t.lastName}</FieldLabel>
            <Input id="last-name" name="last-name" placeholder={t.lastNamePh} required />
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="email">{t.email}</FieldLabel>
          <Input id="email" name="email" type="email" placeholder={t.emailPh} required />
        </Field>

        <Field>
          <FieldLabel htmlFor="phone">{t.phone}</FieldLabel>
          <Input id="phone" name="phone" type="tel" placeholder={t.phonePh} />
        </Field>

        <Field>
          <FieldLabel htmlFor="subject">{t.subject}</FieldLabel>
          <Select required name="subject">
            <SelectTrigger id="subject">
              <SelectValue placeholder={t.subjectPh} />
            </SelectTrigger>
            <SelectContent>
              {t.subjects.map((subject) => (
                <SelectItem key={subject.value} value={subject.value}>
                  {subject.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <FieldLabel htmlFor="order-number">{t.orderNumber}</FieldLabel>
          <Input id="order-number" name="order-number" placeholder={t.orderNumberPh} />
        </Field>

        <Field>
          <FieldLabel htmlFor="message">{t.message}</FieldLabel>
          <Textarea
            id="message"
            name="message"
            placeholder={t.messagePh}
            rows={5}
            required
          />
        </Field>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? t.sending : t.submit}
        </Button>
      </FieldGroup>
    </form>
  )
}
