import { merge } from 'lodash'

import user from './user'
import post from './post'
import comment from './comment'
import like from './like'
import auth from './auth'

// use merge here to avoid overriding
export default merge(user, post, comment, like, auth)
