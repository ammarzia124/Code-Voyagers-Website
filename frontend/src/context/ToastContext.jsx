import { createContext, useContext, useState, useCallback } from 'react'
import { X, CheckCircle, AlertCircle, Info } from 'lucide-react'

const ToastContext = createContext(undefined)

let toastId = 0

const icons = {
  default: Info,
  success: CheckCircle,
  error: AlertCircle,
}

const styles = {
  default: 'bg-surface border-border text-text-primary',
  success: 'bg-success-light border-success/30 text-success',
  error: 'bg-error-light border-error/30 text-error',
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const addToast = useCallback(({ title, description, variant = 'default' }) => {
    const id = ++toastId
    setToasts((prev) => [...prev.slice(-2), { id, title, description, variant }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 5000)
  }, [])

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toast: addToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
        {toasts.map((t) => {
          const Icon = icons[t.variant]
          return (
            <div
              key={t.id}
              className={`flex items-start gap-3 p-4 rounded-lg border shadow-elevated animate-in-right ${styles[t.variant]}`}
            >
              <Icon className="w-5 h-5 shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0">
                {t.title && <p className="font-medium text-sm">{t.title}</p>}
                {t.description && <p className="text-sm opacity-80 mt-0.5">{t.description}</p>}
              </div>
              <button onClick={() => removeToast(t.id)} aria-label="Dismiss notification" className="shrink-0 opacity-50 hover:opacity-100">
                <X className="w-4 h-4" />
              </button>
            </div>
          )
        })}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) throw new Error('useToast must be used within a ToastProvider')
  return context
}
