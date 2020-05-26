/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import { ThemeProvider} from 'theme-ui'
import theme from '@rebass/preset'

import React from 'react'
import { navigate } from 'gatsby'
import { AuthProvider } from 'react-use-auth'

export const wrapRootElement = ({ element }) => (
    <AuthProvider navigate={navigate} auth0_domain="dev-bxhdej3e.auth0.com"
    auth0_client_id="OK3AppPMOaAYQTMsrxoO9lCbjCamxHcl">
    {element}
    </AuthProvider>
)

// export const wrapRootElement = ({ element }) => (
//     <ThemeProvider theme={theme}>
//         {element}
//     </ThemeProvider>
// )