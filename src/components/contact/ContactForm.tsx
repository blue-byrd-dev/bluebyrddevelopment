"use client";

import { useState } from "react";
import { FaArrowRight, FaCheckCircle, FaSpinner } from "react-icons/fa";
import toast from "react-hot-toast";
import SelectField from "@/components/ui/SelectField";

type FormDataState = {
	name: string;
	email: string;
	phone: string;
	projectType: string;
	budget: string;
	timeframe: string;
	message: string;
};

type FormState = {
	isSubmitting: boolean;
	isSubmitted: boolean;
	error: string | null;
};

type Props = {
	onSuccess?: () => void;
};

const initialData: FormDataState = {
	name: "",
	email: "",
	phone: "",
	projectType: "",
	budget: "",
	timeframe: "",
	message: "",
};

export default function ContactForm({ onSuccess }: Props) {
	const [formData, setFormData] = useState<FormDataState>(initialData);
	const [formState, setFormState] = useState<FormState>({
		isSubmitting: false,
		isSubmitted: false,
		error: null,
	});

	const formatPhoneNumber = (value: string) => {
		const raw = value.replace(/[^\d+]/g, "");

		if (raw.startsWith("+")) {
			const international = "+" + raw.replace(/\+/g, "").slice(0, 15);
			return international;
		}

		// US 10 digits
		if (/^\d{10}$/.test(raw)) {
			const area = raw.slice(0, 3);
			const prefix = raw.slice(3, 6);
			const line = raw.slice(6);
			return `+1 ${area}-${prefix}-${line}`;
		}

		// Generic international digits
		if (/^\d{11,15}$/.test(raw)) {
			return "+" + raw.slice(0, 15);
		}

		return raw;
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>,
	) => {
		const { name, value } = e.target;

		if (name === "phone") {
			setFormData((prev) => ({ ...prev, phone: formatPhoneNumber(value) }));
			return;
		}

		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const isFormValid = () => {
		return (
			formData.name &&
			formData.email &&
			formData.phone &&
			formData.projectType &&
			formData.budget &&
			formData.timeframe &&
			formData.message
		);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setFormState((prev) => ({ ...prev, isSubmitting: true, error: null }));

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await res.json().catch(() => ({}));

			if (!res.ok || !data?.success) {
				throw new Error(data?.error || "Failed to send message");
			}

			toast.success("Message sent, I’ll reply soon.");
			setFormState({ isSubmitting: false, isSubmitted: true, error: null });
			onSuccess?.();
		} catch (err) {
			const msg =
				err instanceof Error
					? err.message
					: "There was an error sending your message. Please try again.";

			toast.error(msg);
			setFormState({ isSubmitting: false, isSubmitted: false, error: msg });
			console.error("Contact form error:", err);
		}
	};

	if (formState.isSubmitted) {
		return (
			<div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-8 text-center">
				<div
					className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full"
					style={{
						background:
							"color-mix(in srgb, var(--bbd-secondary) 22%, transparent)",
					}}
				>
					<FaCheckCircle
						className="h-8 w-8"
						style={{ color: "var(--bbd-secondary)" }}
					/>
				</div>

				<h3 className="mt-4 text-2xl font-semibold tracking-tight">
					Message received.
				</h3>
				<p className="mt-2 text-[rgb(var(--muted))]">
					Thanks for reaching out. I’ll review your details and respond with
					next steps.
				</p>

				<button
					type="button"
					onClick={() => {
						setFormState({
							isSubmitting: false,
							isSubmitted: false,
							error: null,
						});
						setFormData(initialData);
					}}
					className="mt-6 text-sm font-semibold underline underline-offset-4 hover:opacity-90"
				>
					Send another message
				</button>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-5">
			<div className="grid gap-4 sm:grid-cols-2">
				<Field label="Full name">
					<input
						name="name"
						type="text"
						autoComplete="name"
						required
						value={formData.name}
						onChange={handleChange}
						placeholder="Your name"
						className="mt-2 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bbd-bg))] text-[rgb(var(--fg))] px-4 py-3"
					/>
				</Field>

				<Field label="Email">
					<input
						name="email"
						type="email"
						autoComplete="email"
						required
						value={formData.email}
						onChange={handleChange}
						placeholder="you@company.com"
						className="mt-2 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bbd-bg))] text-[rgb(var(--fg))] px-4 py-3"
					/>
				</Field>
			</div>

			<Field label="Phone">
				<input
					name="phone"
					type="tel"
					autoComplete="tel"
					required
					value={formData.phone}
					onChange={handleChange}
					placeholder="+1 123-456-7890"
					className="mt-2 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bbd-bg))] text-[rgb(var(--fg))] px-4 py-3"
				/>
			</Field>

			<Field label="Project type">
				<SelectField
					value={formData.projectType}
					onChange={(v) => setFormData((p) => ({ ...p, projectType: v }))}
					placeholder="Select project type"
					options={[
						{
							label: "Website Design & Development",
							value: "Website Design & Development",
						},
						{ label: "Web Application", value: "Web Application" },
						{ label: "E-commerce Solutions", value: "E-commerce Solutions" },
						{ label: "Website Redesign", value: "Website Redesign" },
						{ label: "Maintenance & Support", value: "Maintenance & Support" },
						{ label: "Other", value: "Other" },
					]}
				/>
			</Field>

			<div className="grid gap-4 sm:grid-cols-2">
				<Field label="Budget range">
					<SelectField
						value={formData.budget}
						onChange={(v) => setFormData((p) => ({ ...p, budget: v }))}
						placeholder="Select a budget"
						options={[
							{ label: "Less than $5,000", value: "Under $5,000" },
							{ label: "$5,000 – $10,000", value: "$5,000–$10,000" },
							{ label: "$10,000 – $25,000", value: "$10,000–$25,000" },
							{ label: "More than $25,000", value: "Over $25,000" },
						]}
					/>
				</Field>

				<Field label="Project timeframe">
					<SelectField
						value={formData.timeframe}
						onChange={(v) => setFormData((p) => ({ ...p, timeframe: v }))}
						placeholder="Select a timeframe"
						options={[
							{ label: "ASAP", value: "ASAP" },
							{ label: "1 – 3 months", value: "1–3 months" },
							{ label: "3 – 6 months", value: "3–6 months" },
							{
								label: "Flexible / Not urgent",
								value: "Flexible / Not urgent",
							},
						]}
					/>
				</Field>
			</div>

			<Field label="Project details">
				<textarea
					name="message"
					required
					value={formData.message}
					onChange={handleChange}
					rows={6}
					placeholder="What are you building? What’s not working today? What outcome do you want?"
					className="mt-2 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--bbd-bg))] text-[rgb(var(--accent-fg))] px-4 py-3"
				/>
			</Field>

			<button
				type="submit"
				disabled={formState.isSubmitting || !isFormValid()}
				className={`btn btn-primary ${
					!isFormValid() || formState.isSubmitting
						? "opacity-60 cursor-not-allowed"
						: ""
				}`}
			>
				{formState.isSubmitting ? (
					<span className="inline-flex items-center justify-center gap-2">
						<FaSpinner className="h-5 w-5 animate-spin" />
						Sending…
					</span>
				) : (
					<span className="inline-flex items-center justify-center gap-2">
						Start a project
						<FaArrowRight className="h-4 w-4" />
					</span>
				)}
			</button>

			{formState.error && (
				<p
					className="text-sm"
					style={{ color: "color-mix(in srgb, red 70%, var(--bbd-fg))" }}
				>
					{formState.error}
				</p>
			)}
		</form>
	);
}

function Field({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<label className="block">
			<span className="text-sm font-medium">{label}</span>
			{children}
		</label>
	);
}
