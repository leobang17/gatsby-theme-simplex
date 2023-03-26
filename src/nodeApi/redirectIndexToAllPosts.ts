import { Actions } from 'gatsby'

export default function redirectIndexToAllPosts(actions: Actions) {
  const { createRedirect } = actions
  createRedirect({
    fromPath: '/',
    toPath: '/categories/',
    redirectInBrowser: true,
    isPermanent: true,
  })
}
