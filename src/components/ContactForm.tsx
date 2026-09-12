import { useState, type FormEvent } from 'react'

interface FormState {
  fullName: string
  email: string
  phone: string
  projectType: string
  projectLocation: string
  budget: string
  message: string
}

const initialState: FormState = {
  fullName: '',
  email: '',
  phone: '',
  projectType: '',
  projectLocation: '',
  budget: '',
  message: '',
}

type Errors = Partial<Record<keyof FormState, string>>

const projectTypes = [
  'Building Construction',
  'Architectural Design',
  'Structural Works',
  'Renovation & Remodeling',
  'Project Management',
  'Property Development',
  'Civil Construction',
  'Other',
]

function validate(values: FormState): Errors {
  const errors: Errors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Please enter your full name.'
  }

  if (!values.email.trim()) {
    errors.email = 'Please enter your email address.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Please enter a phone number.'
  } else if (!/^[+()\d\s-]{7,20}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number.'
  }

  if (!values.projectType) {
    errors.projectType = 'Please select a project type.'
  }

  if (!values.projectLocation.trim()) {
    errors.projectLocation = 'Please enter the project location.'
  }

  if (!values.message.trim()) {
    errors.message = 'Please tell us a little about the project.'
  } else if (values.message.trim().length < 20) {
    errors.message = 'Please provide a few more details (at least 20 characters).'
  }

  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle')

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setValues((prev) => ({ ...prev, [key]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const validationErrors = validate(values)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      // In production this would post to an API or email service.
      setStatus('submitted')
      setValues(initialState)
    }
  }

  const inputClass =
    'w-full border border-charcoal/20 bg-transparent px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 outline-none transition-colors focus:border-charcoal'
  const errorClass = 'mt-1.5 text-xs text-red-700'
  const labelClass = 'mb-1.5 block text-xs tracking-[0.08em] text-concrete'

  if (status === 'submitted') {
    return (
      <div className="border border-charcoal/15 bg-white p-10 text-center">
        <h3 className="font-display text-2xl text-charcoal">Inquiry sent.</h3>
        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-charcoal/65">
          Thank you for reaching out. A member of the SAMEEK team will contact you shortly to
          discuss your project.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-7 border border-charcoal px-6 py-2.5 text-sm text-charcoal transition-colors hover:bg-charcoal hover:text-white"
        >
          Send another inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            type="text"
            className={inputClass}
            placeholder="Your name"
            value={values.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
          />
          {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            className={inputClass}
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            className={inputClass}
            placeholder="+234"
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <p className={errorClass}>{errors.phone}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="projectType">Project Type</label>
          <select
            id="projectType"
            className={inputClass}
            value={values.projectType}
            onChange={(e) => update('projectType', e.target.value)}
            aria-invalid={Boolean(errors.projectType)}
          >
            <option value="">Select a service</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.projectType && <p className={errorClass}>{errors.projectType}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="projectLocation">Project Location</label>
          <input
            id="projectLocation"
            type="text"
            className={inputClass}
            placeholder="City, State"
            value={values.projectLocation}
            onChange={(e) => update('projectLocation', e.target.value)}
            aria-invalid={Boolean(errors.projectLocation)}
          />
          {errors.projectLocation && <p className={errorClass}>{errors.projectLocation}</p>}
        </div>

        <div>
          <label className={labelClass} htmlFor="budget">Estimated Budget (optional)</label>
          <input
            id="budget"
            type="text"
            className={inputClass}
            placeholder="e.g. ₦5,000,000 – ₦10,000,000"
            value={values.budget}
            onChange={(e) => update('budget', e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">Message</label>
        <textarea
          id="message"
          rows={5}
          className={inputClass}
          placeholder="Tell us about your project"
          value={values.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className={errorClass}>{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="border border-charcoal bg-charcoal px-8 py-3.5 text-sm text-white transition-colors hover:bg-transparent hover:text-charcoal"
      >
        Send Project Inquiry
      </button>
    </form>
  )
}
