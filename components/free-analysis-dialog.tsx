"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// ── Validation schema ────────────────────────────────────────────────────────
const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  whatsapp: z
    .string()
    .min(7, "Enter a valid WhatsApp number with country code")
    .max(20, "Number is too long"),
  goals: z
    .string()
    .min(20, "Please describe your goals in at least 20 characters")
    .max(1000, "Please keep your description under 1000 characters"),
});

type FormValues = z.infer<typeof formSchema>;

// ── Submission state ─────────────────────────────────────────────────────────
type SubmitState = "idle" | "loading" | "success" | "error";

interface FreeAnalysisDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function FreeAnalysisDialog({
  open,
  onOpenChange,
}: FreeAnalysisDialogProps) {
  const [submitState, setSubmitState] = React.useState<SubmitState>("idle");
  const [submitMessage, setSubmitMessage] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState<File | null>(null);
  const [fileError, setFileError] = React.useState("");
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      whatsapp: "",
      goals: "",
    },
  });

  // Reset internal state whenever dialog is closed.
  React.useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setSubmitState("idle");
        setSubmitMessage("");
        setSelectedFile(null);
        setFileError("");
        form.reset();
      }, 300); // wait for close animation
    }
  }, [open, form]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) {
      setSelectedFile(null);
      setFileError("");
      return;
    }

    // 10 MB limit
    if (file.size > 10 * 1024 * 1024) {
      setSelectedFile(null);
      setFileError("File must be smaller than 10 MB.");
      return;
    }
    const allowed = ["image/jpeg", "image/png", "image/webp", "image/heic", "application/pdf"];
    if (!allowed.includes(file.type) && !file.name.match(/\.(jpg|jpeg|png|webp|heic|pdf)$/i)) {
      setSelectedFile(null);
      setFileError("Please upload a JPG, PNG, WEBP, HEIC, or PDF file.");
      return;
    }

    setSelectedFile(file);
    setFileError("");
  };

  const onSubmit = async (data: FormValues) => {
    if (!selectedFile) {
      setFileError("Please upload your handwriting sample.");
      return;
    }

    setSubmitState("loading");

    const formData = new FormData();
    formData.append("fullName",  data.fullName);
    formData.append("email",     data.email);
    formData.append("whatsapp",  data.whatsapp);
    formData.append("goals",     data.goals);
    formData.append("sample",    selectedFile);

    try {
      const res = await fetch("/api/free-analysis", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();

      if (res.ok && json.success) {
        setSubmitState("success");
        setSubmitMessage(
          json.message ?? "Thank you! Kamlesh will be in touch within 24 hours.",
        );
      } else {
        setSubmitState("error");
        setSubmitMessage(
          json.message ?? "Something went wrong. Please try again.",
        );
      }
    } catch {
      setSubmitState("error");
      setSubmitMessage("A network error occurred. Please try again.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[540px]">
        {/* ── Header ── */}
        <DialogHeader>
          <p className="section-label mb-1">Complimentary</p>
          <DialogTitle>Get Your Free Handwriting Analysis</DialogTitle>
          <DialogDescription>
            Share your sample and goals below. Kamlesh will review your writing
            and send you a personalised initial insight within 24 hours — no
            obligation, no strings.
          </DialogDescription>
        </DialogHeader>

        {/* ── Gold rule ── */}
        <div className="gold-rule mx-6 my-1" />

        {/* ── Success state ── */}
        {submitState === "success" ? (
          <div className="px-6 pb-8 pt-4 flex flex-col items-center text-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-gold" />
            </div>
            <div>
              <p className="font-display text-lg font-semibold text-ink mb-1">
                Request Received!
              </p>
              <p className="text-sm text-ink-muted leading-relaxed">
                {submitMessage}
              </p>
            </div>
            <Button
              variant="outline-ink"
              className="mt-2"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
          </div>
        ) : (
          /* ── Form ── */
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="px-6 pb-6 space-y-5"
            >
              {/* Full Name */}
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* WhatsApp */}
              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>WhatsApp Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+91 98765 43210"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Include your country code (e.g. +91 for India).
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Goals */}
              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What do you want to achieve?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="E.g. I'd like to understand my communication style, discover strengths I might be overlooking, and get clarity on a career decision I've been facing…"
                        className="min-h-[110px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Handwriting sample upload */}
              <div className="space-y-1.5">
                <label
                  htmlFor="handwriting-sample"
                  className="font-body text-sm font-medium text-ink-light"
                >
                  Handwriting Sample
                </label>
                <div
                  className={[
                    "relative border-2 border-dashed rounded-lg p-5 text-center cursor-pointer",
                    "transition-colors hover:border-gold/60 hover:bg-gold/5",
                    fileError
                      ? "border-destructive/60"
                      : selectedFile
                        ? "border-gold/50 bg-gold/5"
                        : "border-border",
                  ].join(" ")}
                  onClick={() => fileInputRef.current?.click()}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      fileInputRef.current?.click();
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label="Upload handwriting sample"
                >
                  <input
                    ref={fileInputRef}
                    id="handwriting-sample"
                    type="file"
                    accept=".jpg,.jpeg,.png,.webp,.heic,.pdf"
                    className="sr-only"
                    onChange={handleFileChange}
                    aria-describedby={fileError ? "sample-error" : undefined}
                  />
                  {selectedFile ? (
                    <div className="flex items-center justify-center gap-2 text-gold-dark">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span className="text-sm font-medium truncate max-w-[260px]">
                        {selectedFile.name}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-1.5 text-muted-foreground">
                      <Upload className="w-5 h-5" />
                      <span className="text-sm">
                        Click to upload or drag &amp; drop
                      </span>
                      <span className="text-xs">
                        JPG, PNG, WEBP, HEIC or PDF — max 10 MB
                      </span>
                    </div>
                  )}
                </div>
                {fileError && (
                  <p id="sample-error" className="text-xs text-destructive font-medium flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3 shrink-0" />
                    {fileError}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  Write 3–5 sentences in your natural handwriting on unlined paper,
                  then photograph or scan it.
                </p>
              </div>

              {/* Error state banner */}
              {submitState === "error" && (
                <div className="flex items-start gap-2 rounded-md bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{submitMessage}</span>
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                className="w-full"
                disabled={submitState === "loading"}
                size="lg"
              >
                {submitState === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  "Request Free Analysis"
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                Your information is kept strictly confidential and will never be
                shared with third parties.
              </p>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}
