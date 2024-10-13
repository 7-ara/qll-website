// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const qll_theme: CustomThemeConfig = {
  name: 'qll_theme',
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": `system-ui`,
    "--theme-font-family-heading": `system-ui`,
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "9999px",
    "--theme-rounded-container": "8px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "0 0 0",
    "--on-secondary": "0 0 0",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "0 0 0",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #097BFD 
    "--color-primary-50": "218 235 255", // #daebff
    "--color-primary-100": "206 229 255", // #cee5ff
    "--color-primary-200": "194 222 255", // #c2deff
    "--color-primary-300": "157 202 254", // #9dcafe
    "--color-primary-400": "83 163 254", // #53a3fe
    "--color-primary-500": "9 123 253", // #097BFD
    "--color-primary-600": "8 111 228", // #086fe4
    "--color-primary-700": "7 92 190", // #075cbe
    "--color-primary-800": "5 74 152", // #054a98
    "--color-primary-900": "4 60 124", // #043c7c
    // secondary | #10B3EE 
    "--color-secondary-50": "219 244 252", // #dbf4fc
    "--color-secondary-100": "207 240 252", // #cff0fc
    "--color-secondary-200": "195 236 251", // #c3ecfb
    "--color-secondary-300": "159 225 248", // #9fe1f8
    "--color-secondary-400": "88 202 243", // #58caf3
    "--color-secondary-500": "16 179 238", // #10B3EE
    "--color-secondary-600": "14 161 214", // #0ea1d6
    "--color-secondary-700": "12 134 179", // #0c86b3
    "--color-secondary-800": "10 107 143", // #0a6b8f
    "--color-secondary-900": "8 88 117", // #085875
    // tertiary | #a23fff 
    "--color-tertiary-50": "241 226 255", // #f1e2ff
    "--color-tertiary-100": "236 217 255", // #ecd9ff
    "--color-tertiary-200": "232 207 255", // #e8cfff
    "--color-tertiary-300": "218 178 255", // #dab2ff
    "--color-tertiary-400": "190 121 255", // #be79ff
    "--color-tertiary-500": "162 63 255", // #a23fff
    "--color-tertiary-600": "146 57 230", // #9239e6
    "--color-tertiary-700": "122 47 191", // #7a2fbf
    "--color-tertiary-800": "97 38 153", // #612699
    "--color-tertiary-900": "79 31 125", // #4f1f7d
    // success | #0BBE80 
    "--color-success-50": "218 245 236", // #daf5ec
    "--color-success-100": "206 242 230", // #cef2e6
    "--color-success-200": "194 239 223", // #c2efdf
    "--color-success-300": "157 229 204", // #9de5cc
    "--color-success-400": "84 210 166", // #54d2a6
    "--color-success-500": "11 190 128", // #0BBE80
    "--color-success-600": "10 171 115", // #0aab73
    "--color-success-700": "8 143 96", // #088f60
    "--color-success-800": "7 114 77", // #07724d
    "--color-success-900": "5 93 63", // #055d3f
    // warning | #FFC000 
    "--color-warning-50": "255 246 217", // #fff6d9
    "--color-warning-100": "255 242 204", // #fff2cc
    "--color-warning-200": "255 239 191", // #ffefbf
    "--color-warning-300": "255 230 153", // #ffe699
    "--color-warning-400": "255 211 77", // #ffd34d
    "--color-warning-500": "255 192 0", // #FFC000
    "--color-warning-600": "230 173 0", // #e6ad00
    "--color-warning-700": "191 144 0", // #bf9000
    "--color-warning-800": "153 115 0", // #997300
    "--color-warning-900": "125 94 0", // #7d5e00
    // error | #F53D78 
    "--color-error-50": "254 226 235", // #fee2eb
    "--color-error-100": "253 216 228", // #fdd8e4
    "--color-error-200": "253 207 221", // #fdcfdd
    "--color-error-300": "251 177 201", // #fbb1c9
    "--color-error-400": "248 119 161", // #f877a1
    "--color-error-500": "245 61 120", // #F53D78
    "--color-error-600": "221 55 108", // #dd376c
    "--color-error-700": "184 46 90", // #b82e5a
    "--color-error-800": "147 37 72", // #932548
    "--color-error-900": "120 30 59", // #781e3b
    // surface | #363061 
    "--color-surface-50": "255 255 255", // #ffffff
    "--color-surface-100": "248 248 253", // #f8f8fd
    "--color-surface-200": "247 246 252", // #f7f6fc
    "--color-surface-300": "242 241 250", // #f2f1fa
    "--color-surface-400": "232 230 247", // #e8e6f7
    //"--color-surface-100": "225 224 231", // #e1e0e7
    //"--color-surface-200": "215 214 223", // #d7d6df
    //"--color-surface-300": "205 203 216", // #cdcbd8
    //"--color-surface-400": "175 172 192", // #afacc0
    //"--color-surface-400": "114 110 144", // #726e90
    "--color-surface-500": "54 48 97", // #363061
    "--color-surface-600": "49 43 87", // #312b57
    "--color-surface-700": "41 36 73", // #292449
    "--color-surface-800": "32 29 58", // #201d3a
    "--color-surface-900": "26 24 48", // #1a1830
  }
}
