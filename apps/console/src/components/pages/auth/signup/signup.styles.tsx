import { tv, type VariantProps } from 'tailwind-variants'

const signupStyles = tv({
  slots: {
    separator: 'my-6',
    buttons: 'flex flex-col gap-4',
    keyIcon: '',
    form: 'flex flex-col gap-4 space-y-2',
    input: 'flex flex-col gap-2',
  },
})

export type SignupVariants = VariantProps<typeof signupStyles>

export { signupStyles }
