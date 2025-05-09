'use client'
import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { Check, TriangleAlert, X } from 'lucide-react'
import { cn } from '../../lib/utils'
import { toastStyles, type ToastVariants } from './toast.styles'

const { viewport, toast, toastDefault, toastDestructive, toastSuccess, action, close, title, description, closeIcon } = toastStyles()

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Viewport>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport ref={ref} className={cn(viewport(), className)} {...props} />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const Toast = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Root>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> & ToastVariants>(({ className, variant, ...props }, ref) => {
  const variantClassMap = {
    destructive: toastDestructive(),
    success: toastSuccess(),
    default: toastDefault(),
  }

  const variantClass = (variant && variantClassMap[variant]) || variantClassMap.default
  return (
    <ToastPrimitives.Root ref={ref} className={cn(toast(), variantClass, className)} {...props}>
      {variant === 'success' && <Check width={20} />}
      {variant === 'destructive' && <TriangleAlert width={20} />}
      {props.children}
    </ToastPrimitives.Root>
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Action>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action ref={ref} className={cn(action(), className)} {...props} />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Close>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close ref={ref} className={cn(close(), className)} {...props}>
    <X className={cn(closeIcon())} />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Title>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title ref={ref} className={cn(title(), className)} {...props} />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<React.ElementRef<typeof ToastPrimitives.Description>, React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description ref={ref} className={cn(description(), className)} {...props} />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export { type ToastProps, type ToastActionElement, ToastProvider, ToastViewport, Toast, ToastTitle, ToastDescription, ToastClose, ToastAction }
