import { createFileRoute, Link } from '@tanstack/react-router'
import SignUpForm from '@/components/auth/signup-form'

export const Route = createFileRoute('/_auth/_layout/signup')({
  component: SignUpPage,
})

function SignUpPage() {
  return (
    <div className="flex flex-col items-start max-w-sm mx-auto h-dvh overflow-hidden pt-4 md:pt-20">
      <div className="flex items-center w-full py-8 border-b border-border/80">
        <Link href="/#home" className="flex items-center gap-x-2">
          <img src="/X.svg" className="w-6 h-6" />
          <h1 className="text-lg font-medium">EX</h1>
        </Link>
      </div>

      <SignUpForm />

      <div className="flex flex-col items-start w-full">
        <p className="text-sm text-muted-foreground">
          By signing in, you agree to our{' '}
          <Link href="/terms" className="text-primary">
            Terms of Service{' '}
          </Link>
          and{' '}
          <Link href="/privacy" className="text-primary">
            Privacy Policy
          </Link>
        </p>
      </div>
      <div className="flex items-start mt-auto border-t border-border/80 py-6 w-full">
        <p className="text-sm text-muted-foreground">
          Already have an account?{' '}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
