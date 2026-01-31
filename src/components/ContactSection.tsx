import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";

export const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;
    const form = formRef.current;
    if (!form) return;

    setIsSending(true);
    toast({
      title: "Sending message...",
      description: "Please wait while your message is being sent.",
    });

    try {
      const SERVICE_ID = "service_t6no7mt";
      const TEMPLATE_ID = "template_okdc0h9";
      const PUBLIC_KEY = "AAGz_W-Cfqi5sSEmR";

      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);

      toast({
        title: "Message sent!",
        description: "Thank you — I'll get back to you soon.",
      });

      form.reset();
      const firstInput = form.querySelector<HTMLInputElement>(
        'input[name="from_name"]',
      );
      firstInput?.focus();
    } catch {
      toast({
        title: "Send failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'd love to hear from you — whether it's feedback, ideas, or just a
          hello.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:2kthanhlong2k@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    2kthanhlong2k@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+84398845986"
                    className="text-muted-foreground hover:text-primary transition-colors">
                    (+84) 398-845-986
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex flex-col items-start">
                  <h4 className="font-medium">Location</h4>
                  <span className="text-muted-foreground">
                    Ho Chi Minh City, Vietnam
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.facebook.com/Longnt2k/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-primary transition-colors duration-300">
                  <FaFacebook className="h-6 w-6" />
                </a>

                <a
                  href="https://www.linkedin.com/in/longnt3003"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-primary transition-colors duration-300">
                  <FaLinkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  name="from_name"
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <input
                  name="from_email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone (optional)"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  rows={6}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={cn(
                  "custom-button w-full flex items-center justify-center gap-2 cursor-pointer",
                )}
                aria-label="Send message">
                {isSending ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
