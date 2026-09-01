import { XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ErrorBanner({ message, onRetry }) {
  return (
    <div className="flex items-start gap-3 p-4 rounded-lg bg-error-light border border-error/30 text-error" role="alert">
      <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="text-body-sm">{message}</p>
        {onRetry && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onRetry}
            className="mt-2 text-error hover:text-error/80"
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  )
}
