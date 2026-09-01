import { Loader2 } from 'lucide-react'

export function LoadingSpinner({ message = 'Loading...' }) {
  return (
    <div className="flex items-center justify-center py-12" role="status" aria-live="polite">
      <Loader2 className="w-6 h-6 text-brand animate-spin" />
      <span className="sr-only">{message}</span>
    </div>
  )
}
