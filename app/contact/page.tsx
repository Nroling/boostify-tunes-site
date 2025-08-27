"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Mail, MessageSquare, Phone } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      // Using FormSubmit service to send the form data
      const formData = new FormData()
      formData.append("name", formState.name)
      formData.append("email", formState.email)
      formData.append("subject", formState.subject)
      formData.append("message", formState.message)

      // This is the FormSubmit endpoint with your email
      const response = await fetch("https://formsubmit.co/support@boostifytunes.com", {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Form submission failed")
      }

      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("There was a problem sending your message. Please try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Link href="/">
            <Button variant="ghost" className="p-0 mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center">
            <div className="relative h-8 w-auto mr-4">
              <Image
                src="/images/boostify-logo.png"
                alt="Boostify Tunes Logo"
                width={100}
                height={30}
                className="object-contain"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold">Contact Us</h1>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-8">
                Have questions about Boostify? Want to learn more about how our platform can help you? We'd love to hear
                from you. Fill out the form or use one of our contact methods below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 mt-1 text-gray-400" />
                  <div>
                    <h3 className="font-medium">Email Us</h3>
                    <p className="text-gray-300">support@boostifytunes.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 mt-1 text-gray-400" />
                  <div>
                    <h3 className="font-medium">Call Us</h3>
                    <p className="text-gray-300">(800) 319-3317</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <MessageSquare className="h-12 w-12 mx-auto mb-4 text-green-500" />
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-300 mb-4">
                      Thank you for reaching out. We'll respond to your inquiry shortly.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Hidden input for FormSubmit to prevent spam */}
                    <input type="text" name="_honey" style={{ display: "none" }} />

                    {/* Disable captcha */}
                    <input type="hidden" name="_captcha" value="false" />

                    {/* Redirect after submission - use your actual domain */}
                    <input type="hidden" name="_next" value="https://boostifytunes.com/contact?success=true" />

                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us what you need..."
                        rows={5}
                        required
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>

                    {error && <div className="p-3 bg-red-900/50 border border-red-700 rounded-md text-sm">{error}</div>}
                  </form>
                )}
              </CardContent>
              {!isSubmitted && (
                <CardFooter>
                  <Button type="submit" className="w-full" disabled={isSubmitting} onClick={handleSubmit}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </CardFooter>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

