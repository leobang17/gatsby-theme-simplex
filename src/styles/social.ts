import { SocialProvider } from 'types/social-provider-types'

type SocialCSS = {
  [K in SocialProvider]: string
}

export const SOCIAL_DEFAULT =
  'invert(38%) sepia(1%) saturate(0%) hue-rotate(19deg) brightness(97%) contrast(89%)'

export const SOCIAL_HOVERED: SocialCSS = {
  facebook:
    'invert(41%) sepia(54%) saturate(5011%) hue-rotate(202deg) brightness(96%) contrast(99%)',
  github:
    'invert(6%) sepia(16%) saturate(98%) hue-rotate(314deg) brightness(103%) contrast(95%)',
  linkedin:
    'invert(50%) sepia(91%) saturate(6248%) hue-rotate(182deg) brightness(89%) contrast(101%)',
  instagram:
    'invert(16%) sepia(90%) saturate(5201%) hue-rotate(302deg) brightness(85%) contrast(113%)',
  twitter:
    'invert(48%) sepia(93%) saturate(468%) hue-rotate(161deg) brightness(95%) contrast(100%)',
}
